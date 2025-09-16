import React from 'react';
import { videoArray } from '../../service/Service';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      {videoArray.map((video) => (
        <div key={video.id} className="video-card">
          <iframe 
            src={video.src} 
            title={video.title} 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen 
          ></iframe>
          <p>{video.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Portfolio;
