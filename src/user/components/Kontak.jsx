import React from 'react';
import { FaPhone, FaMailBulk, FaSearchLocation } from 'react-icons/fa';

const Kontak = () => {
  return (
    <div id='contact'>
        <h1 style={{textAlign:"center"}}>HUBUNGI KAMI</h1>
        <div className='kontak-container'>
            <div className='kontak-sub-container1'>
                <h2>JIKA ANDA MEMILIKI PERTANYAAN, JANGAN RAGU UNTUK MENGHUBUNGI KAMI</h2>
                <div className='kontak-list'>
                    <div className='kontak-list-container'>
                        <a>
                            <FaPhone/>
                        </a>
                        <div>
                            <p>Telepon untuk menanyakan apapun</p>
                            <p>+(341) - 400799</p>
                        </div>
                    </div>
                    <div className='kontak-list-container'>
                        <a>
                            <FaMailBulk/>
                        </a>
                        <div>
                            <p>Email untuk mendapatkan penawaran gratis</p>
                            <p>zainur0468@gmail.com</p>
                        </div>
                    </div>
                    <div className='kontak-list-container'>
                        <a>
                            <FaSearchLocation/>
                        </a>
                        <div>
                            <p>Kunjungi kantor kami</p>
                            <p>Jl. Bunga Maya 16 Malang- indonesia</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='kontak-maps'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d126446.43015557871!2d112.54107556953815!3d-7.952263681068347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x2dd629d77ae2606d%3A0x765927631b444f76!2s2JXF%2B39X%2C%20Jl.%20Bunga%20Maya%2C%20Jatimulyo%2C%20Kec.%20Lowokwaru%2C%20Kota%20Malang%2C%20Jawa%20Timur%2065141!3m2!1d-7.9522737999999995!2d112.6234765!5e0!3m2!1sid!2sid!4v1721017247717!5m2!1sid!2sid" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
  )
}

export default Kontak
