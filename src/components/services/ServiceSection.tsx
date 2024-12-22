import React from 'react';
import { Check } from 'lucide-react';

interface ServiceDetail {
  title: string;
  description: string;
}

interface ServiceSectionProps {
  id: string;
  title: string;
  description: string;
  features: string[];
  details: ServiceDetail[];
}

export function ServiceSection({ id, title, description, features, details }: ServiceSectionProps) {
  return (
    <section id={id} className="scroll-mt-20">
      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 sm:p-12 shadow-lg">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">{title}</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">{description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {details.map((detail, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{detail.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{detail.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}