import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Get saved user data from localStorage
    const savedUser = JSON.parse(localStorage.getItem('user'));

    if (
      savedUser &&
      formData.email === savedUser.email &&
      formData.password === savedUser.password
    ) {
      alert('✅ Login successful!');
      navigate('/'); // Redirect to homepage
    } else {
      alert('❌ Invalid email or password!');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-content">

          {/* Left Side - Features */}
          <div className="features-side">
            <h1>Find Your Dream Home</h1>
            <p className="features-description">
              Join thousands of satisfied customers who found their perfect property through OpenDoor.
            </p>
            <div className="features-list">
              <div className="feature-item"><span className="feature-number">1.</span><span>Over 50,000 properties listed</span></div>
              <div className="feature-item"><span className="feature-number">2.</span><span>Available in 12 countries</span></div>
              <div className="feature-item"><span className="feature-number">3.</span><span>Voted best real estate platform 2023</span></div>
              <div className="feature-item"><span className="feature-number">4.</span><span>Secure transactions guaranteed</span></div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="login-side">
            <div className="login-form-container">
              <h2>Welcome Back to OpenDoor!</h2>
              <p className="login-subtitle">Login to your account to explore your next home</p>
              
              <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Email</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
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
                
                <div className="form-options">
                  <div className="remember-me">
                    <input 
                      type="checkbox" 
                      id="rememberMe"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                    />
                    <label htmlFor="rememberMe">Remember me</label>
                  </div>
                  <a href="#" className="forgot-password">Forgot your password?</a>
                </div>
                
                <button type="submit" className="login-btn">
                  Log In
                </button>
                
                <div className="divider">
                  <span>OR</span>
                </div>
                
                <button type="button" className="social-btn google-btn">
                  Continue with Google
                </button>
                
                <p className="signup-link">
                  Don't have an account? <Link to="/signup">Sign Up</Link>
                </p>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;
