'use client';

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">What We Do</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Nexora is a forward-thinking technology holding company that creates, acquires, and scales innovative digital businesses. We focus on building market-leading companies across high-growth technology sectors.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-lightbulb-line text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation First</h3>
              <p className="text-gray-600">We identify emerging technologies and market opportunities to build next-generation solutions.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-team-line text-2xl text-green-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Teams</h3>
              <p className="text-gray-600">Our portfolio companies benefit from world-class talent and proven operational expertise.</p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-rocket-line text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Scale Fast</h3>
              <p className="text-gray-600">We provide strategic resources and capital to accelerate growth and market expansion.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
