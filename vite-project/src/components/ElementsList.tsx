// import React, { useState } from 'react';
// import ElementCard from './ElementCard';
// import AddElementModal from './AddElementModal';

// interface Element {
//   id: number;
//   title: string;
//   description: string;
//   createdAt: Date;
// }

// const ElementsList: React.FC = () => {
//   const [elements, setElements] = useState<Element[]>([


//   ]);
  
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const addElement = (newElement: { title: string; description: string }) => {
//     const element: Element = {
//       ...newElement,
//       id: Date.now(),
//       createdAt: new Date()
//     };
//     setElements([element, ...elements]);
//   };

//   const deleteElement = (id: number) => {
//     setElements(elements.filter(el => el.id !== id));
//   };

//   return (
//     <div className="min-h-screen bg-pink-50 p-6">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold text-pink-600 mb-2">Мои элементы</h1>
//           <p className="text-gray-600">Всего: {elements.length}</p>
//         </div>

//         <div className="flex justify-center mb-6">
//           <button
//             onClick={() => setIsModalOpen(true)}
//             className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition"
//           >
//             + Добавить элемент
//           </button>
//         </div>

//         {elements.length === 0 ? (
//           <div className="text-center text-gray-500 py-12">
//             <p>Нет элементов</p>
//             <p className="text-sm">Нажмите кнопку выше, чтобы добавить</p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//             {elements.map(element => (
//               <ElementCard
//                 key={element.id}
//                 element={element}
//                 onDelete={deleteElement}
//               />
//             ))}
//           </div>
//         )}

//         <AddElementModal
//           isOpen={isModalOpen}
//           onClose={() => setIsModalOpen(false)}
//           onAdd={addElement}
//         />
//       </div>
//     </div>
//   );
// };

// export default ElementsList;



import React, { useState, useEffect } from 'react'; // Добавили useEffect
import ElementCard from './ElementCard';
import AddElementModal from './AddElementModal';

interface Element {
  id: number;
  title: string;
  description: string;
  createdAt: string; // Сервер обычно присылает дату строкой
}

const ElementsList: React.FC = () => {
  const [elements, setElements] = useState<Element[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 1. GET ЗАПРОС: Загружаем данные с сервера при загрузке компонента
  useEffect(() => {
    fetch('http://localhost:5173/api/data')
      .then(res => res.json())
      .then(data => setElements(data))
      .catch(err => console.error("Ошибка при получении данных:", err));
  }, []);

  // 2. POST ЗАПРОС: Отправляем новый элемент на сервер
  const addElement = async (newElement: { title: string; description: string }) => {
    try {
      const response = await fetch('http://localhost:5173/api/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: newElement.title,
          description: newElement.description,
          createdAt: new Date().toISOString()
        })
      });

      if (response.ok) {
        const savedElement = await response.json();
        // Обновляем список в интерфейсе данными, которые вернул сервер
        setElements([savedElement, ...elements]);
      }
    } catch (err) {
      console.error("Ошибка при добавлении:", err);
    }
  };

  const deleteElement = (id: number) => {
    // В идеале тут тоже должен быть fetch(..., { method: 'DELETE' })
    setElements(elements.filter(el => el.id !== id));
  };

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-pink-600 mb-2">Мои элементы</h1>
          <p className="text-gray-600">Всего: {elements.length}</p>
        </div>

        <div className="flex justify-center mb-6">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition"
          >
            + Добавить элемент
          </button>
        </div>

        {elements.length === 0 ? (
          <div className="text-center text-gray-500 py-12">
            <p>Нет элементов</p>
            <p className="text-sm">Нажмите кнопку выше, чтобы добавить</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {elements.map(element => (
              <ElementCard
                key={element.id}
                element={element}
                onDelete={deleteElement}
              />
            ))}
          </div>
        )}

        <AddElementModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAdd={addElement}
        />
      </div>
    </div>
  );
};

export default ElementsList;




    // {
    //   id: 1,
    //   title: 'Первый элемент',
    //   description: 'Это описание первого элемента',
    //   createdAt: new Date()
    // },
    // {
    //   id: 2,
    //   title: 'Второй элемент',
    //   description: 'Это описание второго элемента',
    //   createdAt: new Date()
    // }