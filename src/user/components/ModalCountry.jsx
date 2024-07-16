import React from 'react';
import { useState } from 'react';
import monas from '../../assets/monas.jpg';
import gedungArab from '../../assets/gedung-arab.jpg';
import gedungMalay from '../../assets/gedung-malaysia.jpg';

const ModalCountry = ({ isOpen, onClose, data }) => {
    const [modalForm, setModalForm] = useState(false);
    const [formData, setFormData] = useState({
      name: '',
      date_of_birth: '',
      email: '',
      phone_number: '',
      domicile: '',
      formal_education: '',
      cv: null,
    });


    const handleChange = (e) => {
      const { name, value, files } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: files ? files[0] : value,
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
  
      try {
        const response = await fetch(`https://bdr.vercel.app/api/v1/register?country=${data._id}`, {
          method: 'POST',
          body: formDataToSend,
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const result = await response.json();
        alert('Pendaftaran anda berhasil!');
        setModalForm(false);
      } catch (error) {
        console.error('There was a problem with your fetch operation:', error);
      }
    };

    const handleOpenForm =()=>{
        setModalForm(true);
    }

    const closeForm =()=>{
        setModalForm(false);
    }
  if (!isOpen) return null;
  return (
    <>
    <div className={modalForm ? "modal-form-close" : "modal-country-overlay"} onClick={onClose}>
      <div className="modal-country-content" onClick={e => e.stopPropagation()}>
        {/* <button className="modal-country-close" onClick={onClose}>X</button> */}
        <img src={data.picture} alt={data.countryName} style={{width:'100%'}}/>
        <div style={{textAlign:'left'}}>
          <h2>{data.countryName}</h2>
          <p>{data.description}</p>
          <div style={{display:'flex', flexDirection:'row'}}>
          <button onClick={handleOpenForm} className='btn-modal-country'>Daftar Sekrang</button>
          <button onClick={onClose} className='btn-modal-country-close'>tutup</button>
          </div>
        </div>
      </div>
    </div>
    <div className={modalForm ? "modal-country-overlay" : "modal-form-close"}>
      <div className="modal-country-content" onClick={e => e.stopPropagation()}>
        <button className="modal-country-close" onClick={closeForm}>X</button>
        <form className='form-country'>
          <div className='split-form-country'>
            <div>
              <label>Nama</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name.."
                value={formData.name}
                onChange={handleChange}
              />
              <label>Tanggal Lahir</label>
              <input
                type="date"
                id="date_of_birth"
                name="date_of_birth"
                placeholder="Masukan tanggal lahir"
                value={formData.date_of_birth}
                onChange={handleChange}
              />
              <label>Email</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="masukan email"
                value={formData.email}
                onChange={handleChange}
              />
              <label>No. Telepon</label>
              <input
                type="text"
                id="phone_number"
                name="phone_number"
                placeholder="masukan nomor telepon"
                value={formData.phone_number}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Domisili</label>
              <input
                type="text"
                id="domicile"
                name="domicile"
                placeholder="masukan domisili"
                value={formData.domicile}
                onChange={handleChange}
              />
              <label>Riwayat Pendidikan</label>
              <input
                type="text"
                id="formal_education"
                name="formal_education"
                placeholder="riwayat pendidikan"
                value={formData.formal_education}
                onChange={handleChange}
              />
              <label>Upload CV</label>
              <input
                type="file"
                id="cv"
                name="cv"
                onChange={handleChange}
              />
            </div>
          </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
      </div>
    </div>
    </>
  );
};

export default ModalCountry;
