import React from 'react';
import { useState, useEffect } from 'react';
import flag from '../../assets/bendera.jpg';
import ModalCountry from './ModalCountry';

const Destinasi = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState (null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetch('https://bdr.vercel.app/api/v1/countries')
          .then(response => response.json())
          .then(data => setCountries(data.data))
          .catch(error => console.error('Error fetching data:', error));
      }, []);
      console.log(countries);

      const handleCardClick = (country) => {
        setSelectedCountry(country);
        setIsModalOpen(true);
      };

      const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCountry(null);
      };
  return (
    <div className='destinasi-container' id='destinasi'>
      <h1>Destinasi</h1>
      <p>Negara Destinasi</p>
      <div className="card-destinasi-container">
        {countries.map((country) => (
          <div key={country._id} className="card-destinasi" onClick={()=> handleCardClick(country)}>
            <img src={flag} alt={country.countryName} className="card-destinasi-image"/>
            <div class="hover-country">
              <div class="hover-country-text">
                <h1>{country.countryName}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ModalCountry isOpen={isModalOpen} onClose={closeModal} data={selectedCountry}/>
    </div>
  )
}

export default Destinasi
