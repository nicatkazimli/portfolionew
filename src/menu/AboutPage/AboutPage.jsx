import React from "react";
import "./AboutPage.css";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="about-hero">
      <div className="about-overlay">
        <div className="about-content">

          <div className="about-column about-left">
            <h2>Kiməm Mən</h2>
            <h1>Nicat Kazımlı</h1>
          </div>

          <div className="about-column about-center">
            <p>
              Mən həvəsli bir videografam və hekayə anlatmağı sevirəm. Emosional və yaradıcı
    anları qeyd edirəm. Hazırda 5 ildən çox bu sahədə çalışıram və müxtəlif tədbirlər,
    musiqi klipləri, reklam və kinematik layihələr üzərində işləmişəm. Hər bir layihəyə
    fərdi yanaşıram və hər kadrın öz hekayəsini danışmasına diqqət edirəm. 
    Kreativ yanaşmam və texniki dəqiqliyimlə hər video unikal olur.
            </p>
          </div>

          <div className="about-column about-right">
            <div className="about-stats">
              <div className="stat">
                <h2>50+</h2>
                <p>Layihə</p>
              </div>
              <div className="stat">
                <h2>20+</h2>
                <p>Tədbir</p>
              </div>
              <div className="stat">
                <h2>5</h2>
                <p>İl Təcrübə</p>
                
              </div>
          
                <Link to="/portfolio" className="btn">İşlərimə Bax</Link>
            <Link to="/contact" className="btn btn-outline">Əlaqə Saxla</Link>  
            
            </div>

            <div className="about-testimonials">
              <div className="testimonial">
                <p>"Nijat inanılmaz bir iş ortaya çıxarır, hər video hekayə danışır!"</p>
                <span>- Müştəri A</span>
              </div>
              <div className="testimonial">
                <p>"Çox kreativ və dəqiq, hər kadrında işini hiss edirsən."</p>
                <span>- Müştəri B</span>
              </div>
            </div>
          </div>

        </div>        
      </div>
    </div>
  );
};

export default AboutPage;
