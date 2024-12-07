import React from 'react';
import { Upload, Clock, Download } from 'lucide-react';

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Simple steps to get your transcription</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="bg-white rounded-full p-6 w-24 h-24 mx-auto mb-6 shadow-lg">
              <Upload className="h-12 w-12 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">1. Upload</h3>
            <p className="text-gray-600">Upload your audio or video file</p>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-full p-6 w-24 h-24 mx-auto mb-6 shadow-lg">
              <Clock className="h-12 w-12 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">2. Process</h3>
            <p className="text-gray-600">Our experts transcribe your content</p>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-full p-6 w-24 h-24 mx-auto mb-6 shadow-lg">
              <Download className="h-12 w-12 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">3. Download</h3>
            <p className="text-gray-600">Get your accurate transcript</p>
          </div>
        </div>
      </div>
    </section>
  );
}