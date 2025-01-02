import React from 'react';
import { BackgroundAnimation } from '../../components/animations/BackgroundAnimation';
import { ServiceSection } from '../../components/services/ServiceSection';
import { Contact } from '../../components/Contact';

export function MedicalTranscriptionPage() {
  return (
    <div className="relative pt-20 section-gradient min-h-screen">
      <BackgroundAnimation />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Medical Transcription Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Accurate and confidential medical transcription services for healthcare professionals
          </p>
        </div>

        <ServiceSection
          id="medical"
          title="Medical Transcription"
          description="Specialized medical transcription services with strict attention to medical terminology and patient confidentiality."
          features={[
            "Clinical Documentation",
            "Patient Records & Notes",
            "Medical Reports & Summaries",
            "Healthcare Conference Records"
          ]}
          details={[
            {
              title: "Clinical Documentation",
              description: "Accurate transcription of clinical notes, patient histories, and medical procedures with proper medical terminology."
            },
            {
              title: "Patient Records",
              description: "Secure transcription of patient consultations, diagnoses, and treatment plans with HIPAA compliance."
            },
            {
              title: "Medical Reports",
              description: "Professional transcription of medical reports, lab results, and diagnostic findings with attention to detail."
            },
            {
              title: "Healthcare Conferences",
              description: "Comprehensive transcription of medical conferences, seminars, and research presentations with technical accuracy."
            }
          ]}
        />

        <Contact />
      </div>
    </div>
  );
}