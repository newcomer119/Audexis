import React, { useState, useEffect, useRef } from 'react';
import { Headphones, Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import AudexisLogo from '../Audexis2.png'
import Logo from '../aude1.png'
import { scrollToTop } from '../components/scrollUtils';

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
  },
  { 
    name: 'Subtitle & Captioning', 
    path: '/services/subtitle',
    caption: 'Video subtitles, closed captions, and multimedia accessibility'
  }
];

const whyAudexisLinks = [
  {
    name: 'Why Hire Audexis?',
    path: '/why-audexis',
  },
  {
    name: 'Specializations',
    path: '/why-audexis#specializations',
  },
  {
    name: 'Cost Effectiveness',
    path: '/why-audexis#cost-effectiveness',
  },
  {
    name: 'Our Clients',
    path: '/why-audexis#testimonials',
  },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isWhyAudexisOpen, setIsWhyAudexisOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const servicesRef = useRef<HTMLDivElement>(null);
  const whyAudexisRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsWhyAudexisOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsServicesOpen(false);
      setIsWhyAudexisOpen(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
      if (whyAudexisRef.current && !whyAudexisRef.current.contains(event.target as Node)) {
        setIsWhyAudexisOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const currentPath = window.location.pathname;
    const [targetPath, hash] = href.split('#');
    
    if (currentPath === targetPath || (targetPath === '' && hash)) {
      scrollToTop(hash);
    } else {
      navigate(targetPath);
    }
  };

  const handleHashNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToTop(sectionId);
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
            <div title="Change theme">
              <ThemeToggle />
            </div>
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
              onClick={(e) => handleNavClick(e, '/')}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={(e) => handleNavClick(e, '/about')}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              About
            </Link>
            <div className="relative" ref={servicesRef}>
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
                      onClick={(e) => handleNavClick(e, service.path)}
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <div className="font-medium">{service.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{service.caption}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="relative" ref={whyAudexisRef}>
              <button
                onClick={() => setIsWhyAudexisOpen(!isWhyAudexisOpen)}
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                Why Audexis
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isWhyAudexisOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50">
                  {whyAudexisLinks.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={(e) => handleNavClick(e, item.path)}
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              to="/moto-process"
              onClick={(e) => handleNavClick(e, '/moto-process')}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Moto/Process
            </Link>
            <a
              href="/#contact"
              onClick={(e) => handleHashNavClick(e, 'contact')}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Contact
            </a>
            <div title="Change theme">
              <ThemeToggle />
            </div>
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
              onClick={(e) => handleNavClick(e, '/')}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={(e) => handleNavClick(e, '/about')}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              About
            </Link>
            {serviceLinks.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                onClick={(e) => handleNavClick(e, service.path)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <div>{service.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{service.caption}</div>
              </Link>
            ))}
            {whyAudexisLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/moto-process"
              onClick={(e) => handleNavClick(e, '/moto-process')}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Moto/Process
            </Link>
            <a href="#how-it-works" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800">
              How It Works
            </a>
            <a href="/#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800">
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