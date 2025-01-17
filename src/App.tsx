import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { About } from "./components/about/About";
import { LegalTranscriptionPage } from "./pages/services/LegalTranscription";
import { WhyAudexis } from "./components/why-audexis/WhyAudexis";
import { ScrollToTop } from "./components/ScrollToTop";
import { MotoProcess } from "./pages/MotoProcess";
import { MessageCircle } from "lucide-react";
import { GeneralTranscriptionPage } from './pages/services/GeneralTranscription';
import { MedicalTranscriptionPage } from './pages/services/MedicalTranscription';
import { GlobalTranscriptionPage } from './pages/services/GlobalTranscription';
import { useScrollToHash } from './components/useScrollToHash';
import { InterviewTranscriptionPage } from './pages/services/InterviewTranscription';
import { CaptioningSubtitlesPage } from './pages/services/CaptioningSubtitles';
import { Helmet } from "react-helmet";

function HomePage() {
  useScrollToHash();

  return (
    <>
      <Helmet>
        <title>Home - Audexis Consultancy</title>
        <meta name="description" content="Audexis Consultancy offers transcription and captioning services for businesses and individuals." />
      </Helmet>
      <Hero />
      <Services />
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
          <Helmet>
            <title>Audexis Consultancy</title>
            <meta name="description" content="Your trusted partner in transcription, captioning, and global services." />
          </Helmet>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/legal" element={<LegalTranscriptionPage />} />
            <Route path="/services/general" element={<GeneralTranscriptionPage />} />
            <Route path="/services/medical" element={<MedicalTranscriptionPage />} />
            <Route path="/services/global" element={<GlobalTranscriptionPage />} />
            <Route path="/services/interview" element={<InterviewTranscriptionPage />} />
            <Route path="/services/subtitle" element={<CaptioningSubtitlesPage />} />
            <Route path="/why-audexis" element={<WhyAudexis />} />
            <Route path="/moto-process" element={<MotoProcess />} />
          </Routes>
          <Footer />
          <a
            href="mailto:bdm@audexisconsultancy.com"
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

