import React from 'react';
import { motion } from 'framer-motion';
import heroImg from '../assets/hero.png';
import gallery1 from '../assets/gallery1.png';
import gallery2 from '../assets/gallery2.png';
import aboutImg from '../assets/about.png';

const Home = () => {
  return (
    <main>
      {/* Hero Section with Sticky Image Stack */}
      <section className="hero">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="hero-title">
            CAPTURE <br /> THE <br /> LOVE
          </h1>
          <p className="hero-subtitle">
            Timeless, editorial wedding photography capturing your most authentic moments in our professional studio and beyond.
          </p>
          <div className="hero-scroll-indicator">
            <span>SCROLL DOWN</span>
          </div>
        </motion.div>
        
        <div className="hero-images-stack">
          <div className="hero-image-item">
            <img src={heroImg} alt="Elegant Couple" />
          </div>
          <div className="hero-image-item">
            <img src={gallery1} alt="Intimate Vows" />
          </div>
          <div className="hero-image-item">
            <img src={gallery2} alt="Editorial Romance" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-image">
          <motion.img 
            src={aboutImg} 
            alt="Professional Studio Artist"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
        </div>
        <div className="about-content">
          <h2 className="about-title">OUR VISION</h2>
          <p className="about-text">
            Professional Studio was founded on the belief that your love story deserves to be told authentically. 
            We specialize in editorial, timeless wedding photography that captures the raw, unscripted emotions of your day.
          </p>
          <motion.button 
            className="btn-discover"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ marginTop: '2rem', borderBottom: '1px solid black', paddingBottom: '5px' }}
          >
            READ MORE
          </motion.button>
        </div>
      </section>
    </main>
  );
};

export default Home;
