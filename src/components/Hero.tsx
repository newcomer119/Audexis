import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import BusinessImage from "../image/Buisness.jpg";
import LawyerImage from "../image/Lawyer01.png"; 
import MedicalImage from "../image/Doctor2.jpeg";
import InterviewImage from "../image/Interview.webp";
import HomePage from "../image/TP.png";
import { FAQ } from "./sections/FAQ";
import { Security } from "./sections/Security";
import { Blog } from "./sections/Blog";

// Define slide interface for better type safety
interface Slide {
  image: string;
  title: string;
  description: string;
  altText?: string;
}

const slides: Slide[] = [
    {
      image: HomePage,
      title: "Welcome to Audexis",
      description: "At Audexis, we specialize in providing fast, accurate, and reliable transcription services tailored to meet your needs.",
      altText: "Audexis Transcription Services Homepage"
    },
    {
      image: LawyerImage,
      title: "Legal Transcription Excellence",
      description: "Precise documentation for legal proceedings and corporate meetings",
      altText: "Legal transcription services illustration"
    },
    {
      image: MedicalImage,
      title: "Medical Expertise",
      description: "Specialized transcription services for healthcare professionals",
      altText: "Medical transcription services illustration"
    },
    {
      image: BusinessImage,
      title: "Global Business Solutions",
      description: "Multi-language transcription services for international enterprises",
      altText: "Global business transcription services"
    },
    {
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
      title: "Subtitle and Captioning",
      description: "Professional subtitling and captioning services for videos, films, and multimedia content",
      altText: "Subtitle and captioning services illustration"
    },
];

const getServicePath = (title: string): string => {
  const paths: Record<string, string> = {
    "Welcome to Audexis": "/services/general",
    "Legal Transcription Excellence": "/services/legal",
    "Medical Expertise": "/services/medical",
    "Global Business Solutions": "/services/global",
    "Subtitle and Captioning": "/services/subtitles"
  };
  return paths[title] || "/services";
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
    <>
      <Helmet>
        <title>Audexis | Home - Professional Transcription/Translation & Subtitling Services</title>
        <meta name="description" content="Audexis is a leading transcription service provider offering professional transcription, captioning, and subtitle services. We deliver accurate, reliable, and timely solutions for legal, medical, and business needs." />
        <meta name="keywords" content="Audexis, transcription company, professional transcription, legal transcription, medical transcription, business transcription, subtitling services" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Audexis | Home - Professional Transcription Services" />
        <meta property="og:description" content="Audexis delivers professional transcription solutions with unmatched accuracy and reliability. Specializing in legal, medical, and business transcription services." />
        <meta property="og:image" content={HomePage} />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Audexis | Home" />
        <meta name="twitter:description" content="Audexis delivers professional transcription solutions with unmatched accuracy and reliability. Specializing in legal, medical, and business transcription services." />
        <meta name="twitter:image" content={HomePage} />

        {/* Schema.org markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Audexis",
            "alternateName": "Audexis Consultancy",
            "description": "Leading provider of professional transcription services",
            "url": "https://audexisconsultancy.com",
            "image": HomePage,
            "sameAs": [
              "mailto:bdm@audexisconsultancy.com"
            ],
            "offers": {
              "@type": "Offer",
              "itemOffered": [
                {
                  "@type": "Service",
                  "name": "Legal Transcription",
                  "description": "Precise documentation for legal proceedings and corporate meetings"
                },
                {
                  "@type": "Service",
                  "name": "Medical Transcription",
                  "description": "Specialized transcription services for healthcare professionals"
                },
                {
                  "@type": "Service",
                  "name": "Business Transcription",
                  "description": "Comprehensive transcription solutions for global enterprises"
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <div 
        className="relative h-[calc(100vh-64px)] overflow-hidden"
        onMouseDown={() => setIsPaused(true)}
        onMouseUp={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        role="banner"
        aria-label="Homepage Slider"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <div
              className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-[2000ms]"
              style={{ backgroundImage: `url(${slide.image})` }}
              role="img"
              aria-label={slide.altText}
            ></div>
            
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

      <FAQ />
      <Security />
      <Blog />
    </>
  );
}