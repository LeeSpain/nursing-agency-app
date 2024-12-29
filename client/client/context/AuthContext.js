// src/context/AuthContext.js

import { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (emailOrUsername, password) => {
    setLoading(true);
    setError(null);
    try {
      // Here you would typically make an API call to your backend
      // For now, we'll simulate a login
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      if (emailOrUsername === 'test@test.com' && password === 'password') {
        const userData = {
          id: 1,
          name: 'Test User',
          email: emailOrUsername,
          role: 'admin'
        };
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        return true;
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (err) {
      setError(err.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    loading,
    error,
    login,
    logout,
    setError
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};