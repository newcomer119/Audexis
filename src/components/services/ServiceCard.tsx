
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
      className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer transition-all duration-300 transform hover:scale-105 ${
        isActive ? 'ring-2 ring-blue-500 scale-105' : ''
      }`}
      onClick={onClick}
    >
      <div className="bg-gray-100 dark:bg-gray-700 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4 mx-auto">
        <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white text-center">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-center">{description}</p>
    </div>
  );
}