import React from 'react';
import { useTranslation } from 'react-i18next';
import ibis from '../../assets/ibis.png';
import aw from '../../assets/aw.png';
import keita from '../../assets/keita.png';

const Portofolio = () => {
  const { t } = useTranslation();

  return (
    <div className='portofolio'>
        <div className='sub-portofolio1'>
            <div className='portofolio-desc'>
                <h1>{t("Companies who utilize our services")}</h1>
                <p>{t("Bina Dinamita Rama steadfastly fulfills the clients human resource needs through a guaranteed workers quality. The company is also capable of covering numerous fields since we have an ongoing partnership with numerous training centers across the country.")}</p>
            </div>
            <div className='portofolio-sponsor'>
                <img src={ibis} alt='ibis'/>
                <img src={aw} alt='aw'/>
                <img src={keita} alt='keita'/>
            </div>
        </div>
        <div className='sub-portofolio2'>
            <div className='portofolio-experience'>
                <h1>{t("20 Years +")}</h1>
                <p>{t("Experience")}</p>
            </div>
            <div className='portofolio-experience'>
                <h1>20k+</h1>
                <p>{t("User Active")}</p>
            </div>
            <div className='portofolio-experience'>
                <h1>10k+</h1>
                <p>{t("Happy Customers")}</p>
            </div>
        </div>
    </div>
  )
}

export default Portofolio
