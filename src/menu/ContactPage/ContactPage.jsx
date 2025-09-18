import React, { useState } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      }
    }).then(() => {
      setIsSubmitted(true);
      form.reset();
    }).catch(() => {
      alert('Xəta baş verdi. Zəhmət olmasa, bir daha cəhd edin.');
    });
  };

  return (
    <div className="contact-hero">
      <div className="contact-overlay">
        <div className="contact-content">
          <h1>Bizimlə Əlaqə Saxlayın</h1>
          <p>Sorğularınız, əməkdaşlıq və ya təkliflər üçün bizə yazın. Sizinlə əlaqə saxlamaqdan məmnun olarıq!</p>
          
          {!isSubmitted ? (
            <form 
              className="contact-form" 
              action="https://formsubmit.co/kazimlin08@gmail.com" 
              method="POST"
              onSubmit={handleSubmit}
            >
              <input type="text" name="name" placeholder="Adınız" required />
              <input type="email" name="email" placeholder="Emailiniz" required />
              <textarea name="message" placeholder="Mesajınız" rows="6" required></textarea>
              <button type="submit" className="btn">Göndər</button>
            </form>
          ) : (
            <div className="thank-you-message">
              <h2>Sizin diqqətinizdə olmaq bizim üçün uğurdur!</h2>
              <p>Təşəkkür edirik, mesajınız uğurla göndərildi.</p>
            </div>
          )}

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
