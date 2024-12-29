import React from "react";

const CarePlan = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-md">
        <h1 className="text-xl font-bold p-4">Care Plan</h1>
      </header>
      
      <main className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">Your Current Care Plan</h2>
        <ul className="space-y-4">
          <li className="p-4 bg-white shadow rounded">Weekly Video Consultation</li>
          <li className="p-4 bg-white shadow rounded">Custom Exercise Routine</li>
          <li className="p-4 bg-white shadow rounded">Monthly Progress Report</li>
        </ul>
      </main>
    </div>
  );
};

export default CarePlan;
