import React from 'react';
import { BackgroundAnimation } from '../../components/animations/BackgroundAnimation';
import { ServiceSection } from '../../components/services/ServiceSection';
import { Contact } from '../../components/Contact';

export function InterviewTranscriptionPage() {
  return (
    <div className="relative pt-20 section-gradient min-h-screen">
      <BackgroundAnimation />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Interview Transcription Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Professional transcription services for all types of interviews and conversations, 
            delivering accurate and timely transcripts for your research, business, and media needs.
          </p>
        </div>

        <ServiceSection
          id="interview"
          title="Interview Transcription"
          description="Comprehensive transcription services tailored to your specific interview needs, with options for verbatim or intelligent verbatim transcription."
          features={[
            "Research & Academic Interviews",
            "Job & HR Interviews",
            "Media & Journalism",
            "Focus Group Discussions",
            "Market Research Sessions",
            "Oral History Projects"
          ]}
          details={[
            {
              title: "Research & Academic Interviews",
              description: "Precise transcription of academic research interviews, including qualitative research, case studies, and dissertation interviews. We understand the importance of accuracy in academic work and maintain strict confidentiality protocols."
            },
            {
              title: "Job & HR Interviews",
              description: "Confidential transcription of recruitment interviews, HR discussions, and candidate assessments. Perfect for maintaining detailed records of hiring processes and employee evaluations."
            },
            {
              title: "Media & Journalism",
              description: "Professional transcription of journalist interviews, podcast conversations, and broadcast interviews. We handle multiple speaker scenarios and can provide quick turnaround times for time-sensitive media projects."
            },
            {
              title: "Focus Groups",
              description: "Detailed transcription of focus group discussions, market research sessions, and group interviews."
            }
          ]}
        />

        <div className="mt-16 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Why Choose Our Interview Transcription Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Guaranteed Accuracy",
                description: "99% accuracy guarantee with multiple rounds of quality checks"
              },
              {
                title: "Fast Turnaround",
                description: "Quick delivery options available for time-sensitive projects"
              },
              {
                title: "Confidentiality",
                description: "Strict NDA and confidentiality protocols for all projects"
              },
              {
                title: "Format Flexibility",
                description: "Multiple output formats including Word, PDF, and timestamped versions"
              },
              {
                title: "Speaker Identification",
                description: "Clear speaker labeling and organization in multi-person interviews"
              },
              {
                title: "Technical Expertise",
                description: "Specialized knowledge across various industries and subject matters"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Our Transcription Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Submit",
                description: "Upload your interview recordings through our secure platform"
              },
              {
                step: "2",
                title: "Process",
                description: "Our expert transcriptionists convert your audio to text"
              },
              {
                step: "3",
                title: "Review",
                description: "Quality assurance team checks for accuracy and formatting"
              },
              {
                step: "4",
                title: "Deliver",
                description: "Receive your completed transcript in your preferred format"
              }
            ].map((step, index) => (
              <div 
                key={index} 
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
              >
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Contact />
      </div>
    </div>
  );
}