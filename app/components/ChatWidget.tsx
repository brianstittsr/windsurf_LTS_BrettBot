'use client'

import { useEffect, useState } from 'react'

export default function ChatWidget() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    // Add delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // Check if script already exists
      const existingScript = document.querySelector('script[data-embed-id="977e9fe6-1440-4d39-a8cb-38a4d8bb9dcb"]')
      if (existingScript) {
        setIsLoaded(true)
        return
      }

      // Create and append the chat widget script
      const script = document.createElement('script')
      script.setAttribute('data-embed-id', '977e9fe6-1440-4d39-a8cb-38a4d8bb9dcb')
      script.setAttribute('data-base-api-url', 'https://anythingllm-production-7612.up.railway.app/api/embed')
      script.src = 'https://anythingllm-production-7612.up.railway.app/embed/anythingllm-chat-widget.min.js'
      script.async = true
      script.defer = true
      
      // Add CORS handling
      script.crossOrigin = 'anonymous'
      
      // Add error handling with retry
      script.onerror = () => {
        console.error('Failed to load AnythingLLM chat widget, retrying...')
        // Retry once after 2 seconds
        setTimeout(() => {
          const retryScript = document.createElement('script')
          retryScript.setAttribute('data-embed-id', '977e9fe6-1440-4d39-a8cb-38a4d8bb9dcb')
          retryScript.setAttribute('data-base-api-url', 'https://anythingllm-production-7612.up.railway.app/api/embed')
          retryScript.src = 'https://anythingllm-production-7612.up.railway.app/embed/anythingllm-chat-widget.min.js'
          retryScript.async = true
          retryScript.defer = true
          retryScript.crossOrigin = 'anonymous'
          
          retryScript.onerror = () => {
            console.error('Retry failed for AnythingLLM chat widget')
            setError(true)
          }
          
          retryScript.onload = () => {
            console.log('AnythingLLM chat widget loaded successfully on retry')
            setIsLoaded(true)
          }
          
          document.head.appendChild(retryScript)
        }, 2000)
      }
      
      script.onload = () => {
        console.log('AnythingLLM chat widget loaded successfully')
        setIsLoaded(true)
      }

      // Append to head instead of body for better loading
      document.head.appendChild(script)
    }, 1000)

    // Cleanup function
    return () => {
      clearTimeout(timer)
      const scriptToRemove = document.querySelector('script[data-embed-id="977e9fe6-1440-4d39-a8cb-38a4d8bb9dcb"]')
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [])

  return null
}
