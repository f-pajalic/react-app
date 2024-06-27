import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';

function Nav({ isOpen, toggleMenu }) {
  const handleNavLinkClick = () => {
    if (isOpen) {
      toggleMenu(); 
    }
  };

  return (
    <nav className={`nav ${isOpen ? 'open' : ''}`} aria-label="Main Navigation">
      <ul>
        <li><NavLink to="/" onClick={handleNavLinkClick}>Home</NavLink></li>
        <li><NavLink to="/about" onClick={handleNavLinkClick}>About</NavLink></li>
        <li><NavLink to="/menu" onClick={handleNavLinkClick}>Menu</NavLink></li>
        <li><NavLink to="/reservations" onClick={handleNavLinkClick}>Reservations</NavLink></li>
        <li><NavLink to="/orderOnline" onClick={handleNavLinkClick}>Order online</NavLink></li>
        <li><NavLink to="/login" onClick={handleNavLinkClick}>Login</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;
