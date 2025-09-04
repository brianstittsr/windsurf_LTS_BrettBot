'use client'

import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductsSection from './components/ProductsSection'
import ServicesSection from './components/ServicesSection'
import AboutSection from './components/AboutSection'
import Footer from './components/Footer'

export default function Home() {
  useEffect(() => {
    // Create simple HTML chat widget
    const chatHTML = `
      <div id="n8n-chat-widget" style="position: fixed; bottom: 20px; right: 20px; z-index: 1000;">
        <div id="chat-button" style="
          width: 60px; 
          height: 60px; 
          background: #16a34a; 
          border-radius: 50%; 
          cursor: pointer; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          color: white;
          font-size: 24px;
        ">💬</div>
        
        <div id="chat-window" style="
          position: absolute; 
          bottom: 70px; 
          right: 0; 
          width: 350px; 
          height: 500px; 
          background: white; 
          border-radius: 10px; 
          box-shadow: 0 4px 20px rgba(0,0,0,0.3); 
          display: none; 
          flex-direction: column;
        ">
          <div style="background: #16a34a; color: white; padding: 15px; border-radius: 10px 10px 0 0; font-weight: bold;">
            Chat with Brett - LTS Expert
          </div>
          <div id="chat-messages" style="flex: 1; padding: 10px; overflow-y: auto; max-height: 400px;">
            <div style="background: #f3f4f6; padding: 10px; border-radius: 10px; margin-bottom: 10px;">
              Hi! I'm Brett from LTS Solutions. What manufacturing challenges can I help you with today?
            </div>
          </div>
          <div style="padding: 10px; border-top: 1px solid #e5e7eb;">
            <input id="chat-input" type="text" placeholder="Ask Brett about your manufacturing challenges..." style="
              width: 100%; 
              padding: 10px; 
              border: 1px solid #d1d5db; 
              border-radius: 5px; 
              outline: none;
            ">
          </div>
        </div>
      </div>
    `
    
    const chatContainer = document.createElement('div')
    chatContainer.innerHTML = chatHTML
    document.body.appendChild(chatContainer)
    
    console.log('Chat widget added to DOM')
    
    // Add chat functionality
    const chatButton = document.getElementById('chat-button')
    const chatWindow = document.getElementById('chat-window')
    const chatInput = document.getElementById('chat-input')
    const chatMessages = document.getElementById('chat-messages')
    
    let isOpen = false
    
    chatButton?.addEventListener('click', () => {
      isOpen = !isOpen
      if (chatWindow) {
        chatWindow.style.display = isOpen ? 'flex' : 'none'
      }
    })
    
    const sendMessage = async (message: string) => {
      if (!message.trim()) return
      
      // Add user message
      const userMsg = document.createElement('div')
      userMsg.style.cssText = 'text-align: right; margin-bottom: 10px;'
      userMsg.innerHTML = '<div style="background: #16a34a; color: white; padding: 10px; border-radius: 10px; display: inline-block; max-width: 80%;">' + message + '</div>'
      chatMessages?.appendChild(userMsg)
      
      try {
        const response = await fetch('http://localhost:5678/webhook/a889d2ae-2159-402f-b326-5f61e90f602e/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message, timestamp: new Date().toISOString(), source: 'web_chat' })
        })
        
        const data = await response.json()
        const botResponse = data.response || data.message || 'Sorry, I had trouble processing your request.'
        
        // Add bot message
        const botMsg = document.createElement('div')
        botMsg.style.cssText = 'margin-bottom: 10px;'
        botMsg.innerHTML = '<div style="background: #f3f4f6; padding: 10px; border-radius: 10px; display: inline-block; max-width: 80%;">' + botResponse + '</div>'
        chatMessages?.appendChild(botMsg)
        
      } catch (error) {
        const errorMsg = document.createElement('div')
        errorMsg.style.cssText = 'margin-bottom: 10px;'
        errorMsg.innerHTML = '<div style="background: #fef2f2; color: #dc2626; padding: 10px; border-radius: 10px; display: inline-block; max-width: 80%;">Unable to connect. Please try again.</div>'
        chatMessages?.appendChild(errorMsg)
      }
      
      chatMessages?.scrollTo(0, chatMessages.scrollHeight)
    }
    
    chatInput?.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const input = chatInput as HTMLInputElement
        sendMessage(input.value)
        input.value = ''
      }
    })

    return () => {
      const widget = document.getElementById('n8n-chat-widget')
      if (widget && widget.parentElement) {
        document.body.removeChild(widget.parentElement)
      }
    }
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <Header />
      <Hero />
      <ProductsSection />
      <ServicesSection />
      <AboutSection />
      <Footer />
    </main>
  )
}
