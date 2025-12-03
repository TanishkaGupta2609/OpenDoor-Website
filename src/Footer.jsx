// Footer.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    setStatus('sending');

    const templateParams = {
      from_email: email,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString()
    };

    emailjs.send(
      'service_92pqlfx',        // Your Service ID
      'template_6thc1u9',       // Your Template ID
      templateParams,
      'VT4ngK4nlVYYiWIFw'       // Your Public Key
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus(''), 3000);
    })
    .catch((error) => {
      console.log('FAILED...', error);
      setStatus('error');
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-logo">OpenDoor</h3>
            <div className="contact-info">
              <div className="contact-item">
                <h4>Find Us</h4>
                <p>Chikara University, Rajpura 140401</p>
              </div>
              <div className="contact-item">
                <h4>Call Us</h4>
                <p>01169296360</p>
              </div>
              <div className="contact-item">
                <h4>Mail Us</h4>
                <p>projecivebelterew@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Subscribe */}
          <div className="footer-section">
            <h4>Subscribe</h4>
            <form className="subscribe-form" onSubmit={handleSubscribe}>
              <input 
                type="email" 
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
              <button type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            {status === 'success' && <p className="success-message">✅ Thank you for subscribing! Welcome email sent.</p>}
            {status === 'error' && <p className="error-message">❌ Failed to subscribe. Please try again.</p>}
            {status === 'sending' && <p className="sending-message">⏳ Sending welcome email...</p>}
          </div>

          {/* Other sections remain same */}
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 OpenDoor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;