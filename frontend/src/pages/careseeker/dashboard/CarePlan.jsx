import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  Bell,
  Users,
  FileText,
  Activity,
  Plus,
  Trash2,
  CheckCircle,
  AlertTriangle,
  Heart,
  Brain,
  MessageCircle,
  Settings,
  ChevronDown,
  X,
  ArrowRight,
  Star,
  BarChart,
  Pill,
  Clipboard,
  Stethoscope
} from 'lucide-react';

const StatsCard = ({ icon: Icon, label, value, trend }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-all">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-sm text-slate-600">{label}</p>
        <h3 className="text-2xl font-bold text-slate-900">{value}</h3>
        {trend && (
          <p className={`text-sm mt-1 ${trend.type === 'up' ? 'text-emerald-500' : 'text-red-500'}`}>
            {trend.value} {trend.type === 'up' ? '↑' : '↓'}
          </p>
        )}
      </div>
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-50 to-[#A390E4]/10 flex items-center justify-center">
        <Icon className="w-6 h-6 text-emerald-500" />
      </div>
    </div>
  </div>
);

const TaskItem = ({ icon: Icon, title, time, description, tags }) => (
  <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 hover:shadow-md transition-all">
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-50 to-[#A390E4]/10 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-emerald-500" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-medium text-slate-900">{title}</h4>
            <p className="text-sm text-slate-600 mt-1">{description}</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-slate-500">{time}</span>
            <button className="p-1 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-600 transition-colors">
              <Settings className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600"
            >
              {tag.icon && <tag.icon className="w-3 h-3" />}
              {tag.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const CareTeamMember = ({ image, name, role, status }) => (
  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
    <div className="relative">
      <img src={image} className="w-10 h-10 rounded-full" alt={name} />
      {status === 'online' && (
        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
      )}
    </div>
    <div className="flex-1 min-w-0">
      <h4 className="font-medium text-slate-900 truncate">{name}</h4>
      <p className="text-sm text-slate-500">{role}</p>
    </div>
    <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-600 transition-colors">
      <MessageCircle className="w-4 h-4" />
    </button>
  </div>
);

const HealthMetric = ({ label, value, trend, unit, icon: Icon }) => (
  <div className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors">
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-50 to-[#A390E4]/10 flex items-center justify-center">
        <Icon className="w-4 h-4 text-emerald-500" />
      </div>
      <div>
        <span className="text-sm text-slate-600">{label}</span>
        <div className="font-medium text-slate-900">
          {value} {unit}
        </div>
      </div>
    </div>
    {trend && (
      <span className={`text-sm ${trend > 0 ? 'text-emerald-500' : 'text-red-500'}`}>
        {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
      </span>
    )}
  </div>
);

const UpdateItem = ({ icon: Icon, title, time, type }) => (
  <div className="flex gap-3 items-start p-3 rounded-lg hover:bg-slate-50 transition-colors">
    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
      type === 'success' ? 'bg-emerald-50' : type === 'warning' ? 'bg-amber-50' : 'bg-slate-50'
    }`}>
      <Icon className={`w-4 h-4 ${
        type === 'success' ? 'text-emerald-500' : type === 'warning' ? 'text-amber-500' : 'text-slate-500'
      }`} />
    </div>
    <div>
      <p className="text-sm text-slate-900">{title}</p>
      <span className="text-xs text-slate-500">{time}</span>
    </div>
  </div>
);

const CarePlanPage = () => {
  const [activeTab, setActiveTab] = useState('daily');

  const tasks = [
    {
      icon: Activity,
      title: "Morning Health Check",
      time: "9:00 AM",
      description: "Blood pressure, temperature, and medication check",
      tags: [
        { icon: Bell, text: "Reminder set" },
        { icon: Users, text: "Nurse required" },
        { icon: Clock, text: "30 mins" }
      ]
    },
    {
      icon: Pill,
      title: "Medication Administration",
      time: "12:00 PM",
      description: "Administer prescribed medications with meal",
      tags: [
        { icon: Bell, text: "High priority" },
        { icon: Brain, text: "AI monitored" },
        { icon: Clock, text: "15 mins" }
      ]
    },
    {
      icon: Heart,
      title: "Physical Therapy",
      time: "2:00 PM",
      description: "Mobility exercises and strength training",
      tags: [
        { icon: Users, text: "Specialist required" },
        { icon: Clock, text: "45 mins" }
      ]
    }
  ];

  const careTeam = [
    {
      image: "/api/placeholder/100/100",
      name: "Dr. Maria Gonzales",
      role: "Primary Care Physician",
      status: "online"
    },
    {
      image: "/api/placeholder/100/100",
      name: "Sarah Johnson",
      role: "Registered Nurse",
      status: "online"
    },
    {
      image: "/api/placeholder/100/100",
      name: "James Wilson",
      role: "Physical Therapist",
      status: "offline"
    }
  ];

  const healthMetrics = [
    {
      label: "Blood Pressure",
      value: "120/80",
      unit: "mmHg",
      trend: 0,
      icon: Activity
    },
    {
      label: "Heart Rate",
      value: "72",
      unit: "bpm",
      trend: -2,
      icon: Heart
    },
    {
      label: "Blood Sugar",
      value: "95",
      unit: "mg/dL",
      trend: 5,
      icon: Activity
    },
    {
      label: "Temperature",
      value: "98.6",
      unit: "°F",
      trend: 0,
      icon: Stethoscope
    }
  ];

  const updates = [
    {
      icon: CheckCircle,
      title: "Morning medication administered",
      time: "30 minutes ago",
      type: "success"
    },
    {
      icon: AlertTriangle,
      title: "Blood pressure slightly elevated",
      time: "1 hour ago",
      type: "warning"
    },
    {
      icon: Brain,
      title: "AI health assessment completed",
      time: "2 hours ago",
      type: "success"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      <main className="max-w-7xl mx-auto px-4 py-8 pt-24">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-emerald-100 to-[#A390E4]/10 rounded-full mb-6">
            <div className="h-2 w-2 rounded-full bg-[#A390E4] animate-pulse mr-2"></div>
            <span className="text-emerald-700 font-medium">Care Management</span>
          </div>
          <h1 className="text-4xl font-bold text-emerald-700 mb-4">
            Daily Care
            <span className="text-[#A390E4]"> Plan</span>
          </h1>
          <p className="text-xl text-slate-600">
            Monitor and manage your personalized care activities.
          </p>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <StatsCard
            icon={Calendar}
            label="Next Assessment"
            value="Jan 15"
            trend={{ type: 'up', value: 'On track' }}
          />
          <StatsCard
            icon={Clock}
            label="Care Hours"
            value="32/week"
            trend={{ type: 'up', value: '+2hrs' }}
          />
          <StatsCard
            icon={Users}
            label="Care Team"
            value="5 members"
            trend={{ type: 'up', value: '+1 new' }}
          />
          <StatsCard
            icon={Activity}
            label="Health Score"
            value="85/100"
            trend={{ type: 'up', value: '+5pts' }}
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Care Plan Tabs */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="border-b border-slate-200">
                <div className="flex">
                  {[
                    { id: 'daily', label: 'Daily Plan' },
                    { id: 'weekly', label: 'Weekly Plan' },
                    { id: 'medications', label: 'Medications' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                        activeTab === tab.id
                          ? 'text-emerald-600 border-emerald-500 bg-emerald-50/50'
                          : 'text-slate-600 border-transparent hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-slate-900">Care Tasks</h3>
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
                    <Plus className="w-4 h-4" />
                    Add Task
                  </button>
                </div>

                <div className="space-y-4">
                  {tasks.map((task, index) => (
                    <TaskItem key={index} {...task} />
                  ))}
                </div>
              </div>
            </div>

            {/* Notes Section */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-slate-900">Care Notes</h3>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Clock className="w-4 h-4" />
                  Last updated: Today at 10:45 AM
                </div>
              </div>
              <textarea 
                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:outline-none mb-4"
                rows="4"
                placeholder="Add care notes..."
              />
              <div className="flex justify-end">
                <button className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
                  Save Notes
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Care Team */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-slate-900">Care Team</h3>
                <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-600 transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-2">
                {careTeam.map((member, index) => (
                  <CareTeamMember key={index} {...member} />
                ))}
              </div>
              <button className="w-full mt-4 px-4 py-2 text-emerald-600 border border-emerald-200 rounded-lg hover:bg-emerald-50 transition-colors">
                Manage Team
              </button>
            </div>

            {/* Health Metrics */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-slate-900">Health Metrics</h3>
                <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-600 transition-colors">
                  <BarChart className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-2">
                {healthMetrics.map((metric, index) => (
                  <HealthMetric key={index} {...metric} />
                ))}
              </div>
              <button className="w-full mt-4 px-4 py-2 text-emerald-600 border border-emerald-200 rounded-lg hover:bg-emerald-50 transition-colors">
                View Full Report
              </button>
            </div>

            {/* Recent Updates */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-slate-900">Recent Updates</h3>
                <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-600 transition-colors">
                  <Bell className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-2">
                {updates.map((update, index) => (
                  <UpdateItem key={index} {...update} />
                ))}
              </div>
              <button className="w-full mt-4 px-4 py-2 text-emerald-600 border border-emerald-200 rounded-lg hover:bg-emerald-50 transition-colors">
                View All Updates
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CarePlanPage;