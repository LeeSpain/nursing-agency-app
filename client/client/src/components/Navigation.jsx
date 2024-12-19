import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="relative">
              <span className="text-emerald-500 text-3xl font-bold mr-2">+</span>
              <span className="text-slate-800 text-xl font-bold">
                Nurse-Sync<sup className="text-sm">®</sup>
              </span>
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/features" 
              className={`px-4 py-2 transition-colors ${
                location.pathname === '/features' 
                  ? 'text-emerald-500' 
                  : 'text-slate-700 hover:text-emerald-500'
              }`}
            >
              Features
            </Link>
            <button className="px-4 py-2 text-slate-700 hover:text-emerald-500 transition-colors">
              Resources
            </button>
            <button className="bg-emerald-500 text-white px-6 py-2 rounded-full hover:bg-emerald-600">
              Sign Up Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-700">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}