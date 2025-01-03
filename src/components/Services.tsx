import React from 'react';
import { Scale, FileText, Stethoscope, Globe } from 'lucide-react';
import { ServiceCard } from './services/ServiceCard';
import { LegalServices } from './services/LegalServices';
import { GeneralServices } from './services/GeneralServices';
import { MedicalServices } from './services/MedicalServices';
import { GlobalServices } from './services/GlobalServices';

export function Services() {
  const [activeService, setActiveService] = React.useState<string | null>(null);

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
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Services
          </h1>
          <p className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white max-w-3xl mx-auto">
            Professional transcription solutions tailored to your specific industry needs
          </p>
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

