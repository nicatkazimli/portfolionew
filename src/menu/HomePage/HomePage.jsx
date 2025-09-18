import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h2>Sənin websaytın və Video Editlərin</h2>
        <h1>Videographer Nijat'in Portfoliosu</h1>
        <Link href="/about" className="cta-button">Haqqımda daha çox</Link>
      </div>
    </div>
  )
}

export default HomePage;

