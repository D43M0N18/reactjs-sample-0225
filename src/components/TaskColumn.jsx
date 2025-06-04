// src/components/TaskColumn.jsx
import React from 'react';
import { motion } from 'framer-motion';
import TaskCard from './TaskCard';

const TaskColumn = ({ column, index, setTasks }) => {
  return (
    <motion.div 
      className="task-column"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="column-header">
        <div className="column-title">
          <span className="column-icon">{column.icon}</span>
          <span>{column.title}</span>
        </div>
        <span className="task-count">{column.tasks.length}</span>
      </div>

      <div className="column-content">
        {column.tasks.map((task, taskIndex) => (
          <TaskCard 
            key={task.id}
            task={task}
            index={taskIndex}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default TaskColumn;
