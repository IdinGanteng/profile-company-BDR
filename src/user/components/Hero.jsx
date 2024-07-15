import React from 'react';
import {useNavigate} from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleClick =()=>{
    navigate('/pendaftaran');
  }
  return (
    <div className='hero-container' id='home'>
      <div className='hero-content'>
        <div>
          <h1>PT BINA <span>DINAMITA</span> RAMA</h1>
          <h3>PERUSAHAAN PENEMPATAN KERJA</h3>
          <h3>MIGRAN INDONESIA</h3>
        </div>
        <div>
          <button onClick={handleClick}>Daftar Sekarang</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
