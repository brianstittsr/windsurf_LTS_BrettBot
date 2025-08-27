'use client'

import { useState, useEffect } from 'react'

export default function ChatButton() {
  const [widgetLoaded, setWidgetLoaded] = useState(false)

  useEffect(() => {
    // Check if AnythingLLM widget is loaded
    const checkWidget = setInterval(() => {
      const widget = document.querySelector('[data-embed-id="977e9fe6-1440-4d39-a8cb-38a4d8bb9dcb"]') ||
                    document.querySelector('.anythingllm-chat-widget') ||
                    document.querySelector('[class*="anythingllm"]')
      
      if (widget) {
        setWidgetLoaded(true)
        clearInterval(checkWidget)
      }
    }, 1000)

    // Clear interval after 10 seconds to avoid infinite checking
    setTimeout(() => clearInterval(checkWidget), 10000)

    return () => clearInterval(checkWidget)
  }, [])

  const openChat = () => {
    if (widgetLoaded) {
      // Try to find and trigger the AnythingLLM widget
      const triggers = [
        document.querySelector('.anythingllm-chat-button'),
        document.querySelector('.anythingllm-widget-button'),
        document.querySelector('[class*="anythingllm"][class*="button"]'),
        document.querySelector('[data-embed-id="977e9fe6-1440-4d39-a8cb-38a4d8bb9dcb"] button'),
        document.querySelector('iframe[src*="anythingllm"]')
      ]

      for (const trigger of triggers) {
        if (trigger) {
          (trigger as HTMLElement).click()
          return
        }
      }
    }
    
    // Fallback: Direct link to chat
    const chatUrl = `https://anythingllm-production-7612.up.railway.app/embed/977e9fe6-1440-4d39-a8cb-38a4d8bb9dcb`
    window.open(chatUrl, 'BrettBot', 'width=450,height=700,scrollbars=yes,resizable=yes')
  }

  return (
    <button
      onClick={openChat}
      className="fixed bottom-6 right-6 bg-lts-blue hover:bg-lts-light-blue text-white p-4 rounded-full shadow-lg z-50 transition-all duration-300 hover:scale-110 group"
      title="Chat with Brett - Manufacturing Expert"
    >
      <svg 
        className="w-6 h-6" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
        />
      </svg>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat with Brett
      </div>
    </button>
  )
}
