import React, { useState } from 'react';
import { 
  Users, Calendar, Settings, Bell, ChevronDown, 
  BarChart2, Briefcase, FileText, MessageCircle, 
  Shield, DollarSign, AlertTriangle, LogOut 
} from 'lucide-react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  // Example stats data
  const stats = {
    activeNurses: 156,
    activeClients: 342,
    pendingApprovals: 8,
    recentAlerts: 3
  };

  // Simulated Logout Function
  const handleLogout = () => {
    alert('Logged out successfully!');
    // Redirect logic can be added here
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full bg-white border-b border-slate-200 z-50">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-emerald-500 text-2xl font-bold">+</span>
              <span className="text-slate-800 text-xl font-bold">Nurse-Sync Admin</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-slate-600 hover:text-emerald-500">
                <Bell className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-2">
                <img 
                  src="/api/placeholder/32/32" 
                  alt="Admin" 
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm font-medium">Admin</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <button onClick={handleLogout} className="text-red-500 hover:text-red-700">
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Side Navigation */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-slate-200 pt-16">
        <div className="px-4 py-6">
          <nav className="space-y-1">
            {[
              { id: 'overview', name: 'Overview', icon: BarChart2 },
              { id: 'users', name: 'User Management', icon: Users },
              { id: 'scheduling', name: 'Scheduling', icon: Calendar },
              { id: 'clients', name: 'Client Management', icon: Briefcase },
              { id: 'reports', name: 'Reports', icon: FileText },
              { id: 'messages', name: 'Messages', icon: MessageCircle },
              { id: 'security', name: 'Security', icon: Shield },
              { id: 'billing', name: 'Billing', icon: DollarSign },
              { id: 'settings', name: 'Settings', icon: Settings }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                  activeTab === tab.id 
                    ? 'bg-emerald-50 text-emerald-600' 
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span>{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="ml-64 pt-16 min-h-screen">
        <div className="p-8">
          {activeTab === 'overview' && (
            <>
              <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {Object.entries(stats).map(([key, value]) => (
                  <div key={key} className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-lg font-semibold text-slate-700">{key.replace(/([A-Z])/g, ' $1')}</h3>
                    <p className="text-3xl font-bold">{value}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'users' && (
            <>
              <h2 className="text-2xl font-bold mb-6">User Management</h2>
              <p>Here you can manage all users. Add new nurses, approve pending registrations, or deactivate accounts.</p>
            </>
          )}

          {activeTab === 'scheduling' && (
            <>
              <h2 className="text-2xl font-bold mb-6">Scheduling</h2>
              <p>Manage and update nurse schedules. Assign teams and view calendar reports.</p>
            </>
          )}

          {activeTab === 'reports' && (
            <>
              <h2 className="text-2xl font-bold mb-6">Reports</h2>
              <p>View system reports, user activity logs, and performance analytics.</p>
            </>
          )}

          {/* Add content for other tabs as needed */}
        </div>
      </main>
    </div>
  );
}
