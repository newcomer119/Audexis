import React from 'react';
import { BackgroundAnimation } from '../../components/animations/BackgroundAnimation';
import { ServiceSection } from '../../components/services/ServiceSection';
import { Contact } from '../../components/Contact';

export function GlobalTranscriptionPage() {
  return (
    <div className="relative pt-20 section-gradient min-h-screen">
      <BackgroundAnimation />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Global Transcription Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Multilingual transcription services for international businesses and organizations
          </p>
        </div>

        <ServiceSection
          id="global"
          title="Global Transcription"
          description="Comprehensive multilingual transcription services with cultural expertise and linguistic accuracy."
          features={[
            "Multiple Language Support",
            "International Business Meetings",
            "Cross-Cultural Communications",
            "Global Conference Coverage"
          ]}
          details={[
            {
              title: "Multilingual Services",
              description: "Expert transcription services in multiple languages with native-speaking professionals and cultural understanding."
            },
            {
              title: "International Business",
              description: "Accurate transcription of international business meetings, negotiations, and global corporate events."
            },
            {
              title: "Cross-Cultural",
              description: "Professional transcription of cross-cultural communications with attention to cultural nuances and context."
            },
            {
              title: "Global Events",
              description: "Comprehensive coverage of international conferences, seminars, and multinational corporate meetings."
            }
          ]}
        />

        <Contact />
      </div>
    </div>
  );
}