// src/components/TaskCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

const TaskCard = ({ task, index }) => {
  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return '#ff6b6b';
      case 'medium': return '#ffa726';
      case 'low': return '#66bb6a';
      default: return '#90a4ae';
    }
  };

  return (
    <motion.div 
      className="task-card"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="task-header">
        <h4 className="task-title">{task.title}</h4>
        <div className="task-actions">
          <motion.button whileHover={{ scale: 1.1 }}>
            <PencilIcon className="action-icon" />
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }}>
            <TrashIcon className="action-icon" />
          </motion.button>
        </div>
      </div>

      <p className="task-description">{task.description}</p>

      <div className="task-footer">
        <div 
          className="priority-badge"
          style={{ backgroundColor: getPriorityColor(task.priority) }}
        >
          {task.priority}
        </div>
        <div className="task-meta">
          <span className="assignee">👤 {task.assignee}</span>
          <span className="due-date">📅 {task.dueDate}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default TaskCard;
