import React from 'react';
import logoPT from '../../assets/logo-putih-pt.png';
import { FaPhone, FaSearchLocation } from 'react-icons/fa';

const Footer = () => {
  return (
    <div style={{backgroundColor:'black', bottom:0, width:'100%'}}>
    <div class="footer">
        <div className='sub-footer1'>
          <img src={logoPT} alt='logo'/>
          <p style={{color:'white'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>
        <div className='sub-footer2'>
          <h2>QUICK LINK</h2>
          <a>Home</a>
          <a>About</a>
          <a>Information</a>
          <a>Destination</a>
          <a>Contact</a>
        </div>
        <div className='sub-footer3'>
          <h2>GET IN TOUCH</h2>
          <div className='kontak-list-container'>
            <a>
                <FaPhone/>
            </a>
            <div>
                <p>+(341) - 400799</p>
            </div>
          </div>
          <div className='kontak-list-container'>
              <a>
                  <FaSearchLocation/>
              </a>
              <div>
                  <p>Jl. Bunga Maya 16 Malang- indonesia</p>
              </div>
          </div>
        </div>
    </div>
    <p style={{color:'white', textAlign:'center', marginTop:'50px', marginBottom:0, paddingBottom:'10px' }}>&copy; All Right Reserved Donquixote - 2024</p>
    </div>
  )
}

export default Footer
