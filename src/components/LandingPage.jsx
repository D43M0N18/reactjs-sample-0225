import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ShieldCheckIcon, UsersIcon, CubeIcon } from '@heroicons/react/24/outline';
import bgHero from '../assets/bg-hero.jpg'; // Import the background image

const LandingPage = () => {
  const navigate = useNavigate();

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div
      className="landing-container"
      style={{
        minHeight: '100vh',
        background: `linear-gradient(135deg, rgba(102,126,234,0.8) 0%, rgba(118,75,162,0.8) 100%), url(${bgHero}) center/cover no-repeat`,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Header */}
      <motion.header 
        className="header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="nav-container">
          <div className="logo">
            <span className="logo-icon">≡</span>
            <span className="logo-text">TaskFlow</span>
          </div>
          <div className="auth-buttons">
            <button className="btn-secondary" onClick={() => navigate('/login')}>
              Login
            </button>
            <button className="btn-primary" onClick={() => navigate('/signup')}>
              Sign Up
            </button>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="main-content">
        <div className="hero-section">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1>
              Manage Tasks with<br />
              <span className="gradient-text">Web3 Power</span>
            </h1>
            <p>
              Experience the future of task management with blockchain integration, real-time collaboration, and stunning glassmorphism design.
            </p>
            <motion.button 
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/dashboard')}
            >
              Get Started →
            </motion.button>
          </motion.div>

          <div className="hero-cards">
            <motion.div 
              className="floating-card card-1"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
            >
              <ShieldCheckIcon className="card-icon" />
              <span>Smart Tasks</span>
            </motion.div>

            <motion.div 
              className="floating-card card-2"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
            >
              <UsersIcon className="card-icon" />
              <span>Team Collaboration</span>
            </motion.div>

            <motion.div 
              className="floating-card card-3"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.8 }}
            >
              <CubeIcon className="card-icon" />
              <span>Web3 Ready</span>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
