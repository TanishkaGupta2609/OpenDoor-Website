import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    age: '',
    country: '',
    phone: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Store user data in localStorage for login verification
    const userData = {
      name: formData.fullName, // This will be used to display in navbar
      email: formData.email,
      password: formData.password,
      age: formData.age,
      country: formData.country,
      phone: formData.phone
    };
    
    localStorage.setItem('user', JSON.stringify(userData));

    // ✅ Automatically log the user in after signup
    const authData = {
      isLoggedIn: true,
      name: formData.fullName,
      email: formData.email
    };
    localStorage.setItem('auth', JSON.stringify(authData));

    alert('✅ Account created successfully! You are now logged in.');

    // ✅ Redirect to Home Page
    navigate('/');
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-content">
          {/* Left Side - Features */}
          <div className="features-side">
            <h1>OpenDoor</h1>
            <p className="features-description">
              Find your perfect rental space with OpenDoor. Sign up today to access thousands of properties worldwide.
            </p>
            
            <div className="features-list">
              <div className="feature-item"><span className="feature-icon">1️⃣</span><span>Over 50,000 properties listed</span></div>
              <div className="feature-item"><span className="feature-icon">2️⃣</span><span>Available in 12 countries</span></div>
              <div className="feature-item"><span className="feature-icon">3️⃣</span><span>Voted best real estate platform 2023</span></div>
              <div className="feature-item"><span className="feature-icon">4️⃣</span><span>Secure transactions guaranteed</span></div>
            </div>
          </div>

          {/* Right Side - Signup Form */}
          <div className="signup-side">
            <div className="signup-form-container">
              <h2>Create Account</h2>
              <p className="signup-subtitle">Join OpenDoor today</p>
              
              <form className="signup-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input 
                    type="text" 
                    name="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label>Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Age</label>
                    <input 
                      type="number" 
                      name="age"
                      placeholder="Enter your age"
                      value={formData.age}
                      onChange={handleChange}
                      min="18"
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Country</label>
                    <select 
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select your country</option>
                      <option value="usa">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="canada">Canada</option>
                      <option value="australia">Australia</option>
                      <option value="india">India</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label>Password</label>
                  <input 
                    type="password" 
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <button type="submit" className="signup-btn">
                  Create Account
                </button>
                
                <p className="login-link">
                  Already have an account? <Link to="/login">Log In</Link>
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SignUp;