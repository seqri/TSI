import React, { useState } from 'react';

interface AddElementModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (element: { title: string; description: string }) => void;
}

const AddElementModal: React.FC<AddElementModalProps> = ({ isOpen, onClose, onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim() && description.trim()) {
      onAdd({ title: title.trim(), description: description.trim() });
      setTitle('');
      setDescription('');
      onClose();
    }
  };

  return (
    <>
      <div 
        className="fixed inset-0 z-40"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
        onClick={onClose}
      />
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-96 p-6">
          <h2 className="text-xl font-bold mb-4 text-pink-500">Добавить элемент</h2>
          <form onSubmit={handleSubmit}>
            <input
              autoFocus
              type="text"
              placeholder="Название"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border rounded-lg p-2 mb-3 focus:outline-none focus:border-pink-500"
              required
            />
            <textarea
              placeholder="Описание"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border rounded-lg p-2 mb-4 focus:outline-none focus:border-pink-500"
              rows={3}
              required
            />
            <div className="flex gap-2">
              <button
                type="submit"
                className="flex-1 bg-pink-400 text-white py-2 rounded-lg hover:bg-pink-400"
              >
                Добавить
              </button>
              <button
                type="button"
                onClick={onClose}
                className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400"
              >
                Отмена
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddElementModal;