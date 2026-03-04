import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">NLE</div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="navbar-icons">
        <div className="navbar-bell">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C8.686 2 6 4.686 6 8V11.586L4.293 13.293C3.902 13.684 4.149 14.316 4.707 14.316H19.293C19.851 14.316 20.098 13.684 19.707 13.293L18 11.586V8C18 4.686 15.314 2 12 2ZM12 22C13.104 22 14 21.104 14 20H10C10 21.104 10.896 22 12 22Z" fill="#fff"/>
          </svg>
        </div>
        <div className="navbar-profile">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="8" r="4" fill="#fff"/>
            <path d="M4 20c0-4 8-4 8-4s8 0 8 4" stroke="#fff" strokeWidth="2" fill="none"/>
          </svg>
          <span className="navbar-username">Krishna</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
