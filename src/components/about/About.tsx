import React from 'react';
import { BackgroundAnimation } from '../animations/BackgroundAnimation';
import { Mission } from './MIssion';
import { Team } from './Team';
import { Stats } from './Stats';
import { Testimonials } from './Testimonials';
import { Contact } from '../Contact';

export function About() {
  return (
    <div className="relative pt-20 bg-white dark:bg-gray-900">
      <BackgroundAnimation />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Audexis
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Founded in 2024, Audexis is revolutionizing the transcription industry with cutting-edge technology 
            and unwavering commitment to accuracy and client satisfaction.
          </p>
        </div>

        <Mission />
        
        
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}