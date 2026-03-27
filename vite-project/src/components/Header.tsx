import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header style={{
        backgroundColor: 'pink',
        borderBottom: '1px solid #000000',
        padding: '20px 0',
        width: '100%'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Link to="/" style={{
            color: '#3d3d3d',
            textDecoration: 'none',
            fontSize: '24px',
            fontWeight: '600'
          }}>
            Мой Сайт
          </Link>
          
          <nav>
            <ul style={{
              display: 'flex',
              listStyle: 'none',
              gap: '30px',
              margin: 0,
              padding: 0
            }}>
              <li>
                <Link to="/" style={{
                  color: '#555',
                  textDecoration: 'none',
                  fontSize: '16px'
                }}>
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/about" style={{
                  color: '#555',
                  textDecoration: 'none',
                  fontSize: '16px'
                }}>
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/contact" style={{
                  color: '#555',
                  textDecoration: 'none',
                  fontSize: '16px'
                }}>
                  Контакты
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;