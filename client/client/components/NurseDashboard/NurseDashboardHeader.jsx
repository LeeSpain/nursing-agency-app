// src/components/NurseDashboard/NurseDashboardHeader.jsx

import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

const NurseDashboardHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Logo />
        </div>
        <div className="flex space-x-8">
          <Link
            to="/nurse-dashboard"
            className="text-lg font-medium text-slate-700 hover:text-emerald-500 transition"
          >
            Dashboard
          </Link>
          <Link
            to="/nurse-dashboard/clients"
            className="text-lg font-medium text-slate-700 hover:text-emerald-500 transition"
          >
            Clients
          </Link>
          <Link
            to="/nurse-dashboard/tasks"
            className="text-lg font-medium text-slate-700 hover:text-emerald-500 transition"
          >
            Tasks
          </Link>
          <Link
            to="/nurse-dashboard/communication"
            className="text-lg font-medium text-slate-700 hover:text-emerald-500 transition"
          >
            Messages
          </Link>
          <Link
            to="/nurse-dashboard/reports"
            className="text-lg font-medium text-slate-700 hover:text-emerald-500 transition"
          >
            Reports
          </Link>
        </div>
        <div>
          <button
            onClick={() => alert("Logging out...")}
            className="text-lg font-medium bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-transform transform hover:scale-105"
          >
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NurseDashboardHeader;
