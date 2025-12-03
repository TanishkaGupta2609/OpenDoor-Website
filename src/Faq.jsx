import { useState, useEffect } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredFAQs, setFilteredFAQs] = useState([]);

  const faqData = [
    { id: 1, category: 'general', question: 'What is OpenDoor and how does it work?', answer: 'OpenDoor is an online real estate platform that helps you find, rent, or buy your dream home. You can browse listings, filter properties by your preferences, and contact owners or agents directly.' },
    { id: 2, category: 'general', question: 'Is OpenDoor available in my city?', answer: "OpenDoor is currently available in over 50 major cities across the country. We're continuously expanding our services to new locations. Check our locations page for the most up-to-date information." },
    { id: 3, category: 'general', question: 'How can I contact customer support?', answer: 'You can reach our customer support team via email at support@opendoor.com, through our live chat feature on the website, or by calling our toll-free number at 1-800-OPEN-DOOR.' },
    { id: 4, category: 'general', question: 'What makes OpenDoor different from other real estate platforms?', answer: 'OpenDoor offers verified listings, virtual tours, direct communication with property owners, and advanced filtering options. We also provide comprehensive support throughout your property journey.' },
    { id: 5, category: 'properties', question: 'How do I search for properties on OpenDoor?', answer: 'You can use the search bar to filter properties by type (house, apartment, villa), location, and price range. Advanced filters allow you to find homes that match your exact needs.' },
    { id: 6, category: 'properties', question: 'Are the property listings verified?', answer: 'Yes, OpenDoor verifies all listings to ensure that the property details are accurate and legitimate before showing them on the platform.' },
    { id: 7, category: 'properties', question: 'How can I schedule a visit to a property?', answer: 'You can contact the property owner or agent through the platform to schedule a viewing at a convenient time. Some listings also offer virtual tours.' },
    { id: 8, category: 'properties', question: 'Can I negotiate the rent or price on OpenDoor?', answer: 'Yes, once you contact the property owner or agent, you can discuss and negotiate the price or rental terms directly with them.' },
    { id: 9, category: 'properties', question: 'What types of properties are available on OpenDoor?', answer: 'We offer a wide variety of properties including apartments, houses, villas, condos, townhouses, and commercial spaces. You can filter by property type in our search feature.' },
    { id: 10, category: 'account', question: 'Is my personal information safe on OpenDoor?', answer: 'Absolutely. OpenDoor prioritizes your privacy. All data is securely stored and shared only with property owners or agents for your inquiries.' },
    { id: 11, category: 'account', question: 'How do I create an account on OpenDoor?', answer: 'Creating an account is simple! Click on the "Sign Up" button, provide your email address, create a password, and verify your email. You\'ll then have full access to all OpenDoor features.' },
    { id: 12, category: 'account', question: 'How do I reset my password?', answer: 'Click on "Forgot Password" on the login page, enter your email address, and we\'ll send you a password reset link. Follow the instructions in the email to create a new password.' },
    { id: 13, category: 'account', question: 'Can I delete my OpenDoor account?', answer: 'Yes, you can delete your account at any time. Go to your account settings, scroll to the bottom, and click "Delete Account." Please note that this action is permanent and cannot be undone.' },
    { id: 14, category: 'payments', question: 'What payment methods are accepted?', answer: 'We accept various payment methods including credit/debit cards, bank transfers, and digital wallets. Specific options may vary by property and location.' },
    { id: 15, category: 'payments', question: 'Is there a fee for using OpenDoor?', answer: 'OpenDoor is free for property seekers. Property owners pay a small commission fee only when their property is successfully rented or sold through our platform.' },
    { id: 16, category: 'payments', question: 'When is rent due each month?', answer: 'Rent due dates are determined by individual property owners. Typically, rent is due on the first of each month, but this can vary. Check your rental agreement for specific details.' },
    { id: 17, category: 'payments', question: 'Are there any hidden fees I should know about?', answer: "OpenDoor is transparent about all fees. Any applicable fees will be clearly displayed before you commit to a property. We don't believe in hidden charges." },
    { id: 18, category: 'payments', question: 'Can I set up automatic payments?', answer: 'Yes, you can set up automatic payments through your OpenDoor account. This ensures your rent is always paid on time and helps you avoid late fees.' }
  ];

  const styles = {
    global: `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }
      body {
        background: linear-gradient(135deg, #f0f7ff 0%, #e6f0ff 100%);
        color: #333;
        line-height: 1.6;
        min-height: 100vh;
      }
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    `,
    faqSection: {
      display: 'flex',
      justifyContent: 'center',
      gap: '40px',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      padding: '80px 10%',
    },
    faqContainer: {
      display: 'flex',
      gap: '40px',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      width: '100%',
      flexWrap: 'wrap'
    },
    faqTitle: {
      flex: '1 1 320px',
      background: 'white',
      padding: '50px 40px',
      borderRadius: '20px',
      boxShadow: '0 15px 40px rgba(0, 80, 160, 0.1)',
      position: 'sticky',
      top: '100px',
      height: 'fit-content'
    },
    titleContent: { position: 'relative' },
    faqSearch: { position: 'relative', marginBottom: '30px' },
    searchInput: {
      width: '100%',
      padding: '16px 20px',
      paddingRight: '50px',
      border: '2px solid #e1e8f0',
      borderRadius: '12px',
      fontSize: '16px',
      background: '#f8fbff',
      transition: 'all 0.3s',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.04)'
    },
    faqCategories: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '12px',
      marginBottom: '10px'
    },
    categoryBtn: {
      padding: '12px 20px',
      background: '#f0f7ff',
      border: '2px solid #e1e8f0',
      borderRadius: '25px',
      cursor: 'pointer',
      transition: 'all 0.3s',
      fontSize: '14px',
      fontWeight: '500',
      color: '#4a6fa5',
      flex: '1',
      minWidth: '120px',
      textAlign: 'center'
    },
    faqList: {
      flex: '2 1 600px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    },
    faqItem: {
      background: 'white',
      borderRadius: '16px',
      boxShadow: '0 5px 20px rgba(0, 0, 0, 0.06)',
      overflow: 'hidden',
      transition: 'all 0.3s',
      borderLeft: '4px solid transparent'
    },
    faqQuestion: {
      width: '100%',
      textAlign: 'left',
      fontSize: '18px',
      fontWeight: '600',
      background: 'none',
      border: 'none',
      outline: 'none',
      cursor: 'pointer',
      padding: '25px 30px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      transition: 'all 0.3s',
      color: '#0050a0'
    },
    faqAnswer: {
      maxHeight: '0',
      overflow: 'hidden',
      transition: 'max-height 0.4s ease-out',
      color: '#555',
      fontSize: '16px',
      lineHeight: '1.7'
    },
    contactSection: {
      background: 'linear-gradient(135deg, #0050a0 0%, #4dabf7 100%)',
      borderRadius: '20px',
      boxShadow: '0 15px 40px rgba(0, 80, 160, 0.3)',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
      margin: '80px 10%',
      width: '80%'
    },
    contactContent: {
      padding: '60px 40px',
      textAlign: 'center',
      position: 'relative',
      zIndex: '1'
    },
    contactBtn: {
      display: 'inline-block',
      padding: '16px 40px',
      background: 'white',
      color: '#0050a0',
      textDecoration: 'none',
      borderRadius: '50px',
      fontWeight: '600',
      transition: 'all 0.3s',
      fontSize: '16px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
      border: '2px solid transparent'
    },
    noResults: {
      textAlign: 'center',
      padding: '60px 20px',
      color: '#666',
      background: 'white',
      borderRadius: '16px',
      boxShadow: '0 5px 20px rgba(0, 0, 0, 0.06)'
    }
  };

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleSearch = (e) => setSearchTerm(e.target.value);
  const handleCategoryChange = (category) => setActiveCategory(category);

  useEffect(() => {
    const filtered = faqData.filter(faq => {
      const matchesSearch =
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        activeCategory === 'all' || faq.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
    setFilteredFAQs(filtered);
  }, [searchTerm, activeCategory]);

  const getCategoryBtnStyle = (category) => {
    const baseStyle = { ...styles.categoryBtn };
    if (activeCategory === category) {
      return {
        ...baseStyle,
        background: 'linear-gradient(135deg, #0050a0, #4dabf7)',
        color: 'white',
        borderColor: '#0050a0',
        boxShadow: '0 4px 15px rgba(0, 80, 160, 0.3)',
        transform: 'translateY(-2px)'
      };
    }
    return baseStyle;
  };

  const getFAQItemStyle = (index) => {
    const baseStyle = { ...styles.faqItem };
    if (activeIndex === index) {
      return {
        ...baseStyle,
        borderLeft: '4px solid #4dabf7',
        background: '#f8fbff',
        boxShadow: '0 5px 20px rgba(77, 171, 247, 0.15)'
      };
    }
    return baseStyle;
  };

  const getFAQAnswerStyle = (index) => {
    const baseStyle = { ...styles.faqAnswer };
    if (activeIndex === index) {
      return { ...baseStyle, maxHeight: '500px' };
    }
    return baseStyle;
  };

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'general', name: 'General' },
    { id: 'properties', name: 'Properties' },
    { id: 'account', name: 'Account' },
    { id: 'payments', name: 'Payments' }
  ];

  return (
    <div>
      <style>{styles.global}</style>

      <section style={styles.faqSection}>
        <div style={styles.faqContainer}>
          {/* Left Title Section */}
          <div style={styles.faqTitle}>
            <div style={styles.titleContent}>
              <h1 style={{ fontSize: '48px', marginBottom: '20px', color: '#0050a0', fontWeight: '700' }}>
                Questions?
              </h1>
              <p style={{ fontSize: '17px', color: '#555', marginBottom: '30px' }}>
                If you have questions, we have answers for you here.
                In case we don't, please reach out at{' '}
                <a href="mailto:projectwebsitenew@gmail.com" style={{ color: '#4dabf7', textDecoration: 'none', fontWeight: '600' }}>
                  projectwebsitenew@gmail.com
                </a>.
              </p>

              {/* Search */}
              <div style={styles.faqSearch}>
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={handleSearch}
                  style={styles.searchInput}
                />
                <i className="fas fa-search" style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', color: '#4dabf7', fontSize: '18px' }}></i>
              </div>

              {/* Categories */}
              <div style={styles.faqCategories}>
                {categories.map(category => (
                  <button
                    key={category.id}
                    style={getCategoryBtnStyle(category.id)}
                    onClick={() => handleCategoryChange(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ List */}
          <div style={styles.faqList}>
            {filteredFAQs.length === 0 ? (
              <div style={styles.noResults}>
                <i className="fas fa-search" style={{ fontSize: '60px', marginBottom: '20px', color: '#4dabf7', opacity: '0.7' }}></i>
                <h3 style={{ fontSize: '24px', marginBottom: '10px', color: '#0050a0' }}>No results found</h3>
                <p style={{ fontSize: '16px', color: '#777' }}>Try adjusting your search terms or browse different categories.</p>
              </div>
            ) : (
              filteredFAQs.map((faq, index) => (
                <div key={faq.id} style={getFAQItemStyle(index)}>
                  <button style={styles.faqQuestion} onClick={() => toggleFAQ(index)}>
                    <span>{faq.question}</span>
                    <i
                      className="fas fa-chevron-down"
                      style={{
                        transition: 'transform 0.3s',
                        color: '#4dabf7',
                        fontSize: '16px',
                        marginLeft: '15px',
                        transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0)'
                      }}
                    ></i>
                  </button>
                  <div style={getFAQAnswerStyle(index)}>
                    <p style={{ padding: '0 30px 30px', margin: '0' }}>{faq.answer}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Contact Section */}
        <div style={styles.contactSection}>
          <div style={styles.contactContent}>
            <h3 style={{ fontSize: '36px', marginBottom: '15px', fontWeight: '700' }}>Still have questions?</h3>
            <p style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '30px', fontSize: '18px', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
              Can't find the answer you're looking for? Please reach out to our friendly team.
            </p>
            <a href="./Contact" style={styles.contactBtn}>Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
