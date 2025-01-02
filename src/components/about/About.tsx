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
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Audexis is revolutionizing the transcription industry with cutting-edge technology and unwavering commitment to accuracy and client satisfaction.  
          </p>
        </div>

        <Mission />

        {/* Services Section */}
        <div className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive transcription and translation solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
              <div className="flex items-start space-x-4">
                <Users className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Expert Team</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    We are having a team of general/medical Transcribers/Translator with over a 15 years of experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
              <div className="flex items-start space-x-4">
                <Globe className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Global Languages</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    We are specialized in doing Transcription/Translation of all the Global Languages.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
              <div className="flex items-start space-x-4">
                <FileText className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Multiple Formats</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    We specialize in transcribing all types of survey recordings with different formats including Q&A formats, specialized excel formats, .txt formats.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
              <div className="flex items-start space-x-4">
                <Video className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Video Services</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    We also do Video Subtitling of all types of recordings. We work as per our client's requirements/time zones providing end to end transcription services/solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}