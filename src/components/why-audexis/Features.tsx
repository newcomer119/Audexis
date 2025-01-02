import React from 'react';
import { Award, Clock, Shield, Users, Headphones, Globe } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Award,
      title: "Industry Excellence",
      description: "20+ years of experience delivering premium transcription services with 99.9% accuracy"
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Express delivery options starting from 2 hours with flexible scheduling"
    },
    {
      icon: Shield,
      title: "Security First",
      description: "Bank-grade encryption and strict confidentiality protocols for all client data"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified professionals with domain expertise across multiple industries"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer service with dedicated project managers"
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Multi-language support covering 50+ languages and regional dialects"
    }
  ];

  return (
    <div className="mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <feature.icon className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}