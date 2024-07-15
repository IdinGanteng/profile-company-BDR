import React from 'react';
import { FaPhone, FaMailBulk, FaSearchLocation } from 'react-icons/fa';

const Kontak = () => {
  return (
    <div id='contact'>
        <div className='kontak-container' id='contact'>
            <h3>HUBUNGI KAMI</h3>
            <h2>JIKA ANDA MEMILIKI PERTANYAAN, JANGAN RAGU UNTUK MENGHUBUNGI KAMI</h2>
            <div className='kontak-list'>
                <div className='kontak-list-container'>
                    <a>
                        <FaPhone/>
                    </a>
                    <div>
                        <p>Telepon untuk menanyakan apapun</p>
                        <p style={{color:"#25d366"}}>+(341) - 400799</p>
                    </div>
                </div>
                <div className='kontak-list-container'>
                    <a>
                        <FaMailBulk/>
                    </a>
                    <div>
                        <p>Email untuk mendapatkan penawaran gratis</p>
                        <p style={{color:"#25d366"}}>zainur0468@gmail.com</p>
                    </div>
                </div>
                <div className='kontak-list-container'>
                    <a>
                        <FaSearchLocation/>
                    </a>
                    <div>
                        <p>Kunjungi kantor kami</p>
                        <p style={{color:"#25d366"}}>Jl. Bunga Maya 16 Malang- indonesia</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Kontak
