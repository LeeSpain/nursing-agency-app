import React from "react";

const DashboardOverview = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Welcome Section */}
        <section className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-8 shadow-md mb-12">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            Welcome, Nurse John! 👩‍⚕️
          </h1>
          <p className="text-slate-600">
            Here’s a snapshot of your day and important updates.
          </p>
        </section>

        {/* Quick Stats */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transition-transform hover:scale-105">
            <h2 className="text-xl font-bold text-slate-900 mb-2">5</h2>
            <p className="text-slate-600">Patients Assigned</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transition-transform hover:scale-105">
            <h2 className="text-xl font-bold text-slate-900 mb-2">3</h2>
            <p className="text-slate-600">Upcoming Appointments</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transition-transform hover:scale-105">
            <h2 className="text-xl font-bold text-slate-900 mb-2">2</h2>
            <p className="text-slate-600">Pending Tasks</p>
          </div>
        </section>

        {/* Task Overview */}
        <section className="bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Today's Tasks</h2>
          <ul className="space-y-3">
            <li className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
              <span className="text-slate-700">Morning Check-up with Patient A</span>
              <button className="bg-emerald-500 text-white px-4 py-2 rounded-full hover:bg-emerald-600">
                Start
              </button>
            </li>
            <li className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm">
              <span className="text-slate-700">Follow-up with Patient B</span>
              <button className="bg-emerald-500 text-white px-4 py-2 rounded-full hover:bg-emerald-600">
                Start
              </button>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default DashboardOverview;
