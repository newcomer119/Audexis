import React from 'react';

export function Stats() {
  const stats = [
    { number: '99.9%', label: 'Accuracy Rate' },
    { number: '50+', label: 'Languages Supported' },
    { number: '20K+', label: 'Clients Worldwide' },
    { number: '1M+', label: 'Minutes Transcribed' }
  ];

  return (
    <div className="mb-20">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}