import React from "react";

const Notifications = () => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-slate-900">Notifications</h2>
      <ul className="space-y-4">
        {/* Example notifications */}
        <li className="border border-slate-200 rounded-xl p-4">
          <p className="text-slate-600">Appointment with Jane Smith is confirmed for Jan 25, 2025.</p>
        </li>
        <li className="border border-slate-200 rounded-xl p-4">
          <p className="text-slate-600">Your care plan has been updated.</p>
        </li>
      </ul>
    </div>
  );
};

export default Notifications;
