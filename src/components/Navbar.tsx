import React, { useState } from 'react';
import { Headphones, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900/95 backdrop-blur-md border-b border-gray-800 fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Headphones className="h-8 w-8 text-indigo-400" />
            <span className="ml-2 text-xl font-bold text-white">Audexis</span>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-indigo-400"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-300 hover:text-indigo-400 transition-colors">Services</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-indigo-400 transition-colors">How It Works</a>
            <a href="#pricing" className="text-gray-300 hover:text-indigo-400 transition-colors">Pricing</a>
            <a href="#contact" className="text-gray-300 hover:text-indigo-400 transition-colors">Contact</a>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500 transition-colors">
              Get Started
            </button>
          </div>
        </div>

        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#services"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-indigo-400 hover:bg-gray-800"
            >
              Services
            </a>
            <a
              href="#how-it-works"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-indigo-400 hover:bg-gray-800"
            >
              How It Works
            </a>
            <a
              href="#pricing"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-indigo-400 hover:bg-gray-800"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-indigo-400 hover:bg-gray-800"
            >
              Contact
            </a>
            <button className="w-full mt-2 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}