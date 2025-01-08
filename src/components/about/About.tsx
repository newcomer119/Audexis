import { Helmet } from 'react-helmet';
import { BackgroundAnimation } from '../animations/BackgroundAnimation';
import { Mission } from './MIssion';
import { Testimonials } from './Testimonials';
import { Contact } from '../Contact';
import { Users, Globe, FileText, Video } from 'lucide-react';

export function About() {
  const companyInfo = {
    yearsExperience: 15,
    founded: "2008",
    location: "Global"
  };

  return (
    <>
      <Helmet>
        <title>About Audexis - Global Transcription & Translation Experts</title>
        <meta 
          name="description" 
          content="Discover Audexis's 15+ years of expertise in global transcription and translation services. Our team of skilled professionals delivers accurate, timely solutions across all languages and industries."
        />
        <meta 
          name="keywords" 
          content="transcription services, medical transcription, legal transcription, subtitling services, translation services, global languages, professional transcribers"
        />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="About Audexis - Global Transcription & Translation Experts" />
        <meta property="og:description" content="Expert transcription and translation services with 15+ years of experience. Specialized in medical, legal, and corporate transcription across all global languages." />
        <meta property="og:type" content="website" />
        
        {/* Schema.org markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Audexis",
            "description": "Global transcription and translation services provider",
            "@id": "https://audexisconsultancy.com",
            "foundingDate": companyInfo.founded,
            "areaServed": "Global",
            "serviceType": [
              "Transcription Services",
              "Medical Transcription",
              "Legal Transcription",
              "Subtitling Services",
              "Translation Services"
            ],
            "knowsAbout": [
              "Medical Transcription",
              "Legal Proceedings",
              "Survey Transcription",
              "Entertainment Media",
              "Corporate Training",
              "Global Languages"
            ],
            "serviceOutput": [
              "Q&A Structures",
              "Excel Formats",
              "TXT Files",
              "SRT Files"
            ]
          })}
        </script>
      </Helmet>

      <div className="relative pt-20 bg-white dark:bg-gray-900">
        <BackgroundAnimation />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Audexis
            </h1>
            
            <article className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-6xl mx-auto leading-relaxed font-semibold text-left">
              <section className="mb-6">
                <h2 className="sr-only">Company Overview</h2>
                <p>
                  Audexis stands at the forefront of innovation in the Transcription Industry, combining cutting-edge technology with an unwavering commitment to accuracy and client satisfaction. Our distinguished team comprises highly skilled general and medical transcribers and native translators, each bringing over {companyInfo.yearsExperience} years of professional expertise to every project we undertake.
                </p>
              </section>

              <section className="mb-6">
                <h2 className="sr-only">Global Language Capabilities</h2>
                <p>
                  Our comprehensive services covers all the Global Languages, demonstrating our exceptional versatility in the field of transcription and translation, overcoming the diverse linguistic challenges and cultural nuances.
                </p>
              </section>

              <section className="mb-6">
                <h2 className="sr-only">Specialized Expertise</h2>
                <p>
                  We have developed particular expertise in handling diverse Survey/Legal Proceeding Recordings, adapting to various industry standard format including Q&A Structures, Specialized Excel Formats, Specialized Entertainment Media Files Formats, and final TXT/SRT files outputs.
                </p>
              </section>

              <section className="mb-6">
                <h2 className="sr-only">Subtitling Services</h2>
                <p>
                  Additionally, our Subtitling services cover all types of content, from corporate training materials to social media, ensuring precise and accurate subtitles that resonate with target audience's needs.
                </p>
              </section>

              <section className="mb-6">
                <h2 className="sr-only">Our Approach</h2>
                <p>
                  We pride ourselves on our Flexible Approach, operating across different time zones and delivering end-to-end transcription solutions tailored precisely to our clients' specific requirements and deadlines, supported by our robust quality assurance processes and dedicated project management team.
                </p>
              </section>
            </article>
          </div>

          <Mission />
          <Testimonials />
          <Contact />
        </div>
      </div>
    </>
  );
}