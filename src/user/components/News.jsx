import React from 'react';
import { useState, useEffect } from 'react';
import ModalNews from './ModalNews';
import lari1 from '../../assets/lari1.jpg';

const News = () => {
    const [news, setNews] = useState([]);
    const [selectedNews, setSelectedNews] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetch('https://bdr.vercel.app/api/v1/news-event-list')
          .then(response => response.json())
          .then(data => setNews(data.data))
          .catch(error => console.error('Error fetching data:', error));
      }, []);

      const handleCardClick = (newsItem) => {
        setSelectedNews(newsItem);
        setIsModalOpen(true);
        console.log(newsItem);
      };

      const closeModal = () => {
        setIsModalOpen(false);
        setSelectedNews(null);
      };
  return (
    <div className='news-container' id='news'>
      <h1>INFO</h1>
      <p>Berita & Kegiatan</p>
      <div className="card-news-container">
        {news.map((event) => (
          <div key={event.id} className="card-news" onClick={()=> handleCardClick(event)}>
            <img src={lari1} alt={event.titel} className="card-news-image" />
            <div className="card-news-content">
              <h2>{event.title}</h2>
              <p>{event.content}</p>
              <h1>Baca Selengkapnya &#8599;</h1>
            </div>
          </div>
        ))}
      </div>
      <ModalNews isOpen={isModalOpen} onClose={closeModal} data={selectedNews} />
    </div>
  )
}

export default News
