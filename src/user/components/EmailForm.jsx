import React, { useState } from 'react';
import emailjs from 'emailjs-com';

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
      <form className='form-email' onSubmit={handleSubmit}>
      <h1 style={{textAlign:'center'}}>Hubungi Kami</h1>
        <div>
            <input
            type="text"
            name="name"
            placeholder="Your name.."
            value={formData.name}
            onChange={handleChange}
            required
            />

            <input
            type="email"
            name="email"
            placeholder="Your email.."
            value={formData.email}
            onChange={handleChange}
            required
            />
        </div>
        <input
          type="text"
          name="subject"
          placeholder="Subject.."
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Write something.."
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Kirim</button>
      </form>
    </div>
  );
};

export default EmailForm;
