import React from "react";

const Appointments = () => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-slate-900">Appointments</h2>
      <ul className="space-y-4">
        {/* Example appointment */}
        <li className="border border-slate-200 rounded-xl p-4">
          <h3 className="text-lg font-semibold text-slate-800">Upcoming Appointment</h3>
          <p className="text-slate-600">Date: Jan 25, 2025 - 10:00 AM</p>
          <p className="text-slate-600">Nurse: Jane Smith</p>
        </li>
        {/* More appointments can be added dynamically */}
      </ul>
    </div>
  );
};

export default Appointments;
