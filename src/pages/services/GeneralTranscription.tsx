import React from 'react';
import { BackgroundAnimation } from '../../components/animations/BackgroundAnimation';
import { ServiceSection } from '../../components/services/ServiceSection';
import { Contact } from '../../components/Contact';

export function GeneralTranscriptionPage() {
  return (
    <div className="relative pt-20 section-gradient min-h-screen">
      <BackgroundAnimation />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            General Transcription Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Accurate and reliable transcription services for all your business needs
          </p>
        </div>

        <ServiceSection
          id="general"
          title="General Transcription"
          description="Comprehensive transcription services for various industries and content types."
          features={[
            "Business Meetings & Conferences",
            "Interviews & Focus Groups",
            "Academic Lectures & Seminars",
            "Podcasts & Webinars"
          ]}
          details={[
            {
              title: "Business Meetings",
              description: "Accurate transcription of corporate meetings, conferences, and presentations with quick turnaround times."
            },
            {
              title: "Interviews",
              description: "Professional transcription of interviews, focus groups, and market research sessions with attention to detail."
            },
            {
              title: "Academic Content",
              description: "Precise transcription of lectures, seminars, and educational content with proper formatting and terminology."
            },
            {
              title: "Digital Media",
              description: "High-quality transcription of podcasts, webinars, and other digital content with timestamps and speaker identification."
            }
          ]}
        />

        <Contact />
      </div>
    </div>
  );
}