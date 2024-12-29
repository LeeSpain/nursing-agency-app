import React from "react";
import ForNurseHeader from "./ForNurseHeader";

const features = [
  {
    title: "Effortless Scheduling",
    description: "Manage your appointments and shifts seamlessly.",
    details: [
      "Drag-and-drop calendar",
      "Shift reminders",
      "Integration with client schedules",
    ],
  },
  {
    title: "Comprehensive Reporting",
    description: "Track your performance and earnings with ease.",
    details: [
      "Daily activity logs",
      "Income tracking",
      "Exportable reports",
    ],
  },
  {
    title: "Client Management Tools",
    description: "Keep all client details in one place.",
    details: [
      "Medical history",
      "Communication logs",
      "Care plans",
    ],
  },
];

const FeatureCard = ({ title, description, details }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
    <h3 className="text-xl font-semibold text-slate-900 mb-4">{title}</h3>
    <p className="text-slate-600 mb-4">{description}</p>
    <ul className="list-disc pl-5 space-y-2">
      {details.map((detail, index) => (
        <li key={index} className="text-slate-500">
          {detail}
        </li>
      ))}
    </ul>
  </div>
);

const ForNurseFeatures = () => {
  return (
    <div className="min-h-screen bg-emerald-50">
      {/* Nurse Header */}
      <ForNurseHeader />

      {/* Hero Section */}
      <section className="pt-20 pb-16 text-center bg-white shadow">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">
            Empowering Nurses with Advanced Features
          </h1>
          <p className="text-lg text-slate-600">
            Discover tools that simplify your workflow and enhance your professional growth.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Features Designed for You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                details={feature.details}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-emerald-500 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Simplify Your Workflow?
          </h2>
          <p className="text-lg mb-8">
            Join Nurse-Sync today and experience seamless healthcare management.
          </p>
          <button className="bg-white text-emerald-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-100 transition">
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} Nurse-Sync. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ForNurseFeatures;
