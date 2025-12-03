import React, { useState, useEffect } from 'react';
import './listings.css';

const Listings = () => {
    const [houses] = useState([
        { 
            id: 1, 
            title: "Modern Downtown Apartment", 
            price: 45000, 
            location: "downtown", 
            bedrooms: 2, 
            type: "apartment", 
            amenities: ["parking", "gym"], 
            image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", 
            detailImage: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
        },
        { 
            id: 2, 
            title: "Spacious Suburban House", 
            price: 75000, 
            location: "suburbs", 
            bedrooms: 4, 
            type: "house", 
            amenities: ["parking", "pool"], 
            image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", 
            detailImage: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
        },
        { 
            id: 3, 
            title: "Cozy Rural Cottage", 
            price: 25000, 
            location: "rural", 
            bedrooms: 2, 
            type: "house", 
            amenities: [], 
            image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", 
            detailImage: "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
        },
        { 
            id: 4, 
            title: "Luxury Waterfront Villa", 
            price: 150000, 
            location: "waterfront", 
            bedrooms: 4, 
            type: "house", 
            amenities: ["parking", "pool", "gym"], 
            image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", 
            detailImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
        },
        { 
            id: 5, 
            title: "City Center Studio", 
            price: 30000, 
            location: "downtown", 
            bedrooms: 1, 
            type: "apartment", 
            amenities: ["gym", "laundry"], 
            image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", 
            detailImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
        },
        { 
            id: 6, 
            title: "Family Townhouse", 
            price: 65000, 
            location: "suburbs", 
            bedrooms: 3, 
            type: "townhouse", 
            amenities: ["parking", "laundry"], 
            image: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", 
            detailImage: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
        },
        { 
            id: 7, 
            title: "Lakeview Condo", 
            price: 55000, 
            location: "waterfront", 
            bedrooms: 2, 
            type: "condo", 
            amenities: ["parking", "pool"], 
            image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", 
            detailImage: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
        },
        { 
            id: 8, 
            title: "Countryside Retreat", 
            price: 22000, 
            location: "rural", 
            bedrooms: 3, 
            type: "house", 
            amenities: [], 
            image: "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", 
            detailImage: "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
        },
        { 
            id: 9, 
            title: "Urban Loft Apartment", 
            price: 50000, 
            location: "downtown", 
            bedrooms: 1, 
            type: "apartment", 
            amenities: ["gym", "laundry"], 
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", 
            detailImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
        },
        { 
            id: 10, 
            title: "Suburban Duplex", 
            price: 42000, 
            location: "suburbs", 
            bedrooms: 3, 
            type: "townhouse", 
            amenities: ["parking"], 
            image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", 
            detailImage: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
        }
    ]);

    const [filteredHouses, setFilteredHouses] = useState(houses);
    const [priceRange, setPriceRange] = useState(50000);
    const [selectedLocations, setSelectedLocations] = useState(['downtown', 'suburbs', 'rural', 'waterfront']);
    const [selectedBedrooms, setSelectedBedrooms] = useState(['1', '2', '3', '4']);
    const [selectedTypes, setSelectedTypes] = useState(['apartment', 'house', 'condo', 'townhouse']);
    const [selectedAmenities, setSelectedAmenities] = useState([]);
    const [currentHouse, setCurrentHouse] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const formatIndianCurrency = (price) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(price);
    };

    const handleLocationChange = (location) => {
        setSelectedLocations(prev => 
            prev.includes(location) 
                ? prev.filter(l => l !== location)
                : [...prev, location]
        );
    };

    const handleBedroomChange = (bedroom) => {
        setSelectedBedrooms(prev => 
            prev.includes(bedroom) 
                ? prev.filter(b => b !== bedroom)
                : [...prev, bedroom]
        );
    };

    const handleTypeChange = (type) => {
        setSelectedTypes(prev => 
            prev.includes(type) 
                ? prev.filter(t => t !== type)
                : [...prev, type]
        );
    };

    const handleAmenityChange = (amenity) => {
        setSelectedAmenities(prev => 
            prev.includes(amenity) 
                ? prev.filter(a => a !== amenity)
                : [...prev, amenity]
        );
    };

    const showHouseDetails = (house) => {
        setCurrentHouse(house);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setCurrentHouse(null);
    };

    const placeOrderDirectly = (house) => {
        const isLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
        
        if (!isLoggedIn) {
            if (window.confirm('You need to login to place an order. Would you like to login now?')) {
                window.location.href = '/login';
            }
            return;
        }
        
        const confirmMessage = `Place Order for:\n${house.title}\n${formatIndianCurrency(house.price)}/month\n\nDo you want to proceed with this rental?`;
        
        if (window.confirm(confirmMessage)) {
            rentProperty(house);
        }
    };

    const rentProperty = (house = currentHouse) => {
        if (!house) return;
        
        const orderId = "ORD" + Math.floor(1000 + Math.random() * 9000);
        const today = new Date();
        const dateString = today.toISOString().split('T')[0];
        
        const newOrder = {
            id: orderId,
            property: house.title,
            location: house.location.charAt(0).toUpperCase() + house.location.slice(1),
            date: dateString,
            amount: house.price,
            status: "Pending",
            bedrooms: house.bedrooms,
            type: house.type,
            amenities: house.amenities
        };
        
        let orders = JSON.parse(localStorage.getItem('orders')) || [];
        
        const existingOrder = orders.find(order => 
            order.property === newOrder.property && order.status === 'Pending'
        );
        
        if (existingOrder) {
            if (!window.confirm('You already have a pending order for this property. Would you like to place another order?')) {
                return;
            }
        }
        
        orders.push(newOrder);
        localStorage.setItem('orders', JSON.stringify(orders));
        
        const successMessage = `🎉 Order Placed Successfully! \n\n📋 Order Details:\n• Order ID: ${orderId}\n• Property: ${house.title}\n• Amount: ${formatIndianCurrency(house.price)}/month\n• Status: Pending\n• Date: ${new Date().toLocaleDateString()}\n\nYou can track your order in the Order History page.`;
        
        alert(successMessage);
        setShowModal(false);
        
        setTimeout(() => {
            if (window.confirm('Would you like to view your order history?')) {
                window.location.href = '/orderhistory';
            }
        }, 500);
    };

    useEffect(() => {
        if (!localStorage.getItem('userLoggedIn')) {
            localStorage.setItem('userLoggedIn', 'true');
        }

        const filtered = houses.filter(house => {
            if (house.price > priceRange) return false;
            
            if (!selectedLocations.includes(house.location)) return false;
            
            let bedroomMatch = false;
            selectedBedrooms.forEach(bedroom => {
                if (bedroom === '4' && house.bedrooms >= 4) bedroomMatch = true;
                else if (parseInt(bedroom) === house.bedrooms) bedroomMatch = true;
            });
            if (!bedroomMatch) return false;
            
            if (!selectedTypes.includes(house.type)) return false;
            
            if (selectedAmenities.length > 0) {
                const hasAllSelectedAmenities = selectedAmenities.every(amenity => 
                    house.amenities.includes(amenity)
                );
                if (!hasAllSelectedAmenities) return false;
            }
            
            return true;
        });
        
        setFilteredHouses(filtered);
    }, [priceRange, selectedLocations, selectedBedrooms, selectedTypes, selectedAmenities, houses]);

    return (
        <div className="listings-page">
            
            <div className="container">
                <aside className="filters">
                    <h2>Filters</h2>
                    
                    <div className="filter-group">
                        <h3>Price Range (₹)</h3>
                        <input 
                            type="range" 
                            min="5000" 
                            max="100000" 
                            value={priceRange} 
                            className="price-input" 
                            onChange={(e) => setPriceRange(parseInt(e.target.value))}
                        />
                        <div className="price-values">
                            <span>₹5,000</span>
                            <span>₹1,00,000</span>
                        </div>
                        <p>Selected: <span>{formatIndianCurrency(priceRange)}</span></p>
                    </div>
                    
                    <div className="filter-group">
                        <h3>Location</h3>
                        <div className="filter-options">
                            <label>
                                <input 
                                    type="checkbox" 
                                    name="location" 
                                    value="downtown"
                                    checked={selectedLocations.includes('downtown')}
                                    onChange={() => handleLocationChange('downtown')}
                                /> 
                                Downtown
                            </label>
                            <label>
                                <input 
                                    type="checkbox" 
                                    name="location" 
                                    value="suburbs"
                                    checked={selectedLocations.includes('suburbs')}
                                    onChange={() => handleLocationChange('suburbs')}
                                /> 
                                Suburbs
                            </label>
                            <label>
                                <input 
                                    type="checkbox" 
                                    name="location" 
                                    value="rural"
                                    checked={selectedLocations.includes('rural')}
                                    onChange={() => handleLocationChange('rural')}
                                /> 
                                Rural
                            </label>
                            <label>
                                <input 
                                    type="checkbox" 
                                    name="location" 
                                    value="waterfront"
                                    checked={selectedLocations.includes('waterfront')}
                                    onChange={() => handleLocationChange('waterfront')}
                                /> 
                                Waterfront
                            </label>
                        </div>
                    </div>
                    
                    <div className="filter-group">
                        <h3>Bedrooms</h3>
                        <div className="filter-options">
                            <label>
                                <input 
                                    type="checkbox" 
                                    name="bedrooms" 
                                    value="1"
                                    checked={selectedBedrooms.includes('1')}
                                    onChange={() => handleBedroomChange('1')}
                                /> 
                                1 Bedroom
                            </label>
                            <label>
                                <input 
                                    type="checkbox" 
                                    name="bedrooms" 
                                    value="2"
                                    checked={selectedBedrooms.includes('2')}
                                    onChange={() => handleBedroomChange('2')}
                                /> 
                                2 Bedrooms
                            </label>
                            <label>
                                <input 
                                    type="checkbox" 
                                    name="bedrooms" 
                                    value="3"
                                    checked={selectedBedrooms.includes('3')}
                                    onChange={() => handleBedroomChange('3')}
                                /> 
                                3 Bedrooms
                            </label>
                            <label>
                                <input 
                                    type="checkbox" 
                                    name="bedrooms" 
                                    value="4"
                                    checked={selectedBedrooms.includes('4')}
                                    onChange={() => handleBedroomChange('4')}
                                /> 
                                4+ Bedrooms
                            </label>
                        </div>
                    </div>
                    
                    <div className="filter-group">
                        <h3>Property Type</h3>
                        <div className="filter-options">
                            <label>
                                <input 
                                    type="checkbox" 
                                    name="type" 
                                    value="apartment"
                                    checked={selectedTypes.includes('apartment')}
                                    onChange={() => handleTypeChange('apartment')}
                                /> 
                                Apartment
                            </label>
                            <label>
                                <input 
                                    type="checkbox" 
                                    name="type" 
                                    value="house"
                                    checked={selectedTypes.includes('house')}
                                    onChange={() => handleTypeChange('house')}
                                /> 
                                House
                            </label>
                            <label>
                                <input 
                                    type="checkbox" 
                                    name="type" 
                                    value="condo"
                                    checked={selectedTypes.includes('condo')}
                                    onChange={() => handleTypeChange('condo')}
                                /> 
                                Condo
                            </label>
                            <label>
                                <input 
                                    type="checkbox" 
                                    name="type" 
                                    value="townhouse"
                                    checked={selectedTypes.includes('townhouse')}
                                    onChange={() => handleTypeChange('townhouse')}
                                /> 
                                Townhouse
                            </label>
                        </div>
                    </div>
                    
                    <div className="filter-group">
                        <h3>Amenities</h3>
                        <div className="filter-options">
                            <label>
                                <input 
                                    type="checkbox" 
                                    name="amenities" 
                                    value="parking"
                                    checked={selectedAmenities.includes('parking')}
                                    onChange={() => handleAmenityChange('parking')}
                                /> 
                                Parking
                            </label>
                            <label>
                                <input 
                                    type="checkbox" 
                                    name="amenities" 
                                    value="pool"
                                    checked={selectedAmenities.includes('pool')}
                                    onChange={() => handleAmenityChange('pool')}
                                /> 
                                Pool
                            </label>
                            <label>
                                <input 
                                    type="checkbox" 
                                    name="amenities" 
                                    value="gym"
                                    checked={selectedAmenities.includes('gym')}
                                    onChange={() => handleAmenityChange('gym')}
                                /> 
                                Gym
                            </label>
                            <label>
                                <input 
                                    type="checkbox" 
                                    name="amenities" 
                                    value="laundry"
                                    checked={selectedAmenities.includes('laundry')}
                                    onChange={() => handleAmenityChange('laundry')}
                                /> 
                                Laundry
                            </label>
                        </div>
                    </div>
                </aside>
                
                <main className="listings" id="houseListings">
                    {filteredHouses.length === 0 ? (
                        <div className="no-results">
                            <i className="fas fa-search"></i>
                            <h3>No properties found</h3>
                            <p>Try adjusting your filters to see more results</p>
                        </div>
                    ) : (
                        filteredHouses.map(house => (
                            <div key={house.id} className="house-card">
                                <div className="house-img">
                                    <img src={house.image} alt={house.title} loading="lazy" />
                                    <div className="house-overlay">
                                        <button className="quick-view-btn" onClick={() => showHouseDetails(house)}>
                                            <i className="fas fa-eye"></i> Quick View
                                        </button>
                                    </div>
                                </div>
                                <div className="house-info">
                                    <h3>{house.title}</h3>
                                    <p><i className="fas fa-bed"></i> {house.bedrooms} Bedroom {house.type}</p>
                                    <p><i className="fas fa-map-marker-alt"></i> {house.location.charAt(0).toUpperCase() + house.location.slice(1)} Area</p>
                                    <div className="price">{formatIndianCurrency(house.price)}/month</div>
                                    <div className="card-actions">
                                        <button className="view-details-btn" onClick={() => showHouseDetails(house)}>
                                            <i className="fas fa-info-circle"></i> View Details
                                        </button>
                                        <button className="rent-now-card-btn" onClick={() => placeOrderDirectly(house)}>
                                            <i className="fas fa-home"></i> Rent Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </main>
            </div>
            
            {showModal && currentHouse && (
                <div className="modal" style={{display: 'block'}}>
                    <span className="close" onClick={closeModal}>&times;</span>
                    <img className="modal-content" src={currentHouse.detailImage} alt={currentHouse.title} />
                    <div className="modal-caption">
                        <h3>{currentHouse.title}</h3>
                        <p><i className="fas fa-bed"></i> {currentHouse.bedrooms} Bedroom {currentHouse.type}</p>
                        <p><i className="fas fa-map-marker-alt"></i> {currentHouse.location.charAt(0).toUpperCase() + currentHouse.location.slice(1)} Area</p>
                        <p><i className="fas fa-rupee-sign"></i> {formatIndianCurrency(currentHouse.price)}/month</p>
                        <p><i className="fas fa-star"></i> Amenities: {currentHouse.amenities.length > 0 ? currentHouse.amenities.map(amenity => <span key={amenity} className="amenity-tag">{amenity}</span>) : 'None'}</p>
                        <div className="property-description">
                            <p>Beautiful {currentHouse.type.toLowerCase()} located in the {currentHouse.location} area. Perfect for {currentHouse.bedrooms > 2 ? 'families' : 'individuals or couples'} looking for a comfortable living space with modern amenities.</p>
                        </div>
                        <div className="modal-actions">
                            <button className="secondary-btn" onClick={closeModal}>
                                <i className="fas fa-times"></i> Close
                            </button>
                            <button className="primary-btn" onClick={() => rentProperty(currentHouse)}>
                                <i className="fas fa-home"></i> Rent This Property
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Listings;