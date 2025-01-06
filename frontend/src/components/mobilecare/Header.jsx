import React from "react";
import { Link } from "react-router-dom";

const PatrickDashboardHeader = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedTime = currentDate.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#A390E4] shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Welcome back, Patrick!</h1>
            <p className="text-white text-sm">
              Today is{" "}
              <span className="font-medium text-emerald-400">{formattedDate}</span> and the time is{" "}
              <span className="font-medium text-emerald-400">{formattedTime}</span>.
            </p>
          </div>
          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex space-x-8">
              <Link to="/mobilecare/dashboard" className="text-white hover:text-emerald-300">
                Dashboard
              </Link>
              <Link to="/mobilecare/clients" className="text-white hover:text-emerald-300">
                Clients
              </Link>
              <Link to="/mobilecare/nurses" className="text-white hover:text-emerald-300">
                Nurses
              </Link>
              <Link to="/mobilecare/reports" className="text-white hover:text-emerald-300">
                Reports
              </Link>
              <Link to="/mobilecare/messages" className="text-white hover:text-emerald-300">
                Messages
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-emerald-500 text-white px-4 py-2 rounded-full hover:bg-emerald-600 transition space-x-2">
                <Link to="/" className="hover:text-emerald-300">
                  Home
                </Link>
                <span>|</span>
                <Link to="/mobilecare/dashboard" className="hover:text-emerald-300">
                  Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PatrickDashboardHeader;
