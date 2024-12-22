import React from 'react';

export function FAQ() {
  return (
    <div className="bg-white dark:bg-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&h=600&q=80"
            alt="Professional Team"
            className="rounded-xl shadow-2xl w-full h-[500px] object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Why Choose Audexis as Your Transcription Partner?
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Unmatched Accuracy",
                description: "99%+ accurate transcription with rigorous quality checks and expert proofreading."
              },
              {
                title: "Human Excellence",
                description: "100% human transcription by certified professionals, no AI-only solutions."
              },
              {
                title: "Swift Delivery",
                description: "Express delivery options starting from 2 hours, with flexible turnaround times."
              },
              {
                title: "Data Security",
                description: "Bank-grade encryption and strict confidentiality protocols for your peace of mind."
              },
              {
                title: "Global Support",
                description: "24/7 customer support with dedicated project managers for seamless service."
              }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}