import React from "react";
import CareSeekerHeader from "../components/layout/CareSeekerHeader";

const Packages = () => {
  return (
    <div className="min-h-screen bg-white">
      <CareSeekerHeader />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-emerald-600 mb-6">Our Packages</h1>
        <p className="text-lg text-slate-600 mb-8">
          Choose the package that best fits your needs and get started with personalized care today.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-emerald-50 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold text-emerald-600 mb-4">Basic</h2>
            <p className="text-slate-600 mb-6">Ideal for occasional care needs.</p>
            <p className="text-3xl font-bold text-emerald-700 mb-6">$49/month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
