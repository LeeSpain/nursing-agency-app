import React from "react";
import DashboardHeader from "../../../components/layout/careseeker/DashboardHeader";

const PlanDetails = ({ title, price, features }) => (
  <div className="p-6 rounded-xl shadow-lg border bg-white hover:shadow-2xl transition-all">
    <h3 className="text-2xl font-bold text-emerald-700 mb-4">{title}</h3>
    <p className="text-emerald-600 text-xl font-bold mb-4">{price}</p>
    <ul className="space-y-2 mb-6">
      {features.map((feature, index) => (
        <li key={index} className="text-slate-600 flex items-center gap-2">
          <span className="text-emerald-500 font-bold">✔</span> {feature}
        </li>
      ))}
    </ul>
  </div>
);

const MembershipPage = () => {
  const middlePlanFeatures = [
    "Dedicated nurse support",
    "Access to AI Nurse Guardian",
    "Monthly medication management",
    "Priority booking for appointments",
    "Health record access",
    "Family and carer collaboration",
    "Customized care plans",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      {/* Dashboard Header */}
      <DashboardHeader />

      {/* Membership Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 mt-20">
        <h1 className="text-3xl font-bold text-emerald-700 mb-6 text-center">
          Your Membership Plan
        </h1>
        <p className="text-center text-slate-600 mb-12">
          Below are the details of your current subscription and additional features available.
        </p>

        {/* Current Plan */}
        <section className="bg-white p-6 rounded-xl shadow-lg border border-emerald-500 mb-12">
          <h2 className="text-2xl font-bold text-emerald-700 mb-4">Professional Care Plan</h2>
          <p className="text-emerald-600 text-lg font-semibold mb-4">
            €199/month
          </p>
          <p className="text-slate-600 mb-6">
            This plan provides comprehensive care and support tailored to your needs. 
          </p>
          <ul className="space-y-2 mb-6">
            {middlePlanFeatures.map((feature, index) => (
              <li key={index} className="text-slate-600 flex items-center gap-2">
                <span className="text-emerald-500 font-bold">✔</span> {feature}
              </li>
            ))}
          </ul>
        </section>

        {/* Payment Details */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-emerald-700 mb-4">Payment Details</h2>
          <p className="text-slate-600 mb-4">
            Your next payment is scheduled for <strong>January 10, 2025</strong>.
          </p>
          <p className="text-slate-600 mb-4">
            Payment Method: <strong>Visa ending in 1234</strong>
          </p>
          <button className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition">
            Update Payment Method
          </button>
        </section>

        {/* Upgrade Options */}
        <section>
          <h2 className="text-2xl font-bold text-emerald-700 mb-6">Upgrade Your Plan</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <PlanDetails
              title="Essential Care Plan"
              price="€99/month"
              features={[
                "Access to AI Nurse Guardian",
                "Secure messaging",
                "Monthly wellness check-ins",
              ]}
            />

            {/* Premium Plan */}
            <PlanDetails
              title="Comprehensive Care Plan"
              price="€299/month"
              features={[
                "Everything in Professional Care Plan",
                "24/7 dedicated support",
                "Extended family and team collaboration",
                "Enhanced medication management",
                "Priority support for urgent care",
              ]}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default MembershipPage;
