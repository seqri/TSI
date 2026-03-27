import React from 'react';

interface Element {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
}

interface ElementCardProps {
  element: Element;
  onDelete: (id: number) => void;
}

const ElementCard: React.FC<ElementCardProps> = ({ element, onDelete }) => {
  const formatDate = (date: Date): string => {
    return new Date(date).toLocaleDateString('ru-RU');
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-gray-800">{element.title}</h3>
        <button
          onClick={() => onDelete(element.id)}
          className="text-pink-500 hover:text-pink-700"
        >
          ✕
        </button>
      </div>
      <p className="text-gray-600 text-sm mb-2">{element.description}</p>
      <p className="text-gray-400 text-xs">{formatDate(element.createdAt)}</p>
    </div>
  );
};

export default ElementCard;