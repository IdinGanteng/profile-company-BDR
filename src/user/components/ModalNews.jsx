import React from 'react';
import lari1 from '../../assets/lari1.jpg'

const ModalNews = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-news-overlay" onClick={onClose}>
      <div className="modal-news-content" onClick={e => e.stopPropagation()}>
        <img src={lari1} alt={data.title}/>
        <div style={{textAlign:'left'}}>
          <h2>{data.title}</h2>
          <p>{data.content}</p>
          <button onClick={onClose} className='btn-modal-country-close'>tutup</button>
        </div>
        {/* <button className="modal-news-close" onClick={onClose}>X</button> */}
      </div>
    </div>
  );
};

export default ModalNews;
