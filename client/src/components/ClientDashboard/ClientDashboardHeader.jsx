import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo"; // Import the new logo component

const ClientDashboardHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Updated Logo */}
        <div className="flex items-center space-x-2">
          <Logo />
        </div>

        {/* Navigation Menu */}
        <div className="flex space-x-8">
          <Link
            to="/dashboard"
            className="text-lg font-medium text-slate-700 hover:text-emerald-500 transition-colors"
          >
            Dashboard
          </Link>
          <Link
            to="/dashboard/care-plan"
            className="text-lg font-medium text-slate-700 hover:text-emerald-500 transition-colors"
          >
            Care Plan
          </Link>
          <Link
            to="/dashboard/appointments"
            className="text-lg font-medium text-slate-700 hover:text-emerald-500 transition-colors"
          >
            Appointments
          </Link>
          <Link
            to="/dashboard/communication"
            className="text-lg font-medium text-slate-700 hover:text-emerald-500 transition-colors"
          >
            Messages
          </Link>
          <Link
            to="/dashboard/notifications"
            className="text-lg font-medium text-slate-700 hover:text-emerald-500 transition-colors"
          >
            Notifications
          </Link>
          <Link
            to="/dashboard/settings"
            className="text-lg font-medium text-slate-700 hover:text-emerald-500 transition-colors"
          >
            Settings
          </Link>
        </div>

        {/* Logout Button */}
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

export default ClientDashboardHeader;
