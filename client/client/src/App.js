import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import FeaturesPage from './components/FeaturesPage';
import Navigation from './components/Navigation';
import AdminDashboard from './components/dashboard/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import LoginPage from './components/LoginPage';

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

        {/* Admin route protected */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* Login route */}
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}
