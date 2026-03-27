
// import React from 'react'
// import './ItemCard.css'

// // Тип для элемента
// interface Item {
//   id: number
//   name: string
//   description: string
//   category: string
//   price?: number
//   createdAt?: Date
// }

// // Пропсы для компонента
// interface ItemCardProps {
//   item: Item
//   onEdit?: (id: number) => void
//   onDelete?: (id: number) => void
// }

// const ItemCard: React.FC<ItemCardProps> = ({ item, onEdit, onDelete }) => {
//   return (
//     <div className="item-card">
//       <div className="item-category">{item.category}</div>
      
//       <div className="item-content">
//         <h3 className="item-title">{item.name}</h3>
//         <p className="item-description">{item.description}</p>
        
//         {item.price && (
//           <div className="item-price">
//             💰 {item.price} ₽
//           </div>
//         )}
        
//         {item.createdAt && (
//           <div className="item-date">
//             📅 Добавлено: {new Date(item.createdAt).toLocaleDateString('ru-RU')}
//           </div>
//         )}
//       </div>
      
//       {(onEdit || onDelete) && (
//         <div className="item-actions">
//           {onEdit && (
//             <button 
//               className="edit-btn" 
//               onClick={() => onEdit(item.id)}
//               title="Редактировать"
//             >
//               ✏️
//             </button>
//           )}
//           {onDelete && (
//             <button 
//               className="delete-btn" 
//               onClick={() => onDelete(item.id)}
//               title="Удалить"
//             >
//               🗑️
//             </button>
//           )}
//         </div>
//       )}
//     </div>
//   )
// }

// export default ItemCard