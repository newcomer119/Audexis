import React from 'react';
import { BackgroundAnimation } from '../../components/animations/BackgroundAnimation';
import { ServiceSection } from '../../components/services/ServiceSection';
import { Contact } from '../../components/Contact';

export function CaptioningSubtitlesPage() {
  return (
    <div className="relative pt-20 section-gradient min-h-screen">
      <BackgroundAnimation />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Captioning & Subtitling Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Professional captioning and subtitling services for all your multimedia content
          </p>
        </div>

        <ServiceSection
          id="captioning"
          title="Captioning & Subtitles"
          description="Comprehensive captioning and subtitling services for enhanced accessibility and global reach."
          features={[
            "Closed Captions for Videos",
            "Multilingual Subtitling",
            "Live Event Captioning",
            "Corporate Video Subtitles"
          ]}
          details={[
            {
              title: "Closed Captioning Services",
              description: "Professional closed captioning for TV shows, movies, educational content, and online videos. We ensure ADA compliance and follow FCC guidelines while maintaining perfect synchronization and accuracy."
            },
            {
              title: "Multilingual Subtitling",
              description: "Expert subtitling services in multiple languages to help you reach a global audience. Our linguists ensure culturally appropriate translations while maintaining the original message's intent and context."
            },
            {
              title: "Live Captioning",
              description: "Real-time captioning for live events, webinars, conferences, and broadcasts. Our experienced captioners provide accurate, synchronized captions with minimal delay for maximum accessibility."
            },
            {
              title: "Corporate & Marketing Videos",
              description: "Professional subtitling services for corporate training videos, marketing content, product demonstrations, and promotional materials. We help maximize your content's reach and engagement across different markets."
            }
          ]}
        />

        <Contact />
      </div>
    </div>
  );
}