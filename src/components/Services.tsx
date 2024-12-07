import React from 'react';
import { FileText, Headphones, Video, Globe } from 'lucide-react';

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive transcription solutions for every need</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6">
            <FileText className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">General Transcription</h3>
            <p className="text-gray-600">Accurate transcription for interviews, meetings, and lectures</p>
          </div>
          <div className="text-center p-6">
            <Headphones className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Audio Transcription</h3>
            <p className="text-gray-600">Convert podcasts and audio recordings to text</p>
          </div>
          <div className="text-center p-6">
            <Video className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Video Transcription</h3>
            <p className="text-gray-600">Subtitles and captions for video content</p>
          </div>
          <div className="text-center p-6">
            <Globe className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Multi-language</h3>
            <p className="text-gray-600">Transcription services in multiple languages</p>
          </div>
        </div>
      </div>
    </section>
  );
}