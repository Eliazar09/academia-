import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import SuccessStories from './components/SuccessStories';
import Trainers from './components/Trainers';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Location from './components/Location';
import Footer from './components/Footer';
import Header from './components/Header';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-[#E60000] selection:text-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Pricing />
        <SuccessStories />
        <About />
        <Gallery />
        <Location />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}

export default App;
