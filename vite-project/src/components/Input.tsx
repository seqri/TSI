// // Input.tsx
// import React from "react";

// interface InputProps {
//   label: string;
//   name: string;
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   placeholder?: string;
//   type?: string;
// }

// export const Input = ({ 
//   label, 
//   name, 
//   value, 
//   onChange, 
//   placeholder, 
//   type = "text" 
// }: InputProps) => {
//   return (
//     <div className="mb-4">
//       <label className="block text-sm font-medium text-gray-700 mb-1">
//         {label}
//       </label>
//       <input
//         type={type}
//         name={name}
//         value={value}
//         onChange={onChange}
//         placeholder={placeholder}
//         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500"
//       />
//     </div>
//   );
// };