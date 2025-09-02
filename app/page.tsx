'use client'

import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductsSection from './components/ProductsSection'
import ServicesSection from './components/ServicesSection'
import AboutSection from './components/AboutSection'
import Footer from './components/Footer'
import N8nEmbeddedChat from './components/N8nEmbeddedChat'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <AboutSection />
      <ProductsSection />
      <ServicesSection />
      <Footer />
      <N8nEmbeddedChat />
    </main>
  )
}
