import React, { useState, useEffect } from 'react';
import { Headphones, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  return (
    <nav className="bg-white dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10 fixed w-full z-10 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <Headphones className="h-8 w-8 text-blue-600 dark:text-indigo-400" />
            <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">Audexis</span>
          </Link>
          
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-indigo-200 hover:text-gray-900 dark:hover:text-indigo-400 transition-colors"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-gray-700 dark:text-indigo-200 hover:text-gray-900 dark:hover:text-white transition-colors">About</Link>
            <Link to="/services" className="text-gray-700 dark:text-indigo-200 hover:text-gray-900 dark:hover:text-white transition-colors">Services</Link>
            <a href="#how-it-works" className="text-gray-700 dark:text-indigo-200 hover:text-gray-900 dark:hover:text-white transition-colors">How It Works</a>
            <a href="#contact" className="text-gray-700 dark:text-indigo-200 hover:text-gray-900 dark:hover:text-white transition-colors">Contact</a>
            <ThemeToggle />
            <Link to="/upload" className="btn-primary py-2 px-4">Get Started</Link>
          </div>
        </div>

        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-indigo-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5">
              About
            </Link>
            <Link to="/services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-indigo-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5">
              Services
            </Link>
            <a href="#how-it-works" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-indigo-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5">
              How It Works
            </a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-indigo-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5">
              Contact
            </a>
            <Link to="/upload" className="block px-3 py-2 btn-primary text-center">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}