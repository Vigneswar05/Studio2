import React from 'react';
import { motion } from 'framer-motion';
import gallery1 from '../assets/gallery1.png';
import gallery2 from '../assets/gallery2.png';
import heroImg from '../assets/hero.png';

const Portfolio = () => {
  return (
    <main className="portfolio-page">
      <section className="portfolio-header">
        <motion.h1 
          className="hero-title portfolio-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Featured Weddings
        </motion.h1>
      </section>
      <section className="gallery-section">
        <div className="gallery-grid">
          <motion.div 
            className="gallery-item"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src={gallery1} alt="Intimate Vows" />
            <div className="gallery-item-info">
              <h3 className="gallery-item-title">Intimate Vows</h3>
            </div>
          </motion.div>
          <motion.div 
            className="gallery-item"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src={gallery2} alt="Editorial Romance" />
            <div className="gallery-item-info">
              <h3 className="gallery-item-title">Editorial Romance</h3>
            </div>
          </motion.div>
          <motion.div 
            className="gallery-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src={heroImg} alt="Classic Elegance" />
            <div className="gallery-item-info">
              <h3 className="gallery-item-title">Classic Elegance</h3>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
