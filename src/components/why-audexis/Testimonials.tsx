import React from 'react';
import { Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      quote: "Audexis has revolutionized our legal documentation process. Their accuracy and turnaround time are exceptional.",
      author: "Client",
    },
    {
      quote: "The quality of medical transcriptions is consistently outstanding. They understand complex terminology.",
      author: "Client",
    }
  ];

  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
        What Our Clients Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <Quote className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-4" />
            <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
              "{testimonial.quote}"
            </p>
            <p className="font-semibold text-gray-900 dark:text-white">
              {testimonial.author}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}