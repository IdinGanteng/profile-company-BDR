import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import gambar from '../../assets/image-email.png';

const EmailForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      e.target,
      'YOUR_USER_ID' // Replace with your EmailJS user ID
    ).then((result) => {
      console.log(result.text);
      alert('Email successfully sent!');
    }, (error) => {
      console.log(error.text);
      alert('Failed to send email, please try again later.');
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className='container-form-email'>
      <div className='sub-form-email'>
        <div className='pantek-anjing'>
          <h1>HUBUNGI KAMI</h1>
          <p>Kami senang mendengar dari anda!</p>
        </div>
        <div className='anjing-pantek'>
        <form className='form-email' onSubmit={handleSubmit}>
          <div>
              <input
              type="text"
              name="name"
              placeholder="Nama"
              value={formData.name}
              onChange={handleChange}
              required
              />

              <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subjek"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Kirim Pesan</button>
        </form>
        <div className="image-3d-container">
          <img src={gambar} alt='gambar' className='image-3d'/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default EmailForm;
