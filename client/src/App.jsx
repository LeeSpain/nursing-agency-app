import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import ForNurseHeader from "./components/ForNurseHeader";
import ForClientHeader from "./components/ForClientHeader";
import ClientDashboardHeader from "./components/ClientDashboard/ClientDashboardHeader";
import NurseDashboardHeader from "./components/NurseDashboard/NurseDashboardHeader";
import HomePage from "./components/HomePage";
import ForNursePage from "./components/ForNursePage";
import ForClientPage from "./components/ForClientPage";
import FeaturesPage from "./components/FeaturesPage";
import ServicesPage from "./components/ServicesPage";
import ForNurseFeatures from "./components/ForNurseFeatures";
import ForNurseBenefits from "./components/ForNurseBenefits";
import ForNursePricing from "./components/ForNursePricing";
import ForClientFeatures from "./components/ForClientFeatures";
import ForClientBenefits from "./components/ForClientBenefits";
import ForClientPricing from "./components/ForClientPricing";

// Dashboard Components
import Dashboard from "./components/ClientDashboard/Dashboard";
import CarePlan from "./components/ClientDashboard/CarePlan";
import Appointments from "./components/ClientDashboard/Appointments";
import Communication from "./components/ClientDashboard/Communication";
import Notifications from "./components/ClientDashboard/Notifications";
import FamilyAccess from "./components/ClientDashboard/FamilyAccess";
import Settings from "./components/ClientDashboard/Settings";

// Nurse Dashboard Components
import NurseDashboardOverview from "./components/NurseDashboard/DashboardOverview";
import NurseSchedule from "./components/NurseDashboard/NurseSchedule";
import NurseReports from "./components/NurseDashboard/NurseReports";
import NurseTasks from "./components/NurseDashboard/NurseTasks";
import NurseCommunications from "./components/NurseDashboard/NurseCommunications";

/**
 * Layout Component
 * Renders the correct header based on route prefixes
 */
function Layout({ children }) {
  const location = useLocation();

  const renderHeader = () => {
    if (location.pathname.startsWith("/dashboard")) {
      return <ClientDashboardHeader />;
    }
    if (location.pathname.startsWith("/nurse-dashboard")) {
      return <NurseDashboardHeader />;
    }
    if (location.pathname.startsWith("/for-nurse")) {
      return <ForNurseHeader />;
    }
    if (location.pathname.startsWith("/for-client")) {
      return <ForClientHeader />;
    }
    return <Header />;
  };

  return (
    <>
      {renderHeader()}
      <main className="bg-gray-50 min-h-screen pt-20">{children}</main>
    </>
  );
}

/**
 * Main App Component
 * Configures routing and page layout
 */
export default function App() {
  return (
    <Router>
      <Routes>
        {/* Main Pages */}
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/features"
          element={
            <Layout>
              <FeaturesPage />
            </Layout>
          }
        />
        <Route
          path="/services"
          element={
            <Layout>
              <ServicesPage />
            </Layout>
          }
        />

        {/* For Nurse Routes */}
        <Route
          path="/for-nurse"
          element={
            <Layout>
              <ForNursePage />
            </Layout>
          }
        />
        <Route
          path="/for-nurse/features"
          element={
            <Layout>
              <ForNurseFeatures />
            </Layout>
          }
        />
        <Route
          path="/for-nurse/options"
          element={
            <Layout>
              <ForNurseBenefits />
            </Layout>
          }
        />
        <Route
          path="/for-nurse/pricing"
          element={
            <Layout>
              <ForNursePricing />
            </Layout>
          }
        />

        {/* For Client Routes */}
        <Route
          path="/for-client"
          element={
            <Layout>
              <ForClientPage />
            </Layout>
          }
        />
        <Route
          path="/for-client/features"
          element={
            <Layout>
              <ForClientFeatures />
            </Layout>
          }
        />
        <Route
          path="/for-client/options"
          element={
            <Layout>
              <ForClientBenefits />
            </Layout>
          }
        />
        <Route
          path="/for-client/prices"
          element={
            <Layout>
              <ForClientPricing />
            </Layout>
          }
        />

        {/* Client Dashboard Routes */}
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/dashboard/care-plan"
          element={
            <Layout>
              <CarePlan />
            </Layout>
          }
        />
        <Route
          path="/dashboard/appointments"
          element={
            <Layout>
              <Appointments />
            </Layout>
          }
        />
        <Route
          path="/dashboard/communication"
          element={
            <Layout>
              <Communication />
            </Layout>
          }
        />
        <Route
          path="/dashboard/notifications"
          element={
            <Layout>
              <Notifications />
            </Layout>
          }
        />
        <Route
          path="/dashboard/family-access"
          element={
            <Layout>
              <FamilyAccess />
            </Layout>
          }
        />
        <Route
          path="/dashboard/settings"
          element={
            <Layout>
              <Settings />
            </Layout>
          }
        />

        {/* Nurse Dashboard Routes */}
        <Route
          path="/nurse-dashboard"
          element={
            <Layout>
              <NurseDashboardOverview />
            </Layout>
          }
        />
        <Route
          path="/nurse-dashboard/schedule"
          element={
            <Layout>
              <NurseSchedule />
            </Layout>
          }
        />
        <Route
          path="/nurse-dashboard/reports"
          element={
            <Layout>
              <NurseReports />
            </Layout>
          }
        />
        <Route
          path="/nurse-dashboard/tasks"
          element={
            <Layout>
              <NurseTasks />
            </Layout>
          }
        />
        <Route
          path="/nurse-dashboard/communications"
          element={
            <Layout>
              <NurseCommunications />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}
