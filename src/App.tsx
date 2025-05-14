import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import GameShowcase from './components/GameShowcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      <Header />
      <main>
        <HeroSection />
        <GameShowcase />
      </main>
      <Footer />
    </div>
  );
}

export default App;