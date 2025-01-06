import React from "react";
import { Link } from "react-router-dom";

const ForNurseHeader = () => {
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
    <header className="fixed top-0 left-0 right-0 bg-emerald-600 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Welcome to Your Dashboard!</h1>
            <p className="text-white text-sm">
              Today is <span className="font-medium text-[#A390E4]">{formattedDate}</span> and the time is{" "}
              <span className="font-medium text-[#A390E4]">{formattedTime}</span>.
            </p>
          </div>
          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex space-x-8">
              <Link to="/selfemployed/clients" className="text-white hover:text-[#A390E4]">
                Clients
              </Link>
              <Link to="/selfemployed/staff" className="text-white hover:text-[#A390E4]">
                Staff
              </Link>
              <Link to="/selfemployed/finances" className="text-white hover:text-[#A390E4]">
                Finances
              </Link>
              <Link to="/selfemployed/marketing" className="text-white hover:text-[#A390E4]">
                Marketing
              </Link>
              <Link to="/selfemployed/training" className="text-white hover:text-[#A390E4]">
                Training
              </Link>
              <Link to="/selfemployed/messages" className="text-white hover:text-[#A390E4]">
                Messages
              </Link>
              <Link to="/selfemployed/settings" className="text-white hover:text-[#A390E4]">
                Settings
              </Link>
            </nav>
            <div className="flex items-center bg-[#A390E4] text-white px-4 py-2 rounded-full hover:bg-[#C5B8F0] transition space-x-2">
              <Link to="/" className="hover:text-white/80">
                Home
              </Link>
              <span>|</span>
              <Link to="/selfemployed/dashboard" className="hover:text-white/80">
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ForNurseHeader;
