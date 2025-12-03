import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const [searchType, setSearchType] = useState('Buy');
  const [propertyType, setPropertyType] = useState('Houses');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('₹5,000-₹30,000');
  const navigate = useNavigate();

  // Add the missing handleSearch function
  const handleSearch = () => {
    // Convert price range to the format expected by Listings page
    const priceRanges = {
      '₹5,000-₹30,000': 30000,
      '₹30,000 - ₹50,000': 50000,
      '₹50,000 - ₹70,000': 70000,
      '₹70,000+': 100000
    };

    const searchParams = {
      searchType,
      propertyType: propertyType.toLowerCase(),
      location: location.toLowerCase(),
      priceRange: priceRanges[priceRange] || 30000
    };

    // Navigate to listings page with search parameters
    navigate('/listings', { state: searchParams });
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Stop dreaming, <span className="highlight">Start living</span>
          </h1>
          <p className="hero-subtitle">Discover Your Perfect Home</p>
          
          <div className="search-container">
            <div className="search-tabs">
              <button 
                className={`tab ${searchType === 'Buy' ? 'active' : ''}`}
                onClick={() => setSearchType('Buy')}
              >
                Buy
              </button>
              <button 
                className={`tab ${searchType === 'Rent' ? 'active' : ''}`}
                onClick={() => setSearchType('Rent')}
              >
                Rent
              </button>
            </div>
            
            <div className="search-filters">
              <select 
                className="filter-select"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
              >
                <option>Houses</option>
                <option>Apartments</option>
                <option>Villas</option>
                <option>Commercial</option>
              </select>
              
              <div className="location-input">
                <input 
                  type="text" 
                  placeholder="Location e.g. Delhi"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              
              <select 
                className="filter-select"
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              >
                <option>₹5,000-₹30,000</option>
                <option>₹30,000 - ₹50,000</option>
                <option>₹50,000 - ₹70,000</option>
                <option>₹70,000+</option>
              </select>
              
              {/* Make sure this button has onClick={handleSearch} */}
              <button className="search-btn" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;