import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import './App.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        {/* Header */}
        <header className="header">
          <Link to="/" className="logo" onClick={closeMenu}>Professional Studio</Link>
          
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-links">
              <li><Link to="/portfolio" onClick={closeMenu}>Portfolio</Link></li>
              <li><a href="/#about" onClick={closeMenu}>About</a></li>
              <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
            </ul>
          </nav>
        </header>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>

        {/* Contact/Footer Section */}
        <footer id="contact" className="footer">
          <h2 className="footer-logo">PROFESSIONAL STUDIO</h2>
          <div className="footer-links">
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
            <a href="#">Email</a>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 PROFESSIONAL STUDIO. ALL RIGHTS RESERVED.</p>
            <p style={{ marginTop: '10px' }}>ESTABLISHED IN 2024 / BASED IN THE CITY</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
