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
              title: "Court Proceedings & Trials",
              description: "Accurate transcription of court proceedings including trials, hearings, depositions, and Examinations Under Oath (EUOs). We provide meticulous attention to legal terminology, procedural requirements, and proper formatting for all court-related documentation."
            },
            {
              title: "Legal Documentation & Agreements",
              description: "Precise transcription of legal documents including contracts, pre/post-nuptial agreements, and legal correspondence. Our services maintain proper legal formatting and structure while ensuring accuracy in legal terminology and document organization."
            },
            {
              title: "Law Enforcement Documentation",
              description: "Secure and confidential transcription of police interviews, witness statements, investigation reports, and other law enforcement documentation. We understand the sensitive nature of these materials and maintain strict confidentiality protocols."
            },
            {
              title: "Corporate Legal Services",
              description: "Professional transcription of corporate legal matters including board meetings, shareholder meetings, compliance documentation, and legal proceedings. We deliver quick turnaround times while maintaining accuracy and proper legal formatting."
            }
          ]}
        />

        <Contact />
      </div>
    </div>
  );
}