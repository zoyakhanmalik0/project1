import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 w-full">
      {/* Logo Section */}
      <div className="w-full border-b border-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-center">
          <Link to="/">
            <img
              src="/image.png" // This works correctly with Vite since image.png is in the public/ folder
              alt="Logo"
              className="w-20 sm:w-24 h-16 sm:h-20 object-contain hover:opacity-90 transition-opacity"
            />
          </Link>
        </div>
      </div>

      {/* Navigation and Search */}
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-4 pb-4">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto space-y-4 md:space-y-0">

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8">
            <Link to="/game-guides" className="text-gray-700 hover:text-red-600 transition-colors text-base font-bold">
              Game Guides
            </Link>
            <Link to="/GameReviewPage" className="text-gray-700 hover:text-red-600 transition-colors text-base font-bold">
              Game Reviews
            </Link>
            <Link to="/tippage" className="text-gray-700 hover:text-red-600 transition-colors text-base font-bold">
              Tips & Tricks
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-red-600 transition-colors text-base font-bold">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-red-600 transition-colors text-base font-bold">
              Contact
            </Link>
          </nav>

          {/* Search & Subscribe */}
          <div className="w-full md:w-auto flex flex-col sm:flex-row justify-center md:justify-end items-center gap-2">
            <input
              type="text"
              placeholder="Search..."
              className="w-full sm:w-48 px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-orange-500 focus:border-orange-500 text-sm"
            />
            <button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
