import React from 'react';
import logoPT from '../../assets/logo-pt.png';

const Footer = () => {
  return (
    <div class="footer">
        <p>All Right Reserved &copy; Copyight 2024</p>
        <img src={logoPT} alt='logo-pt' style={{width:"150px", height:"auto"}}/>
    </div>
  )
}

export default Footer
