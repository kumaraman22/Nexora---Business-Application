'use client';

export default function Leadership() {
  const leaders = [
    {
      name: "Sarah Chen",
      role: "Chief Executive Officer",
      bio: "Visionary leader with 15+ years in tech, former VP at Meta, Harvard MBA",
      avatar: "https://readdy.ai/api/search-image?query=professional%20business%20portrait%20of%20asian%20woman%20CEO%20in%20modern%20office%2C%20confident%20leader%20in%20business%20suit%2C%20executive%20headshot%20with%20technology%20background%2C%20professional%20corporate%20photography&width=300&height=400&seq=ceo-avatar&orientation=portrait",
      linkedin: "#"
    },
    {
      name: "Marcus Rodriguez",
      role: "Chief Technology Officer",
      bio: "Former Google engineer, AI/ML expert, led teams building products for 1B+ users",
      avatar: "https://readdy.ai/api/search-image?query=professional%20business%20portrait%20of%20hispanic%20male%20CTO%20in%20tech%20office%2C%20confident%20technology%20leader%20in%20casual%20business%20attire%2C%20engineering%20executive%20headshot%20with%20modern%20workspace%20background&width=300&height=400&seq=cto-avatar&orientation=portrait",
      linkedin: "#"
    },
    {
      name: "Emma Thompson",
      role: "Chief Investment Officer",
      bio: "Investment veteran from Goldman Sachs, specialist in growth-stage tech companies",
      avatar: "https://readdy.ai/api/search-image?query=professional%20business%20portrait%20of%20caucasian%20woman%20investment%20officer%20in%20financial%20district%2C%20confident%20finance%20leader%20in%20business%20blazer%2C%20executive%20headshot%20with%20modern%20office%20background&width=300&height=400&seq=cio-avatar&orientation=portrait",
      linkedin: "#"
    },
    {
      name: "David Kim",
      role: "Chief Operating Officer",
      bio: "Operations expert, scaled multiple startups from seed to IPO, Stanford alumnus",
      avatar: "https://readdy.ai/api/search-image?query=professional%20business%20portrait%20of%20korean%20male%20COO%20in%20corporate%20office%2C%20confident%20operations%20leader%20in%20business%20suit%2C%20executive%20headshot%20with%20contemporary%20workspace%20background&width=300&height=400&seq=coo-avatar&orientation=portrait",
      linkedin: "#"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Leadership Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our experienced leadership team combines deep industry expertise with a shared passion for building transformative technology companies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <div key={index} className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group cursor-pointer">
              <div className="relative mb-6">
                <img 
                  src={leader.avatar}
                  alt={leader.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover object-top mb-4"
                />
                <div className="absolute -bottom-2 right-1/2 transform translate-x-1/2">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                    <i className="ri-linkedin-fill text-white text-sm"></i>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
              <p className="text-blue-600 font-semibold mb-3">{leader.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{leader.bio}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Team</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We're always looking for exceptional talent to join our portfolio companies and help build the future of technology.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-colors cursor-pointer whitespace-nowrap">
            View Open Positions
          </button>
        </div>
      </div>
    </section>
  );
}