import React from 'react';
import { FileAudio, Clock, CheckCircle } from 'lucide-react';
import { BackgroundAnimation } from './animations/BackgroundAnimation';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="relative min-h-screen pt-20 overflow-hidden section-gradient">
      <BackgroundAnimation />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-white mb-6 sm:mb-8 animate-fade-in">
            Professional Audio Transcription Services
          </h1>
          <p className="text-lg sm:text-xl text-indigo-100/90 mb-8 sm:mb-10 max-w-2xl mx-auto animate-fade-in-delay px-4">
            Transform your audio and video content into accurate, polished transcripts with our expert transcription services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 px-4">
            <Link to="/upload" className="btn-primary">
              Start Transcribing
            </Link>
            <button className="btn-secondary">
              Learn More
            </button>
          </div>
        </div>
        <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="glass-card p-8 rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/10">
            <FileAudio className="h-12 w-12 text-indigo-400 mb-6" />
            <h3 className="text-xl font-semibold mb-3 text-white">Multiple Formats</h3>
            <p className="text-indigo-100/80">Support for all audio and video formats with seamless processing</p>
          </div>
          <div className="glass-card p-8 rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/10">
            <Clock className="h-12 w-12 text-indigo-400 mb-6" />
            <h3 className="text-xl font-semibold mb-3 text-white">Fast Turnaround</h3>
            <p className="text-indigo-100/80">Quick delivery with exceptional accuracy guaranteed</p>
          </div>
          <div className="glass-card p-8 rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/10">
            <CheckCircle className="h-12 w-12 text-indigo-400 mb-6" />
            <h3 className="text-xl font-semibold mb-3 text-white">99% Accuracy</h3>
            <p className="text-indigo-100/80">Professional quality with attention to every detail</p>
          </div>
        </div>
      </div>
    </div>
  );
}