import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import FeaturesPage from './components/FeaturesPage';
import Navigation from './components/Navigation';
import AdminDashboard from './components/dashboard/AdminDashboard';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Regular routes with Navigation */}
        <Route
          path="/"
          element={
            <>
              <Navigation />
              <HomePage />
            </>
          }
        />
        <Route
          path="/features"
          element={
            <>
              <Navigation />
              <FeaturesPage />
            </>
          }
        />
        
        {/* Admin route without main navigation */}
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}