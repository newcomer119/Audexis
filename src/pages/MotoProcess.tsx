import React from 'react';
import { BackgroundAnimation } from '../components/animations/BackgroundAnimation';
import { CoreValues } from '../components/moto-process/CoreValues';
import { ProcessSteps } from '../components/moto-process/ProcessSteps';
import { Contact } from '../components/Contact';

export function MotoProcess() {
  return (
    <div className="relative pt-20 section-gradient min-h-screen">
      <BackgroundAnimation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Process & Values
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Delivering excellence through a meticulous and transparent process
          </p>
        </div>

        <CoreValues />
        <ProcessSteps />
        <Contact /> 
      </div>
    </div>
  );
}