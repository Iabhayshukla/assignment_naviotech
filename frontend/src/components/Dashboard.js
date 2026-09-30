import React from 'react';
import { useAuth } from '../context/AuthContext';
import './Dashboard.css';

const Dashboard = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h1>Welcome, {user?.username}!</h1>
        <div className="user-info">
          <p><strong>Email:</strong> {user?.email}</p>
          <p><strong>User ID:</strong> {user?._id}</p>
        </div>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
