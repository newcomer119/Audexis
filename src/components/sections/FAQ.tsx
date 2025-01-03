import React from 'react';

export function FAQ() {
  return (
    <div className="bg-white dark:bg-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&h=600&q=80"
            alt="Professional Team"
            className="rounded-xl shadow-2xl w-full h-[800px] object-cover"
          />
        </div>
        <div>
          
          <div className="space-y-6">
            {[
              {
                title: "Unmatched Accuracy",
                description: "Highly accurate transcriptions with rigorous quality checks and expert proofreading."
              },
              {
                title: "Swift Delivery",
                description: "Express delivery options ranging from 1 Hour to 24 Hours turnaround times."
              },
              {
                title: "Global Support",
                description: "24/7 customer support with dedicated project managers for seamless service."
              },
              {
                title: "Free Sampling",
                description: "Free Sample Transcription availability for exceptional number of minutes."
              },
              {
                title: "Versatility",
                description: "Specialization in handling different formats of documents, templates, and types of recordings."
              },
              {
                title: "Cost Effectiveness",
                description: "Unparalleled price offering for express services."
              },
              {
                title: "No Charge",
                description: "No payment option for delayed deliveries."
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