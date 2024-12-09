import React from 'react';

export function LegalServices() {
  const services = [
    {
      title: 'Court Proceedings',
      description: 'Accurate transcription of trials, hearings, and depositions'
    },
    {
      title: 'Legal Documentation',
      description: 'Contracts, agreements, and legal correspondence'
    },
    {
      title: 'Law Enforcement',
      description: 'Police interviews, witness statements, and investigation reports'
    },
    {
      title: 'Corporate Legal',
      description: 'Board meetings, shareholder meetings, and compliance documentation'
    }
  ];

  return (
    <div className="bg-gray-800/50 rounded-lg p-8">
      <h3 className="text-2xl font-bold text-white mb-6">Legal Transcription Services</h3>
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