import React, { useState } from 'react';
import {
 Calendar, Clock, Bell, Users, FileText, Activity,
 Plus, Trash2, CheckCircle, AlertTriangle, Heart,
 Brain, MessageCircle, Settings, ChevronDown
} from 'lucide-react';

const CarePlanPage = () => {
 const [activeTab, setActiveTab] = useState('daily');

 return (
   <div className="min-h-screen bg-slate-50">
     <main className="max-w-7xl mx-auto px-4 py-8 mt-20">
       {/* Overview Cards */}
       <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
         <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
           <div className="flex justify-between items-start">
             <div>
               <p className="text-sm text-slate-600">Next Assessment</p>
               <h3 className="text-2xl font-bold text-emerald-700">Jan 15</h3>
             </div>
             <div className="p-2 bg-emerald-50 rounded-lg">
               <Calendar className="w-6 h-6 text-emerald-500" />
             </div>
           </div>
         </div>
         
         <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
           <div className="flex justify-between items-start">
             <div>
               <p className="text-sm text-slate-600">Care Hours</p>
               <h3 className="text-2xl font-bold text-emerald-700">32/week</h3>
             </div>
             <div className="p-2 bg-emerald-50 rounded-lg">
               <Clock className="w-6 h-6 text-emerald-500" />
             </div>
           </div>
         </div>

         <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
           <div className="flex justify-between items-start">
             <div>
               <p className="text-sm text-slate-600">Care Team</p>
               <h3 className="text-2xl font-bold text-emerald-700">5 members</h3>
             </div>
             <div className="p-2 bg-emerald-50 rounded-lg">
               <Users className="w-6 h-6 text-emerald-500" />
             </div>
           </div>
         </div>

         <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
           <div className="flex justify-between items-start">
             <div>
               <p className="text-sm text-slate-600">Health Score</p>
               <h3 className="text-2xl font-bold text-emerald-700">85/100</h3>
             </div>
             <div className="p-2 bg-emerald-50 rounded-lg">
               <Activity className="w-6 h-6 text-emerald-500" />
             </div>
           </div>
         </div>
       </div>

       <div className="grid lg:grid-cols-3 gap-8">
         {/* Care Plan Management */}
         <div className="lg:col-span-2 space-y-6">
           {/* Tabs */}
           <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
             <div className="border-b border-slate-200">
               <div className="flex">
                 {['daily', 'weekly', 'medications'].map((tab) => (
                   <button
                     key={tab}
                     onClick={() => setActiveTab(tab)}
                     className={`px-6 py-4 text-sm font-medium ${
                       activeTab === tab
                         ? 'text-emerald-600 border-b-2 border-emerald-500'
                         : 'text-slate-600 hover:text-slate-800'
                     }`}
                   >
                     {tab.charAt(0).toUpperCase() + tab.slice(1)} Plan
                   </button>
                 ))}
               </div>
             </div>

             <div className="p-6">
               {/* Daily Tasks */}
               <div className="space-y-4">
                 <div className="flex items-center justify-between mb-6">
                   <h3 className="text-lg font-semibold text-slate-800">Care Tasks</h3>
                   <button className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600">
                     <Plus className="w-4 h-4" /> Add Task
                   </button>
                 </div>

                 {/* Task Item */}
                 <div className="bg-slate-50 rounded-lg p-4">
                   <div className="flex items-start gap-4">
                     <div className="p-2 bg-white rounded-lg">
                       <Activity className="w-5 h-5 text-emerald-500" />
                     </div>
                     <div className="flex-1">
                       <div className="flex justify-between">
                         <h4 className="font-medium text-slate-800">Morning Health Check</h4>
                         <div className="flex items-center gap-2">
                           <span className="text-sm text-slate-500">9:00 AM</span>
                           <button className="text-slate-400 hover:text-slate-600">
                             <Settings className="w-4 h-4" />
                           </button>
                         </div>
                       </div>
                       <p className="text-sm text-slate-600 mt-1">Blood pressure, temperature, and medication check</p>
                       <div className="flex items-center gap-4 mt-3">
                         <div className="flex items-center gap-1 text-sm text-slate-500">
                           <Bell className="w-4 h-4" />
                           <span>Reminder set</span>
                         </div>
                         <div className="flex items-center gap-1 text-sm text-slate-500">
                           <Users className="w-4 h-4" />
                           <span>Nurse required</span>
                         </div>
                       </div>
                     </div>
                   </div>
                 </div>

                 {/* Add more task items... */}
               </div>
             </div>
           </div>

           {/* Notes & Documentation */}
           <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
             <h3 className="text-lg font-semibold text-slate-800 mb-4">Care Notes</h3>
             <div className="space-y-4">
               <textarea 
                 className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                 rows="4"
                 placeholder="Add care notes..."
               ></textarea>
               <div className="flex justify-between items-center">
                 <div className="flex items-center gap-2 text-sm text-slate-500">
                   <FileText className="w-4 h-4" />
                   <span>Last updated: Today at 10:45 AM</span>
                 </div>
                 <button className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600">
                   Save Notes
                 </button>
               </div>
             </div>
           </div>
         </div>

         {/* Right Sidebar */}
         <div className="space-y-6">
           {/* Care Team */}
           <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
             <h3 className="text-lg font-semibold text-slate-800 mb-4">Care Team</h3>
             <div className="space-y-4">
               <div className="flex items-center gap-3">
                 <img src="https://via.placeholder.com/40" className="w-10 h-10 rounded-full" alt="Team member" />
                 <div>
                   <h4 className="font-medium text-slate-800">Maria Gonzales</h4>
                   <p className="text-sm text-slate-500">Primary Nurse</p>
                 </div>
               </div>
               {/* Add more team members... */}
             </div>
             <button className="w-full mt-4 px-4 py-2 text-emerald-600 border border-emerald-200 rounded-lg hover:bg-emerald-50">
               Manage Team
             </button>
           </div>

           {/* Notifications */}
           <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
             <h3 className="text-lg font-semibold text-slate-800 mb-4">Recent Updates</h3>
             <div className="space-y-4">
               <div className="flex gap-3 items-start">
                 <div className="p-2 bg-emerald-50 rounded-lg">
                   <CheckCircle className="w-4 h-4 text-emerald-500" />
                 </div>
                 <div>
                   <p className="text-sm text-slate-600">Morning medication administered</p>
                   <span className="text-xs text-slate-400">30 minutes ago</span>
                 </div>
               </div>
               {/* Add more notifications... */}
             </div>
           </div>

           {/* Health Metrics */}
           <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
             <h3 className="text-lg font-semibold text-slate-800 mb-4">Health Metrics</h3>
             <div className="space-y-4">
               <div className="flex justify-between items-center">
                 <span className="text-sm text-slate-600">Blood Pressure</span>
                 <span className="font-medium text-emerald-600">120/80</span>
               </div>
               <div className="flex justify-between items-center">
                 <span className="text-sm text-slate-600">Heart Rate</span>
                 <span className="font-medium text-emerald-600">72 bpm</span>
               </div>
               {/* Add more metrics... */}
             </div>
             <button className="w-full mt-4 px-4 py-2 text-emerald-600 border border-emerald-200 rounded-lg hover:bg-emerald-50">
               View Full Report
             </button>
           </div>
         </div>
       </div>
     </main>
   </div>
 );
};

export default CarePlanPage;