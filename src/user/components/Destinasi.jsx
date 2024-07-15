import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import flag from '../../assets/bendera.jpg';
import ModalCountry from './ModalCountry';

const Destinasi = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch('https://bdr.vercel.app/api/v1/countries')
      .then(response => response.json())
      .then(data => setCountries(data.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

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
      <Slider {...settings} className="card-destinasi-container">
        {countries.map((country) => (
          <div key={country._id} className="card-destinasi" onClick={() => handleCardClick(country)}>
            <img src={flag} alt={country.countryName} className="card-destinasi-image" />
            <div className="hover-country">
              <div className="hover-country-text">
                <h1>{country.countryName}</h1>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <ModalCountry isOpen={isModalOpen} onClose={closeModal} data={selectedCountry} />
    </div>
  );
}

export default Destinasi;
