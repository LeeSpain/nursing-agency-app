import React, { useState } from "react";
import {
  Users,
  Search,
  Filter,
  Link,
  Clock,
  Calendar,
  ChevronRight,
  Star,
  Bell,
  MessageSquare,
  Activity,
  FileText
} from "lucide-react";

const ClientSearchBar = ({ onSearch }) => (
  <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
    <div className="flex gap-4">
      <div className="relative flex-1">
        <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search clients by name, ID, or nurse..."
          className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>
      <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors">
        <Filter className="w-5 h-5 text-slate-400" />
      </button>
    </div>
    
    <div className="flex items-center gap-4 mt-4">
      <span className="text-sm text-slate-600">Filter by:</span>
      {['Care Level', 'Nurse', 'Status', 'Location'].map((filter) => (
        <button
          key={filter}
          className="px-3 py-1 text-sm bg-slate-50 text-slate-600 rounded-full hover:bg-emerald-50 hover:text-emerald-600"
        >
          {filter}
        </button>
      ))}
    </div>
  </div>
);

const MetricCard = ({ icon: Icon, title, value, secondaryValue }) => (
  <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-sm text-slate-600">{title}</p>
        <h3 className="text-2xl font-bold text-slate-900 mt-1">{value}</h3>
        {secondaryValue && (
          <p className="text-sm text-slate-500 mt-1">{secondaryValue}</p>
        )}
      </div>
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-50 to-[#A390E4]/10 flex items-center justify-center">
        <Icon className="w-5 h-5 text-emerald-500" />
      </div>
    </div>
  </div>
);

const ClientListItem = ({ client }) => (
  <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-all">
    <div className="flex items-start justify-between mb-4">
      <div>
        <h3 className="text-lg font-semibold text-slate-900">{client.name}</h3>
        <p className="text-sm text-slate-500">ID: {client.id}</p>
      </div>
      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
        client.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 
        'bg-slate-50 text-slate-600'
      }`}>
        {client.status}
      </span>
    </div>

    <div className="grid grid-cols-2 gap-4 mb-4">
      <div>
        <p className="text-sm text-slate-500">Assigned Nurse</p>
        <p className="text-sm font-medium text-slate-900">{client.nurse}</p>
      </div>
      <div>
        <p className="text-sm text-slate-500">Care Type</p>
        <p className="text-sm font-medium text-slate-900">{client.careType}</p>
      </div>
      <div>
        <p className="text-sm text-slate-500">Next Visit</p>
        <p className="text-sm font-medium text-slate-900">{client.nextVisit}</p>
      </div>
      <div>
        <p className="text-sm text-slate-500">Last Activity</p>
        <p className="text-sm font-medium text-slate-900">{client.lastActivity}</p>
      </div>
    </div>

    <div className="flex items-center justify-between pt-4 border-t border-slate-200">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <Link className="w-4 h-4 text-[#A390E4]" />
          <span className="text-sm text-slate-600">iHealth-Sync</span>
        </div>
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-amber-400" />
          <span className="text-sm text-slate-600">Care Rating: {client.rating}</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors">
          <MessageSquare className="w-4 h-4 text-slate-400" />
        </button>
        <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors">
          <FileText className="w-4 h-4 text-slate-400" />
        </button>
        <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors">
          <Calendar className="w-4 h-4 text-slate-400" />
        </button>
      </div>
    </div>
  </div>
);

const NurseOverview = ({ nurse }) => (
  <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 hover:shadow-md transition-all">
    <div className="flex items-center gap-4">
      <img src={nurse.avatar} alt={nurse.name} className="w-10 h-10 rounded-full" />
      <div className="flex-1">
        <h4 className="font-medium text-slate-900">{nurse.name}</h4>
        <p className="text-sm text-slate-500">{nurse.role}</p>
      </div>
      <span className="px-2 py-1 bg-emerald-50 text-emerald-600 text-sm rounded-full">
        {nurse.clientCount} clients
      </span>
    </div>
  </div>
);

const ClientManagementDashboard = () => {
  const metrics = [
    {
      icon: Users,
      title: "Total Clients",
      value: "248",
      secondaryValue: "42 new this month"
    },
    {
      icon: Clock,
      title: "Average Visit Duration",
      value: "45 mins",
      secondaryValue: "Per client visit"
    },
    {
      icon: Star,
      title: "Client Satisfaction",
      value: "4.8/5",
      secondaryValue: "96% positive feedback"
    },
    {
      icon: Link,
      title: "iHealth-Sync Connected",
      value: "194",
      secondaryValue: "78% of clients"
    }
  ];

  const [clients] = useState([
    {
      id: "CLT-001",
      name: "John Doe",
      status: "Active",
      nurse: "Sarah Johnson",
      careType: "Home Care",
      nextVisit: "Tomorrow, 2:00 PM",
      lastActivity: "Health Check - 2h ago",
      rating: "4.8"
    },
    {
      id: "CLT-002",
      name: "Jane Smith",
      status: "Active",
      nurse: "Michael Chen",
      careType: "Rehabilitation",
      nextVisit: "Wed, 10:00 AM",
      lastActivity: "Medication Review - 1d ago",
      rating: "4.9"
    }
  ]);

  const nurses = [
    {
      avatar: "/api/placeholder/40/40",
      name: "Sarah Johnson",
      role: "Senior Nurse",
      clientCount: 12
    },
    {
      avatar: "/api/placeholder/40/40",
      name: "Michael Chen",
      role: "Specialist Nurse",
      clientCount: 8
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      <main className="max-w-7xl mx-auto px-4 py-8 pt-24">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-emerald-100 to-[#A390E4]/10 rounded-full mb-6">
            <div className="h-2 w-2 rounded-full bg-[#A390E4] animate-pulse mr-2"></div>
            <span className="text-emerald-700 font-medium">Client Overview</span>
          </div>
          <h1 className="text-4xl font-bold text-emerald-700 mb-4">
            Client
            <span className="text-[#A390E4]"> Management</span>
          </h1>
          <p className="text-xl text-slate-600">
            Monitor and manage your client relationships
          </p>
        </div>

        {/* Search */}
        <ClientSearchBar onSearch={() => {}} />

        {/* Nurse-Client Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Client Distribution</h3>
            <div className="space-y-4">
              {[
                { nurseName: "Sarah Johnson", clients: 12, rating: 4.9 },
                { nurseName: "Michael Chen", clients: 8, rating: 4.8 },
                { nurseName: "Emma Wilson", clients: 10, rating: 4.7 }
              ].map((nurse) => (
                <div key={nurse.nurseName} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700">{nurse.nurseName}</span>
                      <span className="text-sm text-slate-500">{nurse.clients} clients</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-emerald-500 rounded-full"
                        style={{ width: `${(nurse.clients / 15) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Care Time Analysis</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-sm text-slate-600">Average Visit Duration</span>
                <span className="text-lg font-semibold text-emerald-600">45 mins</span>
              </div>
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-sm text-slate-600">Monthly Visits per Client</span>
                <span className="text-lg font-semibold text-emerald-600">8.5</span>
              </div>
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-sm text-slate-600">Response Time</span>
                <span className="text-lg font-semibold text-emerald-600">28 mins</span>
              </div>
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-slate-600">Visit Completion Rate</span>
                <span className="text-lg font-semibold text-emerald-600">98%</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Satisfaction Metrics</h3>
            <div className="space-y-4">
              {[
                { label: "Care Quality", value: 4.8 },
                { label: "Communication", value: 4.7 },
                { label: "Punctuality", value: 4.9 },
                { label: "Professionalism", value: 4.8 }
              ].map((metric) => (
                <div key={metric.label}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-600">{metric.label}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                      <span className="text-sm font-medium text-slate-900">{metric.value}</span>
                    </div>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#A390E4] rounded-full"
                      style={{ width: `${(metric.value / 5) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Client List */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">Recent Clients</h2>
              <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                View All →
              </button>
            </div>
            {clients.map((client, index) => (
              <ClientListItem key={index} client={client} />
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Care Team */}
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-900">Care Team</h2>
                <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                  View All →
                </button>
              </div>
              <div className="space-y-4">
                {nurses.map((nurse, index) => (
                  <NurseOverview key={index} nurse={nurse} />
                ))}
              </div>
            </section>

            {/* Quick Actions */}
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Quick Actions</h2>
              <div className="space-y-3">
                {[
                  { icon: Users, text: "Add New Client" },
                  { icon: Calendar, text: "View Schedule" },
                  { icon: Activity, text: "Care Reports" },
                  { icon: Bell, text: "Notifications" }
                ].map((action, index) => (
                  <button
                    key={index}
                    className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-50 to-[#A390E4]/10 flex items-center justify-center">
                      <action.icon className="w-4 h-4 text-emerald-500" />
                    </div>
                    <span className="text-slate-600 group-hover:text-slate-900">{action.text}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400 ml-auto" />
                  </button>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ClientManagementDashboard;