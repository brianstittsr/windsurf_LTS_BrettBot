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
    script.src = 'https://n8n.mynewpie.com/form/53c136fe-3e77-4709-a143-fe82746dd8b6/chat.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://n8n.mynewpie.com/form/53c136fe-3e77-4709-a143-fe82746dd8b6/chat.js"]')
      if (existingScript) {
        document.body.removeChild(existingScript)
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
