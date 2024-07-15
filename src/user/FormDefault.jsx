import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormDefault = () => {
  const [formData, setFormData] = useState({
    name: '',
    date_of_birth: '',
    email: '',
    phone_number: '',
    domicile: '',
    formal_education: '',
    cv: null,
  });

  const navigate = useNavigate()

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
      const response = await fetch('https://bdr.vercel.app/api/v1/register', {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      alert("Pendaftaran anda berhasil!");
      navigate('/')
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
    }
  };

  return (
    <div className='container-form-default'>
      <form className='form-default' onSubmit={handleSubmit}>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormDefault;
