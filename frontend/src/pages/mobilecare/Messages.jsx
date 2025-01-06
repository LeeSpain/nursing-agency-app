import React, { useState } from 'react';
import {
  MessageSquare,
  Search,
  Filter,
  Bell,
  Users,
  Star,
  Settings,
  Brain,
  AlertCircle,
  CheckCircle,
  Clock,
  Flag,
  Plus,
  Inbox,
  Send,
  Archive,
  Trash2,
  Ticket,
  Bot,
  BarChart,
  FileText,
} from 'lucide-react';

// EmailView Component
const EmailView = ({ email }) => (
  <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
    <div className="flex justify-between items-start mb-6">
      <div>
        <h2 className="text-xl font-bold text-slate-900">{email.subject}</h2>
        <div className="flex items-center gap-2 mt-2">
          <img src={email.sender.avatar} alt="" className="w-8 h-8 rounded-full" />
          <div>
            <div className="text-sm font-medium text-slate-900">{email.sender.name}</div>
            <div className="text-sm text-slate-500">{email.sender.role}</div>
          </div>
        </div>
      </div>
      <div className="text-sm text-slate-500">{email.time}</div>
    </div>

    <div className="prose prose-slate max-w-none">{email.content}</div>

    {email.attachments && (
      <div className="mt-6 pt-6 border-t border-slate-200">
        <h3 className="text-sm font-medium text-slate-900 mb-3">Attachments</h3>
        <div className="flex gap-4">
          {email.attachments.map((attachment, index) => (
            <div key={index} className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg">
              <FileText className="w-4 h-4 text-slate-400" />
              <span className="text-sm text-slate-600">{attachment}</span>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
);

// ComposeModal Component
const ComposeModal = ({ onClose }) => (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white rounded-2xl w-full max-w-3xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-slate-900">New Message</h3>
        <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
          ×
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="To:"
            className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Subject:"
            className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <div>
          <textarea
            rows="12"
            className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
          ></textarea>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <button className="p-2 text-slate-400 hover:text-emerald-500 hover:bg-emerald-50 rounded-lg">
              <FileText className="w-5 h-5" />
            </button>
            <button className="p-2 text-slate-400 hover:text-emerald-500 hover:bg-emerald-50 rounded-lg">
              <BarChart className="w-5 h-5" />
            </button>
          </div>
          <button className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600">
            Send Message
          </button>
        </div>
      </div>
    </div>
  </div>
);

// Sidebar Component
const Sidebar = ({ folders, activeFolder, onFolderChange }) => (
  <div className="space-y-6">
    <button
      onClick={() => setShowCompose(true)}
      className="w-full px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 flex items-center justify-center gap-2"
    >
      <Plus className="w-5 h-5" />
      Compose
    </button>

    <div className="space-y-2">
      {folders.map((folder) => (
        <button
          key={folder.id}
          onClick={() => onFolderChange(folder.id)}
          className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg ${
            activeFolder === folder.id
              ? 'bg-emerald-50 text-emerald-600'
              : 'text-slate-600 hover:bg-slate-50'
          }`}
        >
          <folder.icon className="w-5 h-5" />
          <span className="flex-1 text-left">{folder.name}</span>
          {folder.count > 0 && (
            <span className="px-2 py-0.5 bg-slate-100 rounded-full text-xs">
              {folder.count}
            </span>
          )}
        </button>
      ))}
    </div>
  </div>
);

// TicketOverview Component
const TicketOverview = () => (
  <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
    <div className="flex justify-between items-center mb-6">
      <h3 className="text-lg font-semibold text-slate-900">Active Tickets</h3>
      <div className="flex gap-2">
        <select className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-sm">
          <option>All Tickets</option>
          <option>Open</option>
          <option>In Progress</option>
          <option>Resolved</option>
        </select>
        <button className="p-2 hover:bg-slate-50 rounded-lg">
          <Plus className="w-4 h-4 text-slate-400" />
        </button>
      </div>
    </div>

    <div className="space-y-4">
      {[
        {
          id: 'TK-001',
          title: 'Client Care Plan Update',
          assignee: 'Sarah Johnson',
          priority: 'high',
          status: 'in-progress',
          time: '2h ago',
        },
        {
          id: 'TK-002',
          title: 'Medication Schedule Review',
          assignee: 'Michael Chen',
          priority: 'medium',
          status: 'open',
          time: '4h ago',
        },
      ].map((ticket) => (
        <div
          key={ticket.id}
          className="flex items-center justify-between p-4 bg-slate-50 rounded-lg"
        >
          <div className="flex items-center gap-4">
            <span
              className={`w-2 h-2 rounded-full ${
                ticket.priority === 'high'
                  ? 'bg-red-500'
                  : ticket.priority === 'medium'
                  ? 'bg-amber-500'
                  : 'bg-emerald-500'
              }`}
            />
            <div>
              <div className="font-medium text-slate-900">{ticket.title}</div>
              <div className="text-sm text-slate-500">
                Assigned to {ticket.assignee} • {ticket.time}
              </div>
            </div>
          </div>
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              ticket.status === 'in-progress'
                ? 'bg-blue-50 text-blue-600'
                : ticket.status === 'open'
                ? 'bg-amber-50 text-amber-600'
                : 'bg-emerald-50 text-emerald-600'
            }`}
          >
            {ticket.status}
          </span>
        </div>
      ))}
    </div>
  </div>
);

// AIGuardianInsights Component
const AIGuardianInsights = () => (
  <div className="bg-gradient-to-br from-[#A390E4] to-violet-500 rounded-xl shadow-sm p-6 text-white">
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-white/10 rounded-lg">
          <Brain className="w-6 h-6" />
        </div>
        <h3 className="text-lg font-semibold">AI Guardian Insights</h3>
      </div>
      <span className="px-3 py-1 bg-white/10 rounded-full text-sm">24/7 Active</span>
    </div>

    <div className="space-y-4">
      {[
        {
          type: 'alert',
          message: 'Unusual pattern detected in night shift response times',
          action: 'Review staffing levels',
        },
        {
          type: 'insight',
          message: 'Client satisfaction trending upward in rehabilitation unit',
          action: 'View detailed analysis',
        },
      ].map((insight, index) => (
        <div key={index} className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-2">
            {insight.type === 'alert' ? (
              <AlertCircle className="w-4 h-4" />
            ) : (
              <Bot className="w-4 h-4" />
            )}
            <span className="text-sm font-medium">
              {insight.type === 'alert' ? 'Alert' : 'Insight'}
            </span>
          </div>
          <p className="text-sm mb-2">{insight.message}</p>
          <button className="text-sm text-white/80 hover:text-white">
            {insight.action} →
          </button>
        </div>
      ))}
    </div>
  </div>
);

// MessagesDashboard Component
const MessagesDashboard = () => {
  const [showCompose, setShowCompose] = useState(false);
  const [activeFolder, setActiveFolder] = useState('inbox');
  const [selectedEmail, setSelectedEmail] = useState(null);

  const folders = [
    { id: 'inbox', name: 'Inbox', icon: Inbox, count: 24 },
    { id: 'sent', name: 'Sent', icon: Send, count: 0 },
    { id: 'archived', name: 'Archived', icon: Archive, count: 0 },
    { id: 'trash', name: 'Trash', icon: Trash2, count: 0 },
  ];

  const emails = [
    {
      id: 1,
      subject: 'Staff Meeting - Care Protocol Updates',
      sender: {
        name: 'Dr. Sarah Johnson',
        role: 'Care Manager',
        avatar: '/api/placeholder/32/32',
      },
      time: '10:30 AM',
      content: 'Important updates regarding new care protocols...',
      attachments: ['protocol_v2.pdf', 'guidelines.docx'],
    },
    {
      id: 2,
      subject: 'Monthly Performance Review',
      sender: {
        name: 'HR Department',
        role: 'Human Resources',
        avatar: '/api/placeholder/32/32',
      },
      time: 'Yesterday',
      content: 'Please find attached the monthly performance metrics...',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      <main className="max-w-7xl mx-auto px-4 py-8 pt-24">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-emerald-100 to-[#A390E4]/10 rounded-full mb-6">
            <div className="h-2 w-2 rounded-full bg-[#A390E4] animate-pulse mr-2"></div>
            <span className="text-emerald-700 font-medium">Internal Communications</span>
          </div>
          <h1 className="text-4xl font-bold text-emerald-700 mb-4">
            Company
            <span className="text-[#A390E4]"> Messages</span>
          </h1>
          <p className="text-xl text-slate-600">
            Manage internal communications and team messages
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Sidebar
              folders={folders}
              activeFolder={activeFolder}
              onFolderChange={setActiveFolder}
            />
            <AIGuardianInsights />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
              <div className="flex items-center gap-4">
                <div className="relative flex-1">
                  <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search messages, tickets, or insights..."
                    className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <button className="p-2 hover:bg-slate-50 rounded-lg">
                  <Filter className="w-5 h-5 text-slate-400" />
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <TicketOverview />
              <div className="space-y-6">{/* Other metrics and insights */}</div>
            </div>

            {/* Email View */}
            {activeFolder === 'inbox' && (
              <div className="space-y-4">
                {emails.map((email) => (
                  <div
                    key={email.id}
                    onClick={() => setSelectedEmail(email)}
                    className="cursor-pointer hover:bg-slate-50 transition-colors"
                  >
                    <EmailView email={email} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {showCompose && <ComposeModal onClose={() => setShowCompose(false)} />}
    </div>
  );
};

export default MessagesDashboard;