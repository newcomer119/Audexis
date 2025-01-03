import React from 'react';
import { Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      quote: "Audexis has transformed how we handle our legal transcriptions. Their accuracy and turnaround time are unmatched.",
      author: "Legal Director",
      role: "Client"
    },
    {
      quote: "The quality of medical transcriptions we receive from Audexis is consistently excellent. They understand our specialized terminology.",
      author: "Chief of Medicine",
      role: "Client"
    },
    {
      quote: "Excellent swift communication and turnaround time.",
      author: "Court Reporter",
      role: "Client"
    },
    {
      quote: "No need to explain anything to the guys about legal formatting and criticality. Performed an outstanding job.",
      author: "Court Reporter",
      role: "Client"
    },
    {
      quote: "Displayed an exceptional knowledge of medical terminology and laboratory values.",
      author: "Dean",
      role: "Client"
    }
  ];

  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Our Happy Clients' Comments</h2>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className={`glass-card p-8 rounded-xl relative bg-white/50 dark:bg-white/10 ${
              index < 2 
                ? 'md:col-span-3' 
                : 'md:col-span-2'
            }`}
          >
            <Quote className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-4" />
            <p className="text-gray-700 dark:text-indigo-100/90 mb-6 italic">"{testimonial.quote}"</p>
            <div>
              <p className="text-gray-900 dark:text-white font-semibold">{testimonial.author}</p>
              <p className="text-gray-600 dark:text-indigo-100/80 text-sm">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}