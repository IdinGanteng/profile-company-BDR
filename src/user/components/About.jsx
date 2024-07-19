import React from 'react'
import img1 from '../../assets/about-img1.png';
import img2 from '../../assets/about-img2.png';
import img3 from '../../assets/about-img3.png';
import kegiatan1 from '../../assets/kegiatan1.jpeg';
import kegiatan2 from '../../assets/kegiatan2.jpeg';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <div className='about-container' id='about'>
      <h1>{t('About Us')}</h1>
      <p>{t('We have worked with 200+ clients')}</p>
      <div className='about-sub1'>
        <div>
          <h2>{t('BINA')} <span style={{color:'red'}}>{t('DINAMITA')}</span> {t('RAMA Ltd.')}</h2>
          <p>{t('Ever since its first establishment, our company has always focused on training and delivering the best human resource in order to fulfill the demand of labor from overseas. Aside from making our movement in other countries, our company also focuses on improving the living standard of our people through providing employment.')}</p>
          <p>{t('We commit to maintain our recruitment system based on professionalism. Through dedication to advancement and development of the resources, our company strives to deliver trained and capable human resources based on the requirement and needs of our clients.')}</p>
        </div>
        <div>
          <img src={img1} alt='img1'/>
        </div>
      </div>
      <div className='about-sub2'>
        <img src={img2} alt='img2'/>
        <img src={img3} alt='img3'/>
      </div>
      <div className='about-sub3'>
        <div className='about-sub3-desc'>
          <h1>{t('Our activities')}</h1>
          <p>{t('Our company provides thorough education and training in terms of language and skills which are necessary to fulfill the requirement from our clients. With the complete facilities from the dorm until the modern education system, we guarantee our partners satisfaction over the provided human resources.')}</p>
          <button>Portofolio</button>
        </div>
        <div className='about-sub3-img'>
          <img src={kegiatan1} alt='kegiatan1'/>
          <img src={kegiatan2} alt='kegiatan2'/>
          <img src={kegiatan1} alt='kegiatan1'/>
          <img src={kegiatan2} alt='kegiatan2'/>
          <img src={kegiatan1} alt='kegiatan1'/>
        </div>
      </div>
    </div>
  )
}

export default About
