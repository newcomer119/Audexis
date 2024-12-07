import React from 'react';
import { Check } from 'lucide-react';

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing Plans</h2>
          <p className="text-xl text-gray-600">Choose the perfect plan for your needs</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-indigo-300 cursor-pointer group">
            <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-600">Basic</h3>
            <p className="text-4xl font-bold mb-6">$1.50<span className="text-lg text-gray-600">/minute</span></p>
            <ul className="space-y-4 mb-8">
              {['24-hour delivery', '99% accuracy', 'Basic formatting', 'Audio & video files'].map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-indigo-600 text-white py-2 rounded-md transition-colors duration-300 hover:bg-indigo-700 group-hover:bg-indigo-500">
              Get Started
            </button>
          </div>
          <div className="bg-indigo-600 p-8 rounded-lg shadow-xl transform scale-105 transition-all duration-300 hover:scale-110 hover:shadow-2xl cursor-pointer group">
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-indigo-200">Professional</h3>
            <p className="text-4xl font-bold mb-6 text-white">$2.50<span className="text-lg text-indigo-200">/minute</span></p>
            <ul className="space-y-4 mb-8 text-white">
              {[
                '12-hour delivery',
                '99.9% accuracy',
                'Advanced formatting',
                'All file formats',
                'Speaker identification',
              ].map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="h-5 w-5 text-indigo-200 mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-white text-indigo-600 py-2 rounded-md transition-colors duration-300 hover:bg-indigo-50 group-hover:bg-indigo-100">
              Get Started
            </button>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-indigo-300 cursor-pointer group">
            <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-600">Enterprise</h3>
            <p className="text-4xl font-bold mb-6">Custom</p>
            <ul className="space-y-4 mb-8">
              {[
                'Custom delivery time',
                '99.9% accuracy',
                'Custom formatting',
                'All file formats',
                'API access',
                'Dedicated support',
              ].map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-indigo-600 text-white py-2 rounded-md transition-colors duration-300 hover:bg-indigo-700 group-hover:bg-indigo-500">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}