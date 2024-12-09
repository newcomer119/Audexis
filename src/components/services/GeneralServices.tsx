import React from 'react';

export function GeneralServices() {
  const services = [
    {
      title: 'Business Meetings',
      description: 'Board meetings, conferences, and corporate events'
    },
    {
      title: 'Academic Content',
      description: 'Lectures, seminars, and research interviews'
    },
    {
      title: 'Media Content',
      description: 'Podcasts, interviews, and broadcast content'
    },
    {
      title: 'Market Research',
      description: 'Focus groups, interviews, and survey responses'
    }
  ];

  return (
    <div className="bg-gray-800/50 rounded-lg p-8">
      <h3 className="text-2xl font-bold text-white mb-6">General Transcription Services</h3>
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