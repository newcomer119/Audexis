import { BackgroundAnimation } from '../animations/BackgroundAnimation';
import { Mission } from './MIssion';
import { Testimonials } from './Testimonials';
import { Contact } from '../Contact';
import { Users, Globe, FileText, Video } from 'lucide-react';

export function About() {
  return (
    <div className="relative pt-20 bg-white dark:bg-gray-900">
      <BackgroundAnimation />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Audexis
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-6xl mx-auto leading-relaxed font-semibold">
            Audexis stands at the forefront of innovation in the transcription industry, combining cutting-edge technology with an unwavering commitment to accuracy and client satisfaction, while continuously pushing the boundaries of what's possible in language services. Our distinguished team comprises highly skilled general and medical transcriptionists and translators, each bringing over 15 years of professional expertise to every project we undertake, ensuring the highest standards of quality and precision in every deliverable. Our comprehensive services span across all Global Languages, demonstrating our exceptional versatility in the field of transcription and translation, while maintaining consistent excellence across diverse linguistic challenges and cultural nuances.
            <br /><br />
            <span className="mb-2">
            We have developed particular expertise in handling diverse survey recordings, adapting to various format requirements including Q&A structures, specialized Excel formats, and .txt file outputs, all while ensuring data integrity and maintaining client confidentiality. Additionally, our video subtitling services cover all types of content, from corporate training materials to entertainment media, ensuring precise and culturally appropriate translations that resonate with target audiences worldwide. We pride ourselves on our flexible approach, operating across different time zones and delivering end-to-end transcription solutions tailored precisely to our clients' specific requirements and deadlines, supported by our robust quality assurance processes and dedicated project management team.
            </span>
          </p>
        </div>

        <Mission />

        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}