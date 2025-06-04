import React from 'react';
import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import avatar from '../../assets/avatar.png'; // Import the avatar image

const ProfileModal = ({ onClose, tasks }) => {
  const totalTasks = Object.values(tasks).flat().length;
  const completedTasks = tasks.done.length;
  const inProgressTasks = tasks.inProgress.length;

  return (
    <motion.div 
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="modal-content profile-modal"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
      >
        <div className="modal-header">
          <h3>Profile</h3>
          <button className="close-btn" onClick={onClose}>
            <XMarkIcon className="close-icon" />
          </button>
        </div>

        <div className="profile-content">
          <div className="profile-avatar">
            <img
              src={avatar}
              alt="User Avatar"
              className="avatar-circle"
              style={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                objectFit: 'cover',
                border: '2px solid rgba(255,255,255,0.3)'
              }}
            />
          </div>

          <div className="profile-info">
            <h4>Demo User</h4>
            <p>xyz@gmail.com</p>
          </div>

          <div className="profile-stats">
            <div className="stat-card">
              <div className="stat-number">{totalTasks}</div>
              <div className="stat-label">Total Tasks</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{completedTasks}</div>
              <div className="stat-label">Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{inProgressTasks}</div>
              <div className="stat-label">In Progress</div>
            </div>
          </div>

          <button className="logout-btn">
            🚪 Logout
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProfileModal;
