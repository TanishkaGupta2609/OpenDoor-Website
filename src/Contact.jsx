import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    agree: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // EmailJS configuration
    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      phone: formData.phone || 'Not provided',
      message: formData.message,
      date: new Date().toLocaleString()
    };

    emailjs.send(
      'service_92pqlfx',        // Your Service ID
      'template_rlvjlbm',       // NEW Contact Template ID
      templateParams,
      'VT4ngK4nlVYYiWIFw'       // Your Public Key
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSubmitStatus('success');
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        agree: false
      });
    })
    .catch((err) => {
      console.error('FAILED...', err);
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-box">
          {/* Left Section - Stats */}
          <div className="left-section">
            <h1 className="main-heading">$4.3B</h1>
            <p className="sub-text">Total Rental Value Managed</p>

            <div className="stats-grid">
              <div className="stat">
                <h2>150+</h2>
                <p>Properties Available</p>
              </div>
              <div className="stat">
                <h2>98%</h2>
                <p>Occupancy Rate</p>
              </div>
              <div className="stat">
                <h2>5k+</h2>
                <p>Happy Tenants</p>
              </div>
              <div className="stat">
                <h2>10 + yrs</h2>
                <p>Market Experience</p>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="right-section">
            <h2 className="form-title">Contact Us</h2>
            <p className="form-desc">
              Looking for a place to rent or have questions? Reach out!
            </p>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="success-message">
                ✅ Thank you! Your message has been sent successfully.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="error-message">
                ❌ Sorry, there was an error sending your message. Please try again.
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input 
                  type="text" 
                  name="firstName"
                  placeholder="First Name" 
                  value={formData.firstName}
                  onChange={handleChange}
                  required 
                />
                <input 
                  type="text" 
                  name="lastName"
                  placeholder="Last Name" 
                  value={formData.lastName}
                  onChange={handleChange}
                  required 
                />
              </div>
              <input 
                type="email" 
                name="email"
                placeholder="Email Address" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
              <input 
                type="tel" 
                name="phone"
                placeholder="Phone Number (Optional)" 
                value={formData.phone}
                onChange={handleChange}
              />
              <textarea 
                name="message"
                placeholder="Your Message..." 
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <div className="checkbox-row">
                <input 
                  type="checkbox" 
                  id="agree" 
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="agree">
                  I agree to the <a href="#">privacy policy</a>
                </label>
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting || !formData.agree}
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;