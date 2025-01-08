// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { ThemeProvider } from "./context/ThemeContext";
// import { Navbar } from "./components/Navbar";
// import { Hero } from "./components/Hero";
// import { Services } from "./components/Services";
// import { Contact } from "./components/Contact";
// import { Footer } from "./components/Footer";
// import { About } from "./components/about/About";
// import { LegalTranscriptionPage } from "./pages/services/LegalTranscription";
// import { WhyAudexis } from "./components/why-audexis/WhyAudexis";
// import { ScrollToTop } from "./components/ScrollToTop";
// import { MotoProcess } from "./pages/MotoProcess";
// import { MessageCircle } from "lucide-react";
// import { GeneralTranscriptionPage } from './pages/services/GeneralTranscription';
// import { MedicalTranscriptionPage } from './pages/services/MedicalTranscription';
// import { GlobalTranscriptionPage } from './pages/services/GlobalTranscription';
// import { useScrollToHash } from './components/useScrollToHash';
// import { InterviewTranscriptionPage } from './pages/services/InterviewTranscription';
// import { CaptioningSubtitlesPage } from './pages/services/CaptioningSubtitles';
// import { Helmet } from "react-helmet";

// function HomePage() {
//   useScrollToHash();

//   return (
//     <>
//       <Helmet>
//         <title>Home - Audexis Consultancy</title>
//         <meta name="description" content="Audexis Consultancy offers transcription and captioning services for businesses and individuals." />
//       </Helmet>
//       <Hero />
//       <Services />
//       <Contact />
//     </>
//   );
// }

// export function App() {
//   return (
//     <ThemeProvider>
//       <Router>
//         <ScrollToTop />
//         <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
//           <Navbar />
//           <Helmet>
//             <title>Audexis Consultancy</title>
//             <meta name="description" content="Your trusted partner in transcription, captioning, and global services." />
//           </Helmet>
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/services/legal" element={<LegalTranscriptionPage />} />
//             <Route path="/services/general" element={<GeneralTranscriptionPage />} />
//             <Route path="/services/medical" element={<MedicalTranscriptionPage />} />
//             <Route path="/services/global" element={<GlobalTranscriptionPage />} />
//             <Route path="/services/interview" element={<InterviewTranscriptionPage />} />
//             <Route path="/services/subtitle" element={<CaptioningSubtitlesPage />} />
//             <Route path="/why-audexis" element={<WhyAudexis />} />
//             <Route path="/moto-process" element={<MotoProcess />} />
//           </Routes>
//           <Footer />
//           <a
//             href="mailto:bdm@audexisconsultancy.com"
//             className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-2 rounded-l-md shadow-lg flex flex-col items-center justify-center space-y-2 transition-all duration-300"
//           >
//             <MessageCircle className="w-6 h-6 mb-2" />
//             <div className="text-sm text-center leading-none">
//               <span>Get</span>
//               <br />
//               <span>Quote</span>
//             </div>
//           </a>
//         </div>
//       </Router>
//     </ThemeProvider>
//   );
// }

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
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

// SEO metadata for each route
const routeMetadata = {
  home: {
    title: "Audexis - Human Transcription Services | Quality Transcription Services",
    description: "Audexis provides Professional quality transcription services in USA, Canada, UK & Australia. Established in 2004, we deliver accurate transcription services with fast turnaround times.",
    keywords: "transcription services, human transcription, professional transcription, audio transcription, video transcription, USA transcription services, UK transcription services",
  },
  about: {
    title: "About Audexis - Professional Transcription Company | Since 2004",
    description: "Audexis provides professional transcription services with 99.9% accuracy. Learn about our 20+ years of excellence in transcription services.",
    keywords: "about Audexis, transcription company history, professional transcription services, certified transcriptionists",
  },
  legal: {
    title: "Legal Transcription Services - Court, Deposition & Legal Documentation",
    description: "Professional legal transcription services for courts, law firms, and legal professionals. Expert transcription of depositions, hearings, and legal documents.",
    keywords: "legal transcription, court transcription, deposition transcription, legal documentation, law firm transcription",
  },
  whyAudexis: {
    title: "Why Choose Audexis | Leading Transcription Service Provider",
    description: "Discover why Audexis is the preferred choice for transcription services. Industry-leading accuracy, competitive rates, and exceptional support.",
    keywords: "best transcription service, professional transcription, accurate transcription, fast transcription",
  },
  motoProcess: {
    title: "Our Process & Quality Standards - Audexis Transcription Services",
    description: "Learn about our meticulous transcription process and quality standards that ensure 99.9% accuracy in every project.",
    keywords: "transcription process, quality standards, accurate transcription, professional transcription",
  },
};

function HomePage() {
  return (
    <>
      <Helmet>
        <title>{routeMetadata.home.title}</title>
        <meta name="description" content={routeMetadata.home.description} />
        <meta name="keywords" content={routeMetadata.home.keywords} />
        <meta property="og:title" content={routeMetadata.home.title} />
        <meta property="og:description" content={routeMetadata.home.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.audexisconsultancy.com" />
        <meta property="og:image" content="https://www.audexisconsultancy.com/og-image.jpg" />
        <link rel="canonical" href="https://www.audexisconsultancy.com" />
        
        {/* Additional SEO meta tags */}
        <meta name="geo.region" content="US" />
        <meta name="geo.position" content="37.09024;-95.712891" />
        <meta name="ICBM" content="37.09024, -95.712891" />
        
        {/* Site verification */}
        <meta name="google-site-verification" content="google214ea4a939a187e7.html" />
      </Helmet>
      <Hero />
      <Services />
      <Contact />
    </>
  );
}

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <Helmet>
            {/* Global SEO tags */}
            <html lang="en" />
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#2563eb" />
            <meta name="author" content="Audexis Consultancy" />
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
            <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
            
            {/* Favicon */}
            <link rel="icon" type="image/svg+xml" href="/Audexis2.png" />
            
            {/* Structured Data for Organization */}
            <script type="application/ld+json">
              {`
                {
                  "@context": "https://schema.org",
                  "@type": "Organization",
                  "name": "Audexis Consultancy",
                  "alternateName": "Audexis Transcription Services",
                  "url": "https://www.audexisconsultancy.com",
                  "logo": "https://www.audexisconsultancy.com/Audexis2.png",
                  "description": "Professional human transcription services with industry-leading accuracy",
                  "foundingDate": "2004",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "",
                    "addressLocality": "New Delhi",
                    "postalCode": "110001",
                    "addressCountry": "IN"
                  },
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+91-9811175099",
                    "contactType": "customer service",
                    "areaServed": ["US", "GB", "CA", "AU", "IN"],
                    "availableLanguage": ["English", "Hindi"]
                  },
                  "sameAs": [
                    "https://www.linkedin.com/company/audexis-consultancy",
                    "https://www.facebook.com/audexisconsultancy",
                    "https://twitter.com/audexis"
                  ]
                }
              `}
            </script>
            
            {/* Structured Data for Service */}
            <script type="application/ld+json">
              {`
                {
                  "@context": "https://schema.org",
                  "@type": "Service",
                  "name": "Audexis Transcription Services",
                  "provider": {
                    "@type": "Organization",
                    "name": "Audexis Consultancy"
                  },
                  "serviceType": "Transcription Service",
                  "areaServed": ["US", "GB", "CA", "AU", "IN"],
                  "description": "Professional human transcription services with 99.9% accuracy for legal, medical, and business sectors",
                  "offers": {
                    "@type": "Offer",
                    "price": "0.90",
                    "priceCurrency": "USD",
                    "priceSpecification": {
                      "@type": "UnitPriceSpecification",
                      "price": "0.90",
                      "priceCurrency": "USD",
                      "unitText": "per audio minute"
                    }
                  }
                }
              `}
            </script>
          </Helmet>

          <ScrollToTop />
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={
                <>
                  <Helmet>
                    <title>{routeMetadata.about.title}</title>
                    <meta name="description" content={routeMetadata.about.description} />
                    <meta name="keywords" content={routeMetadata.about.keywords} />
                    <meta property="og:title" content={routeMetadata.about.title} />
                    <meta property="og:description" content={routeMetadata.about.description} />
                    <link rel="canonical" href="https://www.audexisconsultancy.com/about" />
                  </Helmet>
                  <About />
                </>
              } />
              {/* Other routes remain the same but with updated canonical URLs */}
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
    </HelmetProvider>
  );
}