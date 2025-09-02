'use client'

import { useState, useEffect, useRef } from 'react'
import { n8nService, ChatMessage, N8nChatRequest } from '../services/n8nService'

export default function N8nChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [sessionId, setSessionId] = useState<string>('')
  const [isConfigured, setIsConfigured] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Check if n8n service is configured
    setIsConfigured(n8nService.isConfigured())
    
    // Add initial greeting message
    if (n8nService.isConfigured()) {
      const greeting: ChatMessage = {
        id: 'greeting',
        message: "Hi! I'm Brett, your LTS manufacturing expert. I'll help you identify the best lean solutions for your facility. Let's start with a quick assessment: What type of manufacturing do you do, and what's your biggest operational challenge right now?",
        timestamp: new Date(),
        isUser: false
      }
      setMessages([greeting])
    }
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return

    const userMessage: ChatMessage = {
      id: `user_${Date.now()}`,
      message: inputMessage,
      timestamp: new Date(),
      isUser: true
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsLoading(true)

    try {
      const request: N8nChatRequest = {
        message: inputMessage,
        sessionId: sessionId || undefined,
        userId: 'web_user',
        context: {
          timestamp: new Date().toISOString(),
          source: 'web_widget'
        }
      }

      const response = await n8nService.sendMessage(request)
      
      if (response.sessionId && !sessionId) {
        setSessionId(response.sessionId)
      }

      const botMessage: ChatMessage = {
        id: `bot_${Date.now()}`,
        message: response.response,
        timestamp: new Date(),
        isUser: false
      }

      setMessages(prev => [...prev, botMessage])
    } catch (error) {
      const errorMessage: ChatMessage = {
        id: `error_${Date.now()}`,
        message: error instanceof Error ? error.message : 'Sorry, I encountered an error. Please try again.',
        timestamp: new Date(),
        isUser: false
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  if (!isConfigured) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <div className="bg-red-500 text-white p-3 rounded-lg shadow-lg max-w-sm">
          <p className="text-sm">Chat service not configured. Please check your n8n settings.</p>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50"
          aria-label="Open chat"
        >
          <span className="text-2xl">💬</span>
        </button>
      )}

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col z-50">
          {/* Header */}
          <div className="bg-green-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img 
                src="/lts-logo.png" 
                alt="LTS Solutions" 
                className="w-6 h-6"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
              <div>
                <h3 className="font-semibold">LTS Solutions</h3>
                <p className="text-xs opacity-90">Brett - Manufacturing Expert</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 text-xl"
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.isUser
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.message}</p>
                  <p className={`text-xs mt-1 opacity-70 ${
                    message.isUser ? 'text-green-100' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 p-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                rows={1}
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isLoading}
                className="bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white px-4 py-2 rounded-lg transition-colors duration-200"
              >
                {isLoading ? '...' : 'Send'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
