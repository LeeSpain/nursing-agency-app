import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const MainHeader = () => (
  <header className="fixed top-0 left-0 right-0 bg-[#A390E4] shadow-lg z-50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex items-center justify-between h-20">
        {/* Logo Component */}
        <Link to="/" className="flex items-center space-x-2">
          <Logo />
        </Link>

        {/* Main Navigation - Centralized */}
        <nav className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 space-x-8">
          <Link 
            to="/CareSeeker" 
            className="text-white hover:text-white/80 transition-colors font-medium"
          >
            Care Seekers
          </Link>
          <Link 
            to="/fornurse" 
            className="text-white hover:text-white/80 transition-colors font-medium"
          >
            Healthcare Providers
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-white hover:text-white/80" aria-label="Menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </div>
  </header>
);

export default MainHeader;
