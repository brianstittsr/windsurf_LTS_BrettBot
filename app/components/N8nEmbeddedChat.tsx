'use client'

import { useState, useEffect, useRef } from 'react'

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

export default function N8nEmbeddedChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputText, setInputText] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Add initial greeting message
    const greeting: Message = {
      id: 'greeting',
      text: "Hi! I'm Brett, your LTS manufacturing expert. I'll help you identify the best lean solutions for your facility. Let's start with a quick assessment: What type of manufacturing do you do, and what's your biggest operational challenge right now?",
      isUser: false,
      timestamp: new Date()
    }
    setMessages([greeting])
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const sendMessage = async () => {
    if (!inputText.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsLoading(true)

    try {
      const response = await fetch('https://n8n.mynewpie.com/webhook/53c136fe-3e77-4709-a143-fe82746dd8b6/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputText,
          timestamp: new Date().toISOString(),
          source: 'web_chat'
        })
      })

      if (!response.ok) {
        // Handle specific HTTP errors
        if (response.status === 500) {
          throw new Error('N8N workflow error - please check your workflow configuration')
        } else if (response.status === 404) {
          throw new Error('N8N webhook not found - please verify your webhook URL')
        } else if (response.status === 403) {
          throw new Error('Access denied - please check your webhook permissions')
        } else {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`)
        }
      }

      const data = await response.json()
      
      // Handle different possible response formats from n8n
      let responseText = ''
      if (typeof data === 'string') {
        responseText = data
      } else if (data.response) {
        responseText = data.response
      } else if (data.message) {
        responseText = data.message
      } else if (data.output) {
        responseText = data.output
      } else if (data.text) {
        responseText = data.text
      } else if (data.reply) {
        responseText = data.reply
      } else if (Array.isArray(data) && data.length > 0) {
        // Handle array responses
        const firstItem = data[0]
        responseText = firstItem.response || firstItem.message || firstItem.output || firstItem.text || JSON.stringify(firstItem)
      } else {
        // Fallback: stringify the entire response
        responseText = JSON.stringify(data)
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText || 'I received your message but had trouble generating a response. Please try again.',
        isUser: false,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, botMessage])
    } catch (error) {
      console.error('Chat API Error:', error)
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Unable to connect to chat service. Please check your connection and try again.',
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50"
          title="Chat with Brett - Manufacturing Expert"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col z-50">
          {/* Header */}
          <div className="bg-green-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img 
                src="/lts-logo.png" 
                alt="LTS" 
                className="w-8 h-8 rounded"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
              <div>
                <h3 className="font-semibold text-sm">LTS Solutions - Brett</h3>
                <p className="text-xs opacity-90">Manufacturing Expert</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 text-xl font-bold"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div className="flex items-start space-x-2 max-w-[80%]">
                  {!message.isUser && (
                    <img 
                      src="/brett.jpg" 
                      alt="Brett" 
                      className="w-8 h-8 rounded-full flex-shrink-0"
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiMxNmEzNGEiLz4KPHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSI4IiB5PSI4Ij4KPHBhdGggZD0iTTggM0M1LjI0IDMgMyA1LjI0IDMgOFM1LjI0IDEzIDggMTNTMTMgMTAuNzYgMTMgOFMxMC43NiAzIDggM1pNOCA2QzguNTUgNiA5IDYuNDUgOSA3UzguNTUgOCA4IDhTNyA3LjU1IDcgN1M3LjQ1IDYgOCA2Wk04IDExLjJDNi45NCAxMS4yIDUuOTcgMTAuNjMgNS4zOCA5Ljc0QzUuNCA5LjI3IDYuNDMgOSA4IDlTMTAuNiA5LjI3IDEwLjYyIDkuNzRDMTAuMDMgMTAuNjMgOS4wNiAxMS4yIDggMTEuMloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo8L3N2Zz4K'
                      }}
                    />
                  )}
                  <div
                    className={`p-3 rounded-lg ${
                      message.isUser
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                    <p className={`text-xs mt-1 opacity-70 ${
                      message.isUser ? 'text-green-100' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </p>
                  </div>
                  {message.isUser && (
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <img 
                    src="/brett.jpg" 
                    alt="Brett" 
                    className="w-8 h-8 rounded-full"
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTYiIGZpbGw9IiMxNmEzNGEiLz4KPHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSI4IiB5PSI4Ij4KPHBhdGggZD0iTTggM0M1LjI0IDMgMyA1LjI0IDMgOFM1LjI0IDEzIDggMTNTMTMgMTAuNzYgMTMgOFMxMC43NiAzIDggM1pNOCA2QzguNTUgNiA5IDYuNDUgOSA3UzguNTUgOCA4IDhTNyA3LjU1IDcgN1M3LjQ1IDYgOCA2Wk04IDExLjJDNi45NCAxMS4yIDUuOTcgMTAuNjMgNS4zOCA5Ljc0QzUuNCA5LjI3IDYuNDMgOSA4IDlTMTAuNiA5LjI3IDEwLjYyIDkuNzRDMTAuMDMgMTAuNjMgOS4wNiAxMS4yIDggMTEuMloiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo8L3N2Zz4K'
                    }}
                  />
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Tell me about your manufacturing challenges..."
                className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                disabled={isLoading}
                maxLength={500}
              />
              <button
                onClick={sendMessage}
                disabled={!inputText.trim() || isLoading}
                className="bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm font-medium"
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
