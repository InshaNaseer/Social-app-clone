import React, { useState } from 'react';
import { Search, Home, Compass, MessageCircle, Heart, PlusSquare, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { currentUser } from '../data/mockData';

const Header: React.FC = () => {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-bold text-xl tracking-tighter">
          Instagram
        </Link>

        {/* Search */}
        <div className={`hidden md:flex relative items-center ${searchActive ? 'flex-1 mx-8' : 'w-64'} transition-all duration-300`}>
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-100 rounded-lg py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-1 focus:ring-gray-300 text-sm"
              onFocus={() => setSearchActive(true)}
              onBlur={() => setSearchActive(false)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-5">
          <Link to="/" className="hover:text-gray-700 transition-colors">
            <Home size={24} />
          </Link>
          <Link to="/explore" className="hover:text-gray-700 transition-colors">
            <Compass size={24} />
          </Link>
          <Link to="/messages" className="hover:text-gray-700 transition-colors">
            <MessageCircle size={24} />
          </Link>
          <button className="hover:text-gray-700 transition-colors">
            <Heart size={24} />
          </button>
          <button className="hover:text-gray-700 transition-colors">
            <PlusSquare size={24} />
          </button>
          <Link to="/profile" className="hover:text-gray-700 transition-colors">
            <img 
              src={currentUser.profileImage} 
              alt="Profile" 
              className="w-7 h-7 rounded-full object-cover border border-gray-200" 
            />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;