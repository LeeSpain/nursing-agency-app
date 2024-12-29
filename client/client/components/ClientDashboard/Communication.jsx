import React from "react";

const Communication = () => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-slate-900">Communication</h2>
      <p className="text-slate-600">
        Stay connected with your nurse and family members through messaging and updates.
      </p>
      <div className="mt-4">
        <button className="bg-emerald-500 text-white px-4 py-2 rounded-full hover:bg-emerald-600 transition">
          Start Chat
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 ml-4 rounded-full hover:bg-blue-600 transition">
          Schedule Video Call
        </button>
      </div>
    </div>
  );
};

export default Communication;
