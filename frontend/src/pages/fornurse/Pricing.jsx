import React from "react";
import { CheckCircle } from "lucide-react";

const PricingForNurses = () => (
  <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-emerald-700 text-center mb-8">
        Flexible Pricing Plans
      </h1>
      <p className="text-xl text-slate-600 text-center mb-16">
        Choose the plan that fits your goals and scale your healthcare practice with ease.
      </p>

      <div className="grid md:grid-cols-3 gap-12">
        {/* Basic Plan */}
        <div className="p-8 bg-white rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-emerald-600 mb-4">Basic</h2>
          <p className="text-slate-600 mb-6">Perfect for individual practitioners starting out.</p>
          <div className="text-3xl font-bold text-emerald-700 mb-4">€0/month</div>
          <ul className="space-y-3">
            <li>
              <CheckCircle className="w-5 h-5 text-emerald-500 inline-block mr-2" />
              Profile Listing
            </li>
            <li>
              <CheckCircle className="w-5 h-5 text-emerald-500 inline-block mr-2" />
              Basic Scheduling
            </li>
          </ul>
        </div>

        {/* Pro Plan */}
        <div className="p-8 bg-white rounded-xl shadow-lg border-emerald-500 border-2">
          <h2 className="text-2xl font-bold text-emerald-600 mb-4">Pro</h2>
          <p className="text-slate-600 mb-6">Grow your practice with advanced tools.</p>
          <div className="text-3xl font-bold text-emerald-700 mb-4">€19.99/month</div>
          <ul className="space-y-3">
            <li>
              <CheckCircle className="w-5 h-5 text-emerald-500 inline-block mr-2" />
              Advanced Scheduling
            </li>
            <li>
              <CheckCircle className="w-5 h-5 text-emerald-500 inline-block mr-2" />
              Analytics Dashboard
            </li>
          </ul>
        </div>

        {/* Premium Plan */}
        <div className="p-8 bg-white rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-emerald-600 mb-4">Premium</h2>
          <p className="text-slate-600 mb-6">Ideal for scaling your healthcare practice.</p>
          <div className="text-3xl font-bold text-emerald-700 mb-4">€49.99/month</div>
          <ul className="space-y-3">
            <li>
              <CheckCircle className="w-5 h-5 text-emerald-500 inline-block mr-2" />
              Customizable Tools
            </li>
            <li>
              <CheckCircle className="w-5 h-5 text-emerald-500 inline-block mr-2" />
              Dedicated Support
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default PricingForNurses;
