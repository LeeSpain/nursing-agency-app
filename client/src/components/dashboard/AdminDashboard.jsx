import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { title: "Active Nurses", value: "48", change: "+12%", iconEmoji: "👩‍⚕️" },
    { title: "Active Clients", value: "164", change: "+8%", iconEmoji: "👥" },
    { title: "Monthly Revenue", value: "$52,000", change: "+15%", iconEmoji: "💰" },
    { title: "Client Satisfaction", value: "98%", change: "+2%", iconEmoji: "⭐" }
  ];

  const recentActivity = [
    { type: "assignment", message: "Sarah Johnson assigned to New Client Care", time: "2 hours ago" },
    { type: "schedule", message: "Weekly schedule updated for Team A", time: "4 hours ago" },
    { type: "client", message: "New client assessment completed", time: "5 hours ago" },
    { type: "payment", message: "Monthly invoices generated", time: "1 day ago" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 w-64 h-full bg-white shadow-lg">
        <div className="p-4">
          <div className="flex items-center gap-2 mb-8">
            <div className="bg-emerald-500 rounded-lg p-2">
              <span className="text-white text-xl">NS</span>
            </div>
            <span className="font-bold text-xl">Nurse-Sync</span>
          </div>

          <nav className="space-y-2">
            <button 
              onClick={() => setActiveTab('overview')}
              className={`w-full text-left px-4 py-2 rounded-lg flex items-center gap-3 ${
                activeTab === 'overview' ? 'bg-emerald-50 text-emerald-700' : 'hover:bg-gray-50'
              }`}
            >
              📊 Overview
            </button>
            <button 
              onClick={() => setActiveTab('staff')}
              className={`w-full text-left px-4 py-2 rounded-lg flex items-center gap-3 ${
                activeTab === 'staff' ? 'bg-emerald-50 text-emerald-700' : 'hover:bg-gray-50'
              }`}
            >
              👥 Staff Management
            </button>
            <button 
              onClick={() => setActiveTab('clients')}
              className={`w-full text-left px-4 py-2 rounded-lg flex items-center gap-3 ${
                activeTab === 'clients' ? 'bg-emerald-50 text-emerald-700' : 'hover:bg-gray-50'
              }`}
            >
              🏥 Client Care
            </button>
            <button 
              onClick={() => setActiveTab('schedule')}
              className={`w-full text-left px-4 py-2 rounded-lg flex items-center gap-3 ${
                activeTab === 'schedule' ? 'bg-emerald-50 text-emerald-700' : 'hover:bg-gray-50'
              }`}
            >
              📅 Scheduling
            </button>
            <button 
              onClick={() => setActiveTab('billing')}
              className={`w-full text-left px-4 py-2 rounded-lg flex items-center gap-3 ${
                activeTab === 'billing' ? 'bg-emerald-50 text-emerald-700' : 'hover:bg-gray-50'
              }`}
            >
              💰 Billing
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-8 py-4">
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-400 hover:text-gray-500">
                🔔
              </button>
              <div className="relative">
                <button 
                  onClick={logout}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-700"
                >
                  <span className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                    {user?.name?.[0] || 'U'}
                  </span>
                  <span>{user?.name || 'User'}</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{stat.iconEmoji}</span>
                  <span className={`text-sm ${
                    stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-gray-500 text-sm">{stat.title}</h3>
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Recent Activity & Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-emerald-50 rounded-lg flex items-center justify-center">
                      {activity.type === 'assignment' && '👤'}
                      {activity.type === 'schedule' && '📅'}
                      {activity.type === 'client' && '🏥'}
                      {activity.type === 'payment' && '💰'}
                    </div>
                    <div>
                      <p className="text-gray-800">{activity.message}</p>
                      <p className="text-sm text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-4">
                <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left">
                  <span className="block text-xl mb-1">👤</span>
                  <span className="font-medium">Add New Staff</span>
                </button>
                <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left">
                  <span className="block text-xl mb-1">🏥</span>
                  <span className="font-medium">New Client</span>
                </button>
                <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left">
                  <span className="block text-xl mb-1">📅</span>
                  <span className="font-medium">Schedule Shift</span>
                </button>
                <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-left">
                  <span className="block text-xl mb-1">📊</span>
                  <span className="font-medium">View Reports</span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;