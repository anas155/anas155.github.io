import React, { useState, useEffect } from 'react';
import { TowerControl as GameController, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm py-3 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-xl font-bold text-white group">
          <GameController className="w-8 h-8 text-purple-500 group-hover:text-purple-400 transition-all" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            GameVault
          </span>
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          {['Home', 'Games', 'New Releases', 'Categories', 'About'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-gray-300 hover:text-white transition-colors relative overflow-hidden group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-md font-medium transition-colors">
            Sign In
          </button>
        </nav>
        
        <button 
          className="md:hidden text-white" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-sm shadow-lg py-4">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col gap-4">
              {['Home', 'Games', 'New Releases', 'Categories', 'About'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="text-gray-300 hover:text-white py-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-md font-medium transition-colors mt-2">
                Sign In
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;