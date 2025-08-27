'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-lts-blue">
              LTS Solutions
            </div>
            <div className="ml-2 text-sm text-gray-600">
              BrettBot Assistant
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-lts-blue transition-colors">
              About Brett
            </a>
            <a href="#products" className="text-gray-700 hover:text-lts-blue transition-colors">
              Products
            </a>
            <a href="#services" className="text-gray-700 hover:text-lts-blue transition-colors">
              Services
            </a>
            <a href="#contact" className="text-gray-700 hover:text-lts-blue transition-colors">
              Contact
            </a>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              <a href="#about" className="text-gray-700 hover:text-lts-blue transition-colors py-2">
                About Brett
              </a>
              <a href="#products" className="text-gray-700 hover:text-lts-blue transition-colors py-2">
                Products
              </a>
              <a href="#services" className="text-gray-700 hover:text-lts-blue transition-colors py-2">
                Services
              </a>
              <a href="#contact" className="text-gray-700 hover:text-lts-blue transition-colors py-2">
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
