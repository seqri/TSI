// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// class Footer extends Component {
//   render() {
//     return (
//       <footer style={{
//         padding: '20px',
//         textAlign: 'center',
//         borderTop: '1px solid #ddd',
//         marginTop: '40px',
//         color: '#666'
//       }}>
//         <div style={{ marginBottom: '10px' }}>
//           <Link to="/" style={{ margin: '0 10px', color: '#555', textDecoration: 'none' }}>Главная</Link>
//           <Link to="/about" style={{ margin: '0 10px', color: '#555', textDecoration: 'none' }}>О нас</Link>
//           <Link to="/contact" style={{ margin: '0 10px', color: '#555', textDecoration: 'none' }}>Контакты</Link>
//         </div>
//         <p style={{ margin: 0 }}>© Мой Сайт</p>
//       </footer>
//     );
//   }
// }

// export default Footer;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#a1a1a1',
      padding: '20px',
      textAlign: 'center',
      color: 'white',
      marginTop: 'auto'
    }}>
      <div style={{ marginBottom: '10px' }}>
        <Link to="/" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Главная</Link>
        <Link to="/about" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>О нас</Link>
        <Link to="/contact" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Контакты</Link>
      </div>
      <p style={{ margin: 0 }}>© Мой Сайт {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;