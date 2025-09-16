import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-hero">
      <div className="contact-overlay">
        <div className="contact-content">
          <h1>Bizimlə Əlaqə Saxlayın</h1>
          <p>Sorğularınız, əməkdaşlıq və ya təkliflər üçün bizə yazın. Sizinlə əlaqə saxlamaqdan məmnun olarıq!</p>
          
          <form className="contact-form">
            <input type="text" placeholder="Adınız" required />
            <input type="email" placeholder="Emailiniz" required />
            <textarea placeholder="Mesajınız" rows="6" required></textarea>
            <button type="submit" className="btn">Göndər</button>
          </form>

          <div className="contact-info">
            <p>Email: info@videograph.com</p>
            <p>Telefon: +994 50 123 45 67</p>
            <p>Sosial Media: 
              <a href="#">Instagram</a>, 
              <a href="#">Facebook</a>, 
              <a href="#">TikTok</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage;

