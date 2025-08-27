'use client'

export default function ProductsSection() {
  const products = [
    {
      name: "TITAN",
      description: "Computerised Maintenance Management System",
      icon: "🔧",
      features: ["Preventive maintenance", "Work order management", "Asset tracking"]
    },
    {
      name: "Janus",
      description: "Automated Shop-floor Data Capture System",
      icon: "📊",
      features: ["Real-time data collection", "Production monitoring", "Performance analytics"]
    },
    {
      name: "T-Card",
      description: "Integrated Production Planning and Plant Level Execution System",
      icon: "📋",
      features: ["Production scheduling", "Resource planning", "Workflow optimization"]
    },
    {
      name: "Q-Point",
      description: "Integrated Quality Management System",
      icon: "✅",
      features: ["Quality control", "Compliance tracking", "Audit management"]
    },
    {
      name: "Safety-Point",
      description: "Integrated Health and Safety Management System",
      icon: "🛡️",
      features: ["Risk assessment", "Incident reporting", "Safety compliance"]
    },
    {
      name: "Maximus",
      description: "Integrated ERP System",
      icon: "🏢",
      features: ["Resource planning", "Financial management", "Supply chain integration"]
    }
  ]

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-lts-dark mb-4">
            LTS Product Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive suite of manufacturing solutions designed to optimize your operations 
            and drive continuous improvement across all aspects of your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{product.icon}</div>
              <h3 className="text-xl font-bold text-lts-dark mb-2">{product.name}</h3>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-lts-blue rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-4 text-lts-blue font-semibold hover:text-lts-light-blue transition-colors">
                Ask Brett about {product.name} →
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-lts-blue/5 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-lts-dark mb-4">
            Need Help Choosing the Right Products?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Brett can analyze your specific manufacturing challenges and recommend the optimal 
            combination of LTS products to maximize efficiency and ROI.
          </p>
          <button className="bg-lts-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-lts-light-blue transition-colors">
            Get Product Recommendations from Brett
          </button>
        </div>
      </div>
    </section>
  )
}
