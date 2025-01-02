import React from 'react';
import { Target, Users, Shield, Globe } from 'lucide-react';

export function Mission() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide unparalleled transcription services that empower businesses and individuals to convert their audio and video content into accurate, actionable text.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'We put our clients first, ensuring personalized service and solutions tailored to their unique needs.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Our rigorous quality control process ensures 99% accuracy in all transcriptions.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Supporting multiple languages and serving clients worldwide with local expertise.'
    }
  ];

  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Our Mission & Values
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Committed to excellence in transcription services
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {values.map((value, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md"
          >
            <div className="flex items-start space-x-4">
              <value.icon className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}