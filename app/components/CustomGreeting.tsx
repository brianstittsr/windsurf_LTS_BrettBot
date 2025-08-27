'use client'

import { useEffect, useState } from 'react'
import LTSLogo from './LTSLogo'

export default function CustomGreeting() {
  const [showGreeting, setShowGreeting] = useState(false)

  useEffect(() => {
    // Wait for the chat widget to potentially load
    const timer = setTimeout(() => {
      // Check if AnythingLLM widget loaded and if we need to show custom greeting
      const widget = document.querySelector('[data-embed-id="977e9fe6-1440-4d39-a8cb-38a4d8bb9dcb"]')
      
      // If widget didn't load or doesn't support custom greeting, show our overlay
      if (!widget) {
        setShowGreeting(true)
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleStartChat = () => {
    setShowGreeting(false)
    // Try to open the chat widget or fallback
    const chatButton = document.querySelector('.anythingllm-chat-button') ||
                      document.querySelector('[class*="chat"]') ||
                      document.querySelector('button[title*="chat" i]')
    
    if (chatButton) {
      (chatButton as HTMLElement).click()
    } else {
      // Fallback to popup
      const chatUrl = `https://anythingllm-production-7612.up.railway.app/embed/977e9fe6-1440-4d39-a8cb-38a4d8bb9dcb`
      window.open(chatUrl, 'BrettBot', 'width=450,height=700,scrollbars=yes,resizable=yes')
    }
  }

  if (!showGreeting) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[60]">
      <div className="bg-white rounded-lg shadow-xl max-w-md mx-4 p-6">
        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto mb-4">
            <LTSLogo className="w-16 h-16" />
          </div>
          <h3 className="text-xl font-bold text-lts-dark mb-2">Hi! I'm Brett</h3>
          <p className="text-gray-600 text-sm">Your LTS Manufacturing Solutions Expert</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <p className="text-gray-700 text-sm leading-relaxed">
            "Tell me about your manufacturing environment and what systems you have in place for measuring productivity and what current manufacturing problems you have?"
          </p>
        </div>

        <div className="flex space-x-3">
          <button
            onClick={handleStartChat}
            className="flex-1 bg-lts-blue text-white px-4 py-2 rounded-lg font-semibold hover:bg-lts-light-blue transition-colors"
          >
            Start Chat
          </button>
          <button
            onClick={() => setShowGreeting(false)}
            className="px-4 py-2 text-gray-500 hover:text-gray-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
