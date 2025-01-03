import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const ForNurseHeader = () => (
  <header className="fixed top-0 left-0 right-0 bg-emerald-600 shadow-lg z-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between h-20">
        <Link to="/fornurse">
          <Logo />
        </Link>
        <nav className="hidden md:flex space-x-8">
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
          <Link to="/register" className="bg-[#A390E4] text-white px-4 py-2 rounded-full hover:bg-[#C5B8F0] transition">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  </header>
);

export default ForNurseHeader;
