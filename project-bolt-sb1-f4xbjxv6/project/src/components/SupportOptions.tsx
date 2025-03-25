import React from 'react';
import { Heart, Brain, Users, Coffee } from 'lucide-react';
import { SupportOption } from '../types';

const supportOptions: SupportOption[] = [
  {
    id: '1',
    label: 'Emotional Support',
    description: 'Talk about your feelings and emotions',
    icon: 'Heart'
  },
  {
    id: '2',
    label: 'Anxiety & Stress',
    description: 'Learn coping strategies',
    icon: 'Brain'
  },
  {
    id: '3',
    label: 'Relationship Advice',
    description: 'Discuss relationship challenges',
    icon: 'Users'
  },
  {
    id: '4',
    label: 'Self-Care Tips',
    description: 'Discover ways to take care of yourself',
    icon: 'Coffee'
  }
];

interface SupportOptionsProps {
  onSelect: (option: SupportOption) => void;
}

export function SupportOptions({ onSelect }: SupportOptionsProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Heart': return <Heart size={24} />;
      case 'Brain': return <Brain size={24} />;
      case 'Users': return <Users size={24} />;
      case 'Coffee': return <Coffee size={24} />;
      default: return null;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {supportOptions.map((option) => (
        <button
          key={option.id}
          onClick={() => onSelect(option)}
          className="flex items-center gap-3 p-4 rounded-lg bg-white hover:bg-gray-50 
                   transition-colors border border-gray-200 hover:border-blue-200"
        >
          <div className="text-blue-600">
            {getIcon(option.icon)}
          </div>
          <div className="text-left">
            <h3 className="font-medium text-gray-900">{option.label}</h3>
            <p className="text-sm text-gray-500">{option.description}</p>
          </div>
        </button>
      ))}
    </div>
  );
}