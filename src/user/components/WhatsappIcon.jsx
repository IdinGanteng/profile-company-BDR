import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappIcon = () => {
  return (
    <div>
       <a 
        href="https://wa.me/6285848940211" 
        className="whatsapp-icon" 
        target="_blank" 
        rel="noopener noreferrer"
        >
        <FaWhatsapp/>
        </a>
    </div>
  )
}

export default WhatsappIcon
