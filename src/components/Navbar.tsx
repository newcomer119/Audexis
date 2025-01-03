import React, { useState, useEffect } from 'react';
import { Headphones, Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import AudexisLogo from '../Audexis2.png'
import Logo from '../aude1.png'

const serviceLinks = [
  { 
    name: 'Legal Transcription', 
    path: '/services/legal',
    caption: 'Court proceedings, depositions, and legal documentation'
  },
  { 
    name: 'General Transcription', 
    path: '/services/general',
    caption: 'Interviews, meetings, and multimedia content'
  },
  { 
    name: 'Medical Transcription', 
    path: '/services/medical',
    caption: 'Clinical reports, patient records, and medical dictations'
  },
  { 
    name: 'Global Translations', 
    path: '/services/global',
    caption: 'Multi-language translation and localization services'
  }
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex flex-col items-center">
            <img
              src={AudexisLogo}
              alt="Audexis Logo"
              className="h-8 w-auto bg-blend-screen block dark:hidden"
            />
            <img
              src={Logo}
              alt="Audexis Logo Dark"
              className="h-8 w-auto bg-blend-screen hidden dark:block"
            />
            <span className="text-sm font-bold text-[#2B9BCA] dark:text-[#FFFFFF]">
              AUDEXIS CONSULTANCY
            </span>
          </Link>

          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              About
            </Link>
            <div className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />  
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <div className="font-medium">{service.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{service.caption}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              to="/why-audexis"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Why Audexis
            </Link>
            <Link
              to="/moto-process"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Moto/Process
            </Link>
            <a
              href="#contact"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Contact
            </a>
            <ThemeToggle />
            <Link
              to="#contact"
              onClick={scrollToContact}
              className="btn-primary py-2 px-4"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 rounded-b-lg shadow-lg">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              About
            </Link>
            {serviceLinks.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <div>{service.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{service.caption}</div>
              </Link>
            ))}
            <Link
              to="/why-audexis"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Why Audexis
            </Link>
            <a href="#how-it-works" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800">
              How It Works
            </a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800">
              Contact
            </a>
            <Link 
              to="#contact" 
              onClick={scrollToContact} 
              className="block px-3 py-2 btn-primary text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}