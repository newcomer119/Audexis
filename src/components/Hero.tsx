import React from 'react';
import { FileAudio, Clock, CheckCircle } from 'lucide-react';
import { BackgroundAnimation } from './animations/BackgroundAnimation';

export function Hero() {
  return (
    <div className="relative min-h-screen pt-20 overflow-hidden">
      <BackgroundAnimation />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 animate-fade-in">
            Professional Audio Transcription Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto animate-fade-in-delay px-4">
            Transform your audio and video content into accurate, polished transcripts with our expert transcription services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 px-4">
            <button className="bg-indigo-600 text-white px-6 sm:px-8 py-3 rounded-md hover:bg-indigo-500 text-base sm:text-lg transform transition-all duration-300 hover:scale-105">
              Start Transcribing
            </button>
            <button className="border-2 border-indigo-400 text-indigo-400 px-6 sm:px-8 py-3 rounded-md hover:bg-indigo-600/10 text-base sm:text-lg transform transition-all duration-300 hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="glass-card p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
            <FileAudio className="h-10 sm:h-12 w-10 sm:w-12 text-indigo-400 mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">Multiple Formats</h3>
            <p className="text-gray-300">Support for all audio and video formats</p>
          </div>
          <div className="glass-card p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
            <Clock className="h-10 sm:h-12 w-10 sm:w-12 text-indigo-400 mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">Fast Turnaround</h3>
            <p className="text-gray-300">Quick delivery with high accuracy</p>
          </div>
          <div className="glass-card p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105">
            <CheckCircle className="h-10 sm:h-12 w-10 sm:w-12 text-indigo-400 mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-white">99% Accuracy</h3>
            <p className="text-gray-300">Professional quality guaranteed</p>
          </div>
        </div>
      </div>
    </div>
  );
}