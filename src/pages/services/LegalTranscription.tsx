import React from 'react';
import { BackgroundAnimation } from '../../components/animations/BackgroundAnimation';
import { ServiceSection } from '../../components/services/ServiceSection';
import { Contact } from '../../components/Contact';

export function LegalTranscriptionPage() {
  return (
    <div className="relative pt-20 section-gradient min-h-screen">
      <BackgroundAnimation />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Legal Transcription Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Professional legal transcription services with unmatched accuracy and confidentiality
          </p>
        </div>

        <ServiceSection
          id="legal"
          title="Legal Transcription"
          description="Comprehensive legal transcription services with unmatched accuracy and confidentiality."
          features={[
            "Court Proceedings & Depositions",
            "Legal Documentation & Contracts",
            "Law Enforcement Interviews",
            "Corporate Legal Meetings"
          ]}
          details={[
            {
              title: "Court Proceedings",
              description: "Accurate transcription of trials, hearings, and depositions with strict attention to legal terminology and formatting requirements."
            },
            {
              title: "Legal Documentation",
              description: "Precise transcription of contracts, agreements, and legal correspondence maintaining proper legal formatting and structure."
            },
            {
              title: "Law Enforcement",
              description: "Secure transcription of police interviews, witness statements, and investigation reports with complete confidentiality."
            },
            {
              title: "Corporate Legal",
              description: "Professional transcription of board meetings, shareholder meetings, and compliance documentation with quick turnaround times."
            }
          ]}
        />

        <Contact />
      </div>
    </div>
  );
}