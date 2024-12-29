import React from "react";

const Settings = () => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-slate-900">Settings</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="email" className="block text-slate-800 font-medium mb-2">
            Email Notifications
          </label>
          <input
            type="checkbox"
            id="email"
            name="email"
            className="rounded text-emerald-500 focus:ring-emerald-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="profile" className="block text-slate-800 font-medium mb-2">
            Profile Visibility
          </label>
          <select
            id="profile"
            name="profile"
            className="block w-full rounded-md border-slate-300 shadow-sm focus:border-emerald-500 focus:ring focus:ring-emerald-200"
          >
            <option>Public</option>
            <option>Private</option>
          </select>
        </div>
        <button className="bg-emerald-500 text-white px-4 py-2 rounded-full hover:bg-emerald-600 transition">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Settings;
