import React from 'react';
import { BackgroundAnimation } from '../animations/BackgroundAnimation';
import { Features } from './Features';
import { Testimonials } from './Testimonials';
import { 
  HeadphonesIcon, 
  Users, 
  Award, 
  Briefcase, 
  Clock, 
  Shield, 
  DollarSign,
  Settings
} from 'lucide-react';

import { Contact } from '../Contact';

const ServiceDetails = () => {
  return (
    <div className="mb-16 space-y-12">
      {/* Main Grid - Client Support, Expertise, and High Quality */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Client Support */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <HeadphonesIcon className="w-6 h-6 text-blue-500" />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Client Support</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            Our main focus is to work hand in hand with clients to achieve their goals with ease.
          </p>
        </div>

        {/* Expertise */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-6 h-6 text-blue-500" />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Expertise</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            We have an excellent team of Transcribers/Native Translator dedicated to deliver errorfree transcripts.
          </p>
        </div>

        {/* High Quality */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-6 h-6 text-blue-500" />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">High Quality</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            We provide a guaranteed high quality transcription/translation services.
          </p>
        </div>

        {/* End-to-End Service */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <Settings className="w-6 h-6 text-blue-500" />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">End-to-End Service</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            Our end-to-end transcription service offers accurate and reliable transcription solutions, covering everything from recording and conversion of audio/video file to final delivery.
          </p>
        </div>

        {/* Shortest Turnaround Time */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-6 h-6 text-blue-500" />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Shortest Turnaround Time</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            Turnaround time for deliveries can be provided according to Clients' locations for specific projects to meet the clients' deadlines ranging from 1 to 24 hours.
          </p>
        </div>

        {/* Zero Payment */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-blue-500" />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Zero Payment</h3>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            We provide a guaranteed turnaround commitment with no extra cost, failing which we charge zero payment for particular transcript.
          </p>
        </div>
      </div>

      {/* Specializations & Cost Effectiveness - Full Width Sections */}
      <div className="grid grid-cols-1 gap-12">
        {/* Specializations Section */}
        <div id="specializations" className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
          <div className="flex flex-col items-center justify-center text-center mb-8">
            <Briefcase className="w-8 h-8 text-blue-500 mb-3" />
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-white">Specializations</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Legal Proceedings</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Specialization in all types of legal proceedings including Trials, Hearings, Deposition, EUOs, pre & postnuptial agreements, and others.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Interview Transcripts</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Specialization in doing the transcripts of any types of projects including One-To-One Interviews, Focus Group Interviews, Telecasts, News Broadcasts, Sporting Events Commentaries, Medical Research Interview focusing on all types of cancers, medicines, and medical specialties.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Format Handling</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Specialization of handing a different types of formats for transcriptions including specific word format and templates, and specific excel formats per the clients' requirements.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Captioning/Subtitling</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Specialization for captioning and subtitling of variable formats of recordings.
              </p>
            </div>
          </div>
        </div>

        {/* Cost Effectiveness Section */}
        <div id="cost-effectiveness" className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
          <div className="flex flex-col items-center justify-center text-center mb-8">
            <DollarSign className="w-8 h-8 text-blue-500 mb-3" />
            <h3 className="text-3xl font-semibold text-gray-900 dark:text-white">Cost Effectiveness</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">General Transcriptions and Translation</h4>
              <p className="text-gray-700 dark:text-gray-300">
                We offer a very competitive pricing starting from $0.85/minute of English to English General Transcriptions and $2.90/minute for specific European language translations.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Sample GeneralTranscriptions</h4>
              <p className="text-gray-700 dark:text-gray-300">
              We provide a 50-70 of sample Transcription/Translation without any cost to satisfy our clients’ quality parameters.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Legal Transcriptions</h4>
              <p className="text-gray-700 dark:text-gray-300">
              We offer a very competitive pricing starting from $1.00/page for standard Legal Deposition, EUOs, and others.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Sample Legal Transcriptions</h4>
              <p className="text-gray-700 dark:text-gray-300">
                We provide a 100 pages of sample Legal Transcription without any cost to satisfy our clients' quality parameters.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export function WhyAudexis() {
  return (
    <div className="relative pt-20 section-gradient min-h-screen">
      <BackgroundAnimation />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Why Hire Audexis?
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Industry-leading transcription services backed by expertise, technology, and dedication
          </p>
        </div>
        <ServiceDetails />
        <div id="testimonials">
          <Testimonials />
        </div>
        <Contact />
      </div>
    </div>
  );
}
