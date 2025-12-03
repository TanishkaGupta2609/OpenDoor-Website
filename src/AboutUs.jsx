import './AboutUs.css';
const AboutUs = () => {
  return (
    <div className="about-page">
      

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <div className="content-wrapper">
            <div className="image">
              <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Modern Luxury Building" />
            </div>
            <div className="text-content">
              <h2>Why Choose OpenDoor?</h2>
              <p>
                At OpenDoor, we revolutionize real estate by making property search seamless and transparent. 
                With verified listings, expert agents, and cutting-edge technology, we help you find your 
                dream home effortlessly. Our commitment to excellence ensures every client receives 
                personalized service and support throughout their real estate journey.
              </p>
              <a href="contactus.html" className="btn">Get In Touch</a>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Steps Section */}
      <section className="steps-section">
        <h2>3 Simple Steps to Your Dream Home</h2>
        <div className="steps">
          <div className="step">
            <img src="https://img.icons8.com/ios/50/search--v1.png" alt="Search" />
            <h3>Search Property</h3>
            <p>Browse through thousands of verified properties with advanced filters to find exactly what you're looking for.</p>
          </div>
          <div className="step">
            <img src="https://img.icons8.com/ios/50/administrator-male--v1.png" alt="Contact" />
            <h3>Contact Agents</h3>
            <p>Connect directly with our certified real estate agents for personalized guidance and expert advice.</p>
          </div>
          <div className="step">
            <img src="https://img.icons8.com/ios/50/home--v1.png" alt="Property" />
            <h3>Enjoy Property</h3>
            <p>Move into your perfect home with our seamless documentation and hassle-free handover process.</p>
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section className="reviews-section">
        <h2>What Our Clients Say</h2>
        <div className="reviews">
          <div className="review">
            <div className="profile">
              <img src="https://i.pravatar.cc/50?img=1" alt="Sarah Johnson" />
              <div>
                <h4>Sarah Johnson</h4>
                <div className="stars">★★★★★</div>
              </div>
            </div>
            <p>Found my dream apartment in just 2 weeks! The agents were incredibly helpful and transparent throughout the entire process.</p>
          </div>
          <div className="review">
            <div className="profile">
              <img src="https://i.pravatar.cc/50?img=2" alt="Michael Chen" />
              <div>
                <h4>Michael Chen</h4>
                <div className="stars">★★★★☆</div>
              </div>
            </div>
            <p>Great platform with verified listings. Saved me from visiting multiple fake properties. Highly recommended for serious buyers!</p>
          </div>
          <div className="review">
            <div className="profile">
              <img src="https://i.pravatar.cc/50?img=3" alt="Emma Wilson" />
              <div>
                <h4>Emma Wilson</h4>
                <div className="stars">★★★★★</div>
              </div>
            </div>
            <p>The virtual tour feature helped me make a decision while I was abroad. Smooth transaction and excellent customer service.</p>
          </div>
          <div className="review">
            <div className="profile">
              <img src="https://i.pravatar.cc/50?img=4" alt="David Brown" />
              <div>
                <h4>David Brown</h4>
                <div className="stars">★★★★☆</div>
              </div>
            </div>
            <p>Professional agents and transparent pricing. Found a perfect rental property within my budget in record time.</p>
          </div>
          <div className="review">
            <div className="profile">
              <img src="https://i.pravatar.cc/50?img=5" alt="Lisa Martinez" />
              <div>
                <h4>Lisa Martinez</h4>
                <div className="stars">★★★★★</div>
              </div>
            </div>
            <p>Outstanding service! They helped me navigate the entire home buying process as a first-time buyer. Couldn't be happier!</p>
          </div>
          <div className="review">
            <div className="profile">
              <img src="https://i.pravatar.cc/50?img=6" alt="James Anderson" />
              <div>
                <h4>James Anderson</h4>
                <div className="stars">★★★★☆</div>
              </div>
            </div>
            <p>Reliable platform with genuine listings. The negotiation support helped me get a better deal on my new home. Thank you!</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;