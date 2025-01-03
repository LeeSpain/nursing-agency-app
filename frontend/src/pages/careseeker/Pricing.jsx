import React from 'react';
import { Shield, Heart, Star, CheckCircle, Users, Clock, Brain, Crown } from 'lucide-react';

const PriceCard = ({ plan, price, isPopular, features, icon: Icon }) => (
 <div className={`relative bg-white rounded-2xl shadow-xl ${
   isPopular ? 'ring-2 ring-[#A390E4] scale-105' : ''
 }`}>
   {isPopular && (
     <div className="absolute -top-4 left-1/2 -translate-x-1/2">
       <div className="bg-[#A390E4] text-white px-4 py-1 rounded-full text-sm font-medium">
         Most Popular
       </div>
     </div>
   )}

   <div className="p-8">
     <div className="flex justify-between items-start">
       <div>
         <h3 className="text-xl font-bold text-slate-800">{plan}</h3>
         <div className="mt-4">
           <span className="text-4xl font-bold text-[#A390E4]">€{price}</span>
           <span className="text-slate-600">/month</span>
         </div>
       </div>
       <div className="p-3 bg-[#A390E4]/10 rounded-xl">
         <Icon className="w-8 h-8 text-[#A390E4]" />
       </div>
     </div>

     <div className="mt-8 space-y-4">
       {features.map((feature, index) => (
         <div key={index} className="flex items-start gap-3">
           <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5" />
           <span className="text-slate-600">{feature}</span>
         </div>
       ))}
     </div>

     <button className={`w-full mt-8 py-4 rounded-xl font-medium transition-all ${
       isPopular 
         ? 'bg-[#A390E4] text-white hover:bg-[#8B76D1]'
         : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
     }`}>
       Get Started
     </button>
   </div>
 </div>
);

const PricingPage = () => {
 const plans = [
   {
     icon: Heart,
     plan: "Essential Care",
     price: 99,
     features: [
       "Basic platform access with messaging and alerts",
       "Personal dashboard for client and family",
       "Automated medication reminders",
       "2 monthly professional calls (30 mins each)",
       "Basic communication tools",
       "Family messaging system"
     ]
   },
   {
     icon: Star,
     plan: "Comprehensive Care",
     price: 199,
     isPopular: true,
     features: [
       "All Essential Plan features",
       "5 monthly professional calls",
       "Enhanced medication management",
       "Collaboration with existing carers",
       "Monthly care reports",
       "Conference calls with family",
       "Personalized medication schedules"
     ]
   },
   {
     icon: Crown,
     plan: "Elite Care",
     price: 299,
     features: [
       "All Comprehensive Plan features",
       "Unlimited professional calls",
       "Dedicated case manager",
       "Advanced AI tools",
       "Family dashboard access",
       "24/7 priority support",
       "Real-time health recommendations"
     ]
   }
 ];

 return (
   <div className="min-h-screen bg-gradient-to-b from-[#A390E4]/5 via-white to-[#A390E4]/5">
     <main className="max-w-7xl mx-auto px-4 py-16 mt-24">
       {/* Header */}
       <div className="text-center mb-16">
         <h1 className="text-4xl font-bold text-slate-800 mb-4">
           Choose Your Care Plan
         </h1>
         <p className="text-xl text-slate-600 max-w-2xl mx-auto">
           Select the perfect level of support for your care journey
         </p>
       </div>

       {/* Pricing Grid */}
       <div className="grid md:grid-cols-3 gap-8">
         {plans.map((plan) => (
           <PriceCard key={plan.plan} {...plan} />
         ))}
       </div>

       {/* Features Comparison */}
       <div className="mt-24">
         <h2 className="text-2xl font-bold text-center text-slate-800 mb-12">
           Compare Plan Features
         </h2>
         {/* Add feature comparison table here */}
       </div>

       {/* Trust Signals */}
       <div className="mt-24 grid md:grid-cols-4 gap-8">
         <div className="text-center">
           <div className="w-12 h-12 bg-[#A390E4]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
             <Shield className="w-6 h-6 text-[#A390E4]" />
           </div>
           <h3 className="font-medium text-slate-800 mb-2">Secure Platform</h3>
           <p className="text-slate-600 text-sm">HIPAA compliant & encrypted</p>
         </div>
         {/* Add more trust signals */}
       </div>
     </main>
   </div>
 );
};

export default PricingPage;