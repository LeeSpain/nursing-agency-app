import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const ForNurseHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <header className="fixed top-0 left-0 right-0 bg-emerald-600 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/fornurse">
            <Logo />
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-[#A390E4]">
              Home
            </Link>
            <Link to="/fornurse/how-it-works" className="text-white hover:text-[#A390E4]">
              How It Works
            </Link>
            <Link to="/fornurse/services" className="text-white hover:text-[#A390E4]">
              Services
            </Link>
            <Link to="/fornurse/pricing" className="text-white hover:text-[#A390E4]">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-white hover:text-[#A390E4]">
              Login
            </Link>
            {/* Dropdown for Dashboard */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="bg-[#A390E4] text-white px-4 py-2 rounded-full hover:bg-[#C5B8F0] transition"
                aria-expanded={isDropdownOpen}
                aria-controls="dashboard-dropdown"
              >
                Dashboard
              </button>
              {isDropdownOpen && (
                <div
                  id="dashboard-dropdown"
                  className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg"
                >
                  {/* Home Page and For Nurse Home links */}
                  <Link
                    to="/" // Root path leading to HomePage
                    className="block px-4 py-2 text-gray-700 hover:bg-[#A390E4] hover:text-white"
                  >
                    Home Page
                  </Link>
                  <Link
                    to="/fornurse" // For Nurse Home page
                    className="block px-4 py-2 text-gray-700 hover:bg-[#A390E4] hover:text-white"
                  >
                    For Nurse Home
                  </Link>
                  {/* Dashboard Sub-options */}
                  <Link
                    to="/platform-nurse"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#A390E4] hover:text-white"
                  >
                    Platform Nurse
                  </Link>
                  <Link
                    to="/selfemployed/dashboard"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#A390E4] hover:text-white"
                  >
                    Self-Employed
                  </Link>
                  <Link
                    to="/mobilecare/dashboard"
                    className="block px-4 py-2 text-gray-700 hover:bg-[#A390E4] hover:text-white"
                  >
                    MobileCare
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ForNurseHeader;