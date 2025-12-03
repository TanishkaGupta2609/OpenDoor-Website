// Navbar.js

import { Link } from 'react-router-dom';
import logo from './logo.png';

import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <img src={logo} alt="OpenDoor Logo" className="logo-image" />
          <Link to="/" className="logo-link">
            <h2>OpenDoor</h2>
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/listings">Listings</Link>
          <Link to="/AboutUs">AboutUs</Link>
          <Link to="/faq">FAQs</Link>
          <Link to="/OrderHistory">Orders</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className="nav-auth">
          <Link to="/login" className="login-btn-nav">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;