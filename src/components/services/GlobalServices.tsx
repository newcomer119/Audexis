import React from 'react';

export function GlobalServices() {
  const services = [
    {
      title: 'European Languages',
      description: 'German, French, Spanish, Italian, and other EU languages'
    },
    {
      title: 'Asian Languages',
      description: 'Chinese, Japanese, Korean, and Southeast Asian languages'
    },
    {
      title: 'Indian Languages',
      description: 'Hindi, Tamil, Bengali, and other regional languages'
    },
    {
      title: 'Specialized Translation',
      description: 'Technical, legal, medical, and business document translation'
    }
  ];

  return (
    <div className="bg-gray-800/50 rounded-lg p-8">
      <h3 className="text-2xl font-bold text-white mb-6">Global Translation Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-700/50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-indigo-400 mb-2">{service.title}</h4>
            <p className="text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}