import React, { useState } from 'react';
import { Scale, FileText, Stethoscope, Globe } from 'lucide-react';
import { ServiceCard } from './services/ServiceCard';
import { LegalServices } from './services/LegalServices';
import { GeneralServices } from './services/GeneralServices';
import { MedicalServices } from './services/MedicalServices';
import { GlobalServices } from './services/GlobalServices';

export function Services() {
  const [activeService, setActiveService] = React.useState<string | null>(null);
  const [isLightTheme, setIsLightTheme] = useState(true);

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  const services = [
    {
      id: 'legal',
      title: 'Legal Transcription',
      icon: Scale,
      description: 'Professional transcription services for all legal proceedings and documentation',
      component: LegalServices
    },
    {
      id: 'general',
      title: 'General Transcription',
      icon: FileText,
      description: 'Comprehensive transcription solutions for business and academic needs',
      component: GeneralServices
    },
    {
      id: 'medical',
      title: 'Medical Transcription',
      icon: Stethoscope,
      description: 'Specialized medical transcription covering all healthcare specialties',
      component: MedicalServices
    },
    {
      id: 'global',
      title: 'Global Translations',
      icon: Globe,
      description: 'Multi-language translation services for European, Asian, and Indian languages',
      component: GlobalServices
    }
  ];

  return (
    <section id="services" className={`py-20 ${isLightTheme ? 'bg-gray-50 text-black' : 'bg-gray-900 text-white'} transition-colors duration-200`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={toggleTheme} className="mb-4 p-2 bg-blue-500 text-white rounded">Theme Toggle</button>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl">Comprehensive transcription solutions for every industry</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              Icon={service.icon}
              description={service.description}
              isActive={activeService === service.id}
              onClick={() => setActiveService(activeService === service.id ? null : service.id)}
            />
          ))}
        </div>
        {activeService && (
          <div className="mt-12 animate-fade-in">
            {services.find(s => s.id === activeService)?.component()}
          </div>
        )}
      </div>
    </section>
  );
}