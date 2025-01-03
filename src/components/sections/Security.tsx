import React from 'react';
import { Shield, Lock, FileKey, Server, Database, FileCheck, Clock } from 'lucide-react';

export function Security() {
  const features = [
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "256-bit AES encryption for all data in transit and at rest"
    },
    {
      icon: Lock,
      title: "Access Control",
      description: "Role-based access control and multi-factor authentication"
    },
    {
      icon: FileKey,
      title: "Data Privacy",
      description: "GDPR, HIPAA, and CCPA compliant data handling"
    },
    {
      icon: Server,
      title: "Secure Infrastructure",
      description: "ISO 27001 certified data centers with 24/7 monitoring"
    },
    {
      icon: Database,
      title: "Secure Storage",
      description: "Encrypted databases for transcribed files and sensitive information, preventing unauthorized access"
    },
    {
      icon: FileCheck,
      title: "Confidentiality Agreements",
      description: "All staff and transcribers sign binding confidentiality agreements to protect sensitive data"
    },
    {
      icon: Clock,
      title: "Data Retention Policy",
      description: "Secure data retention and deletion protocols with optional long-term secure storage upon request"
    }
  ];

  return (
    <div className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Security & Confidentiality</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Your data security is our top priority. We employ industry-leading security measures to protect your information.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {/* First row - 4 features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.slice(0, 4).map((feature, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <feature.icon className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Second row - 3 features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.slice(4).map((feature, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <feature.icon className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}