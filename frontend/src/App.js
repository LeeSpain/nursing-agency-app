import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import pages
import HomePage from "./pages/HomePage";
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
import YourNursePage from "./pages/careseeker/dashboard/YourNurse"; // New Your Nurse page import

// Import layout components
import CareSeekerHeader from "./components/layout/CareSeekerHeader";
import ForNurseHeader from "./components/layout/ForNurseHeader";
import DashboardHeader from "./components/layout/careseeker/DashboardHeader";

// App Component
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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
