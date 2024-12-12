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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
      {values.map((value, index) => (
        <div key={index} className="glass-card p-8 rounded-xl">
          <value.icon className="h-12 w-12 text-indigo-400 mb-4" />
          <h3 className="text-2xl font-semibold text-white mb-4">{value.title}</h3>
          <p className="text-indigo-100/80">{value.description}</p>
        </div>
      ))}
    </div>
  );
}