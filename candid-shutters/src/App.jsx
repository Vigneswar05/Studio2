import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './index.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">CONSISTENTLY RANKED AMONGST THE BEST WEDDING PHOTOGRAPHERS IN INDIA SINCE 2012.</h1>
          <p className="hero-subtitle">Based out of Tamil Nadu, we cover weddings across the globe.</p>
          <div className="hero-rating">
             <span className="stars">★★★★★</span> 4.7 on Google
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="intro-section" id="about">
        <div className="watermark">SAMPLE</div>
        <div className="intro-content">
          <div className="script-logo">Sample Studio</div>
          <h2 className="intro-title">Artistic Story Telling Celebrating YOU!</h2>
          
          <div className="intro-image-wrapper">
            <img src="/hero.png" alt="Beautiful Wedding Couple" />
          </div>

          <p className="intro-text">
            Welcome to Sample Studio, where we infuse magic into your wedding memories turning them into timeless tales of love and companionship.<br/><br/>
            We are an award-winning premium wedding photography and films brand, known for our artistic, professional and customer centric approach. We believe in and exist to showcase the most beautiful and heartfelt stories of your life in their true magnificence.
          </p>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="portfolio-section" id="portfolio">
        <div className="section-header">
          <h2 className="section-title">Portfolio</h2>
          <div className="section-subtitle">Real Love Stories</div>
        </div>
        
        <div className="portfolio-grid">
          <div className="portfolio-item">
            <img src="/punjabi.png" alt="Vibrant Punjabi Wedding" />
            <div className="portfolio-overlay">
              <div className="portfolio-info">
                <h4>Punjabi</h4>
                <p>Vibrant Wedding Photography</p>
              </div>
            </div>
          </div>
          <div className="portfolio-item">
            <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800" alt="Goa Destination Wedding" />
            <div className="portfolio-overlay">
              <div className="portfolio-info">
                <h4>Goa</h4>
                <p>A Grand Celebration of Love</p>
              </div>
            </div>
          </div>
          <div className="portfolio-item">
            <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800" alt="Catholic Wedding" />
            <div className="portfolio-overlay">
              <div className="portfolio-info">
                <h4>Catholic</h4>
                <p>Surreal Mumbai Wedding</p>
              </div>
            </div>
          </div>
          <div className="portfolio-item">
            <img src="/south_indian.png" alt="South Indian" />
            <div className="portfolio-overlay">
              <div className="portfolio-info">
                <h4>South Indian</h4>
                <p>Spiritual Bond of Love</p>
              </div>
            </div>
          </div>
          <div className="portfolio-item">
            <img src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=800" alt="New York Wedding" />
            <div className="portfolio-overlay">
              <div className="portfolio-info">
                <h4>New York</h4>
                <p>The Unforgettable Wedding</p>
              </div>
            </div>
          </div>
          <div className="portfolio-item">
            <img src="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=800" alt="Lonavala Wedding" />
            <div className="portfolio-overlay">
              <div className="portfolio-info">
                <h4>Lonavala</h4>
                <p>Best Wedding Photographers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        
        {/* Header & Navigation */}
        <div className={`header-wrapper header ${scrolled ? 'scrolled' : ''}`}>
          <div className="top-bar">
            <div className="top-bar-contact">
              <span style={{ marginRight: '15px' }}>📞 +91 98765 43210</span>
              <span>✉️ contact@samplestudio.com</span>
            </div>
            <div className="top-bar-social">
              <a href="#">FB</a>
              <a href="#">IG</a>
              <a href="#">YT</a>
            </div>
          </div>
          
          <div className="main-nav">
            <Link to="/" className="logo">
              Sample Studio
            </Link>
            <nav className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </nav>
          </div>
        </div>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        {/* Footer Section */}
        <footer id="contact" className="footer-contact">
          <h2>Write to us</h2>
          <p style={{ color: '#666', marginBottom: '40px' }}>We would love to hear from you. You may fill the form below and we will revert ASAP.</p>
          
          <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert("Thanks for your message!"); }}>
            <div className="form-row">
              <input type="text" placeholder="Your Name *" required />
              <input type="email" placeholder="Your Email *" required />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Subject" />
            </div>
            <div className="form-row">
              <textarea placeholder="Your Message *" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>

          <div className="footer-bottom">
            <p>Made with love in Tamil Nadu, India.</p>
            <p style={{ marginTop: '10px' }}>© 2026 Sample Studio. All Rights Reserved.</p>
          </div>
        </footer>

        {/* Floating Actions */}
        <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="whatsapp-btn">
          💬
        </a>
        <div className="back-to-top" onClick={scrollToTop}>
          ↑
        </div>

      </div>
    </Router>
  );
};

export default App;
