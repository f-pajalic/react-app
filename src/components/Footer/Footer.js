import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer' role="contentinfo">
      <div className="footer-content">
        <div className="footer-section">
          <h2 className="footer-section-title">LOCATIONS</h2>
          <ul className="footer-section-list">
            <li>Accra</li>
            <li>Kumasi</li>
            <li>Cape Coast</li>
            <li>Tamale</li>
          </ul>
        </div>
        <div className="footer-section">
          <h2 className="footer-section-title">OPENING TIMES</h2>
          <ul className="footer-section-list">
            <li>Mon - Wed: 10:30AM - 12:00AM</li>
            <li>Fri: 12:00PM - 1:00AM</li>
            <li>Sat - Sun: 10:30AM - 12:00AM</li>
          </ul>
        </div>
        <div className="footer-section">
          <h2 className="footer-section-title">CONTACT US</h2>
          <ul className="footer-section-list">
            <li>96 Abafom Road, North Ridge - Accra</li>
            <li>Tel: 020 7928 0678</li>
            <li>Email: info@littlelemon.com</li>
          </ul>
        </div>
      </div>
      <p className="footer-copyright">&copy; 2024 Little Lemon. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
