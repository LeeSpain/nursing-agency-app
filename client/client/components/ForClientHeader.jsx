import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo"; // Import the new Logo component

const ForClientHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Updated Logo with Link to Homepage */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <Logo /> {/* Reuse the Logo component */}
          </Link>
        </div>

        {/* Navigation Menu */}
        <div className="flex space-x-8">
          <Link
            to="/for-client"
            className="text-lg font-medium text-slate-700 hover:text-blue-500 transition-colors"
          >
            For Client
          </Link>
          <Link
            to="/for-client/features"
            className="text-lg font-medium text-slate-700 hover:text-blue-500 transition-colors"
          >
            Features
          </Link>
          <Link
            to="/for-client/options"
            className="text-lg font-medium text-slate-700 hover:text-blue-500 transition-colors"
          >
            Options
          </Link>
          <Link
            to="/for-client/prices"
            className="text-lg font-medium text-slate-700 hover:text-blue-500 transition-colors"
          >
            Prices
          </Link>
        </div>

        {/* Sign-Up / Login */}
        <div className="flex space-x-4">
          <Link to="/login">
            <button className="text-lg font-medium bg-white text-blue-600 px-4 py-2 border border-blue-500 rounded-full hover:bg-blue-50 transition">
              Login
            </button>
          </Link>
          <Link to="/join">
            <button className="text-lg font-medium bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
              Join
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default ForClientHeader;
