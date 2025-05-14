import React from 'react';
import { Star, Clock, Tag, ChevronRight } from 'lucide-react';

export interface GameProps {
  id: number;
  title: string;
  description: string;
  image: string;
  genre: string;
  rating: number;
  releaseYear: number;
  playTime: string;
}

interface GameCardProps {
  game: GameProps;
  index: number;
}

const GameCard: React.FC<GameCardProps> = ({ game, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div 
      className={`w-full flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 md:gap-12 py-12 md:py-20 opacity-0 translate-y-8`}
      style={{ 
        animation: `fadeInUp 0.6s ease-out ${index * 0.15}s forwards`,
      }}
    >
      {/* Game Image */}
      <div className="w-full md:w-1/2 aspect-video overflow-hidden rounded-lg group relative">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 z-10"></div>
        <img 
          src={game.image} 
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 z-20 bg-gray-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
          {game.genre}
        </div>
        <div className="absolute top-4 right-4 z-20 flex items-center gap-1 bg-gray-900/80 backdrop-blur-sm px-3 py-1 rounded-full">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          <span className="text-sm">{game.rating.toFixed(1)}</span>
        </div>
      </div>
      
      {/* Game Details */}
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{game.title}</h2>
        <p className="text-gray-300 mb-6">{game.description}</p>
        
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center gap-2 bg-gray-800 px-3 py-1.5 rounded-md text-sm">
            <Clock className="w-4 h-4 text-gray-400" />
            <span>{game.playTime}</span>
          </div>
          <div className="flex items-center gap-2 bg-gray-800 px-3 py-1.5 rounded-md text-sm">
            <Tag className="w-4 h-4 text-gray-400" />
            <span>{game.releaseYear}</span>
          </div>
        </div>
        
        <div className="mt-auto">
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-md font-medium transition-all flex items-center gap-2 group">
            Play Now
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;