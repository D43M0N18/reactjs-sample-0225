// src/components/TaskBoard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import TaskColumn from './TaskColumn';
import { PlusIcon } from '@heroicons/react/24/outline';

const TaskBoard = ({ tasks, setTasks }) => {
  const columns = [
    { id: 'todo', title: 'To Do', icon: '📋', tasks: tasks.todo },
    { id: 'inProgress', title: 'In Progress', icon: '⚡', tasks: tasks.inProgress },
    { id: 'done', title: 'Done', icon: '✅', tasks: tasks.done }
  ];

  return (
    <div className="task-board">
      <div className="board-header">
        <div className="board-title">
          <h2>Task Board</h2>
          <div className="task-stats">
            <span className="stat">📊 {Object.values(tasks).flat().length} Total</span>
            <span className="stat">✅ {tasks.done.length} Done</span>
          </div>
        </div>
        <motion.button 
          className="add-task-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <PlusIcon className="plus-icon" />
          Add Task
        </motion.button>
      </div>

      <div className="columns-container">
        {columns.map((column, index) => (
          <TaskColumn 
            key={column.id}
            column={column}
            index={index}
            setTasks={setTasks}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskBoard;
