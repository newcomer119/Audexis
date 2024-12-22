import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BusinessImage from "../image/Buisness.jpg";
import LawyerImage from "../image/Lawyer.jpg";
import MedicalImage from "../image/Doctor2.jpeg";

const slides = [
  {
    image: "path/to/introduction-image.jpg",
    title: "Welcome to Audexis",
    description: "Your trusted partner in transcription services.",
  },
  {
    image: LawyerImage,
    title: "Legal Transcription Excellence",
    description:
      "Precise documentation for legal proceedings and corporate meetings",
  },
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
    <div>
      {/* Hero Section */}
      <div className="relative h-[calc(100vh-64px)] overflow-hidden">
        <div className="relative h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="absolute inset-0 bg-black/60 z-10"></div>
              <div
                className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-[2000ms]"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>
              <div
                className={`relative z-20 h-full flex items-center ${
                  slide.title === "Welcome to Audexis" ? "justify-center" : ""
                }`}
              >
                <div
                  className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full ${
                    slide.title === "Welcome to Audexis" ? "text-center" : ""
                  }`}
                >
                  <div
                    className={`max-w-3xl ${
                      slide.title === "Welcome to Audexis" ? "mx-auto" : ""
                    }`}
                  >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
                      {slide.title}
                    </h1>
                    <p className="text-xl sm:text-2xl text-white mb-8">
                      {slide.description}
                    </p>
                    <div>
                      <Link
                        to="/services"
                        className="inline-flex items-center px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-colors duration-300"
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
                  currentSlide === index ? "w-8 bg-white" : "bg-white/50"
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

      {/* FAQ Section */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="https://source.unsplash.com/featured/?office"
              alt="Why Choose Us"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Choose Audexis as Your Transcription Partner?
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-blue-600 text-xl font-bold">✔</span>
                <span className="text-gray-700">
                  99%+ Accurate Transcription - Read our quality policy.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-600 text-xl font-bold">✔</span>
                <span className="text-gray-700">
                  100% Human Transcription - No AI interference.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-600 text-xl font-bold">✔</span>
                <span className="text-gray-700">
                  Fast Turnaround Time - Starting from 2 hours.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-600 text-xl font-bold">✔</span>
                <span className="text-gray-700">
                  Secure & Confidential - Your data is safe with us.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Security & Confidentiality Section */}
      <div className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Security & Confidentiality
          </h2>
          <p className="text-lg">
            We prioritize your data security with encryption and strict
            confidentiality policies to ensure your information is safe.
          </p>
        </div>
      </div>

      {/* Blog Section */}
      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Why Choose Transcription Services?
              </h3>
              <p className="text-gray-600 mt-2">
                Learn how transcription can save you time and improve accuracy
                in documentation.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                The Benefits of Professional Transcription
              </h3>
              <p className="text-gray-600 mt-2">
                Explore the advantages of outsourcing your transcription needs
                to experts.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Transcription in Different Industries
              </h3>
              <p className="text-gray-600 mt-2">
                Discover how transcription plays a crucial role across various
                sectors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
