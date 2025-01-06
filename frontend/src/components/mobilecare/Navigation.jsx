import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navigation">
      <Link to="/mobile-dashboard">Dashboard</Link>
      <Link to="/mobile-dashboard/clients">Clients</Link>
      <Link to="/mobile-dashboard/nurses">Nurses</Link>
      <Link to="/mobile-dashboard/reports">Reports</Link>
      <Link to="/mobile-dashboard/messages">Messages</Link>
    </nav>
  );
};

export default Navigation;
