import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { AudioWave } from './animations/AudioWave';

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 relative">
      <AudioWave />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-lg sm:text-xl text-gray-300">Get in touch with our team</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <div className="glass-card p-6 sm:p-8 rounded-lg backdrop-blur-lg">
            <form className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md bg-gray-400/50 border-gray-300 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md bg-gray-800/50 border-gray-700 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md bg-gray-800/50 border-gray-700 text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-500 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-6 sm:space-y-8 text-white">
            <div className="glass-card p-6 rounded-lg backdrop-blur-lg">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-indigo-400 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Email</h3>
                  <p className="mt-1 text-gray-300">contact@audexis.com</p>
                </div>
              </div>
            </div>
            <div className="glass-card p-6 rounded-lg backdrop-blur-lg">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-indigo-400 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Phone</h3>
                  <p className="mt-1 text-gray-300">+91 9104411978</p>
                </div>
              </div>
            </div>
            <div className="glass-card p-6 rounded-lg backdrop-blur-lg">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-indigo-400 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-white">Address</h3>
                  <p className="mt-1 text-gray-300">
                    123 Business Avenue<br />
                    Suite 100<br />
                    New Delhi,110001 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}