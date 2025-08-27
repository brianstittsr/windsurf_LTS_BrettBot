'use client'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-lts-dark mb-4">
            About Brett & LTS Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading the Lean Industry 4.0 Revolution - driving Global Enterprises towards 
            Smart, Sustainable Transformation through Innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-lts-dark mb-6">
              Expert Knowledge at Your Fingertips
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-lts-blue rounded-full p-1 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <p className="text-gray-700">
                  <strong>Lean Industry 4.0 Expertise:</strong> Brett combines traditional lean manufacturing 
                  principles with cutting-edge Industry 4.0 technologies for optimal results.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-lts-blue rounded-full p-1 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <p className="text-gray-700">
                  <strong>Comprehensive Solutions:</strong> Access to 15+ specialized LTS products 
                  covering maintenance, quality, safety, and production planning.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-lts-blue rounded-full p-1 mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <p className="text-gray-700">
                  <strong>Global Experience:</strong> Proven track record helping organizations 
                  worldwide achieve operational excellence and continuous improvement.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h4 className="text-xl font-bold text-lts-dark mb-4">
              What Brett Can Help You With:
            </h4>
            <ul className="space-y-3 text-gray-700">
              <li>• Manufacturing process optimization</li>
              <li>• Lean assessment and implementation</li>
              <li>• Quality management systems</li>
              <li>• Maintenance automation strategies</li>
              <li>• Production planning and execution</li>
              <li>• Health and safety compliance</li>
              <li>• Leadership development programs</li>
              <li>• Continuous improvement methodologies</li>
            </ul>
            
            <div className="mt-6 p-4 bg-lts-blue/10 rounded-lg">
              <p className="text-sm text-lts-dark font-medium">
                💡 <strong>Pro Tip:</strong> Ask Brett specific questions about your manufacturing 
                challenges to get tailored recommendations for LTS solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
