// src/components/Header.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { MagnifyingGlassIcon, PlusIcon } from '@heroicons/react/24/outline';

const Header = ({ onAddTask, onProfile }) => {
  return (
    <motion.header 
      className="dashboard-header"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="header-left">
        <div className="logo">
          <span className="logo-icon">≡</span>
          <span className="logo-text">TaskFlow</span>
        </div>
        <div className="search-container">
          <MagnifyingGlassIcon className="search-icon" />
          <input 
            type="text" 
            placeholder="Search tasks..." 
            className="search-input"
          />
        </div>
      </div>

      <div className="header-right">
        <motion.button 
          className="connect-wallet-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🔗 Connect Wallet
        </motion.button>
        
        <motion.button 
          className="profile-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onProfile}
        >
          👤
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Header;
