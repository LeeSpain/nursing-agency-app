import React from "react";
import {
  Users,
  Activity,
  Heart,
  Star,
  Calendar,
  MessageSquare,
  BarChart,
  Settings,
  ChevronRight,
  FileText,
  Plus,
  Bell,
  UserCheck,
  UserPlus,
  AlertCircle,
} from "lucide-react";

const Dashboard = () => {
  const metrics = [
    {
      icon: Users,
      label: "Total Clients",
      value: "312",
      trend: { type: "up", value: "+24 this month" },
    },
    {
      icon: UserPlus,
      label: "New Clients Onboarded",
      value: "45",
      trend: { type: "up", value: "+5 this week" },
    },
    {
      icon: UserCheck,
      label: "Client Retention Rate",
      value: "92%",
      trend: { type: "up", value: "+3% this quarter" },
    },
    {
      icon: Calendar,
      label: "Scheduled Appointments",
      value: "128",
      trend: { type: "up", value: "+12 upcoming" },
    },
    {
      icon: AlertCircle,
      label: "Critical Alerts",
      value: "3",
      trend: { type: "down", value: "-1 resolved" },
    },
  ];

  const quickActions = [
    { icon: Calendar, text: "Manage Schedule" },
    { icon: MessageSquare, text: "Send Notifications" },
    { icon: BarChart, text: "View Analytics" },
    { icon: Settings, text: "Update Preferences" },
    { icon: FileText, text: "Generate Reports" },
    { icon: Bell, text: "Check Alerts" },
  ];

  const newsUpdates = [
    {
      title: "New Integration Feature",
      description: "Nurse-Sync now supports enhanced scheduling options.",
      date: "Jan 10, 2025",
    },
    {
      title: "Service Downtime Notice",
      description: "Scheduled maintenance on Jan 15 from 2 AM to 4 AM.",
      date: "Jan 8, 2025",
    },
  ];

  const notifications = [
    {
      title: "Missed Appointment Alert",
      description: "Client John Doe missed their scheduled appointment today.",
      time: "2 hours ago",
    },
    {
      title: "System Update",
      description: "Platform update completed successfully.",
      time: "Yesterday",
    },
    {
      title: "New Client Request",
      description: "Jane Smith has requested a consultation.",
      time: "3 hours ago",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      <main className="max-w-7xl mx-auto px-4 py-8 pt-24">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-emerald-100 to-[#A390E4]/10 rounded-full mb-6">
            <div className="h-2 w-2 rounded-full bg-[#A390E4] animate-pulse mr-2"></div>
            <span className="text-emerald-700 font-medium">Dashboard Overview</span>
          </div>
          <h1 className="text-4xl font-bold text-emerald-700 mb-4">
            Welcome to MobileCare's
            <span className="text-[#A390E4]"> Professional Dashboard</span>
          </h1>
          <p className="text-xl text-slate-600">
            MobileCare and Nurse-Sync: Together, we’re redefining connected care.
            Access real-time insights, manage operations, and ensure quality care for all clients.
          </p>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Notifications</h2>
          <ul className="space-y-4">
            {notifications.map((notification, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-50 to-[#A390E4]/10 rounded-full flex items-center justify-center">
                  <Bell className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <h3 className="font-medium text-slate-900">{notification.title}</h3>
                  <p className="text-sm text-slate-600">{notification.description}</p>
                  <span className="text-xs text-slate-500 mt-1 block">{notification.time}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-slate-200 p-6"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm text-slate-600">{metric.label}</p>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">
                    {metric.value}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-50 to-[#A390E4]/10 flex items-center justify-center">
                  <metric.icon className="w-5 h-5 text-emerald-500" />
                </div>
              </div>
              {metric.trend && (
                <div
                  className={`text-sm ${
                    metric.trend.type === "up" ? "text-emerald-500" : "text-red-500"
                  }`}
                >
                  {metric.trend.type === "up" ? "↑" : "↓"} {metric.trend.value}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickActions.map((action, index) => (
              <button
                key={index}
                className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-50 to-[#A390E4]/10 flex items-center justify-center">
                  <action.icon className="w-5 h-5 text-emerald-500" />
                </div>
                <span className="text-slate-600 group-hover:text-slate-900">
                  {action.text}
                </span>
                <ChevronRight className="w-4 h-4 text-slate-400 ml-auto" />
              </button>
            ))}
          </div>
        </div>

        {/* News & Updates */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h2 className="text-xl font-bold text-slate-900 mb-6">News & Updates</h2>
          <ul className="space-y-4">
            {newsUpdates.map((update, index) => (
              <li key={index} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-50 to-[#A390E4]/10 rounded-full flex items-center justify-center">
                  <Bell className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <h3 className="font-medium text-slate-900">{update.title}</h3>
                  <p className="text-sm text-slate-600">{update.description}</p>
                  <span className="text-xs text-slate-500 mt-1 block">{update.date}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
