import React from 'react';
import { Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      quote: "Audexis has revolutionized our legal documentation process. Their accuracy and turnaround time are exceptional.",
      author: "Sarah Mitchell",
      role: "Legal Director, Mitchell & Associates",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120"
    },
    {
      quote: "The quality of medical transcriptions is consistently outstanding. They understand complex terminology.",
      author: "Dr. James Wilson",
      role: "Chief of Surgery, Metropolitan Hospital",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=120&h=120"
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
            <div className="flex items-center">
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.author}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}