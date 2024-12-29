// src/components/NurseDashboard/Layout.jsx

import React from "react";
import NurseDashboardHeader from "./NurseDashboardHeader";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <NurseDashboardHeader />
      <main className="flex-1 p-6 max-w-7xl mx-auto">{children}</main>
    </div>
  );
};

export default Layout;
