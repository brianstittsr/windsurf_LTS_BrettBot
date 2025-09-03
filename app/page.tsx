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
    // Load n8n chat widget script
    const script = document.createElement('script')
    script.innerHTML = `
      window.n8nChatConfig = {
        webhookUrl: 'https://n8n.mynewpie.com/webhook/53c136fe-3e77-4709-a143-fe82746dd8b6/chat',
        target: '#n8n-chat',
        mode: 'window',
        loadPreviousSession: true,
        chatInputPlaceholder: 'Ask Brett about your manufacturing challenges...',
        chatWindowTitle: 'Chat with Brett - LTS Expert',
        welcomeMessage: 'Hi! I\\'m Brett from LTS Solutions. What manufacturing challenges can I help you with today?',
        getStarted: 'Get Started',
        botAvatarUrl: '/brett.jpg'
      };
      
      (function() {
        const chatScript = document.createElement('script');
        chatScript.src = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.js';
        chatScript.async = true;
        document.head.appendChild(chatScript);
      })();
    `
    document.head.appendChild(script)

    // Add chat container
    const chatContainer = document.createElement('div')
    chatContainer.id = 'n8n-chat'
    document.body.appendChild(chatContainer)

    return () => {
      // Cleanup on unmount
      const existingScript = document.querySelector('script')
      const existingContainer = document.getElementById('n8n-chat')
      if (existingScript && existingScript.innerHTML.includes('n8nChatConfig')) {
        document.head.removeChild(existingScript)
      }
      if (existingContainer) {
        document.body.removeChild(existingContainer)
      }
    }
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <AboutSection />
      <Header />
      <Hero />
      <ProductsSection />
      <ServicesSection />
      <Footer />
    </main>
  )
}
