import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">MyApp</h2>
      <nav>
        <Link to="/dashboard">🏠 Dashboard</Link>
        <Link to="/orders">📦 Orders</Link>
        <Link to="/settings">⚙️ Settings</Link>
        <Link to="/profile">👤 Profile</Link>
        <Link to="/support">📞 Support</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
