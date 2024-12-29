import React from "react";
import { Link } from "react-router-dom";

const DashboardCard = ({ to, title, description }) => (
  <Link
    to={to}
    className="p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300 border border-slate-200 text-center"
  >
    <h3 className="text-xl font-semibold text-emerald-600 mb-2">{title}</h3>
    <p className="text-slate-600">{description}</p>
  </Link>
);

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Welcome Section */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100 shadow-md">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Welcome back, John! 👋
            </h2>
            <p className="text-slate-600 mb-6">
              Here's a quick overview of your care status.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center bg-white rounded-lg shadow p-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  2
                </div>
                <p className="text-sm text-slate-600 mt-2">
                  Upcoming Appointments
                </p>
              </div>
              <div className="flex flex-col items-center bg-white rounded-lg shadow p-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  3
                </div>
                <p className="text-sm text-slate-600 mt-2">New Notifications</p>
              </div>
              <div className="flex flex-col items-center bg-white rounded-lg shadow p-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  87%
                </div>
                <p className="text-sm text-slate-600 mt-2">Care Plan Progress</p>
              </div>
            </div>
          </div>

          {/* AI Assistant Section */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white shadow-md">
            <h3 className="text-2xl font-bold mb-4">AI Care Assistant</h3>
            <p className="text-slate-300 mb-6">
              Your 24/7 virtual assistant for care-related questions and support.
            </p>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                Medication reminder: 2 PM
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                Virtual check-up: 4 PM
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                Blood pressure reading due
              </li>
            </ul>
            <button className="w-full mt-6 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-3 rounded-xl font-medium transition-colors">
              Ask Your AI Assistant
            </button>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <DashboardCard
            to="/dashboard/care-plan"
            title="Care Plan"
            description="View and manage your care plan details"
          />
          <DashboardCard
            to="/dashboard/appointments"
            title="Appointments"
            description="Schedule and view upcoming appointments"
          />
          <DashboardCard
            to="/dashboard/messages"
            title="Messages"
            description="Chat with your care team and family"
          />
          <DashboardCard
            to="/dashboard/notifications"
            title="Notifications"
            description="View your alerts and reminders"
          />
          <DashboardCard
            to="/dashboard/family-access"
            title="Family Access"
            description="Manage family member access"
          />
          <DashboardCard
            to="/dashboard/settings"
            title="Settings"
            description="Update your preferences"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
