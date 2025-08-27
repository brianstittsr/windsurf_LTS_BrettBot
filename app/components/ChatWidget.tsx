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
      script.setAttribute('data-greeting', 'Hi! I\'m Brett, your LTS manufacturing expert. I\'ll help you identify the best lean solutions for your facility. Let\'s start with a quick assessment: What type of manufacturing do you do, and what\'s your biggest operational challenge right now?')
      script.setAttribute('data-brand-name', 'LTS Solutions')
      script.setAttribute('data-brand-logo', '/lts-logo.png')
      script.setAttribute('data-hide-powered-by', 'true')
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
          retryScript.setAttribute('data-greeting', 'Tell me about your manufacturing environment and what systems you have in place for measuring productivity and what current manufacturing problems you have?')
          retryScript.setAttribute('data-brand-name', 'LTS Solutions')
          retryScript.setAttribute('data-brand-logo', '/lts-logo.png')
          retryScript.setAttribute('data-hide-powered-by', 'true')
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
        
        // Additional branding removal and icon customization after widget loads
        setTimeout(() => {
          // Find all buttons on the page (more aggressive approach)
          const allButtons = document.querySelectorAll('button')
          allButtons.forEach(button => {
            const htmlEl = button as HTMLElement
            const style = window.getComputedStyle(htmlEl)
            
            // Check if it's a floating button (likely the chat widget)
            if (style.position === 'fixed' || htmlEl.style.position === 'fixed') {
              // Apply green styling
              htmlEl.style.backgroundColor = '#16a34a !important'
              htmlEl.style.background = '#16a34a !important'
              htmlEl.style.borderColor = '#16a34a !important'
              htmlEl.style.border = '2px solid #16a34a !important'
              htmlEl.style.color = 'white !important'
              
              // Hide any SVG icons inside
              const svgs = htmlEl.querySelectorAll('svg')
              svgs.forEach(svg => {
                const svgEl = svg as unknown as HTMLElement
                svgEl.style.display = 'none'
                svgEl.style.visibility = 'hidden'
              })
              
              // Add chat bubble if not already present
              if (!htmlEl.querySelector('.chat-bubble-icon')) {
                const icon = document.createElement('span')
                icon.className = 'chat-bubble-icon'
                icon.innerHTML = '💬'
                icon.style.fontSize = '28px'
                icon.style.position = 'absolute'
                icon.style.top = '50%'
                icon.style.left = '50%'
                icon.style.transform = 'translate(-50%, -50%)'
                icon.style.zIndex = '10'
                htmlEl.appendChild(icon)
              }
            }
          })
          
          // Remove any remaining branding elements
          const brandingElements = document.querySelectorAll('[class*="powered"], [class*="branding"], a[href*="anythingllm"], img[src*="anythingllm"], img[alt*="anythingllm"]')
          brandingElements.forEach(el => {
            const htmlEl = el as HTMLElement
            htmlEl.style.display = 'none'
            el.remove()
          })
          
          // Remove text nodes containing "Powered by"
          const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT
          )
          
          const textNodes: Text[] = []
          let node
          while (node = walker.nextNode()) {
            if (node.textContent && (node.textContent.includes('Powered by') || node.textContent.includes('AnythingLLM'))) {
              textNodes.push(node as Text)
            }
          }
          
          textNodes.forEach(textNode => {
            if (textNode.parentNode) {
              textNode.parentNode.removeChild(textNode)
            }
          })
        }, 3000)
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
