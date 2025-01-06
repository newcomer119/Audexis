import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BusinessImage from "../image/Buisness.jpg";
import LawyerImage from "../image/Lawyer01.png"; 
import MedicalImage from "../image/Doctor2.jpeg";
import InterviewImage from "../image/Interview.webp";
import { FAQ } from "./sections/FAQ";
import { Security } from "./sections/Security";
import { Blog } from "./sections/Blog";
import HomePage from "../image/TP.png"
const slides = [
    {
      "image": HomePage,
      "title": "Welcome to Audexis",
      "description": "At Audexis, we specialize in providing fast, accurate, and reliable transcription services tailored to meet your needs."
    },
    {
      image: LawyerImage,
      title: "Legal Transcription Excellence",
      description:
        "Precise documentation for legal proceedings and corporate meetings",
    },
    // added few comments
    {
      image: MedicalImage,
      title: "Medical Expertise",
      description:
        "Specialized transcription services for healthcare professionals",
    },
    {
      image: BusinessImage,
      title: "Global Business Solutions",
      description:
        "Multi-language transcription services for international enterprises",
    },
    {
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
      title: "Subtitle and Captioning",
      description:
        "Professional subtitling and captioning services for videos, films, and multimedia content",
    },
  ];

const getServicePath = (title: string) => {
  switch (title) {
    case "Welcome to Audexis":
      return "/services/general";
    case "Legal Transcription Excellence":
      return "/services/legal";
    case "Medical Expertise":
      return "/services/medical";
    case "Global Business Solutions":
      return "/services/global";
    case "Subtitle and Captioning":
      return "/services/subtitles";
    default:
      return "/services";
  }
};

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [isPaused]); 

  return (
    <div>
      {/* Hero Slider Section */}
      <div 
        className="relative h-[calc(100vh-64px)] overflow-hidden"
        onMouseDown={() => setIsPaused(true)}
        onMouseUp={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
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
            <div className={`relative z-20 h-full flex items-center ${
              slide.title === 'Welcome to Audexis' ? 'justify-center' : ''
            }`}>
              <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full ${
                slide.title === 'Welcome to Audexis' ? 'text-center' : ''
              }`}>
                <div className={`max-w-3xl ${
                  slide.title === 'Welcome to Audexis' ? 'mx-auto' : ''
                }`}>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                    {slide.title}
                  </h1>
                  <p className="text-xl sm:text-2xl text-white mb-8">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Add slide indicators */}
        <div className="absolute bottom-9 left-0 right-0 z-30 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'w-4 bg-white' : 'w-4 bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Additional Sections */}
      <FAQ />
      <Security />
      <Blog />
    </div>
  );
}
