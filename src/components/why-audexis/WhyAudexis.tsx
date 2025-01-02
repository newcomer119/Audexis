import React from 'react';
import { BackgroundAnimation } from '../animations/BackgroundAnimation';
import { Features } from './Features';
import { Testimonials } from './Testimonials';
import { Stats } from './Stats';
import { Contact } from '../Contact';

export function WhyAudexis() {
  return (
    <div className="relative pt-20 section-gradient min-h-screen">
      <BackgroundAnimation />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Why Choose Audexis?
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Industry-leading transcription services backed by expertise, technology, and dedication
          </p>
        </div>
        
        <Features />
        <Stats />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}