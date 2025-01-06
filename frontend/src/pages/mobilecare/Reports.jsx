import React, { useState } from 'react';
import {
  BarChart,
  Download,
  Calendar,
  Clock,
  Users,
  Activity,
  FileText,
  Filter,
  ChevronRight,
  Star,
  ArrowRight,
  Heart,
  Search,
  Link
} from 'lucide-react';

const ReportCard = ({ icon: Icon, title, description, lastGenerated, type }) => (
  <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-all">
    <div className="flex items-start justify-between mb-4">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-50 to-[#A390E4]/10 flex items-center justify-center">
        <Icon className="w-5 h-5 text-emerald-500" />
      </div>
      <div className="flex items-center gap-2">
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          type === 'auto' ? 'bg-emerald-50 text-emerald-600' : 
          'bg-blue-50 text-blue-600'
        }`}>
          {type === 'auto' ? 'Auto-generated' : 'Custom'}
        </span>
      </div>
    </div>
    <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
    <p className="text-sm text-slate-600 mb-4">{description}</p>
    <div className="flex items-center justify-between pt-4 border-t border-slate-200">
      <span className="text-sm text-slate-500">Last generated: {lastGenerated}</span>
      <button className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700">
        <span className="text-sm font-medium">Generate</span>
        <Download className="w-4 h-4" />
      </button>
    </div>
  </div>
);

const MetricPreview = ({ title, value, trend, icon: Icon }) => (
  <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
    <div className="flex justify-between items-start mb-2">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-50 to-[#A390E4]/10 flex items-center justify-center">
        <Icon className="w-5 h-5 text-emerald-500" />
      </div>
      <span className={`text-sm ${
        trend?.type === 'up' ? 'text-emerald-500' : 'text-red-500'
      }`}>
        {trend?.value}
      </span>
    </div>
    <h3 className="text-lg font-semibold text-slate-900 mb-1">{value}</h3>
    <p className="text-sm text-slate-600">{title}</p>
  </div>
);

const Reports = () => {
  const reports = [
    {
      icon: Users,
      title: "Client Care Summary",
      description: "Comprehensive overview of client health trends and care delivery metrics",
      lastGenerated: "Today, 9:30 AM",
      type: "auto"
    },
    {
      icon: Activity,
      title: "Staff Performance",
      description: "Detailed analysis of staff productivity, response times, and client satisfaction",
      lastGenerated: "Yesterday",
      type: "auto"
    },
    {
      icon: Calendar,
      title: "Schedule Analytics",
      description: "Visit frequency, duration, and scheduling efficiency metrics",
      lastGenerated: "2 days ago",
      type: "auto"
    },
    {
      icon: Heart,
      title: "Care Quality Metrics",
      description: "Client outcomes, satisfaction scores, and care plan adherence",
      lastGenerated: "3 days ago",
      type: "custom"
    },
    {
      icon: Link,
      title: "iHealth-Sync Integration",
      description: "Cross-platform usage analytics and synchronization metrics",
      lastGenerated: "1 day ago",
      type: "auto"
    },
    {
      icon: Clock,
      title: "Response Time Analysis",
      description: "Staff response times and client communication metrics",
      lastGenerated: "Today, 2:30 PM",
      type: "custom"
    }
  ];

  const metrics = [
    {
      title: "Active Clients",
      value: "248",
      trend: { type: "up", value: "+12%" },
      icon: Users
    },
    {
      title: "Staff Utilization",
      value: "87%",
      trend: { type: "up", value: "+5%" },
      icon: Activity
    },
    {
      title: "Client Satisfaction",
      value: "4.8/5",
      trend: { type: "up", value: "+0.3" },
      icon: Star
    },
    {
      title: "Care Plan Adherence",
      value: "94%",
      trend: { type: "down", value: "-2%" },
      icon: FileText
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      <main className="max-w-7xl mx-auto px-4 py-8 pt-24">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-emerald-100 to-[#A390E4]/10 rounded-full mb-6">
            <div className="h-2 w-2 rounded-full bg-[#A390E4] animate-pulse mr-2"></div>
            <span className="text-emerald-700 font-medium">Analytics & Reports</span>
          </div>
          <h1 className="text-4xl font-bold text-emerald-700 mb-4">
            Business
            <span className="text-[#A390E4]"> Reports</span>
          </h1>
          <p className="text-xl text-slate-600">
            Generate and analyze comprehensive reports for your healthcare practice
          </p>
        </div>

        {/* Metrics Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <MetricPreview key={index} {...metric} />
          ))}
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 mb-8">
          <div className="flex items-center justify-between">
            <div className="relative flex-1 max-w-xl">
              <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search reports..."
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div className="flex items-center gap-4">
              <select className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <option>All Reports</option>
                <option>Auto-generated</option>
                <option>Custom Reports</option>
              </select>
              <button className="p-2 hover:bg-slate-50 rounded-lg transition-colors">
                <Filter className="w-5 h-5 text-slate-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Reports Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((report, index) => (
            <ReportCard key={index} {...report} />
          ))}
        </div>

        {/* Custom Report Builder */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Custom Report Builder</h2>
              <p className="text-sm text-slate-600">Create tailored reports for your specific needs</p>
            </div>
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
              <span>Create Report</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Client Data', 'Staff Metrics', 'Care Analytics', 'Custom Fields'].map((module) => (
              <div key={module} className="p-4 border border-slate-200 rounded-lg text-center">
                <div className="text-sm font-medium text-slate-900">{module}</div>
                <p className="text-xs text-slate-500 mt-1">Available for custom reports</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Reports;