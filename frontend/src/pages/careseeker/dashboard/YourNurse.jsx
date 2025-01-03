import React from 'react';
import {
 Award, FileText, Phone, Mail, Clock, Star,
 CheckCircle, Calendar, MessageCircle, Download,
 Users, Heart, Shield, Activity
} from 'lucide-react';

const NurseProfilePage = () => (
 <div className="min-h-screen bg-slate-50">
   <main className="max-w-7xl mx-auto px-4 py-8 mt-20">
     {/* Profile Header */}
     <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden mb-8">
       <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-8">
         <div className="flex items-center gap-6">
           <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden">
             <img
               src="https://via.placeholder.com/200"
               alt="Maria Gonzales"
               className="w-full h-full object-cover"
             />
           </div>
           <div className="text-white">
             <h1 className="text-3xl font-bold">Maria Gonzales, RN</h1>
             <p className="text-emerald-50 text-lg">Geriatric Care Specialist</p>
             <div className="flex items-center gap-4 mt-4">
               <div className="flex items-center gap-1">
                 <Star className="w-5 h-5 fill-current" />
                 <span>4.9/5 Rating</span>
               </div>
               <div className="flex items-center gap-1">
                 <Clock className="w-5 h-5" />
                 <span>10+ Years Experience</span>
               </div>
             </div>
           </div>
         </div>
       </div>

       <div className="p-6 grid grid-cols-4 gap-4 border-t border-slate-200">
         <div className="text-center">
           <div className="font-bold text-2xl text-emerald-600">150+</div>
           <div className="text-sm text-slate-600">Patients Served</div>
         </div>
         <div className="text-center">
           <div className="font-bold text-2xl text-emerald-600">98%</div>
           <div className="text-sm text-slate-600">Satisfaction Rate</div>
         </div>
         <div className="text-center">
           <div className="font-bold text-2xl text-emerald-600">24/7</div>
           <div className="text-sm text-slate-600">Availability</div>
         </div>
         <div className="text-center">
           <div className="font-bold text-2xl text-emerald-600">15+</div>
           <div className="text-sm text-slate-600">Certifications</div>
         </div>
       </div>
     </div>

     <div className="grid lg:grid-cols-3 gap-8">
       {/* Main Content */}
       <div className="lg:col-span-2 space-y-8">
         {/* Qualifications */}
         <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
           <h2 className="text-xl font-bold text-slate-800 mb-6">Qualifications & Certifications</h2>
           <div className="space-y-4">
             <div className="flex items-start gap-4">
               <Award className="w-6 h-6 text-emerald-500" />
               <div>
                 <h3 className="font-medium text-slate-800">Registered Nurse (RN)</h3>
                 <p className="text-sm text-slate-600">California Board of Nursing</p>
                 <p className="text-sm text-emerald-600">Valid through Dec 2025</p>
               </div>
             </div>
             
             <div className="flex items-start gap-4">
               <Award className="w-6 h-6 text-emerald-500" />
               <div>
                 <h3 className="font-medium text-slate-800">Geriatric Care Certification</h3>
                 <p className="text-sm text-slate-600">American Nurses Credentialing Center</p>
                 <p className="text-sm text-emerald-600">Valid through Aug 2024</p>
               </div>
             </div>
             
             <button className="text-emerald-600 text-sm font-medium hover:text-emerald-700">
               View all certifications →
             </button>
           </div>
         </div>

         {/* Experience & Expertise */}
         <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
           <h2 className="text-xl font-bold text-slate-800 mb-6">Areas of Expertise</h2>
           <div className="flex flex-wrap gap-2">
             <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-sm">Geriatric Care</span>
             <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-sm">Wound Care</span>
             <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-sm">Diabetes Management</span>
             <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-sm">Pain Management</span>
             <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-sm">Alzheimer's Care</span>
           </div>
         </div>

         {/* Verification & Background */}
         <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
           <h2 className="text-xl font-bold text-slate-800 mb-6">Verifications</h2>
           <div className="space-y-4">
             <div className="flex items-center gap-3">
               <CheckCircle className="w-5 h-5 text-emerald-500" />
               <span className="text-slate-600">Background Check Verified</span>
             </div>
             <div className="flex items-center gap-3">
               <CheckCircle className="w-5 h-5 text-emerald-500" />
               <span className="text-slate-600">License Verified</span>
             </div>
             <div className="flex items-center gap-3">
               <CheckCircle className="w-5 h-5 text-emerald-500" />
               <span className="text-slate-600">COVID-19 Vaccination Verified</span>
             </div>
             <div className="flex items-center gap-3">
               <CheckCircle className="w-5 h-5 text-emerald-500" />
               <span className="text-slate-600">CPR Certification Current</span>
             </div>
           </div>
         </div>
       </div>

       {/* Sidebar */}
       <div className="space-y-8">
         {/* Contact Information */}
         <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
           <h2 className="text-xl font-bold text-slate-800 mb-6">Contact Information</h2>
           <div className="space-y-4">
             <div className="flex items-center gap-3">
               <div className="p-2 bg-emerald-50 rounded-lg">
                 <Phone className="w-5 h-5 text-emerald-500" />
               </div>
               <a href="tel:+1234567890" className="text-slate-600 hover:text-emerald-600">
                 (123) 456-7890
               </a>
             </div>
             <div className="flex items-center gap-3">
               <div className="p-2 bg-emerald-50 rounded-lg">
                 <Mail className="w-5 h-5 text-emerald-500" />
               </div>
               <a href="mailto:maria@example.com" className="text-slate-600 hover:text-emerald-600">
                 maria@example.com
               </a>
             </div>
           </div>
         </div>

         {/* Availability */}
         <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
           <h2 className="text-xl font-bold text-slate-800 mb-6">Availability</h2>
           <div className="space-y-3">
             {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map(day => (
               <div key={day} className="flex justify-between items-center">
                 <span className="text-slate-600">{day}</span>
                 <span className="text-emerald-600 font-medium">9:00 AM - 5:00 PM</span>
               </div>
             ))}
           </div>
         </div>

         {/* Documents */}
         <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
           <h2 className="text-xl font-bold text-slate-800 mb-6">Documents</h2>
           <div className="space-y-3">
             <button className="w-full flex items-center gap-3 p-3 border border-slate-200 rounded-lg hover:bg-slate-50">
               <FileText className="w-5 h-5 text-emerald-500" />
               <span className="text-slate-600">Resume</span>
               <Download className="w-5 h-5 text-slate-400 ml-auto" />
             </button>
             <button className="w-full flex items-center gap-3 p-3 border border-slate-200 rounded-lg hover:bg-slate-50">
               <FileText className="w-5 h-5 text-emerald-500" />
               <span className="text-slate-600">Certifications</span>
               <Download className="w-5 h-5 text-slate-400 ml-auto" />
             </button>
             <button className="w-full flex items-center gap-3 p-3 border border-slate-200 rounded-lg hover:bg-slate-50">
               <FileText className="w-5 h-5 text-emerald-500" />
               <span className="text-slate-600">Background Check</span>
               <Download className="w-5 h-5 text-slate-400 ml-auto" />
             </button>
           </div>
         </div>
       </div>
     </div>
   </main>
 </div>
);

export default NurseProfilePage;