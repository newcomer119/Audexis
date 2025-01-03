import React from 'react';
import { FileUp, CheckSquare, Pen, FileCheck, FileText } from 'lucide-react';

export function ProcessSteps() {
  const steps = [
    {
      icon: FileUp,
      title: "File Reception & Initial Check",
      details: [
        "File Source: Receive audio/video recordings via email, FTP server, Dropbox, etc.",
        "Audio check: Expert quality assessment of recordings"
      ]
    },
    {
      icon: CheckSquare,
      title: "Acknowledgement",
      details: [
        "Quick confirmation of receipt",
        "Provide estimated turnaround time"
      ]
    },
    {
      icon: Pen,
      title: "Transcription Process",
      details: [
        "Expert transcribers begin the process",
        "Regular updates to clients throughout"
      ]
    },
    {
      icon: FileCheck,
      title: "Quality Control",
      details: [
        "Initial proofreading by Quality Analyst",
        "Level 2 proofreading for detailed error checking"
      ]
    },
    {
      icon: FileText,
      title: "Final Formatting",
      details: [
        "Template verification",
        "Font size and style checking",
        "Format alignment with client requirements"
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-2xl flex justify-center font-bold text-gray-900 dark:text-white mb-8">
        Here's How We Work
      </h2>
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transition-transform hover:scale-[1.02]"
          >
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                <step.icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Step {index + 1}: {step.title}
                </h3>
                <ul className="space-y-1.5">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2">
                      <span className="w-1 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}