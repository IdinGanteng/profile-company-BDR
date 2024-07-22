import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Service from './components/Service';
import Portofolio from './components/Portofolio';
import News from './components/News';
import Destinasi from './components/Destinasi';
import Kontak from './components/Kontak';
import EmailForm from './components/EmailForm';

const LandingPage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <Portofolio/>
      {/* <News/>
      <Destinasi/> */}
      {/* <Kontak/>
      <EmailForm/> */}
    </div>
  )
}

export default LandingPage
