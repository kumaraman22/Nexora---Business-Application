'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-pacifico)' }}>
              TechHoldings
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building tomorrow's technology companies today. We invest in, create, and scale innovative digital businesses across high-growth sectors.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-linkedin-fill"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-twitter-fill"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-github-fill"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-mail-line"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Portfolio</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">SocialConnect</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">FinFlow</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">MoveEasy</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">All Companies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Leadership</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">News</a></li>
              <li><a href="#" className="hover:text-white transition-colors cursor-pointer">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start">
                <i className="ri-map-pin-line text-blue-400 mr-3 mt-1"></i>
                <div>
                  <p>123 Innovation Drive</p>
                  <p>San Francisco, CA 94105</p>
                </div>
              </div>
              <div className="flex items-center">
                <i className="ri-phone-line text-blue-400 mr-3"></i>
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <i className="ri-mail-line text-blue-400 mr-3"></i>
                <p>hello@techholdings.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 TechHoldings Inc. All rights reserved.
            </p>
            <div className="flex space-x-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-white transition-colors cursor-pointer">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors cursor-pointer">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors cursor-pointer">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}