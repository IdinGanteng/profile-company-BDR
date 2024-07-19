import React from 'react';
import waLogo from '../../assets/wa-logo2.png';

const WhatsappIcon = () => {
  return (
    <div>
        <a
           href="https://wa.me/6285848940211" 
           className="whatsapp-icon" 
           target="_blank" 
           rel="noopener noreferrer"
        >
          <img src={waLogo} alt='logowa' className='whatsapp-icon'/>
        </a>
    </div>
  )
}

export default WhatsappIcon
