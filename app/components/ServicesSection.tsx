'use client'

export default function ServicesSection() {
  const services = [
    {
      title: "Lean Manufacturing Consulting",
      description: "Expert guidance on implementing lean principles and methodologies",
      icon: "🎯",
      benefits: ["Waste reduction", "Process optimization", "Cost savings", "Efficiency gains"]
    },
    {
      title: "Leadership 4.0 Transformation",
      description: "Leadership development programs for the digital age",
      icon: "👥",
      benefits: ["Digital leadership skills", "Change management", "Team development", "Strategic thinking"]
    },
    {
      title: "ILM Accredited Training",
      description: "Green Belt and Black Belt certification programs",
      icon: "🎓",
      benefits: ["Industry recognition", "Skill certification", "Career advancement", "Best practices"]
    },
    {
      title: "Lean Assessment & Audit",
      description: "Comprehensive evaluation of your current lean maturity",
      icon: "📋",
      benefits: ["Gap analysis", "Improvement roadmap", "Benchmarking", "Action planning"]
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-lts-dark mb-4">
            Professional Services
          </h2>
          <p className="text-xl text-lts-gray max-w-3xl mx-auto">
            Comprehensive consulting and training services to accelerate your lean transformation 
            journey and build internal capabilities for sustained success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{service.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-lts-dark mb-3">{service.title}</h3>
                  <p className="text-lts-gray mb-4">{service.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-lts-gray">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                  <button className="mt-4 text-lts-blue font-semibold hover:text-lts-light-blue transition-colors">
                    Learn more from Brett →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-lts-blue to-lts-light-blue rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform?</h3>
            <p className="mb-6">
              Start your lean Industry 4.0 journey with expert guidance from Brett. 
              Get personalized recommendations for your specific challenges.
            </p>
            <button className="bg-white text-lts-blue px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Chat with Brett Now
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold text-lts-dark mb-4">Why Choose LTS?</h3>
            <ul className="space-y-3 text-lts-gray">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                Global expertise in lean manufacturing
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                Proven Industry 4.0 implementations
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                Comprehensive solution portfolio
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                Ongoing support and training
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
