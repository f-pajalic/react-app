import React, { useState } from 'react';
import './Header.css';
import Nav from '../Nav/Nav';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header" role="banner">
      <div className="logo-container">
        <img src={process.env.PUBLIC_URL + '/little-lemon-192.png'} alt="Little Lemon Logo" className="logo" />
      </div>
      <button className="burger-menu" onClick={toggleMenu} aria-label="Toggle Menu">
        ☰
      </button>
      <Nav isOpen={isOpen} toggleMenu={toggleMenu} />
    </header>
  );
}

export default Header;
