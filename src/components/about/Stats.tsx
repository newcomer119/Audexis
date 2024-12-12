import React from 'react';

export function Stats() {
  const stats = [
    { number: '500+', label: 'Clients Served' },
    { number: '50k+', label: 'Minutes Transcribed' },
    { number: '99%', label: 'Accuracy Rate' },
    { number: '15+', label: 'Languages Supported' }
  ];

  return (
    <div className="mb-20">
      <div className="glass-card rounded-xl p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                {stat.number}
              </div>
              <div className="text-indigo-100/80 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}