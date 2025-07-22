import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200">

      {/* Logo Section with full-width thin yellow border below */}
      <div className="w-full border-b border-yellow-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-center">
          <Link to="/">
            <img
              src="/image.png"
              alt="Logo"
              className="w-24 h-20 object-contain hover:opacity-90 transition-opacity"
            />
          </Link>
        </div>
      </div>

      {/* Navigation and Search Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-6 pb-6">
        <div className="flex justify-between items-center max-w-7xl mx-auto">

          {/* Navigation links (left side) */}
          <nav className="flex space-x-8">
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

          {/* Search bar & Subscribe button (right side) */}
          <div className="ml-auto flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search..."
              className="w-48 px-3 py-2 border border-gray-300 rounded focus:ring-1 focus:ring-orange-500 focus:border-orange-500 text-sm"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
              SUBSCRIBE
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
