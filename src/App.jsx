import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';
import Contact from './Contact';
import LoginPage from './LoginPage';
import SignUp from './SignUp';
import Footer from './Footer';
import Listings from './Listings';
import OrderHistory from './OrderHistory';
import AboutUs from './AboutUs';
import Faq from './Faq';
import './App.css';

function AppContent() {
  const location = useLocation();

  // Define pages where Navbar & Footer should be hidden
  const hideHeaderFooter = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div className="App">
      {!hideHeaderFooter && <Navbar />}

      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/OrderHistory" element={<OrderHistory />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </main>

      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
