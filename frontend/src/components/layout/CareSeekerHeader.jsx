import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo"; // Adjust this path if needed

const CareSeekerHeader = () => (
  <header className="fixed top-0 left-0 right-0 bg-[#A390E4] shadow-lg z-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between h-20">
        <Link to="/careseeker">
          <Logo />
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-white hover:text-emerald-300">
            Home
          </Link>
          <Link to="/careseeker/how-it-works" className="text-white hover:text-emerald-300">
            How it Works
          </Link>
          <Link to="/careseeker/services" className="text-white hover:text-emerald-300">
            Services
          </Link>
          <Link to="/careseeker/pricing" className="text-white hover:text-emerald-300">
            Pricing
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link to="/login" className="text-white hover:text-emerald-300">
            Login
          </Link>
          <Link
            to="/careseeker/dashboard"
            className="bg-emerald-500 text-white px-4 py-2 rounded-full hover:bg-emerald-600 transition"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  </header>
);

export default CareSeekerHeader;