import React, { useState } from "react";
import {
  Bell,
  Users,
  Plus,
  Clock,
  CheckCircle,
  Share2,
  Settings,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Activity
} from "lucide-react";

const QuickActionCard = ({ icon: Icon, title, description, onClick }) => (
  <button 
    onClick={onClick}
    className="w-full bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-slate-200 text-left group"
  >
    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-50 to-[#A390E4]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
      <Icon className="w-6 h-6 text-emerald-500" />
    </div>
    <h3 className="text-lg font-semibold text-emerald-700 mb-2">{title}</h3>
    <p className="text-sm text-slate-600">{description}</p>
  </button>
);

const EventTypeTag = ({ type }) => {
  const colors = {
    Medical: "bg-blue-100 text-blue-700",
    Social: "bg-emerald-100 text-emerald-700",
    Reminder: "bg-amber-100 text-amber-700",
    Meeting: "bg-purple-100 text-purple-700",
    Other: "bg-slate-100 text-slate-700"
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[type] || colors.Other}`}>
      {type}
    </span>
  );
};

const UpcomingEventCard = ({ event }) => (
  <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-slate-200">
    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-50 to-[#A390E4]/10 flex items-center justify-center flex-shrink-0">
      <Clock className="w-6 h-6 text-emerald-500" />
    </div>
    <div className="flex-grow min-w-0">
      <div className="flex items-center gap-2 mb-1">
        <h4 className="text-sm font-semibold text-slate-900 truncate">{event.title}</h4>
        <EventTypeTag type={event.type} />
      </div>
      <p className="text-sm text-slate-600">
        {new Date(event.start).toLocaleDateString('en-US', { 
          month: 'short', 
          day: 'numeric', 
          year: 'numeric',
          hour: 'numeric',
          minute: '2-digit'
        })}
      </p>
    </div>
    <ChevronRight className="w-5 h-5 text-slate-400" />
  </div>
);

const SimpleCalendarView = ({ events, onDateSelect }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDayOfMonth }, (_, i) => i);

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  };

  const hasEventsOnDay = (day) => {
    return events.some(event => {
      const eventDate = new Date(event.start);
      return eventDate.getDate() === day && 
             eventDate.getMonth() === currentDate.getMonth() &&
             eventDate.getFullYear() === currentDate.getFullYear();
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-emerald-700">
          {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </h2>
        <div className="flex gap-2">
          <button
            onClick={prevMonth}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-slate-600" />
          </button>
          <button
            onClick={nextMonth}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <ArrowRight className="w-5 h-5 text-slate-600" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center text-sm font-medium text-slate-600 py-2">
            {day}
          </div>
        ))}
        
        {blanks.map(blank => (
          <div key={`blank-${blank}`} className="aspect-square" />
        ))}
        
        {days.map(day => (
          <button
            key={day}
            onClick={() => onDateSelect(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))}
            className={`aspect-square rounded-lg flex items-center justify-center relative
              ${hasEventsOnDay(day) ? 'bg-emerald-50 hover:bg-emerald-100' : 'hover:bg-slate-50'}
              transition-colors
            `}
          >
            <span className="text-sm text-slate-700">{day}</span>
            {hasEventsOnDay(day) && (
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-emerald-500" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

const CalendarPage = () => {
  const [events] = useState([
    {
      title: "Doctor's Appointment",
      start: new Date(2025, 0, 15, 10, 0),
      end: new Date(2025, 0, 15, 11, 0),
      type: "Medical",
      description: "Visit Dr. Smith for a routine check-up.",
      priority: "high"
    },
    {
      title: "Family Meeting",
      start: new Date(2025, 0, 20, 14, 0),
      end: new Date(2025, 0, 20, 15, 30),
      type: "Social",
      description: "Discuss the upcoming family vacation.",
      priority: "medium"
    }
  ]);

  const quickActions = [
    {
      icon: Plus,
      title: "Add Event",
      description: "Schedule a new appointment or reminder"
    },
    {
      icon: Bell,
      title: "Notifications",
      description: "Manage your event alerts and reminders"
    },
    {
      icon: Share2,
      title: "Share Calendar",
      description: "Grant access to family members or caregivers"
    },
    {
      icon: Activity,
      title: "View Timeline",
      description: "See your events in a timeline view"
    }
  ];

  const handleDateSelect = (date) => {
    const eventsOnDay = events.filter(event => {
      const eventDate = new Date(event.start);
      return eventDate.getDate() === date.getDate() &&
             eventDate.getMonth() === date.getMonth() &&
             eventDate.getFullYear() === date.getFullYear();
    });

    if (eventsOnDay.length > 0) {
      alert(`Events on ${date.toLocaleDateString()}:\n\n${
        eventsOnDay.map(event => `${event.title} - ${event.description}`).join('\n\n')
      }`);
    }
  };

  // Get upcoming events
  const upcomingEvents = events
    .filter(event => event.start > new Date())
    .sort((a, b) => a.start - b.start)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-16">
        {/* Page Header */}
        <div className="mb-8">
          <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-emerald-100 to-[#A390E4]/10 rounded-full mb-6">
            <div className="h-2 w-2 rounded-full bg-[#A390E4] animate-pulse mr-2"></div>
            <span className="text-emerald-700 font-medium">Calendar & Scheduling</span>
          </div>
          <h1 className="text-4xl font-bold text-emerald-700 mb-4">
            Your Healthcare
            <span className="text-[#A390E4]"> Calendar</span>
          </h1>
          <p className="text-xl text-slate-600">
            Manage your appointments, reminders, and schedule in one place.
          </p>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {quickActions.map((action, index) => (
            <QuickActionCard key={index} {...action} />
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Calendar */}
          <div className="lg:col-span-2">
            <SimpleCalendarView events={events} onDateSelect={handleDateSelect} />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Events */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h2 className="text-lg font-semibold text-emerald-700 mb-4">Upcoming Events</h2>
              <div className="space-y-3">
                {upcomingEvents.map((event, index) => (
                  <UpcomingEventCard key={index} event={event} />
                ))}
              </div>
            </div>

            {/* Event Categories */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h2 className="text-lg font-semibold text-emerald-700 mb-4">Event Categories</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <EventTypeTag type="Medical" />
                  <span className="text-sm text-slate-600">Doctor visits, check-ups</span>
                </div>
                <div className="flex items-center gap-2">
                  <EventTypeTag type="Social" />
                  <span className="text-sm text-slate-600">Family & friend visits</span>
                </div>
                <div className="flex items-center gap-2">
                  <EventTypeTag type="Reminder" />
                  <span className="text-sm text-slate-600">Medications, routines</span>
                </div>
                <div className="flex items-center gap-2">
                  <EventTypeTag type="Meeting" />
                  <span className="text-sm text-slate-600">Care team meetings</span>
                </div>
              </div>
            </div>

            {/* Calendar Settings */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h2 className="text-lg font-semibold text-emerald-700 mb-4">Settings</h2>
              <div className="space-y-4">
                <button className="flex items-center gap-2 text-sm text-slate-600 hover:text-emerald-600 transition-colors">
                  <Settings className="w-4 h-4" />
                  Calendar Preferences
                </button>
                <button className="flex items-center gap-2 text-sm text-slate-600 hover:text-emerald-600 transition-colors">
                  <Bell className="w-4 h-4" />
                  Notification Settings
                </button>
                <button className="flex items-center gap-2 text-sm text-slate-600 hover:text-emerald-600 transition-colors">
                  <Users className="w-4 h-4" />
                  Sharing Preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;