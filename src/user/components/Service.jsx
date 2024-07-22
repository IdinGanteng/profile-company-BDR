import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaIndustry, FaHammer, FaTree, FaFish, FaHamburger, FaHospital, FaUserNurse } from 'react-icons/fa';

const Service = () => {
const {t} = useTranslation();

  return (
    <div className='service'>
      <h1>{t("We are ready for partnerships in numerous fields")}</h1>
      <div className='sub-service'>
        <div className='sub-service1'>
          <p>{t("Our companies always strive to deliver the best service possible through the formed partnership with local training centers across the country. With our countrys rich resources, most of our workers have the chances and capability to learn and specialize in a lot of fields. These two factors contribute drastically in a means to fulfill the demands of specialized workers on a global scale.")}</p>
        </div>
        <div className='sub-service2'>
          <ul>
            <div>
              <li className='icon-service1'>
                <FaIndustry/>
                <a>{t('Manufacturing')}</a>
              </li>
              <li className='icon-service2'>
                <FaHammer/>
                <a>{t('Construction')}</a>
              </li>
              <li className='icon-service3'>
                <FaTree/>
                <a>{t('Forestry and agriculture')}</a>
              </li>
              <li className='icon-service4'>
                <FaFish/>
                <a>{t('Fishery')}</a>
              </li>
            </div>
            <div>
              <li className='icon-service5'>
                <FaHamburger/>
                <a>{t('Food and beverages')}</a>
              </li>
              <li className='icon-service6'>
                <FaHospital/>
                <a>{t('Hospitality service')}</a>
              </li>
              <li className='icon-service7'>
                <FaUserNurse/>
                <a>{t('Caretakers and nurses')}</a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Service
