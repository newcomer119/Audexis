import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { HowItWorks } from './components/HowItWorks';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Upload } from './components/Upload';
import { About } from './components/about/About';
import { ServicesPage } from './pages/Services';

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
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}