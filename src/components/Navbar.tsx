import React, { useState } from 'react';
import { Headphones, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900/80 backdrop-blur-md border-b border-white/10 fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <Headphones className="h-8 w-8 text-indigo-400" />
            <span className="ml-2 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-indigo-200">Audexis</span>
          </Link>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-indigo-200 hover:text-indigo-400 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-indigo-200 hover:text-white transition-colors">Services</a>
            <a href="#how-it-works" className="text-indigo-200 hover:text-white transition-colors">How It Works</a>
            <a href="#contact" className="text-indigo-200 hover:text-white transition-colors">Contact</a>
            <Link to="/upload" className="btn-primary py-2 px-4">
              Get Started
            </Link>
          </div>
        </div>

        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#services"
              className="block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-white hover:bg-white/5"
            >
              Services
            </a>
            <a
              href="#how-it-works"
              className="block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-white hover:bg-white/5"
            >
              How It Works
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-white hover:bg-white/5"
            >
              Contact
            </a>
            <Link to="/upload" className="w-full mt-2 btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}