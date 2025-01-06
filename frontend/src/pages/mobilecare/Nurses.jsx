import React, { useState } from "react";
import {
  Search,
  Users,
  Filter,
  Calendar,
  Award,
  Clock,
  Star,
  CheckCircle,
  FileText,
  MessageSquare,
  Settings,
  ChevronRight,
  Heart,
  Plus,
  BarChart,
  Activity
} from "lucide-react";

const NurseCard = ({ nurse }) => (
  <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-all">
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-start gap-4">
        <div className="relative">
          <img src={nurse.avatar} alt={nurse.name} className="w-12 h-12 rounded-full" />
          {nurse.online && (
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white" />
          )}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{nurse.name}</h3>
          <p className="text-sm text-slate-500">{nurse.role}</p>
        </div>
      </div>
      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
        nurse.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 
        'bg-slate-50 text-slate-600'
      }`}>
        {nurse.status}
      </span>
    </div>

    <div className="grid grid-cols-2 gap-4 mb-4">
      <div>
        <p className="text-sm text-slate-500">Patients Assigned</p>
        <p className="text-sm font-medium text-slate-900">{nurse.clientCount} clients</p>
      </div>
      <div>
        <p className="text-sm text-slate-500">Satisfaction Score</p>
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
          <p className="text-sm font-medium text-slate-900">{nurse.rating}/5.0</p>
        </div>
      </div>
      <div>
        <p className="text-sm text-slate-500">Response Time</p>
        <p className="text-sm font-medium text-slate-900">{nurse.responseTime}</p>
      </div>
      <div>
        <p className="text-sm text-slate-500">Experience</p>
        <p className="text-sm font-medium text-slate-900">{nurse.experience}</p>
      </div>
    </div>

    <div className="flex gap-2 mb-4">
      {nurse.specialties.map((specialty, index) => (
        <span key={index} className="px-3 py-1 bg-slate-50 text-slate-600 rounded-full text-sm">
          {specialty}
        </span>
      ))}
    </div>

    <div className="flex items-center justify-between pt-4 border-t border-slate-200">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <Activity className="w-4 h-4 text-emerald-500" />
          <span className="text-sm text-slate-600">Last active: {nurse.lastActive}</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors">
          <MessageSquare className="w-4 h-4 text-slate-400" />
        </button>
        <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors">
          <Calendar className="w-4 h-4 text-slate-400" />
        </button>
        <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors">
          <Settings className="w-4 h-4 text-slate-400" />
        </button>
      </div>
    </div>
  </div>
);

const PerformanceMetric = ({ label, value, total, icon: Icon, trend }) => (
  <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
    <div className="flex justify-between items-start mb-4">
      <div>
        <p className="text-sm text-slate-600">{label}</p>
        <h3 className="text-2xl font-bold text-slate-900 mt-1">{value}</h3>
        {total && <p className="text-sm text-slate-500">of {total} total</p>}
      </div>
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-50 to-[#A390E4]/10 flex items-center justify-center">
        <Icon className="w-5 h-5 text-emerald-500" />
      </div>
    </div>
    {trend && (
      <div className={`text-sm ${trend.type === 'up' ? 'text-emerald-500' : 'text-red-500'}`}>
        {trend.type === 'up' ? '↑' : '↓'} {trend.value}
      </div>
    )}
  </div>
);

const CertificationBadge = ({ icon: Icon, title, expiryDate, status }) => (
  <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-200">
    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-50 to-[#A390E4]/10 flex items-center justify-center">
      <Icon className="w-5 h-5 text-emerald-500" />
    </div>
    <div className="flex-1 min-w-0">
      <h4 className="font-medium text-slate-900 truncate">{title}</h4>
      <p className="text-sm text-slate-500">Expires: {expiryDate}</p>
    </div>
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
      status === 'valid' ? 'bg-emerald-50 text-emerald-600' : 
      'bg-amber-50 text-amber-600'
    }`}>
      {status === 'valid' ? 'Valid' : 'Expiring Soon'}
    </span>
  </div>
);

const NurseManagement = () => {
  const [nurses] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Senior Care Nurse",
      avatar: "/api/placeholder/100/100",
      status: "Active",
      online: true,
      clientCount: 12,
      rating: 4.9,
      responseTime: "< 30 mins",
      experience: "8+ years",
      specialties: ["Geriatric Care", "Rehabilitation"],
      lastActive: "10 mins ago",
      certifications: [
        { title: "RN License", expiry: "Dec 2025", status: "valid" },
        { title: "Geriatric Care", expiry: "Aug 2024", status: "expiring" }
      ]
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Specialist Nurse",
      avatar: "/api/placeholder/100/100",
      status: "Active",
      online: true,
      clientCount: 8,
      rating: 4.8,
      responseTime: "< 25 mins",
      experience: "5+ years",
      specialties: ["Wound Care", "Diabetes Management"],
      lastActive: "25 mins ago",
      certifications: [
        { title: "RN License", expiry: "Nov 2025", status: "valid" },
        { title: "Wound Care", expiry: "Jul 2024", status: "valid" }
      ]
    }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      <main className="max-w-7xl mx-auto px-4 py-8 pt-24">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-emerald-100 to-[#A390E4]/10 rounded-full mb-6">
            <div className="h-2 w-2 rounded-full bg-[#A390E4] animate-pulse mr-2"></div>
            <span className="text-emerald-700 font-medium">Staff Management</span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-emerald-700 mb-4">
                Your
                <span className="text-[#A390E4]"> Team</span>
              </h1>
              <p className="text-xl text-slate-600">
                Manage and monitor your healthcare staff
              </p>
            </div>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-colors">
              <Plus className="w-5 h-5" />
              Add Team Member
            </button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="relative flex-1 max-w-2xl">
              <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search team members..."
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div className="flex items-center gap-2">
              {['All Staff', 'Active Now', 'Available'].map((filter) => (
                <button
                  key={filter}
                  className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg"
                >
                  {filter}
                </button>
              ))}
              <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors">
                <Filter className="w-5 h-5 text-slate-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Team Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <PerformanceMetric
            icon={Users}
            label="Active Staff"
            value="14"
            total="16"
            trend={{ type: 'up', value: '+2 this month' }}
          />
          <PerformanceMetric
            icon={Heart}
            label="Patient Satisfaction"
            value="4.8"
            trend={{ type: 'up', value: '+0.2 this month' }}
          />
          <PerformanceMetric
            icon={Clock}
            label="Avg Response Time"
            value="28 min"
            trend={{ type: 'down', value: '-5 min' }}
          />
          <PerformanceMetric
            icon={CheckCircle}
            label="Task Completion"
            value="98%"
            trend={{ type: 'up', value: '+3%' }}
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Nurse List */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-slate-900">Team Members</h2>
              <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                View All →
              </button>
            </div>
            {nurses.map((nurse) => (
              <NurseCard key={nurse.id} nurse={nurse} />
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Certifications */}
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-900">Certifications</h2>
                <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                  View All →
                </button>
              </div>
              <div className="space-y-3">
                {[
                  { icon: Award, title: "RN License", expiryDate: "Dec 2025", status: "valid" },
                  { icon: Award, title: "Geriatric Care", expiryDate: "Aug 2024", status: "expiring" },
                  { icon: Award, title: "Wound Care", expiryDate: "Jul 2024", status: "valid" }
                ].map((cert, index) => (
                  <CertificationBadge key={index} {...cert} />
                ))}
              </div>
            </section>

            {/* Quick Actions */}
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Quick Actions</h2>
              <div className="space-y-3">
                {[
                  { icon: Calendar, text: "Schedule Management" },
                  { icon: FileText, text: "Performance Reviews" },
                  { icon: BarChart, text: "Team Analytics" },
                  { icon: Settings, text: "Team Settings" }
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

            {/* Schedule Overview */}
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-900">Today's Schedule</h2>
                <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                  Full Schedule →
                </button>
              </div>
              <div className="space-y-3">
                {[
                  { time: "9:00 AM", nurse: "Sarah Johnson", activity: "Client Visit" },
                  { time: "11:30 AM", nurse: "Michael Chen", activity: "Team Meeting" },
                  { time: "2:00 PM", nurse: "Sarah Johnson", activity: "Care Review" }
                ].map((schedule, index) => (
                  <div key={index} className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="text-sm font-medium text-slate-900">{schedule.time}</div>
                      <div>
                        <div className="text-sm text-slate-600">{schedule.nurse}</div>
                        <div className="text-sm text-slate-500">{schedule.activity}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NurseManagement;