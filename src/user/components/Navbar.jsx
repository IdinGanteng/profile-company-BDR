import React, { useState,useRef, useEffect } from 'react';
import '../user.css';
import { FaBars, FaFilePdf, FaLanguage } from "react-icons/fa";
import logoPT from '../../assets/logo-pt.png';
import { useNavigate } from 'react-router-dom';
import idnFlag from '../../assets/idn-flag.png';
import engFlag from '../../assets/eng-flag.png';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentLang, setCurrentLang] = useState(null);

  const navRef = useRef(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLang(lng);
    setShowDropdown(false);
  };

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };


  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
      document.removeEventListener('mousedown', handleClickOutside);

    };
  }, []);

  const openDropdwon = () => {
    setShowDropdown(!showDropdown);
  };

  const navigate = useNavigate('');

  const sendCv =()=>{
    navigate('/');
  }

  return (
    <nav className={`navbar ${scrollNav ? 'scroll-navbar' : ''}`} ref={navRef}>
      <a href="#" className="navbar-logo">
        <img src={logoPT} alt='logo' width={200}/>
      </a>
      <div className="navbar-container">
        <div className="menu-icon" onClick={toggleNavbar}>
          <FaBars/>
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="#home" className="nav-links">{i18n.t('Home')}</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-links">{i18n.t('About Us')}</a>
          </li>
          {/* <li className="nav-item">
            <a href="#news" className="nav-links">Info</a>
          </li>
          <li className="nav-item">
            <a href="#destinasi" className="nav-links">Destinasi</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links">Kontak</a>
          </li> */}
        </ul>
          {/* <button className='btn-fileCV' onClick={sendCv}>
            Send CV
          </button>
          <button className='icon-fileCV' onClick={sendCv}>
            <FaFilePdf/>
          </button> */}
          <button className='icon-language' onClick={openDropdwon}>
            <img src={currentLang === 'id' ? idnFlag : engFlag} alt='flag'/>
          </button>
          {showDropdown && (
            <ul className="dropdown-menu">
              <li className="dropdown-item" onClick={() => changeLanguage('id')}>
                <img src={idnFlag} alt='idn-flag'/>
                <span>Indonesia</span>
              </li>
              <li className="dropdown-item" onClick={() => changeLanguage('en')}>
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
