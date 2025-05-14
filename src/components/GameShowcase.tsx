import React from 'react';
import GameCard, { GameProps } from './GameCard';

const games: GameProps[] = [
  {
    id: 1,
    title: "Celestial Odyssey",
    description: "Embark on an epic journey through the cosmos, exploring mysterious planets and uncovering ancient secrets. Battle cosmic entities and forge alliances with alien species in this immersive space RPG adventure.",
    image: "https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=1600",
    genre: "Space RPG",
    rating: 4.8,
    releaseYear: 2023,
    playTime: "40+ hours"
  },
  {
    id: 2,
    title: "Shadow Tactics",
    description: "Master the art of stealth in this tactical action game. Navigate through heavily-guarded environments, eliminate targets with precision, and complete high-stake missions. Your skills in strategy and timing will determine your success.",
    image: "https://images.pexels.com/photos/6462662/pexels-photo-6462662.jpeg?auto=compress&cs=tinysrgb&w=1600",
    genre: "Stealth Strategy",
    rating: 4.6,
    releaseYear: 2022,
    playTime: "25+ hours"
  },
  {
    id: 3,
    title: "Legends of Avaloria",
    description: "Enter a rich fantasy world filled with magic, mythical creatures, and medieval warfare. Build your kingdom, train your armies, and forge powerful alliances to conquer the realm. Will you rule with diplomacy or domination?",
    image: "https://images.pexels.com/photos/5429056/pexels-photo-5429056.jpeg?auto=compress&cs=tinysrgb&w=1600",
    genre: "Fantasy Strategy",
    rating: 4.9,
    releaseYear: 2024,
    playTime: "60+ hours"
  },
  {
    id: 4,
    title: "Velocity Rush",
    description: "Feel the adrenaline in this high-octane racing simulator. Customize your vehicles, master challenging tracks, and compete against players worldwide. With realistic physics and stunning visuals, this is racing at its finest.",
    image: "https://images.pexels.com/photos/12617804/pexels-photo-12617804.jpeg?auto=compress&cs=tinysrgb&w=1600",
    genre: "Racing Simulator",
    rating: 4.5,
    releaseYear: 2023,
    playTime: "30+ hours"
  },
  {
    id: 5,
    title: "Cryptic Survival",
    description: "Test your survival skills in a post-apocalyptic world filled with dangers and mysteries. Gather resources, craft tools, build shelters, and uncover the truth behind the catastrophe that changed everything.",
    image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1600",
    genre: "Survival Horror",
    rating: 4.7,
    releaseYear: 2022,
    playTime: "50+ hours"
  }
];

const GameShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center text-white">
          Featured <span className="text-purple-500">Games</span>
        </h2>
        
        <div className="space-y-20 md:space-y-32">
          {games.map((game, index) => (
            <GameCard key={game.id} game={game} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameShowcase;