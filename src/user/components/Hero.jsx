import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleClick =()=>{
    navigate('/');
  }
  return (
    <div className='hero-container' id='home'>
      <div className='hero-content'>
        <div>
          <h1>{t('BINA')} <span>{t('DINAMITA')}</span> {t('RAMA Ltd.')}</h1>
          <h3>{t('Indonesian Migrant Workers')}</h3>
          <h3><span style={{color:'red'}}>{t('Placement')}</span> {t('Agencies')}</h3>
        </div>
        <div>
          <button onClick={handleClick}>{t('sign up now')}</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
