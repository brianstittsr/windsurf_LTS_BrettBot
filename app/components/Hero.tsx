'use client'

export default function Hero() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <img 
              src="/brett.jpg" 
              alt="Brett - Manufacturing Expert" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 shadow-lg object-cover border-4 border-lts-blue"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
            Meet Brett, Your
            <span className="block text-lts-blue">Manufacturing Expert</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-700">
            Get personalized guidance on LTS solutions, lean manufacturing processes, 
            and Industry 4.0 implementations to optimize your manufacturing environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-lts-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Chat with Brett
            </button>
            <button className="border-2 border-lts-blue text-lts-blue px-8 py-3 rounded-lg font-semibold hover:bg-lts-blue hover:text-white transition-colors">
              Explore Solutions
            </button>
          </div>
        </div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4">
              <img 
                src="/brett.jpg" 
                alt="Brett - Expert Guidance" 
                className="w-16 h-16 rounded-full object-cover border-2 border-lts-blue shadow-md"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Expert Guidance</h3>
            <p className="text-gray-600">Get personalized recommendations from Brett's extensive LTS knowledge</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4">
              <img 
                src="/brett.jpg" 
                alt="Brett - Product Selection" 
                className="w-16 h-16 rounded-full object-cover border-2 border-lts-blue shadow-md"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Product Selection</h3>
            <p className="text-gray-600">Find the right LTS products and services for your specific needs</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4">
              <img 
                src="/brett.jpg" 
                alt="Brett - Implementation Support" 
                className="w-16 h-16 rounded-full object-cover border-2 border-lts-blue shadow-md"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Implementation Support</h3>
            <p className="text-gray-600">Get step-by-step guidance for implementing lean Industry 4.0 solutions</p>
          </div>
        </div>
      </div>
    </section>
  )
}
