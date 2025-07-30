'use client';

export default function Hero() {
  return (
    <div 
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=modern%20technology%20cityscape%20with%20glass%20buildings%20and%20digital%20networks%2C%20futuristic%20business%20environment%20with%20blue%20and%20purple%20tones%2C%20high-tech%20corporate%20atmosphere%2C%20sleek%20architecture%20with%20glowing%20elements%2C%20professional%20technology%20backdrop&width=1920&height=1080&seq=hero-bg&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-6 text-center text-white">
        <div className="mb-8">
          <h1 className="text-6xl font-bold mb-4" style={{ fontFamily: 'var(--font-pacifico)' }}>
            TechHoldings
          </h1>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Innovating Tomorrow's
          <span className="block text-blue-400">Digital Solutions</span>
        </h2>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
          Leading technology holding group driving innovation across social media, fintech, and mobility sectors
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer">
            Explore Our Companies
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}