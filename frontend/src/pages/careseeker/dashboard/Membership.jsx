import React, { useState } from "react";
import {
  CheckCircle,
  AlertCircle,
  CreditCard,
  Calendar,
  Settings,
  Shield,
  Heart,
  Users,
  Clock,
  Brain,
  Star,
  Sparkles,
  ArrowRight,
  BarChart
} from "lucide-react";

const FeatureCheckmark = ({ children }) => (
  <div className="flex items-start gap-3">
    <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
    <span className="text-slate-600">{children}</span>
  </div>
);

const PlanCard = ({ title, price, features, recommended, current, onSelect }) => (
  <div className={`relative ${recommended ? 'scale-105' : ''}`}>
    {recommended && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
        <div className="bg-[#A390E4] text-white px-4 py-1 rounded-full text-sm font-medium">
          Recommended
        </div>
      </div>
    )}
    {current && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
        <div className="bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-medium">
          Current Plan
        </div>
      </div>
    )}
    <div 
      className={`p-8 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all ${
        recommended ? 'border-2 border-[#A390E4]' : current ? 'border-2 border-emerald-500' : 'border border-slate-200'
      }`}
    >
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
        <div className="text-3xl font-bold text-emerald-600 mb-2">{price}</div>
        <p className="text-sm text-slate-500">Billed monthly</p>
      </div>
      <div className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <FeatureCheckmark key={index}>{feature}</FeatureCheckmark>
        ))}
      </div>
      <button
        onClick={onSelect}
        className={`w-full py-3 px-6 rounded-xl font-medium transition-all ${
          current
            ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
            : recommended
            ? 'bg-[#A390E4] text-white hover:bg-[#8B7ACC]'
            : 'bg-emerald-500 text-white hover:bg-emerald-600'
        }`}
        disabled={current}
      >
        {current ? 'Current Plan' : 'Select Plan'}
      </button>
    </div>
  </div>
);

const PaymentMethodCard = ({ 
  type, 
  last4, 
  expiry, 
  isDefault,
  onSetDefault,
  onRemove 
}) => (
  <div className="p-6 rounded-xl border border-slate-200 bg-white">
    <div className="flex justify-between items-start mb-4">
      <div className="flex items-center gap-3">
        <CreditCard className={`w-6 h-6 ${isDefault ? 'text-emerald-500' : 'text-slate-400'}`} />
        <div>
          <div className="font-medium text-slate-900">
            {type} •••• {last4}
          </div>
          <div className="text-sm text-slate-500">Expires {expiry}</div>
        </div>
      </div>
      {isDefault && (
        <span className="text-xs font-medium text-emerald-500 bg-emerald-50 px-2 py-1 rounded-full">
          Default
        </span>
      )}
    </div>
    <div className="flex items-center gap-4">
      {!isDefault && (
        <button
          onClick={onSetDefault}
          className="text-sm text-slate-600 hover:text-emerald-600"
        >
          Set as default
        </button>
      )}
      <button
        onClick={onRemove}
        className="text-sm text-red-600 hover:text-red-700"
      >
        Remove
      </button>
    </div>
  </div>
);

const BillingHistory = () => (
  <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
    <div className="p-6">
      <h3 className="text-lg font-semibold text-slate-900 mb-4">Billing History</h3>
    </div>
    <div className="border-t border-slate-200">
      {[
        {
          date: "Jan 1, 2025",
          amount: "€199.00",
          status: "Paid",
          invoice: "#INV-001"
        },
        {
          date: "Dec 1, 2024",
          amount: "€199.00",
          status: "Paid",
          invoice: "#INV-002"
        },
        {
          date: "Nov 1, 2024",
          amount: "€199.00",
          status: "Paid",
          invoice: "#INV-003"
        }
      ].map((item, i) => (
        <div 
          key={i}
          className="px-6 py-4 flex items-center justify-between hover:bg-slate-50"
        >
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
            </div>
            <div>
              <div className="font-medium text-slate-900">{item.date}</div>
              <div className="text-sm text-slate-500">{item.invoice}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-medium text-slate-900">{item.amount}</div>
            <div className="text-sm text-emerald-500">{item.status}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const StatsCard = ({ icon: Icon, label, value }) => (
  <div className="bg-white p-6 rounded-xl border border-slate-200">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-50 to-[#A390E4]/10 flex items-center justify-center">
        <Icon className="w-6 h-6 text-emerald-500" />
      </div>
      <div>
        <div className="text-sm text-slate-500">{label}</div>
        <div className="text-2xl font-bold text-slate-900">{value}</div>
      </div>
    </div>
  </div>
);

const MembershipPage = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('card1');

  const planFeatures = {
    essential: [
      "Access to AI Nurse Guardian",
      "Basic health monitoring",
      "Secure messaging with care team",
      "Monthly wellness check-ins",
      "Digital health records access"
    ],
    professional: [
      "Everything in Essential plan",
      "Dedicated nurse support",
      "Priority appointment booking",
      "Monthly medication management",
      "Family and carer collaboration",
      "Customized care plans",
      "24/7 chat support"
    ],
    premium: [
      "Everything in Professional plan",
      "24/7 dedicated nurse support",
      "Home visit coordination",
      "Advanced health analytics",
      "Emergency response priority",
      "Extended family collaboration",
      "Concierge medical services",
      "Quarterly health reviews"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-emerald-50">
      <main className="max-w-7xl mx-auto px-4 py-8 pt-24">
        {/* Header Section */}
        <div className="mb-12">
          <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-emerald-100 to-[#A390E4]/10 rounded-full mb-6">
            <div className="h-2 w-2 rounded-full bg-[#A390E4] animate-pulse mr-2"></div>
            <span className="text-emerald-700 font-medium">Membership & Billing</span>
          </div>
          <h1 className="text-4xl font-bold text-emerald-700 mb-4">
            Your Healthcare
            <span className="text-[#A390E4]"> Membership</span>
          </h1>
          <p className="text-xl text-slate-600">
            Manage your subscription and billing details in one place.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <StatsCard 
            icon={Calendar} 
            label="Next Payment"
            value="Jan 10, 2025"
          />
          <StatsCard 
            icon={Users} 
            label="Active Users"
            value="3"
          />
          <StatsCard 
            icon={Clock} 
            label="Hours Used"
            value="24/month"
          />
          <StatsCard 
            icon={Heart} 
            label="Care Sessions"
            value="12/month"
          />
        </div>

        {/* Current Plan */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Available Plans</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <PlanCard
              title="Essential Care"
              price="€99/month"
              features={planFeatures.essential}
              onSelect={() => {}}
            />
            <PlanCard
              title="Professional Care"
              price="€199/month"
              features={planFeatures.professional}
              current={true}
              onSelect={() => {}}
            />
            <PlanCard
              title="Premium Care"
              price="€299/month"
              features={planFeatures.premium}
              recommended={true}
              onSelect={() => {}}
            />
          </div>
        </section>

        {/* Payment Methods */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900">Payment Methods</h2>
            <button className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
              Add Payment Method
            </button>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <PaymentMethodCard
              type="Visa"
              last4="4242"
              expiry="12/25"
              isDefault={true}
              onSetDefault={() => {}}
              onRemove={() => {}}
            />
            <PaymentMethodCard
              type="Mastercard"
              last4="8888"
              expiry="09/26"
              isDefault={false}
              onSetDefault={() => {}}
              onRemove={() => {}}
            />
          </div>
        </section>

        {/* Billing History */}
        <BillingHistory />
      </main>
    </div>
  );
};

export default MembershipPage;