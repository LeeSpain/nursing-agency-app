import React, { useState } from 'react';
import {
  Activity,
  Bell,
  Calendar,
  Clock,
  Users,
  FileText,
  Heart,
  Settings,
  ChevronRight,
  Brain,
  MessageCircle,
  AlertTriangle,
  TrendingUp,
  ChevronDown,
  Shield,
  Star,
  Plus,
  Stethoscope,
  ClipboardList,
  ArrowRight
} from 'lucide-react';

const QuickActionCard = ({ icon: Icon, title, value, subtext, trend, status, isPrimary, isAlert, onClick }) => (
  <div 
    onClick={onClick}
    className={`bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-all cursor-pointer ${
      isPrimary ? 'border-2 border-[#A390E4]' : ''
    }`}
  >
    <div className="flex justify-between items-start">
      <div>
        <p className="text-sm text-slate-600">{title}</p>
        <h3 className={`text-2xl font-bold ${
          isAlert ? 'text-amber-500' :
          isPrimary ? 'text-[#A390E4]' :
          'text-slate-900'
        }`}>{value}</h3>
        {subtext && <p className="text-sm text-slate-500 mt-1">{subtext}</p>}
        {trend && (
          <div className={`flex items-center gap-1 text-sm mt-2 ${
            trend.direction === 'up' ? 'text-emerald-500' : 'text-red-500'
          }`}>
            {trend.direction === 'up' ? '↑' : '↓'} {trend.value}
          </div>
        )}
      </div>
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
        isAlert ? 'bg-amber-50' :
        isPrimary ? 'bg-gradient-to-br from-emerald-50 to-[#A390E4]/10' :
        'bg-gradient-to-br from-emerald-50 to-[#A390E4]/10'
      }`}>
        <Icon className={`w-6 h-6 ${
          isAlert ? 'text-amber-500' :
          isPrimary ? 'text-emerald-500' :
          'text-emerald-500'
        }`} />
      </div>
    </div>
  </div>
);

const TimelineItem = ({ time, title, description, status, icon: Icon, avatar }) => (
  <div className="relative pl-12">
    <div className={`absolute left-0 w-8 h-8 rounded-full ${
      status === 'completed' ? 'bg-emerald-500' :
      status === 'current' ? 'bg-[#A390E4]' : 
      'bg-slate-200'
    } flex items-center justify-center`}>
      <Icon className="w-4 h-4 text-white" />
    </div>
    <div className="bg-white p-4 rounded-xl border border-slate-200 hover:shadow-md transition-all">
      <div className="flex justify-between items-start mb-2">
        <div className="text-sm font-medium text-[#A390E4]">{time}</div>
        {status === 'current' && (
          <span className="px-2 py-1 bg-emerald-50 text-emerald-600 text-xs rounded-full">
            In Progress
          </span>
        )}
      </div>
      <div className="font-medium text-slate-900 mb-1">{title}</div>
      <div className="text-sm text-slate-600 mb-3">{description}</div>
      {avatar && (
        <div className="flex items-center gap-2">
          <img src={avatar} alt="" className="w-6 h-6 rounded-full" />
          <span className="text-sm text-slate-500">with Dr. Thompson</span>
        </div>
      )}
    </div>
  </div>
);

const MetricCard = ({ title, value, unit, trend, chart, icon: Icon }) => (
  <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-all">
    <div className="flex items-start justify-between mb-6">
      <div>
        <div className="flex items-center gap-2">
          <Icon className="w-5 h-5 text-emerald-500" />
          <h3 className="text-slate-900 font-medium">{title}</h3>
        </div>
        <div className="flex items-baseline gap-2 mt-2">
          <div className="text-3xl font-bold text-slate-900">{value}</div>
          <div className="text-sm text-slate-500">{unit}</div>
        </div>
      </div>
      {trend && (
        <div className={`px-2 py-1 rounded-full text-sm ${
          trend.direction === 'up' ? 'bg-emerald-50 text-emerald-600' :
          trend.direction === 'down' ? 'bg-red-50 text-red-600' :
          'bg-slate-50 text-slate-600'
        }`}>
          {trend.direction === 'up' ? '↑' : '↓'} {trend.value}
        </div>
      )}
    </div>
    <div className="h-32">
      {chart}
    </div>
  </div>
);

const InsightCard = ({ title, message, recommendation, icon: Icon, severity }) => (
  <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
    <div className="flex items-center gap-2 mb-3">
      <div className="p-2 bg-white/20 rounded-lg">
        <Icon className="w-4 h-4" />
      </div>
      <h3 className="font-medium">{title}</h3>
    </div>
    <p className="text-sm text-white/90 mb-3">{message}</p>
    <div className="flex items-center gap-2 text-sm text-white/80 bg-black/20 p-2 rounded-lg">
      <Brain className="w-4 h-4" />
      <span>{recommendation}</span>
    </div>
  </div>
);

const CareUpdate = ({ avatar, name, role, message, time, actionRequired }) => (
  <div className="bg-white p-4 rounded-xl border border-slate-200 hover:shadow-md transition-all">
    <div className="flex gap-4">
      <img src={avatar} alt={name} className="w-10 h-10 rounded-full" />
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-slate-900">{name}</span>
              <span className="text-sm text-slate-500">{role}</span>
            </div>
            <p className="text-sm text-slate-600 mt-1">{message}</p>
          </div>
          <span className="text-xs text-slate-400">{time}</span>
        </div>
        {actionRequired && (
          <button className="mt-3 text-sm text-emerald-600 hover:text-emerald-700 font-medium">
            View Details →
          </button>
        )}
      </div>
    </div>
  </div>
);

const CareSeekerDashboard = () => {
  const [selectedMetric, setSelectedMetric] = useState(null);

  const quickActions = [
    {
      icon: Calendar,
      title: "Next Care Visit",
      value: "2:00 PM",
      subtext: "Physical Therapy Session",
      isPrimary: true
    },
    {
      icon: Activity,
      title: "Health Score",
      value: "92",
      subtext: "Overall Wellness",
      trend: { direction: 'up', value: '+2 points' }
    },
    {
      icon: Brain,
      title: "AI Analysis",
      value: "Stable",
      subtext: "All vitals normal"
    },
    {
      icon: Bell,
      title: "Action Items",
      value: "2 Tasks",
      subtext: "Require attention",
      isAlert: true
    }
  ];

  const timelineItems = [
    {
      time: "9:00 AM",
      title: "Morning Health Check",
      description: "Blood pressure, temperature, and medication check",
      status: "completed",
      icon: Activity
    },
    {
      time: "2:00 PM",
      title: "Physical Therapy Session",
      description: "Mobility exercises and strength training",
      status: "current",
      icon: Heart,
      avatar: "/api/placeholder/24/24"
    },
    {
      time: "4:30 PM",
      title: "Medication Review",
      description: "Weekly review with AI Health Assistant",
      status: "upcoming",
      icon: FileText
    }
  ];

  const metrics = [
    {
      icon: Heart,
      title: "Blood Pressure",
      value: "120/80",
      unit: "mmHg",
      trend: { direction: 'stable', value: 'Normal' }
    },
    {
      icon: Activity,
      title: "Heart Rate",
      value: "72",
      unit: "bpm",
      trend: { direction: 'down', value: '-3 bpm' }
    }
  ];

  const insights = [
    {
      icon: Activity,
      title: "Sleep Quality",
      message: "Your sleep pattern shows improvement. Average of 7.5 hours/night.",
      recommendation: "Maintain current sleep schedule",
      severity: "positive"
    },
    {
      icon: Heart,
      title: "Exercise Goal",
      message: "You're 80% towards your weekly activity target.",
      recommendation: "20 min walk recommended today",
      severity: "neutral"
    }
  ];

  const updates = [
    {
      avatar: "/api/placeholder/40/40",
      name: "Dr. Thompson",
      role: "Physical Therapist",
      message: "Updated your exercise routine based on progress",
      time: "30 minutes ago",
      actionRequired: true
    },
    {
      avatar: "/api/placeholder/40/40",
      name: "Nurse Maria",
      role: "Primary Nurse",
      message: "Morning vitals recorded and reviewed",
      time: "2 hours ago",
      actionRequired: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      <main className="max-w-7xl mx-auto px-4 py-8 pt-24">
        {/* Page Header */}
        <div className="mb-8">
          <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-emerald-100 to-[#A390E4]/10 rounded-full mb-6">
            <div className="h-2 w-2 rounded-full bg-[#A390E4] animate-pulse mr-2"></div>
            <span className="text-emerald-700 font-medium">Dashboard Overview</span>
          </div>
          <h1 className="text-4xl font-bold text-emerald-700 mb-4">
            Healthcare
            <span className="text-[#A390E4]"> Dashboard</span>
          </h1>
          <p className="text-xl text-slate-600">
            Monitor your care plan, health metrics, and professional support in one place.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickActions.map((action, index) => (
            <QuickActionCard key={index} {...action} />
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Care Timeline */}
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-900">Today's Care Timeline</h2>
                <button className="flex items-center gap-2 text-[#A390E4] hover:text-[#8B76D1] font-medium">
                  View Full Schedule
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="relative space-y-6">
                <div className="absolute top-2 bottom-8 left-4 w-0.5 bg-[#A390E4]/20"></div>
                {timelineItems.map((item, index) => (
                  <TimelineItem key={index} {...item} />
                ))}
              </div>
            </section>

            {/* Health Metrics */}
            <div className="grid md:grid-cols-2 gap-6">
              {metrics.map((metric, index) => (
                <MetricCard key={index} {...metric} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* AI Insights */}
            <section className="bg-gradient-to-br from-[#A390E4] to-violet-500 rounded-xl shadow-sm p-6 text-white">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/10 rounded-lg">
                    <Brain className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold">AI Guardian</h2>
                </div>
                <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                  <Settings className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-4">
                {insights.map((insight, index) => (
                  <InsightCard key={index} {...insight} />
                ))}
              </div>
            </section>

            {/* Care Updates */}
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-900">Care Updates</h2>
                <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors">
                  <Bell className="w-5 h-5 text-slate-400" />
                </button>
              </div>
              <div className="space-y-4">
                {updates.map((update, index) => (
                  <CareUpdate key={index} {...update} />
                ))}
              </div>
            </section>

            {/* Quick Links */}
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Quick Links</h2>
              <div className="space-y-3">
                {[
                  { icon: FileText, text: "View Care Plan", link: "/care-plan" },
                  { icon: Users, text: "Care Team", link: "/care-team" },
                  { icon: MessageCircle, text: "Messages", link: "/messages" },
                  { icon: Settings, text: "Settings", link: "/settings" }
                ].map((item, index) => (
                  <button
                    key={index}
                    className="w-full flex items-center gap-3 p-3 hover:bg-slate-50 rounded-lg transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-50 to-[#A390E4]/10 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-emerald-500" />
                    </div>
                    <span className="text-slate-600 group-hover:text-slate-900">{item.text}</span>
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

export default CareSeekerDashboard;