import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import flag from '../../assets/bendera.jpg';
import ModalCountry from './ModalCountry';
import monas from '../../assets/monas.jpg';
import gedungArab from '../../assets/gedung-arab.jpg';
import gedungMalay from '../../assets/gedung-malaysia.jpg';

const Destinasi = () => {
  const [countries, setCountries] = useState([
    {
      _id:1,
      countryName: 'Indonesia',
      picture: monas,
      description: 'Indonesia, dengan nama resmi Republik Indonesia, adalah sebuah negara kepulauan di Asia Tenggara yang dilintasi garis khatulistiwa dan berada di antara daratan benua Asia dan Oseania sehingga dikenal sebagai negara lintas benua, serta antara Samudra Pasifik dan Samudra Hindia'
    },
    {
      _id:2,
      countryName: 'Malaysia',
      picture: gedungArab,
      description: 'Indonesia, dengan nama resmi Republik Indonesia, adalah sebuah negara kepulauan di Asia Tenggara yang dilintasi garis khatulistiwa dan berada di antara daratan benua Asia dan Oseania sehingga dikenal sebagai negara lintas benua, serta antara Samudra Pasifik dan Samudra Hindia'
    },
    {
      _id:3,
      countryName: 'Saudi Arabia',
      picture: gedungArab,
      description: 'Indonesia, dengan nama resmi Republik Indonesia, adalah sebuah negara kepulauan di Asia Tenggara yang dilintasi garis khatulistiwa dan berada di antara daratan benua Asia dan Oseania sehingga dikenal sebagai negara lintas benua, serta antara Samudra Pasifik dan Samudra Hindia'
    }
  ]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // useEffect(() => {
  //  fetch('https://bdr.vercel.app/api/v1/countries')
  //     .then(response => response.json())
  //     .then(data => setCountries(data.data))
  //     .catch(error => console.error('Error fetching data:', error));
  // }, []); 

  const handleCardClick = (country) => {
    setSelectedCountry(country);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCountry(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='destinasi-container' id='destinasi'>
      <h1>Destinasi</h1>
      <p>Negara Destinasi</p>
      <div className='carousel'>
      <Slider {...settings}>
        {countries.map((country) => (
          <div key={country._id} className="card-destinasi" onClick={() => handleCardClick(country)}>
            <img src={country.picture} alt={country.countryName} className="card-destinasi-image" />
            <div className="hover-country">
              <div className="hover-country-text">
                <h1>{country.countryName}</h1>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      </div>
      <ModalCountry isOpen={isModalOpen} onClose={closeModal} data={selectedCountry} />
    </div>
  );
}

export default Destinasi;
