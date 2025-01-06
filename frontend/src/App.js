import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Pages
import HomePage from "./pages/HomePage"; // Ensure this is the correct path to your HomePage component
import CareSeekerHomePage from "./pages/careseeker/CareSeekerHomePage";
import ForNurseHomePage from "./pages/fornurse/ForNurseHomePage";
import CareSeekerHowItWorks from "./pages/careseeker/HowItWorks";
import CareSeekerServices from "./pages/careseeker/Services";
import CareSeekerPricing from "./pages/careseeker/Pricing";
import ForNurseHowItWorks from "./pages/fornurse/HowItWorks";
import ForNurseServices from "./pages/fornurse/Services";
import ForNursePricing from "./pages/fornurse/Pricing";
import CareSeekerDashboard from "./pages/careseeker/dashboard/CareSeekerDashboard";
import MessagePage from "./pages/careseeker/dashboard/Message";
import CarePlanPage from "./pages/careseeker/dashboard/CarePlan";
import MembershipPage from "./pages/careseeker/dashboard/Membership";
import YourNursePage from "./pages/careseeker/dashboard/YourNurse";
import CalendarPage from "./pages/careseeker/dashboard/Calendar";
import DashboardHome from "./pages/selfemployed/DashboardHome";
import Clients from "./pages/selfemployed/Clients";
import Staff from "./pages/selfemployed/Staff";
import Finances from "./pages/selfemployed/Finances";
import Marketing from "./pages/selfemployed/Marketing";
import Training from "./pages/selfemployed/Training";
import Messages from "./pages/selfemployed/Messages";
import Settings from "./pages/selfemployed/Settings";
import BuildYourPractice from "./pages/fornurse/BuildYourPractice";

// Import MobileCare Pages
import Dashboard from "./pages/mobilecare/Dashboard";
import ClientsPage from "./pages/mobilecare/Clients";
import NursesPage from "./pages/mobilecare/Nurses";
import ReportsPage from "./pages/mobilecare/Reports";
import MessagesPage from "./pages/mobilecare/Messages";

// Import Headers
import CareSeekerHeader from "./components/layout/CareSeekerHeader";
import ForNurseHeader from "./components/layout/ForNurseHeader";
import DashboardHeader from "./components/layout/careseeker/DashboardHeader";
import Header from "./components/mobilecare/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default Homepage */}
        <Route path="/" element={<HomePage />} />

        {/* Care Seeker Pages */}
        <Route
          path="/careseeker"
          element={
            <>
              <CareSeekerHeader />
              <CareSeekerHomePage />
            </>
          }
        />
        <Route
          path="/careseeker/home"
          element={
            <>
              <CareSeekerHeader />
              <CareSeekerHomePage />
            </>
          }
        />
        <Route
          path="/careseeker/how-it-works"
          element={
            <>
              <CareSeekerHeader />
              <CareSeekerHowItWorks />
            </>
          }
        />
        <Route
          path="/careseeker/services"
          element={
            <>
              <CareSeekerHeader />
              <CareSeekerServices />
            </>
          }
        />
        <Route
          path="/careseeker/pricing"
          element={
            <>
              <CareSeekerHeader />
              <CareSeekerPricing />
            </>
          }
        />
        <Route
          path="/careseeker/dashboard"
          element={
            <>
              <DashboardHeader />
              <CareSeekerDashboard />
            </>
          }
        />
        <Route
          path="/careseeker/dashboard/calendar"
          element={
            <>
              <DashboardHeader />
              <CalendarPage />
            </>
          }
        />
        <Route
          path="/careseeker/messages"
          element={
            <>
              <DashboardHeader />
              <MessagePage />
            </>
          }
        />
        <Route
          path="/careseeker/dashboard/care-plan"
          element={
            <>
              <DashboardHeader />
              <CarePlanPage />
            </>
          }
        />
        <Route
          path="/careseeker/dashboard/membership"
          element={
            <>
              <DashboardHeader />
              <MembershipPage />
            </>
          }
        />
        <Route
          path="/careseeker/dashboard/your-nurse"
          element={
            <>
              <DashboardHeader />
              <YourNursePage />
            </>
          }
        />

        {/* For Nurse Pages */}
        <Route
          path="/fornurse"
          element={
            <>
              <ForNurseHeader />
              <ForNurseHomePage />
            </>
          }
        />
        <Route
          path="/fornurse/how-it-works"
          element={
            <>
              <ForNurseHeader />
              <ForNurseHowItWorks />
            </>
          }
        />
        <Route
          path="/fornurse/services"
          element={
            <>
              <ForNurseHeader />
              <ForNurseServices />
            </>
          }
        />
        <Route
          path="/fornurse/pricing"
          element={
            <>
              <ForNurseHeader />
              <ForNursePricing />
            </>
          }
        />
        <Route
          path="/fornurse/build-your-practice"
          element={
            <>
              <ForNurseHeader />
              <BuildYourPractice />
            </>
          }
        />

        {/* Self-Employed Nurse Dashboard Pages */}
        <Route path="/selfemployed/dashboard" element={<DashboardHome />} />
        <Route path="/selfemployed/clients" element={<Clients />} />
        <Route path="/selfemployed/staff" element={<Staff />} />
        <Route path="/selfemployed/finances" element={<Finances />} />
        <Route path="/selfemployed/marketing" element={<Marketing />} />
        <Route path="/selfemployed/training" element={<Training />} />
        <Route path="/selfemployed/messages" element={<Messages />} />
        <Route path="/selfemployed/settings" element={<Settings />} />

        {/* MobileCare Pages */}
        <Route
          path="/mobilecare/dashboard"
          element={
            <>
              <Header />
              <Dashboard />
            </>
          }
        />
        <Route
          path="/mobilecare/clients"
          element={
            <>
              <Header />
              <ClientsPage />
            </>
          }
        />
        <Route
          path="/mobilecare/nurses"
          element={
            <>
              <Header />
              <NursesPage />
            </>
          }
        />
        <Route
          path="/mobilecare/reports"
          element={
            <>
              <Header />
              <ReportsPage />
            </>
          }
        />
        <Route
          path="/mobilecare/messages"
          element={
            <>
              <Header />
              <MessagesPage />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
