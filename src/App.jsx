
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import LoginPortal from "./Pages/Auth/LoginPortal";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import ResetPassword from "./Pages/Auth/ResetPassword";
import OtpVerification from "./Pages/Auth/OtpVerification";
import Home from "./Pages/Home";
import Internals from "./Pages/Exam/Internals";
import Results from "./Pages/Exam/Results";
import Courses from "./Pages/Courses";
import CGPA from "./Pages/CGPA";
import MyPayments from "./Pages/Fees/MyPayments";
import Structure from "./Pages/Fees/Structure";
import Tuition from "./Pages/Fees/Tuition";
import ExamFee from "./Pages/Fees/ExamFee";
import RoomInfo from "./Pages/Hostel/RoomInfo";
import Counselling from "./Pages/Counselling";
import ViewProfile from "./Pages/Profile/View";
import RaiseTicket from "./Pages/Support/RaiseTicket";
import TimetableView from "./Pages/Timetable/View";
import Layout from "./Components/Layout";
import Attendance from "./Pages/Attendance";
import Calender from "./Pages/Calender";

// ✅ Club Components - FIXED IMPORTS
import ViewJoinClub from "./Pages/Club/VeiwJoinClub"; 
import EventsCompetitions from "./Pages/Club/EventsCompetitions";


import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPortal />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verify-otp" element={<OtpVerification />} />

        {/* Home Route */}
        <Route
          path="/home"
          element={
            <div className="flex h-screen">
              <Sidebar />
              <div className="flex-1 flex flex-col">
                <Layout>
                  <Home />
                </Layout>
              </div>
            </div>
          }
        />

        {/* Protected Routes */}
        <Route
          path="/*"
          element={
            <div className="flex h-screen">
              <Sidebar />
              <div className="flex-1 flex flex-col">
                <Layout>
                  <Routes>
                    {/* Exam */}
                    <Route path="/exam/internals" element={<Internals />} />
                    <Route path="/exam/results" element={<Results />} />

                    {/* Courses */}
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/cgpa" element={<CGPA />} />
                    <Route path="/attendance" element={<Attendance />} />
                    <Route path="/calender" element={<Calender />} />

                    {/* Fees */}
                    <Route path="/fees/mypayments" element={<MyPayments />} />
                    <Route path="/fees/structure" element={<Structure />} />
                    <Route path="/fees/tuition" element={<Tuition />} />
                    <Route path="/fees/examfee" element={<ExamFee />} />

                    {/* Hostel & Profile */}
                    <Route path="/hostel/room" element={<RoomInfo />} />
                    <Route path="/profile/view" element={<ViewProfile />} />

                    {/* Support & Timetable */}
                    <Route path="/support/raise" element={<RaiseTicket />} />
                    <Route path="/timetable/view" element={<TimetableView />} />

                    {/* Counselling */}
                    <Route path="/counselling" element={<Counselling />} />

                    {/* Club & Extracurricular */}
                    <Route path="/club/view" element={<ViewJoinClub />} />
                    <Route path="/club/events" element={<EventsCompetitions />} />
                    
                  </Routes>
                </Layout>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;


