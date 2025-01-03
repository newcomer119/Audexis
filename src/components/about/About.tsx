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
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-6xl mx-auto leading-relaxed font-semibold text-left">
            Audexis stands at the forefront of innovation in the Transcription Industry, combining cutting-edge technology with an unwavering commitment to accuracy and client satisfaction. Our distinguished team comprises highly skilled general and medical transcribers and native translators, each bringing over 15 years of professional expertise to every project we undertake.
            <br /><br />
            Our comprehensive services covers all the Global Languages, demonstrating our exceptional versatility in the field of transcription and translation, overcoming the diverse linguistic challenges and cultural nuances.
            <br /><br />
            We have developed particular expertise in handling diverse Survey/Legal Proceeding Recordings, adapting to various industry standard format including Q&A Structures, Specialized Excel Formats, Specialized Entertainment Media Files Formats, and final TXT/SRT files outputs.
            <br /><br />
            Additionally, our Subtitling services cover all types of content, from corporate training materials to social media, ensuring precise and accurate subtitles that resonate with target audience's needs.
            <br /><br />
            We pride ourselves on our Flexible Approach, operating across different time zones and delivering end-to-end transcription solutions tailored precisely to our clients' specific requirements and deadlines, supported by our robust quality assurance processes and dedicated project management team.
          </p>
        </div>

        <Mission />

        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}