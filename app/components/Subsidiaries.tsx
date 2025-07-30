'use client';

export default function Subsidiaries() {
  const subsidiaries = [
    {
      name: "SocialConnect",
      description: "Next-generation social media platform connecting communities worldwide with AI-powered content discovery.",
      icon: "ri-share-circle-line",
      color: "bg-blue-500",
      imageUrl: "https://readdy.ai/api/search-image?query=modern%20social%20media%20app%20interface%20on%20smartphone%20screen%2C%20clean%20UI%20design%20with%20blue%20accents%2C%20social%20networking%20platform%2C%20message%20feeds%20and%20user%20profiles%2C%20contemporary%20mobile%20app%20design&width=400&height=300&seq=social-app&orientation=landscape"
    },
    {
      name: "FinFlow",
      description: "Revolutionary fintech solutions providing seamless digital payments and financial management for businesses.",
      icon: "ri-bank-card-line",
      color: "bg-green-500",
      imageUrl: "https://readdy.ai/api/search-image?query=sleek%20fintech%20mobile%20app%20interface%20showing%20payment%20dashboard%2C%20financial%20charts%20and%20transaction%20history%2C%20modern%20banking%20app%20design%20with%20green%20color%20scheme%2C%20digital%20wallet%20interface&width=400&height=300&seq=fintech-app&orientation=landscape"
    },
    {
      name: "MoveEasy",
      description: "Smart mobility platform revolutionizing urban transportation with AI-driven ride optimization and logistics.",
      icon: "ri-car-line",
      color: "bg-purple-500",
      imageUrl: "https://readdy.ai/api/search-image?query=modern%20mobility%20app%20interface%20on%20phone%20showing%20map%20with%20ride%20locations%2C%20transportation%20app%20with%20purple%20theme%2C%20ride-sharing%20platform%20UI%2C%20urban%20mobility%20solution%20design&width=400&height=300&seq=mobility-app&orientation=landscape"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Portfolio Companies</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the innovative companies that make up our technology ecosystem, each leading their respective markets with cutting-edge solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {subsidiaries.map((company, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer">
              <div className="relative">
                <img 
                  src={company.imageUrl}
                  alt={`${company.name} app interface`}
                  className="w-full h-64 object-cover object-top"
                />
                <div className="absolute top-4 left-4">
                  <div className={`w-12 h-12 ${company.color} rounded-xl flex items-center justify-center`}>
                    <i className={`${company.icon} text-white text-xl`}></i>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{company.name}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{company.description}</p>
                
                <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center group cursor-pointer whitespace-nowrap">
                  Learn More 
                  <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}