import React, { useState, useEffect } from "react";
import { 
  Send, 
  Search, 
  Phone, 
  Video,
  MoreVertical, 
  Paperclip, 
  Image, 
  Clock,
  Brain,
  Users,
  Calendar,
  X,
  Activity,
  FileText,
  ClipboardList,
  Heart,
  Plus,
  BookOpen,
  AlertCircle
} from "lucide-react";

const QuickActions = () => (
  <div className="p-4 border-b">
    <h3 className="text-sm font-medium text-slate-700 mb-3">Quick Actions</h3>
    <div className="grid grid-cols-4 gap-2">
      <button className="flex flex-col items-center p-2 rounded-lg hover:bg-slate-50">
        <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mb-1">
          <Calendar className="w-4 h-4 text-emerald-600" />
        </div>
        <span className="text-xs text-slate-600">Schedule</span>
      </button>
      <button className="flex flex-col items-center p-2 rounded-lg hover:bg-slate-50">
        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-1">
          <BookOpen className="w-4 h-4 text-blue-600" />
        </div>
        <span className="text-xs text-slate-600">Records</span>
      </button>
      <button className="flex flex-col items-center p-2 rounded-lg hover:bg-slate-50">
        <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mb-1">
          <Activity className="w-4 h-4 text-purple-600" />
        </div>
        <span className="text-xs text-slate-600">Vitals</span>
      </button>
      <button className="flex flex-col items-center p-2 rounded-lg hover:bg-slate-50">
        <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center mb-1">
          <Heart className="w-4 h-4 text-amber-600" />
        </div>
        <span className="text-xs text-slate-600">Care Plan</span>
      </button>
    </div>
  </div>
);

const UpcomingAppointment = () => (
  <div className="p-4 bg-gradient-to-r from-emerald-50 to-[#A390E4]/10 rounded-xl mb-4 mx-4">
    <div className="flex justify-between items-start mb-3">
      <h3 className="font-medium text-emerald-700">Next Appointment</h3>
      <Clock className="w-5 h-5 text-emerald-500" />
    </div>
    <p className="text-sm text-slate-600 mb-2">Video consultation with Dr. Maria</p>
    <div className="flex items-center gap-2 text-sm text-emerald-600">
      <Calendar className="w-4 h-4" />
      <span>Today, 2:00 PM</span>
    </div>
    <button className="mt-3 w-full py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
      Join Call
    </button>
  </div>
);

const ChatActions = () => (
  <div className="grid grid-cols-2 gap-3 p-4 border-b">
    <button className="flex items-center justify-center gap-2 p-3 bg-emerald-50 text-emerald-600 rounded-xl hover:bg-emerald-100 transition-colors">
      <Video className="w-5 h-5" />
      <span className="font-medium">Video Call</span>
    </button>
    <button className="flex items-center justify-center gap-2 p-3 bg-emerald-50 text-emerald-600 rounded-xl hover:bg-emerald-100 transition-colors">
      <Phone className="w-5 h-5" />
      <span className="font-medium">Voice Call</span>
    </button>
  </div>
);

const ContactList = ({ contacts, onSelectContact }) => (
  <div className="h-[calc(100vh-12rem)] overflow-y-auto">
    <div className="p-4 sticky top-0 bg-white border-b">
      <div className="relative">
        <Search className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search messages..."
          className="w-full pl-10 pr-4 py-2 bg-slate-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>
    </div>
    
    <QuickActions />
    <UpcomingAppointment />
    
    <div className="divide-y divide-slate-200">
      {contacts.map((contact, i) => (
        <button 
          key={i} 
          onClick={() => onSelectContact(contact)}
          className="w-full text-left hover:bg-slate-50 transition-colors"
        >
          <div className="flex items-center gap-4 p-4">
            <div className="relative">
              {contact.type === 'human' ? (
                <img src={contact.avatar} alt={contact.name} className="w-12 h-12 rounded-full" />
              ) : (
                <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center">
                  {contact.type === 'ai' ? (
                    <Brain className="w-6 h-6 text-violet-500" />
                  ) : (
                    <Users className="w-6 h-6 text-blue-500" />
                  )}
                </div>
              )}
              {contact.online && (
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline">
                <h3 className="font-medium text-slate-900 truncate">{contact.name}</h3>
                <span className="text-xs text-slate-500">{contact.time}</span>
              </div>
              <div className="flex items-center gap-1">
                {contact.urgent && (
                  <AlertCircle className="w-3 h-3 text-amber-500" />
                )}
                <p className="text-sm text-slate-500 truncate">{contact.lastMessage}</p>
              </div>
            </div>

            {contact.unread > 0 && (
              <div className="w-5 h-5 rounded-full bg-emerald-500 text-white text-xs flex items-center justify-center">
                {contact.unread}
              </div>
            )}
          </div>
        </button>
      ))}
    </div>
  </div>
);

const ChatWindow = ({ selectedContact, onSchedule }) => (
  <div className="flex flex-col h-[calc(100vh-12rem)]">
    <div className="p-4 border-b flex justify-between items-center">
      <div className="flex items-center gap-4">
        {selectedContact.type === 'human' ? (
          <img src={selectedContact.avatar} alt="" className="w-10 h-10 rounded-full" />
        ) : (
          <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center">
            {selectedContact.type === 'ai' ? (
              <Brain className="w-5 h-5 text-violet-500" />
            ) : (
              <Users className="w-5 h-5 text-blue-500" />
            )}
          </div>
        )}
        <div>
          <h2 className="font-medium text-slate-900">{selectedContact.name}</h2>
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            {selectedContact.role || 'Online'}
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-600">
          <Phone className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-600">
          <Video className="w-5 h-5" />
        </button>
        <button 
          onClick={onSchedule}
          className="p-2 hover:bg-slate-100 rounded-lg text-slate-600"
        >
          <Calendar className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-600">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>
    </div>

    <ChatActions />

    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      <div className="flex gap-3">
        {selectedContact.type === 'human' ? (
          <img src={selectedContact.avatar} alt="" className="w-8 h-8 rounded-full" />
        ) : (
          <div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center">
            {selectedContact.type === 'ai' ? (
              <Brain className="w-4 h-4 text-violet-500" />
            ) : (
              <Users className="w-4 h-4 text-blue-500" />
            )}
          </div>
        )}
        <div className="bg-slate-100 rounded-2xl rounded-tl-none px-4 py-2 max-w-[80%]">
          <p className="text-slate-700">How can I help you today?</p>
          <span className="text-xs text-slate-500 mt-1 block">10:30 AM</span>
        </div>
      </div>

      <div className="flex gap-3 flex-row-reverse">
        <div className="bg-emerald-500 text-white rounded-2xl rounded-tr-none px-4 py-2 max-w-[80%]">
          <p>I would like to schedule a video consultation.</p>
          <span className="text-xs text-emerald-50 mt-1 block">10:32 AM</span>
        </div>
      </div>
    </div>

    <div className="p-4 border-t bg-white">
      <div className="flex items-center gap-2">
        <button className="p-2 text-slate-400 hover:text-emerald-500 hover:bg-emerald-50 rounded-lg">
          <Plus className="w-5 h-5" />
        </button>
        <button className="p-2 text-slate-400 hover:text-emerald-500 hover:bg-emerald-50 rounded-lg">
          <Paperclip className="w-5 h-5" />
        </button>
        <input 
          type="text" 
          placeholder="Type your message..." 
          className="flex-1 px-4 py-2 bg-slate-50 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        <button className="p-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600">
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  </div>
);

const ScheduleModal = ({ onClose }) => {
  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", 
    "2:00 PM", "3:00 PM", "4:00 PM"
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-slate-900">Schedule Appointment</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-medium text-slate-700 mb-2">Select Date</h4>
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 7 }).map((_, i) => {
              const date = new Date();
              date.setDate(date.getDate() + i);
              return (
                <button
                  key={i}
                  className="p-2 text-center rounded-lg hover:bg-emerald-50 focus:ring-2 focus:ring-emerald-500"
                >
                  <div className="text-xs text-slate-500">
                    {date.toLocaleDateString('en-US', { weekday: 'short' })}
                  </div>
                  <div className="text-sm font-medium text-slate-900">
                    {date.getDate()}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-medium text-slate-700 mb-2">Available Time Slots</h4>
          <div className="grid grid-cols-2 gap-2">
            {timeSlots.map((time) => (
              <button
                key={time}
                className="p-2 text-sm text-slate-600 rounded-lg border border-slate-200 hover:bg-emerald-50 hover:border-emerald-500"
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <button className="w-full py-2 px-4 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600">
            Schedule Video Call
          </button>
          <button className="w-full py-2 px-4 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-100">
            Schedule Voice Call
          </button>
        </div>
      </div>
    </div>
  );
};

const MessagePage = () => {
  const [selectedContact, setSelectedContact] = useState(null);
  const [showScheduleModal, setShowScheduleModal] = useState(false);

  const contacts = [
    {
      type: 'human',
      name: 'Dr. Maria Gonzales',
      avatar: '/api/placeholder/100/100',
      lastMessage: "I'll review your latest test results.",
      time: '12:30 PM',
      online: true,
      unread: 2,
      role: 'Primary Care Physician',
      urgent: false
    },
    {
      type: 'ai',
      name: 'Health Assistant AI',
      lastMessage: 'Your vital signs are within normal range.',
      time: '11:15 AM',
      online: true,
      unread: 0,
      role: 'AI Health Monitor',
      urgent: false
    },
    {
      type: 'human',
      name: 'Nurse Sarah Johnson',
      avatar: '/api/placeholder/100/100',
      lastMessage: 'Your next check-up is scheduled.',
      time: '10:45 AM',
      online: true,
      unread: 1,
      role: 'Registered Nurse',
      urgent: true
    },
    {
      type: 'group',
      name: 'Care Team',
      lastMessage: 'Treatment plan updated',
      time: '9:30 AM',
      online: false,
      unread: 0,
      role: 'Healthcare Team',
      urgent: false
    }
  ];

  useEffect(() => {
    if (!selectedContact && contacts.length > 0) {
      setSelectedContact(contacts[0]);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      <main className="max-w-7xl mx-auto px-4 py-8 pt-24">
        <div className="mb-8">
          <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-emerald-100 to-[#A390E4]/10 rounded-full mb-6">
            <div className="h-2 w-2 rounded-full bg-[#A390E4] animate-pulse mr-2"></div>
            <span className="text-emerald-700 font-medium">Communication Hub</span>
          </div>
          <h1 className="text-4xl font-bold text-emerald-700 mb-4">
            Healthcare
            <span className="text-[#A390E4]"> Messages</span>
          </h1>
          <p className="text-xl text-slate-600">
            Connect with your healthcare providers securely and efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200">
          <div className="border-r border-slate-200">
            <ContactList 
              contacts={contacts} 
              onSelectContact={setSelectedContact}
            />
          </div>
          <div className="md:col-span-2">
            {selectedContact ? (
              <ChatWindow 
                selectedContact={selectedContact} 
                onSchedule={() => setShowScheduleModal(true)}
              />
            ) : (
              <div className="h-full flex items-center justify-center text-slate-500">
                Select a conversation to start messaging
              </div>
            )}
          </div>
        </div>
      </main>

      {showScheduleModal && (
        <ScheduleModal onClose={() => setShowScheduleModal(false)} />
      )}
    </div>
  );
};

export default MessagePage;