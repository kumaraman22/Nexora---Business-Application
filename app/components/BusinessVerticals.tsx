'use client';

export default function BusinessVerticals() {
  const verticals = [
    {
      title: "Social Media & Community",
      description: "Building platforms that connect people and foster meaningful digital relationships",
      icon: "ri-group-line",
      color: "bg-blue-600",
      features: ["Community Building", "Content Discovery", "Social Commerce", "Creator Economy"]
    },
    {
      title: "Financial Technology",
      description: "Transforming financial services with innovative payment solutions and banking technology",
      icon: "ri-money-dollar-circle-line",
      color: "bg-green-600",
      features: ["Digital Payments", "Blockchain Solutions", "Credit Services", "Investment Platforms"]
    },
    {
      title: "Smart Mobility",
      description: "Revolutionizing transportation through intelligent logistics and mobility solutions",
      icon: "ri-roadster-line",
      color: "bg-purple-600",
      features: ["Ride Sharing", "Fleet Management", "Route Optimization", "Autonomous Systems"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Business Verticals</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our strategic focus areas represent the future of technology, where we invest our expertise and resources to drive meaningful innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {verticals.map((vertical, index) => (
            <div key={index} className="relative group">
              <div className="bg-gray-50 rounded-3xl p-8 h-full hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className={`w-16 h-16 ${vertical.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <i className={`${vertical.icon} text-white text-2xl`}></i>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{vertical.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{vertical.description}</p>
                
                <div className="space-y-2">
                  {vertical.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Build the Future?</h3>
            <p className="text-xl mb-8 text-blue-100">Join our ecosystem of innovative companies shaping tomorrow's technology landscape.</p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-colors cursor-pointer whitespace-nowrap">
              Explore Opportunities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}