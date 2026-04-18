import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
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
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        {/* Header */}
        <header className="header">
          <Link to="/" className="logo">Professional Studio</Link>
          <nav>
            <ul className="nav-links">
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/#about">About</Link></li>
              <li><a href="#contact">Contact</a></li>
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
