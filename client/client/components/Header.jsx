import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Navigation Menu */}
        <div className="flex space-x-8">
          <Link
            to="/for-nurse"
            className="text-lg font-medium text-slate-700 hover:text-emerald-500 transition"
          >
            For Nurse
          </Link>
          <Link
            to="/for-client"
            className="text-lg font-medium text-slate-700 hover:text-emerald-500 transition"
          >
            For Client
          </Link>
        </div>

        {/* Login/Join Buttons */}
        <div className="flex space-x-4">
          <Link to="/login">
            <button className="text-lg font-medium bg-white text-emerald-600 px-4 py-2 border border-emerald-500 rounded-full hover:bg-emerald-50 transition">
              Login
            </button>
          </Link>
          <Link to="/join">
            <button className="text-lg font-medium bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition">
              Join
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
