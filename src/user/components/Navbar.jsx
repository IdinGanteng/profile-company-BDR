
import React, { useState, useEffect } from 'react';
import '../user.css';
import { FaBars, FaFilePdf, FaLanguage } from "react-icons/fa";
import logoPT from '../../assets/logo-pt.png';
import { useNavigate } from 'react-router-dom';
import idnFlag from '../../assets/idn-flag.png';
import engFlag from '../../assets/eng-flag.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

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

  const openDropdwon = () => {
    setShowDropdown(!showDropdown);
  };

  const navigate = useNavigate('');

  const sendCv =()=>{
    navigate('/pendaftaran');
  }

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
            <a href="#home" className="nav-links">Beranda</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-links">Tentang Kami</a>
          </li>
          <li className="nav-item">
            <a href="#news" className="nav-links">Info</a>
          </li>
          <li className="nav-item">
            <a href="#destinasi" className="nav-links">Destinasi</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links">Kontak</a>
          </li>
        </ul>
          <button className='btn-fileCV' onClick={sendCv}>
            Send CV
          </button>
          <button className='icon-fileCV' onClick={sendCv}>
            <FaFilePdf/>
          </button>
          <button className='icon-language' onClick={openDropdwon}>
            <img src={idnFlag} alt='idn-flag'/>
          </button>
          {showDropdown && (
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <img src={idnFlag} alt='idn-flag'/>
                <span>Indonesia</span>
              </li>
              <li className="dropdown-item">
                <img src={engFlag} alt='eng-flag'/>
                <span>English</span>
              </li>
            </ul>
          )}
      </div>
    </nav>
  );
};

export default Navbar;
