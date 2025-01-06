import React, { useState } from "react";
import {
  Users,
  DollarSign,
  Calendar,
  Target,
  BookOpen,
  Heart,
  Settings,
  Clock,
  TrendingUp,
  Shield,
  Activity,
  MessageSquare,
  Star,
  ArrowRight,
  ChevronRight,
  Stethoscope,
  Bell,
  Plus,
  CheckCircle,
  FileText,
} from "lucide-react";
import SelfNurseHeader from "../../components/selfemployed/Self-NurseHeader";

const StatsCard = ({ icon: Icon, label, value, trend }) => (
  <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-all">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-sm text-slate-600">{label}</p>
        <h3 className="text-2xl font-bold text-slate-900 mt-1">{value}</h3>
        {trend && (
          <p className={`text-sm mt-1 ${trend.type === 'up' ? 'text-emerald-500' : 'text-red-500'}`}>
            {trend.type === 'up' ? '↑' : '↓'} {trend.value}
          </p>
        )}
      </div>
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-50 to-[#A390E4]/10 flex items-center justify-center">
        <Icon className="w-6 h-6 text-emerald-500" />
      </div>
    </div>
  </div>
);

const ActionCard = ({ icon: Icon, title, description, link, isPrimary }) => (
  <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-all">
    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-50 to-[#A390E4]/10 flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-emerald-500" />
    </div>
    <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600 text-sm mb-4">{description}</p>
    <a
      href={link}
      className={`inline-flex items-center gap-2 text-sm font-medium ${
        isPrimary
          ? 'text-emerald-600 hover:text-emerald-700'
          : 'text-slate-600 hover:text-slate-900'
      }`}
    >
      Learn More <ArrowRight className="w-4 h-4" />
    </a>
  </div>
);

const AppointmentCard = ({ time, patient, type, status, avatar }) => (
  <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200 hover:shadow-sm transition-all">
    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-50 to-[#A390E4]/10 flex items-center justify-center flex-shrink-0">
      <Clock className="w-6 h-6 text-emerald-500" />
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex items-center justify-between mb-1">
        <span className="font-medium text-slate-900">{time}</span>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          status === 'confirmed' ? 'bg-emerald-50 text-emerald-600' :
          status === 'pending' ? 'bg-amber-50 text-amber-600' :
          'bg-slate-50 text-slate-600'
        }`}>
          {status}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-slate-600 truncate">{patient}</span>
        <span className="text-sm text-slate-500">• {type}</span>
      </div>
    </div>
  </div>
);

const PerformanceMetric = ({ label, value, target, icon: Icon }) => (
  <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200">
    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-50 to-[#A390E4]/10 flex items-center justify-center">
      <Icon className="w-5 h-5 text-emerald-500" />
    </div>
    <div className="flex-1">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-slate-600">{label}</span>
        <span className="text-sm font-medium text-slate-900">{value}</span>
      </div>
      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-emerald-500 rounded-full"
          style={{ width: `${(parseInt(value) / parseInt(target)) * 100}%` }}
        />
      </div>
    </div>
  </div>
);

const NurseDashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const stats = [
    { icon: Users, label: "Active Patients", value: "24", trend: { type: 'up', value: '+3 this month' } },
    { icon: Star, label: "Rating", value: "4.9", trend: { type: 'up', value: '+0.2 this month' } },
    { icon: DollarSign, label: "Revenue", value: "€8,540", trend: { type: 'up', value: '+12% this month' } },
    { icon: Activity, label: "Care Hours", value: "164", trend: { type: 'up', value: '+8 this week' } }
  ];

  const appointments = [
    { time: "9:00 AM", patient: "John Smith", type: "Check-up", status: "confirmed" },
    { time: "11:30 AM", patient: "Sarah Johnson", type: "Physical Therapy", status: "confirmed" },
    { time: "2:00 PM", patient: "Michael Brown", type: "Consultation", status: "pending" }
  ];

  const metrics = [
    { label: "Patient Satisfaction", value: "92", target: "100", icon: Heart },
    { label: "Care Plan Completion", value: "87", target: "100", icon: CheckCircle },
    { label: "Documentation Time", value: "95", target: "100", icon: FileText }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      {/* Add the SelfNurseHeader component here */}
      <SelfNurseHeader />

      <main className="max-w-7xl mx-auto px-4 py-8 pt-24">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-emerald-100 to-[#A390E4]/10 rounded-full mb-6">
            <div className="h-2 w-2 rounded-full bg-[#A390E4] animate-pulse mr-2"></div>
            <span className="text-emerald-700 font-medium">Professional Dashboard</span>
          </div>
          <h1 className="text-4xl font-bold text-emerald-700 mb-4">
            Nurse
            <span className="text-[#A390E4]"> Operations</span>
          </h1>
          <p className="text-xl text-slate-600">
            Monitor and manage your healthcare practice efficiently.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Today's Schedule */}
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-900">Today's Schedule</h2>
                <button className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700">
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">View Calendar</span>
                </button>
              </div>
              <div className="space-y-4">
                {appointments.map((appointment, index) => (
                  <AppointmentCard key={index} {...appointment} />
                ))}
              </div>
            </section>

            {/* Action Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              <ActionCard
                icon={Target}
                title="Practice Growth"
                description="Explore strategies to expand your patient base and enhance your healthcare services."
                link="/growth"
                isPrimary
              />
              <ActionCard
                icon={BookOpen}
                title="Professional Development"
                description="Access continuing education resources and earn additional certifications."
                link="/development"
              />
            </div>

            {/* Performance Metrics */}
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-900">Performance Metrics</h2>
                <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                  View Report →
                </button>
              </div>
              <div className="space-y-4">
                {metrics.map((metric, index) => (
                  <PerformanceMetric key={index} {...metric} />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Quick Actions</h2>
              <div className="space-y-3">
                {[
                  { icon: Plus, text: "New Patient", link: "/patients/new" },
                  { icon: Calendar, text: "Schedule Appointment", link: "/schedule" },
                  { icon: MessageSquare, text: "Messages", link: "/messages" },
                  { icon: FileText, text: "Care Plans", link: "/care-plans" }
                ].map((action, index) => (
                  <button key={index} className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-50 to-[#A390E4]/10 flex items-center justify-center">
                      <action.icon className="w-4 h-4 text-emerald-500" />
                    </div>
                    <span className="text-slate-600 group-hover:text-slate-900">{action.text}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400 ml-auto" />
                  </button>
                ))}
              </div>
            </section>

            {/* Upcoming Tasks */}
            <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-slate-900">Tasks</h2>
                <span className="px-2 py-1 bg-emerald-50 text-emerald-600 text-sm rounded-full">
                  4 pending
                </span>
              </div>
              <div className="space-y-4">
                {[
                  "Review patient reports",
                  "Update care plans",
                  "Team meeting at 3 PM",
                  "Complete training module"
                ].map((task, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50">
                    <div className="w-5 h-5 rounded border-2 border-slate-300 mt-0.5" />
                    <span className="text-slate-600">{task}</span>
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

export default NurseDashboard;