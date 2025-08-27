'use client'

export default function Footer() {
  return (
    <footer id="contact" className="bg-lts-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="text-2xl font-bold text-white">LTS Solutions</div>
              <div className="ml-2 text-sm text-gray-400">BrettBot Assistant</div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading the Lean Industry 4.0 Revolution - driving Global Enterprises towards 
              Smart, Sustainable Transformation through Innovation.
            </p>
            <div className="flex space-x-4">
              <button className="bg-lts-blue hover:bg-lts-light-blue px-6 py-2 rounded-lg transition-colors">
                Chat with Brett
              </button>
              <button className="border border-gray-600 hover:border-white px-6 py-2 rounded-lg transition-colors">
                Learn More
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">TITAN - CMMS</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Janus - Data Capture</a></li>
              <li><a href="#" className="hover:text-white transition-colors">T-Card - Production Planning</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Q-Point - Quality Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Safety-Point - HSE</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Maximus - ERP</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Lean Consulting</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Leadership 4.0</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Training & Certification</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lean Assessment</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Implementation Support</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Lean Transition Solutions Ltd. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-lts-blue/10 rounded-lg border border-lts-blue/20">
            <p className="text-sm text-gray-300 text-center">
              💬 <strong>BrettBot is ready to help!</strong> Click the chat widget in the bottom right 
              to start getting expert guidance on your manufacturing challenges.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
