import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  Icon: LucideIcon;
  description: string;
  isActive: boolean;
  onClick: () => void;
}

export function ServiceCard({ title, Icon, description, isActive, onClick }: ServiceCardProps) {
  return (
    <div
      className={`glass-card p-6 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105 ${
        isActive ? 'ring-2 ring-indigo-500 scale-105' : ''
      }`}
      onClick={onClick}
    >
      <Icon className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2 text-white text-center">{title}</h3>
      <p className="text-gray-300 text-center">{description}</p>
    </div>
  );
}