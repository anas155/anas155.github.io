import React, { useEffect, useRef } from 'react';
import { Play } from 'lucide-react';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      heroRef.current.style.setProperty('--mouse-x', String(x));
      heroRef.current.style.setProperty('--mouse-y', String(y));
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        '--mouse-x': '0',
        '--mouse-y': '0',
      } as React.CSSProperties}
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-black"></div>
      
      {/* Animated circles */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-700/30 blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translate(calc(-50% + calc(var(--mouse-x) * 20px)), calc(-50% + calc(var(--mouse-y) * 20px)))`,
        }}
      ></div>
      <div className="absolute w-[300px] h-[300px] rounded-full bg-blue-700/20 blur-3xl top-1/3 right-1/4"
        style={{
          transform: `translate(calc(var(--mouse-x) * -30px), calc(var(--mouse-y) * -30px))`,
        }}
      ></div>
      <div className="absolute w-[200px] h-[200px] rounded-full bg-pink-700/20 blur-3xl bottom-1/3 left-1/4"
        style={{
          transform: `translate(calc(var(--mouse-x) * 40px), calc(var(--mouse-y) * 40px))`,
        }}
      ></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 leading-tight max-w-5xl mx-auto">
          Discover Your Next Gaming Adventure
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Explore our collection of 5 extraordinary games that will take you on unforgettable journeys
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-md font-medium transition-all flex items-center gap-2 hover:scale-105 transform">
            <Play size={20} />
            Browse Games
          </button>
          <button className="px-6 py-3 bg-transparent border border-gray-400 hover:border-white rounded-md font-medium transition-all hover:scale-105 transform">
            Learn More
          </button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
          <div className="w-1 h-12 bg-gradient-to-b from-transparent to-purple-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;