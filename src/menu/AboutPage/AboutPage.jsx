import React from 'react';
import './AboutPage.css';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="about-hero">
      <div className="about-overlay">
        <div className="about-content">
          <h2>Kiməm Mən</h2>

          <h1>Nicat Kazımlı</h1>
          <p>
            <p>
  Mən həvəsli bir videografam və hekayə anlatmağı sevirəm, 
  emosional və yaradıcı anları qeyd edirəm. Hazırda 5 ildən çox bu sahədə çalışıram 
  və müxtəlif tədbirlər, musiqi klipləri, reklam və kinematik layihələr üzərində işləmişəm. 
  İndiyə qədər 50-dən çox layihəni uğurla tamamlamışam və həm fərdi, həm də brend layihələrim var. 
  İşimdə kreativ yanaşmanı və texniki dəqiqliyi önəmli hesab edirəm, 
  hər bir kadrın hekayə danışmasına diqqət edirəm.
</p>

          </p>
          <div className="about-buttons">
            <Link to="/portfolio" className="btn">İşlərimə Bax</Link>
            <Link to="/contact" className="btn btn-outline">Əlaqə Saxla</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage;


