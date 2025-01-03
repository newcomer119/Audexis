import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bold hover:text-[#2B9BCA] transition-colors">
                Audexis
              </Link>
            </div>
            <p className="mt-4 text-gray-400">
              Professional transcription services for businesses and individuals.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/services/general" className="hover:text-[#2B9BCA] transition-colors">
                  General Transcription
                </Link>
              </li>
              <li>
                <Link to="/services/legal" className="hover:text-[#2B9BCA] transition-colors">
                  Legal Transcription
                </Link>
              </li>
              <li>
                <Link to="/services/medical" className="hover:text-[#2B9BCA] transition-colors">
                  Medical Transcription
                </Link>
              </li>
              <li>
                <Link to="/services/global" className="hover:text-[#2B9BCA] transition-colors">
                  Global Translations
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link 
                  to="/about"
                  className="hover:text-[#2B9BCA] transition-colors"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  About Us
                </Link>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="hover:text-[#2B9BCA] transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Security & Confidentiality</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a 
                  href="/#security" 
                  className="hover:text-[#2B9BCA] transition-colors"
                >
                  Access Control
                </a>
              </li>
              <li>
                <a 
                  href="/#security" 
                  className="hover:text-[#2B9BCA] transition-colors"
                >
                  Data Privacy
                </a>
              </li>
              <li>
                <a 
                  href="/#security" 
                  className="hover:text-[#2B9BCA] transition-colors"
                >
                  Secure Storage
                </a>
              </li>
              <li>
                <a 
                  href="/#security" 
                  className="hover:text-[#2B9BCA] transition-colors"
                >
                  Confidentiality Agreements
                </a>
              </li>
              <li>
                <a 
                  href="/#security" 
                  className="hover:text-[#2B9BCA] transition-colors"
                >
                  Data Retention Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Audexis Consultancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}