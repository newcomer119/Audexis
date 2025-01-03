import React from 'react';
import { CheckCircle, Clock, MessageSquare } from 'lucide-react';

export function CoreValues() {
  const values = [
    {
      icon: CheckCircle,
      title: "Quality",
      description: "Every transcription is meticulously processed to ensure it's error-free, grammatically correct, and perfectly formatted to client specifications."
    },
    {
      icon: Clock,
      title: "Accuracy",
      description: "We prioritize capturing every minute detail accurately, from speaker identifications to technical terminology, across all types of content."
    },
    {
      icon: MessageSquare,
      title: "Transparency",
      description: "Open communication about timelines, challenges, project status, and process improvements builds trust with our clients."
    }
  ];

  return (
    <div className="mb-10">
      <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
        <p className="text-gray-700 flex flex-col justify-center dark:text-gray-300 leading-relaxed font-medium text-center">
          Quality, accuracy, and transparency with timely delivery are critical, especially in our transcription services.
          <br />
          Our motto is to consistently maintain the highest standards in everything we do.
          <br />
          Quality is achieved through a meticulous process, ensuring error-free, grammatically correct transcriptions formatted to our clients' needs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <value.icon className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              {value.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}