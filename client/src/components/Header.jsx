import React from 'react';
import { Link } from 'react-router-dom';
import { FaTiktok, FaTelegram, FaWhatsapp, FaTrophy } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-black/90 backdrop-blur-xl border-b border-gold-500/10 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <FaTrophy className="text-gold-500 text-2xl" />
          <span className="gold-text text-xl font-bold">𝑫𝒆𝒗: 𝑴𝑶𝑫𝒀𝑿𝑩𝑶𝑻1</span>
        </Link>
        
        <div className="flex items-center gap-4">
          <a href="https://www.tiktok.com/@king_burd" target="_blank" rel="noopener noreferrer" 
             className="text-gray-400 hover:text-white text-2xl transition">
            <FaTiktok />
          </a>
          <a href="https://t.me/MODYXBOT1" target="_blank" rel="noopener noreferrer"
             className="text-gray-400 hover:text-blue-400 text-2xl transition">
            <FaTelegram />
          </a>
          <a href="https://wa.me/201204564384" target="_blank" rel="noopener noreferrer"
             className="text-gray-400 hover:text-green-400 text-2xl transition">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;