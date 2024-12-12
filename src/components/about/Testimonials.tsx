import React from 'react';
import { Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      quote: "Audexis has transformed how we handle our legal transcriptions. Their accuracy and turnaround time are unmatched.",
      author: "David Miller",
      role: "Legal Director, Miller & Associates"
    },
    {
      quote: "The quality of medical transcriptions we receive from Audexis is consistently excellent. They understand our specialized terminology.",
      author: "Dr. Sarah Chen",
      role: "Chief of Medicine, Metropolitan Hospital"
    }
  ];

  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-white text-center mb-12">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="glass-card p-8 rounded-xl relative">
            <Quote className="h-8 w-8 text-indigo-400 mb-4" />
            <p className="text-indigo-100/90 mb-6 italic">"{testimonial.quote}"</p>
            <div>
              <p className="text-white font-semibold">{testimonial.author}</p>
              <p className="text-indigo-100/80 text-sm">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}