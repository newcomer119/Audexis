import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2070&h=1000',
    title: 'Legal Transcription Excellence',
    description: 'Precise documentation for legal proceedings and corporate meetings'
  },
  {
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070&h=1000',
    title: 'Medical Expertise',
    description: 'Specialized transcription services for healthcare professionals'
  },
  {
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=2070&h=1000',
    title: 'Global Business Solutions',
    description: 'Multi-language transcription services for international enterprises'
  }
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-[2000ms]"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>

            {/* Content */}
            <div className="relative z-20 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl">
                  <h1 
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 
                              opacity-0 translate-y-8 animate-[fadeInUp_1s_forwards]"
                  >
                    {slide.title}
                  </h1>
                  <p 
                    className="text-xl sm:text-2xl text-gray-200 mb-8
                              opacity-0 translate-y-8 animate-[fadeInUp_1s_0.3s_forwards]"
                  >
                    {slide.description}
                  </p>
                  <div className="opacity-0 translate-y-8 animate-[fadeInUp_1s_0.6s_forwards]">
                    <Link 
                      to="/upload"
                      className="inline-flex items-center px-8 py-3 border-2 border-white text-white 
                                hover:bg-white hover:text-gray-900 transition-colors duration-300"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-4">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'w-8 bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
}