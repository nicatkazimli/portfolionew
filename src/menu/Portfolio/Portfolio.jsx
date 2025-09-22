import { videoArray } from '../../service/Service';
import VideoCard from '../../VideoCard/VideoCard';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      {videoArray.map((video) => (
        <VideoCard key={video.id} video={video} className="video-card">
          <iframe
            src={video.src}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy" 
          ></iframe>
          <p>{video.title}</p>
        </VideoCard>
      ))}
    </div>
  );
};


export default Portfolio;
