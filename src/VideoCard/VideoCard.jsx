import React from 'react';
import { memo } from 'react';

const VideoCard = ({ video }) => {
  return (
    <div className="video-card">
      <iframe
        src={video.src}
        title={video.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      ></iframe>
      <p>{video.title}</p>
    </div>
  );
};

export default React.memo(VideoCard);
