
import React, { useState, useEffect } from 'react';
import '../user.css';
import { FaBars, FaFilePdf, FaLanguage } from "react-icons/fa";
import logoPT from '../../assets/logo-pt.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);
  return (
    <nav className={`navbar ${scrollNav ? 'scroll-navbar' : ''}`}>
      <a href="#" className="navbar-logo">
        <img src={logoPT} alt='logo' width={200}/>
      </a>
      <div className="navbar-container">
        <div className="menu-icon" onClick={toggleNavbar}>
          <FaBars/>
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="#home" className="nav-links">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-links">About</a>
          </li>
          <li className="nav-item">
            <a href="#services" className="nav-links">Services</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links">Contact</a>
          </li>
        </ul>
          <button className='btn-fileCV'>
            Send CV
          </button>
          <button className='icon-fileCV'>
            <FaFilePdf/>
          </button>
          <button className='icon-language'>
            <FaLanguage/>
          </button>
      </div>
    </nav>
  );
};

export default Navbar;
