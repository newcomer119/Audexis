import React from 'react';
import { Target, Users, Shield, Globe, DollarSign } from 'lucide-react';

export function Mission() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To provide unparalleled transcription services that empower businesses and individuals to convert their audio and video content into accurate, actionable text with our qualitative, efficient, and prompt approach with 100% client satisfaction.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'We put our clients first, ensuring personalized service and solutions tailored to their unique needs. Our team keep in touch with the client 24X7 with swift updates and transparent approach during execution process to ensure accurate and timely deliveries.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Our rigorous quality control process ensures 99% accuracy in all transcriptions. We have a team of transcribers with over 15 years of experience with two-level of transcribers involved in every project with the aim of providing a seamless transcription services to our client.'
    },
    {
      icon: Globe,
      title: 'Global Services',
      description: 'Supporting multiple languages and serving clients worldwide with local expertise. Apart from our excellence in English transcription, we have an excellent team of native translators to provide the translation services for all the Global languages including Asian, East Asian, European, and others.'
    },
    {
      icon: DollarSign,
      title: 'Cost Saving',
      description: 'We provide a very competitive pricing starting from $0.90 for English to English transcription and $2.90 for specific European language translations with the free sample facility of large number of minutes for General and Legal transcription services to meet our clients quality requirements before initiating a project.',
    },
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {values.slice(0, 4).map((value, index) => (
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
      
      <div className="mt-8 max-w-xl mx-auto">
        {values.slice(4).map((value, index) => (
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