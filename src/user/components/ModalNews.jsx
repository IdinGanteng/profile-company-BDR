import React from 'react';

const ModalNews = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-news-overlay" onClick={onClose}>
      <div className="modal-news-content" onClick={e => e.stopPropagation()}>
        <button className="modal-news-close" onClick={onClose}>X</button>
        <h2>{data.title}</h2>
        <img src={data.picture} alt={data.title} />
        <p>{data.content}</p>
      </div>
    </div>
  );
};

export default ModalNews;
