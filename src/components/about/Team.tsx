import React from 'react';

export function Team() {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Technology',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Quality Assurance Director',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200'
    }
  ];

  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-white text-center mb-12">Our Leadership Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <div key={index} className="glass-card p-6 rounded-xl text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-2 border-indigo-400"
            />
            <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
            <p className="text-indigo-100/80">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}