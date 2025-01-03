import React from "react";
import { BarChart, DollarSign, Shield, Brain, Calendar } from "lucide-react";

const ServicesForNurses = () => (
  <div className="min-h-screen bg-white">
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-emerald-700 text-center mb-8">
        Services for Healthcare Providers
      </h1>
      <p className="text-xl text-slate-600 text-center mb-16">
        Empower your practice with tools designed for success.
      </p>

      <div className="grid md:grid-cols-3 gap-12">
        {/* Service 1 */}
        <div className="bg-emerald-50 p-8 rounded-xl shadow-lg">
          <Brain className="w-12 h-12 text-emerald-500 mb-4" />
          <h2 className="text-2xl font-bold text-emerald-600 mb-4">AI Matching</h2>
          <p className="text-slate-600">
            Let our intelligent system connect you with the right clients based on your expertise.
          </p>
        </div>

        {/* Service 2 */}
        <div className="bg-emerald-50 p-8 rounded-xl shadow-lg">
          <Calendar className="w-12 h-12 text-emerald-500 mb-4" />
          <h2 className="text-2xl font-bold text-emerald-600 mb-4">Scheduling</h2>
          <p className="text-slate-600">
            Simplified calendar management to keep your appointments organized and efficient.
          </p>
        </div>

        {/* Service 3 */}
        <div className="bg-emerald-50 p-8 rounded-xl shadow-lg">
          <BarChart className="w-12 h-12 text-emerald-500 mb-4" />
          <h2 className="text-2xl font-bold text-emerald-600 mb-4">Analytics</h2>
          <p className="text-slate-600">
            Track your progress and identify areas for growth with detailed insights.
          </p>
        </div>

        {/* Service 4 */}
        <div className="bg-emerald-50 p-8 rounded-xl shadow-lg">
          <DollarSign className="w-12 h-12 text-emerald-500 mb-4" />
          <h2 className="text-2xl font-bold text-emerald-600 mb-4">Payments</h2>
          <p className="text-slate-600">
            Manage invoicing and payments seamlessly with integrated tools.
          </p>
        </div>

        {/* Service 5 */}
        <div className="bg-emerald-50 p-8 rounded-xl shadow-lg">
          <Shield className="w-12 h-12 text-emerald-500 mb-4" />
          <h2 className="text-2xl font-bold text-emerald-600 mb-4">Compliance</h2>
          <p className="text-slate-600">
            Ensure your practice meets all regulatory requirements with our compliance tools.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default ServicesForNurses;
