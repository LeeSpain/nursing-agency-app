import React, { useState } from 'react';
import { 
  Users, Calendar, Settings, Bell, ChevronDown, 
  BarChart2, Briefcase, FileText, MessageCircle, 
  Shield, DollarSign, AlertTriangle 
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
            </div>
          </div>
        </div>
      </nav>

      {/* Side Navigation */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-slate-200 pt-16">
        <div className="px-4 py-6">
          <nav className="space-y-1">
            <button 
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'overview' 
                  ? 'bg-emerald-50 text-emerald-600' 
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <BarChart2 className="w-5 h-5" />
              <span>Overview</span>
            </button>

            <button 
              onClick={() => setActiveTab('users')}
              className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'users' 
                  ? 'bg-emerald-50 text-emerald-600' 
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Users className="w-5 h-5" />
              <span>User Management</span>
            </button>

            <button 
              onClick={() => setActiveTab('scheduling')}
              className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'scheduling' 
                  ? 'bg-emerald-50 text-emerald-600' 
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Calendar className="w-5 h-5" />
              <span>Scheduling</span>
            </button>

            <button 
              onClick={() => setActiveTab('clients')}
              className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'clients' 
                  ? 'bg-emerald-50 text-emerald-600' 
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Briefcase className="w-5 h-5" />
              <span>Client Management</span>
            </button>

            <button 
              onClick={() => setActiveTab('reports')}
              className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'reports' 
                  ? 'bg-emerald-50 text-emerald-600' 
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <FileText className="w-5 h-5" />
              <span>Reports</span>
            </button>

            <button 
              onClick={() => setActiveTab('messages')}
              className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'messages' 
                  ? 'bg-emerald-50 text-emerald-600' 
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <MessageCircle className="w-5 h-5" />
              <span>Messages</span>
            </button>

            <button 
              onClick={() => setActiveTab('security')}
              className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'security' 
                  ? 'bg-emerald-50 text-emerald-600' 
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Shield className="w-5 h-5" />
              <span>Security</span>
            </button>

            <button 
              onClick={() => setActiveTab('billing')}
              className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'billing' 
                  ? 'bg-emerald-50 text-emerald-600' 
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <DollarSign className="w-5 h-5" />
              <span>Billing</span>
            </button>

            <button 
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                activeTab === 'settings' 
                  ? 'bg-emerald-50 text-emerald-600' 
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </button>
          </nav>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="ml-64 pt-16 min-h-screen">
        <div className="p-8">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Active Nurses</p>
                  <h3 className="text-2xl font-bold text-slate-800">{stats.activeNurses}</h3>
                </div>
                <Users className="w-12 h-12 text-emerald-500" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Active Clients</p>
                  <h3 className="text-2xl font-bold text-slate-800">{stats.activeClients}</h3>
                </div>
                <Briefcase className="w-12 h-12 text-emerald-500" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Pending Approvals</p>
                  <h3 className="text-2xl font-bold text-slate-800">{stats.pendingApprovals}</h3>
                </div>
                <AlertTriangle className="w-12 h-12 text-amber-500" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">Recent Alerts</p>
                  <h3 className="text-2xl font-bold text-slate-800">{stats.recentAlerts}</h3>
                </div>
                <Bell className="w-12 h-12 text-emerald-500" />
              </div>
            </div>
          </div>

          {/* Recent Activity & Alerts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-slate-800 mb-4">Recent Activity</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Users className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">New nurse registration: Sarah Miller</p>
                    <p className="text-xs text-slate-400">2 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Schedule updated for Team A</p>
                    <p className="text-xs text-slate-400">15 minutes ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Client review pending: John Doe</p>
                    <p className="text-xs text-slate-400">1 hour ago</p>
                  </div>
                </div>
              </div>
            </div>

            {/* System Alerts */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-slate-800 mb-4">System Alerts</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">System maintenance scheduled</p>
                    <p className="text-xs text-slate-400">Tomorrow at 2:00 AM</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                    <Bell className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">License renewals due (5 nurses)</p>
                    <p className="text-xs text-slate-400">In 7 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}