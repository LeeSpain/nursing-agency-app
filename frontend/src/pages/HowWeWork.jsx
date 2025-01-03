import React from "react";
import CareSeekerHeader from "../components/layout/CareSeekerHeader";

const HowWeWork = () => {
  return (
    <div className="min-h-screen bg-white">
      <CareSeekerHeader />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-emerald-600 mb-6">How We Work</h1>
        <p className="text-lg text-slate-600 mb-8">
          At CareSeeker, we simplify the process of connecting care providers with those in need. Here’s how our platform works:
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-emerald-600 mb-4">1. Find the Perfect Match</h2>
            <p className="text-slate-600">
              Using our AI-powered matching system, we connect you with care providers that meet your specific needs.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-emerald-600 mb-4">2. Plan Your Care</h2>
            <p className="text-slate-600">
              Collaborate with your care provider to create a personalized care plan tailored to your requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
