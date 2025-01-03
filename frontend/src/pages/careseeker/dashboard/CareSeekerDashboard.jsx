import React from 'react';
import {
 Activity, Bell, Calendar, Clock, Users, FileText,
 Heart, Settings, ChevronRight, Brain, MessageCircle,
 AlertTriangle, TrendingUp, ChevronDown, User,
 Shield, Star
} from 'lucide-react';
import { Link } from 'react-router-dom';

const TimelineItem = ({ time, title, description, status, icon: Icon }) => (
 <div className="relative pl-10">
   <div className={`absolute left-2 w-5 h-5 rounded-full ${
     status === 'completed' ? 'bg-emerald-500' :
     status === 'current' ? 'bg-[#A390E4]' : 'bg-slate-200'
   } flex items-center justify-center`}>
     <Icon className="w-3 h-3 text-white" />
   </div>
   <div className="bg-white p-4 rounded-lg border border-slate-200">
     <div className="text-sm text-[#A390E4] font-medium">{time}</div>
     <div className="font-medium text-slate-800">{title}</div>
     <div className="text-sm text-slate-600">{description}</div>
   </div>
 </div>
);

const MetricCard = ({ title, value, trend, chart }) => (
 <div className="bg-white rounded-xl shadow-lg p-6">
   <div className="flex justify-between items-start mb-4">
     <div>
       <h3 className="text-slate-800 font-medium">{title}</h3>
       <div className="text-2xl font-bold text-[#A390E4]">{value}</div>
     </div>
     <div className={`px-2 py-1 rounded-full text-sm ${
       trend === 'up' ? 'bg-emerald-100 text-emerald-600' :
       trend === 'down' ? 'bg-red-100 text-red-600' :
       'bg-slate-100 text-slate-600'
     }`}>
       {trend === 'up' ? '↑' : trend === 'down' ? '↓' : '•'} {trend}
     </div>
   </div>
   <div className="h-32">
     {chart}
   </div>
 </div>
);

const InsightCard = ({ title, message, recommendation }) => (
 <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
   <h3 className="font-medium mb-2">{title}</h3>
   <p className="text-sm text-white/90 mb-2">{message}</p>
   <div className="flex items-center gap-2 text-sm text-white/80">
     <Brain className="w-4 h-4" />
     <span>{recommendation}</span>
   </div>
 </div>
);

const CareUpdate = ({ avatar, name, role, message, time }) => (
 <div className="flex gap-4 p-4 bg-slate-50 rounded-lg">
   <img src={avatar} alt={name} className="w-10 h-10 rounded-full" />
   <div>
     <div className="flex items-center gap-2">
       <span className="font-medium text-slate-800">{name}</span>
       <span className="text-sm text-slate-500">{role}</span>
     </div>
     <p className="text-sm text-slate-600 mt-1">{message}</p>
     <span className="text-xs text-slate-400">{time}</span>
   </div>
 </div>
);

const QuickActionCard = ({ icon: Icon, title, value, subtext, trend, status, isPrimary, isAlert }) => (
 <div className={`bg-white rounded-xl shadow-lg p-6 ${isPrimary ? 'border-2 border-[#A390E4]' : ''}`}>
   <div className="flex justify-between items-start">
     <div>
       <p className="text-sm text-slate-600">{title}</p>
       <h3 className={`text-2xl font-bold ${
         isAlert ? 'text-amber-500' :
         isPrimary ? 'text-[#A390E4]' :
         'text-slate-800'
       }`}>{value}</h3>
       {subtext && <p className="text-sm text-slate-500 mt-1">{subtext}</p>}
     </div>
     <div className={`p-3 rounded-xl ${
       isAlert ? 'bg-amber-50' :
       isPrimary ? 'bg-[#A390E4]/10' :
       'bg-slate-50'
     }`}>
       <Icon className={`w-6 h-6 ${
         isAlert ? 'text-amber-500' :
         isPrimary ? 'text-[#A390E4]' :
         'text-slate-600'
       }`} />
     </div>
   </div>
 </div>
);

const timelineItems = [
 {
   time: '9:00 AM',
   title: 'Morning Health Check',
   description: 'Blood pressure and temperature check with Nurse Maria',
   status: 'completed',
   icon: Activity
 },
 {
   time: '2:00 PM',
   title: 'Physical Therapy Session',
   description: 'Mobility exercises with Dr. Thompson',
   status: 'current',
   icon: Heart
 },
 {
   time: '4:30 PM',
   title: 'Medication Review',
   description: 'Weekly review of medication schedule',
   status: 'upcoming',
   icon: FileText
 }
];

const careUpdates = [
 {
   avatar: 'https://via.placeholder.com/40',
   name: 'Nurse Maria',
   role: 'Primary Nurse',
   message: 'Updated care plan based on morning assessment',
   time: '30 minutes ago'
 },
 {
   avatar: 'https://via.placeholder.com/40',
   name: 'Dr. Thompson',
   role: 'Physical Therapist',
   message: 'Added new exercises to your routine',
   time: '2 hours ago'
 }
];

const CareSeekerDashboard = () => {
 return (
   <div className="min-h-screen bg-slate-50">
     <main className="max-w-7xl mx-auto px-4 py-8 mt-24">
       {/* Stats Overview */}
       <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
         <QuickActionCard
           icon={Calendar}
           title="Next Care Visit"
           value="2:00 PM"
           subtext="with Nurse Maria"
           isPrimary
         />
         <QuickActionCard
           icon={Activity}
           title="Health Score"
           value="92"
           subtext="2 points ↑ from last week"
           trend="up"
         />
         <QuickActionCard
           icon={Brain}
           title="AI Analysis"
           value="Stable"
           subtext="All metrics normal"
           status="positive"
         />
         <QuickActionCard
           icon={Bell}
           title="Action Items"
           value="2 Tasks"
           subtext="Due today"
           isAlert
         />
       </div>

       <div className="grid lg:grid-cols-6 gap-8">
         {/* Main Content */}
         <div className="lg:col-span-4 space-y-8">
           <section className="bg-white rounded-xl shadow-lg p-6">
             <div className="flex justify-between items-center mb-6">
               <h2 className="text-xl font-bold text-slate-800">Today's Care Timeline</h2>
               <button className="text-[#A390E4] hover:text-[#8B76D1] flex items-center gap-2">
                 <Calendar className="w-4 h-4" />
                 Full Schedule
               </button>
             </div>
             
             <div className="relative">
               <div className="absolute top-0 bottom-0 left-4 w-0.5 bg-[#A390E4]/20"></div>
               <div className="space-y-6">
                 {timelineItems.map((item, i) => (
                   <TimelineItem key={i} {...item} />
                 ))}
               </div>
             </div>
           </section>

           <div className="grid md:grid-cols-2 gap-6">
             <MetricCard
               title="Blood Pressure"
               value="120/80"
               trend="stable"
             />
             <MetricCard
               title="Heart Rate"
               value="72 BPM"
               trend="down"
             />
           </div>
         </div>

         {/* Sidebar */}
         <div className="lg:col-span-2 space-y-8">
           <section className="bg-gradient-to-br from-[#A390E4] to-violet-500 rounded-xl shadow-lg p-6 text-white">
             <div className="flex items-center gap-3 mb-6">
               <div className="p-2 bg-white/10 rounded-lg">
                 <Brain className="w-6 h-6" />
               </div>
               <h2 className="text-xl font-bold">AI Guardian</h2>
             </div>
             
             <div className="space-y-4">
               <InsightCard
                 title="Sleep Pattern"
                 message="Your sleep quality has improved by 15% this week"
                 recommendation="Keep maintaining your 10PM bedtime routine"
               />
               <InsightCard
                 title="Activity Level"
                 message="You've been less active than usual"
                 recommendation="Consider a short walk this afternoon"
               />
             </div>
           </section>

           <section className="bg-white rounded-xl shadow-lg p-6">
             <h2 className="text-xl font-bold text-slate-800 mb-6">Care Team Updates</h2>
             <div className="space-y-4">
               {careUpdates.map((update, i) => (
                 <CareUpdate key={i} {...update} />
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