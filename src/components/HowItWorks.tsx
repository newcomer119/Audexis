import React from 'react';
import { Upload, Clock, Download } from 'lucide-react';

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Simple steps to get your transcription</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center group">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-6 w-24 h-24 mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-200">
              <Upload className="h-12 w-12 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">1. Upload</h3>
            <p className="text-gray-600 dark:text-gray-300">Upload your audio or video file</p>
          </div>
          <div className="text-center group">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-6 w-24 h-24 mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-200">
              <Clock className="h-12 w-12 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">2. Process</h3>
            <p className="text-gray-600 dark:text-gray-300">Our experts transcribe your content</p>
          </div>
          <div className="text-center group">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-6 w-24 h-24 mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-200">
              <Download className="h-12 w-12 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">3. Download</h3>
            <p className="text-gray-600 dark:text-gray-300">Get your accurate transcript</p>
          </div>
        </div>
      </div>
    </section>
  );
}