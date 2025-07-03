import React from 'react';
import { TrendingUp } from 'lucide-react';

const WebsiteHeader: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-green-600 to-green-700 text-white py-4 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-start items-center">
        {/* Logo in green box (left corner) */}
        <div className="flex items-center space-x-2 bg-green-800 px-4 py-2 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer group">
          <TrendingUp size={28} className="group-hover:text-yellow-300 transition duration-300" />
          <h1 className="text-2xl font-bold group-hover:text-yellow-200 transition duration-300">
            Growvy
          </h1>
          <TrendingUp size={28} className="group-hover:text-yellow-300 transition duration-300" />
        </div>
      </div>
    </header>
  );
};

export default WebsiteHeader;
