// src/components/Dashboard.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import TaskBoard from './TaskBoard';
import AddTaskModal from './modals/AddTaskModal';
import ProfileModal from './modals/ProfileModal';

const Dashboard = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [tasks, setTasks] = useState({
    todo: [
      {
        id: 1,
        title: "Research phase",
        description: "Conduct market research for new features",
        priority: "medium",
        assignee: "Jane Smith",
        dueDate: "2025/06/24"
      }
    ],
    inProgress: [
      {
        id: 2,
        title: "Database setup",
        description: "Configure Firebase and database schema",
        priority: "high",
        assignee: "Alex Johnson",
        dueDate: "2025/06/06"
      }
    ],
    done: [
      {
        id: 3,
        title: "Campus build",
        description: "Complete the campus building project",
        priority: "high",
        assignee: "John Doe",
        dueDate: "2025/06/24"
      }
    ]
  });

  const addTask = (newTask) => {
    setTasks(prev => ({
      ...prev,
      todo: [...prev.todo, { ...newTask, id: Date.now() }]
    }));
  };

  return (
    <div className="dashboard-container">
      <Header 
        onAddTask={() => setShowAddTask(true)}
        onProfile={() => setShowProfile(true)}
      />
      
      <motion.main 
        className="dashboard-main"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <TaskBoard tasks={tasks} setTasks={setTasks} />
      </motion.main>

      {showAddTask && (
        <AddTaskModal 
          onClose={() => setShowAddTask(false)}
          onSubmit={addTask}
        />
      )}

      {showProfile && (
        <ProfileModal 
          onClose={() => setShowProfile(false)}
          tasks={tasks}
        />
      )}
    </div>
  );
};

export default Dashboard;
