import React from 'react';

export function MedicalServices() {
  const services = [
    {
      title: 'Clinical Documentation',
      description: 'Patient records, clinical notes, and medical reports'
    },
    {
      title: 'Specialty Services',
      description: 'Cardiology, neurology, orthopedics, and all medical specialties'
    },
    {
      title: 'Radiology Reports',
      description: 'X-ray, MRI, CT scan, and ultrasound reports'
    },
    {
      title: 'Research & Studies',
      description: 'Clinical trials, medical research, and case studies'
    }
  ];

  return (
    <div className="bg-gray-800/50 rounded-lg p-8">
      <h3 className="text-2xl font-bold text-white mb-6">Medical Transcription Services</h3>
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