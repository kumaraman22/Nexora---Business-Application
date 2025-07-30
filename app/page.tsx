'use client';

import Hero from './components/Hero';
import About from './components/About';
import Subsidiaries from './components/Subsidiaries';
import BusinessVerticals from './components/BusinessVerticals';
import Leadership from './components/Leadership';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Subsidiaries />
      <BusinessVerticals />
      <Leadership />
      <Footer />
    </div>
  );
}