import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Clients from './Clients';
import Nurses from './Nurses';
import Reports from './Reports';
import Messages from './Messages';

const MobileCareRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/mobile-dashboard" element={<Dashboard />} />
        <Route path="/mobile-dashboard/clients" element={<Clients />} />
        <Route path="/mobile-dashboard/nurses" element={<Nurses />} />
        <Route path="/mobile-dashboard/reports" element={<Reports />} />
        <Route path="/mobile-dashboard/messages" element={<Messages />} />
      </Routes>
    </Router>
  );
};

export default MobileCareRoutes;
