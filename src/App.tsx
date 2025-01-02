import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { HowItWorks } from "./components/HowItWorks";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Upload } from "./components/Upload";
import { About } from "./components/about/About";
import { LegalTranscriptionPage } from "./pages/services/LegalTranscription";
import { WhyAudexis } from "./components/why-audexis/WhyAudexis";
import { ScrollToTop } from "./components/ScrollToTop.tsx";
import { MessageCircle } from "lucide-react";

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />
      <Contact />
    </>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/legal" element={<LegalTranscriptionPage />} />
            <Route path="/why-audexis" element={<WhyAudexis />} />
          </Routes>
          <Footer />

          <a
            href="tel:+1234567890"
            className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-2 rounded-l-md shadow-lg flex flex-col items-center justify-center space-y-2 transition-all duration-300"
          >
            <MessageCircle className="w-6 h-6 mb-2" />
            <div className="text-sm text-center leading-none">
              <span>Get</span>
              <br />
              <span>Quote</span>
            </div>
          </a>
        </div>
      </Router>
    </ThemeProvider>
  );
}