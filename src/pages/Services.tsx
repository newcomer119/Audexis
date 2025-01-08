// import React from 'react';
// import { BackgroundAnimation } from '../components/animations/BackgroundAnimation';
// import { ServiceSection } from '../components/services/ServiceSection';
// import { Contact } from '../components/Contact';

// export function ServicesPage() {
//   return (
//     <div className="relative pt-20 section-gradient min-h-screen">
//       <BackgroundAnimation />
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="text-center mb-16">
//           <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
//             Our Services
//           </h1>
//           <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
//             Professional transcription solutions tailored to your specific industry needs
//           </p>
//         </div>

//         <div className="space-y-48 space-x-7">
//           <ServiceSection
//             id="legal"
//             title="Legal Transcription"
//             description="Comprehensive legal transcription services with unmatched accuracy and confidentiality."
//             features={[
//               "Court Proceedings & Depositions",
//               "Legal Documentation & Contracts",
//               "Law Enforcement Interviews",
//               "Corporate Legal Meetings"
//             ]}
//             details={[
//               {
//                 title: "Court Proceedings",
//                 description: "Accurate transcription of trials, hearings, and depositions with strict attention to legal terminology and formatting requirements.\n\nOur expert team ensures every detail is captured with precision, maintaining the highest standards of accuracy required in legal proceedings."
//               },
//               {
//                 title: "Legal Documentation",
//                 description: "Precise transcription of contracts, agreements, and legal correspondence maintaining proper legal formatting and structure.\n\nWe handle all types of legal documents with meticulous attention to detail and formatting requirements."
//               },
//               {
//                 title: "Law Enforcement",
//                 description: "Secure transcription of police interviews, witness statements, and investigation reports with complete confidentiality.\n\nOur specialized team understands the critical nature of law enforcement documentation and maintains strict security protocols."
//               },
//               {
//                 title: "Corporate Legal",
//                 description: "Professional transcription of board meetings, shareholder meetings, and compliance documentation with quick turnaround times.\n\nWe provide comprehensive solutions for all corporate legal transcription needs while maintaining accuracy and confidentiality."
//               }
//             ]}
//           />

//           <ServiceSection
//             id="general"
//             title="General Transcription"
//             description="Versatile transcription solutions for business, academic, and media content."
//             features={[
//               "Business Meetings & Conferences",
//               "Academic Lectures & Seminars",
//               "Media Content & Podcasts",
//               "Market Research & Interviews"
//             ]}
//             details={[
//               {
//                 title: "Business Content",
//                 description: "High-quality transcription of meetings, conferences, and corporate events with attention to industry-specific terminology."
//               },
//               {
//                 title: "Academic Material",
//                 description: "Detailed transcription of lectures, seminars, and research interviews with proper academic formatting and citations."
//               },
//               {
//                 title: "Media Production",
//                 description: "Professional transcription of podcasts, interviews, and broadcast content with timestamps and speaker identification."
//               },
//               {
//                 title: "Research & Analysis",
//                 description: "Accurate transcription of focus groups, interviews, and survey responses with data organization and categorization."
//               }
//             ]}
//           />

//           <ServiceSection
//             id="medical"
//             title="Medical Transcription"
//             description="Specialized medical transcription services covering all healthcare specialties."
//             features={[
//               "Clinical Documentation",
//               "Medical Reports & Records",
//               "Specialty Services",
//               "Research Studies"
//             ]}
//             details={[
//               {
//                 title: "Clinical Documentation",
//                 description: "Precise transcription of patient records, clinical notes, and medical reports with proper medical terminology."
//               },
//               {
//                 title: "Specialty Services",
//                 description: "Expert transcription for cardiology, neurology, orthopedics, and all medical specialties with field-specific knowledge."
//               },
//               {
//                 title: "Diagnostic Reports",
//                 description: "Accurate transcription of radiology reports, lab results, and diagnostic findings with proper medical formatting."
//               },
//               {
//                 title: "Research & Studies",
//                 description: "Detailed transcription of clinical trials, medical research, and case studies with academic precision."
//               }
//             ]}
//           />

//           <ServiceSection
//             id="global"
//             title="Global Translations"
//             description="Comprehensive translation services for multiple languages and regions."
//             features={[
//               "European Languages",
//               "Asian Languages",
//               "Indian Languages",
//               "Technical Translations"
//             ]}
//             details={[
//               {
//                 title: "European Languages",
//                 description: "Professional translation services for German, French, Spanish, Italian, and other European languages with cultural context."
//               },
//               {
//                 title: "Asian Languages",
//                 description: "Expert translation for Chinese, Japanese, Korean, and Southeast Asian languages with regional expertise."
//               },
//               {
//                 title: "Indian Languages",
//                 description: "Comprehensive translation services for Hindi, Tamil, Bengali, and other Indian languages with cultural sensitivity."
//               },
//               {
//                 title: "Technical Translation",
//                 description: "Specialized translation of technical documents, legal papers, and medical records with industry-specific terminology."
//               }
//             ]}
//           />
//         </div>

//         <Contact />
//       </div>
//     </div>
//   );
// }

import React from 'react';
import { Helmet } from 'react-helmet';
import { BackgroundAnimation } from '../components/animations/BackgroundAnimation';
import { ServiceSection } from '../components/services/ServiceSection';
import { Contact } from '../components/Contact';

interface ServiceDetail {
  title: string;
  description: string;
}

interface ServiceProps {
  id: string;
  title: string;
  description: string;
  features: string[];
  details: ServiceDetail[];
}

export function ServicesPage() {
  const services: ServiceProps[] = [
    {
      id: "legal",
      title: "Legal Transcription",
      description: "Comprehensive legal transcription services with unmatched accuracy and confidentiality.",
      features: [
        "Court Proceedings & Depositions",
        "Legal Documentation & Contracts",
        "Law Enforcement Interviews",
        "Corporate Legal Meetings"
      ],
      details: [
        {
          title: "Court Proceedings",
          description: "Accurate transcription of trials, hearings, and depositions with strict attention to legal terminology and formatting requirements."
        },
        // ... other legal details
      ]
    },
    // ... other services
  ];

  return (
    <>
      <Helmet>
        <title>Professional Transcription & Translation Services | Legal, Medical, General | Audexis</title>
        <meta 
          name="description" 
          content="Expert transcription services including legal, medical, general, and global translations. Professional solutions with guaranteed accuracy and fast turnaround times."
        />
        <meta 
          name="keywords" 
          content="legal transcription, medical transcription, general transcription, global translation, court proceedings, medical records, business meetings, language translation"
        />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Professional Transcription & Translation Services | Audexis" />
        <meta property="og:description" content="Comprehensive transcription solutions including legal, medical, general, and translation services. Expert team, guaranteed accuracy, fast delivery." />
        <meta property="og:type" content="website" />

        {/* Schema.org markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "Service",
                "position": 1,
                "name": "Legal Transcription Services",
                "description": "Comprehensive legal transcription services with unmatched accuracy and confidentiality.",
                "offers": {
                  "@type": "Offer",
                  "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": 1.00,
                    "priceCurrency": "USD",
                    "unitCode": "PAGE"
                  }
                },
                "serviceType": [
                  "Court Proceedings",
                  "Legal Documentation",
                  "Law Enforcement",
                  "Corporate Legal"
                ]
              },
              {
                "@type": "Service",
                "position": 2,
                "name": "Medical Transcription Services",
                "description": "Specialized medical transcription services covering all healthcare specialties.",
                "serviceType": [
                  "Clinical Documentation",
                  "Medical Reports",
                  "Specialty Services",
                  "Research Studies"
                ]
              },
              {
                "@type": "Service",
                "position": 3,
                "name": "General Transcription Services",
                "description": "Versatile transcription solutions for business, academic, and media content.",
                "offers": {
                  "@type": "Offer",
                  "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": 0.85,
                    "priceCurrency": "USD",
                    "unitCode": "MIN"
                  }
                },
                "serviceType": [
                  "Business Meetings",
                  "Academic Lectures",
                  "Media Content",
                  "Market Research"
                ]
              },
              {
                "@type": "Service",
                "position": 4,
                "name": "Global Translation Services",
                "description": "Comprehensive translation services for multiple languages and regions.",
                "serviceType": [
                  "European Languages",
                  "Asian Languages",
                  "Indian Languages",
                  "Technical Translations"
                ]
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="relative pt-20 section-gradient min-h-screen">
        <BackgroundAnimation />
        <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <header className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Professional transcription solutions tailored to your specific industry needs
            </p>
          </header>

          <nav className="mb-12" aria-label="Services navigation">
            <ul className="flex justify-center space-x-6">
              {["legal", "general", "medical", "global"].map((service) => (
                <li key={service}>
                  <a 
                    href={`#${service}`}
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    {service.charAt(0).toUpperCase() + service.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-48 space-x-7">
            {services.map((service) => (
              <ServiceSection
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                features={service.features}
                details={service.details}
              />
            ))}
          </div>

          <section id="contact" aria-label="Contact Us">
            <Contact />
          </section>
        </main>
      </div>
    </>
  );
}