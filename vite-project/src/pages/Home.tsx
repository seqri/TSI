import React, { Component } from 'react';
// import { Button } from '../components/Button';
import ElementsList from '../components/ElementsList';

class Home extends Component {
  render() {
    function handleClick(): void {
      throw new Error('Function not implemented.');
    }

    return (
      <div className="h-[1500px]">
        {/* <h1>Главная страница</h1>
        <p>Важная информация</p> */}
        {/* <Button
          color="primary"
          size="small"
          title="Добавить товар"
          onClick={handleClick}
        ></Button> */}
        <ElementsList />
      </div>
      
    );
  }  
}

export default Home;



// import { Input } from "./Input";

// function App() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: ""
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = () => {
//     console.log(formData);
//     alert(`Имя: ${formData.name}\nEmail: ${formData.email}\nТелефон: ${formData.phone}`);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <h1 className="text-2xl font-bold mb-6 text-center">Простая форма</h1>
        
//         <Input
//           label="Имя"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Введите имя"
//         />
        
//         <Input
//           label="Email"
//           name="email"
//           type="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Введите email"
//         />
        
//         <Input
//           label="Телефон"
//           name="phone"
//           type="tel"
//           value={formData.phone}
//           onChange={handleChange}
//           placeholder="Введите телефон"
//         />
        
//         <button
//           onClick={handleSubmit}
//           className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors mt-2"
//         >
//           Отправить
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;