import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import SchoolManagement from './pages/SchoolManagement';
import StudentManagement from './pages/StudentManagement';
import AdminManagement from './pages/AdminManagement';
import SubscriptionBilling from './pages/SubscriptionBilling';
import RBAC from './pages/RBAC';
import Notifications from './pages/Notifications';
import Messages from './pages/Messages';
import FAQs from './pages/FAQs';
import Feedback from './pages/Feedback';
import GeneralSetting from './pages/GeneralSetting';
import Login from './pages/Login';
import BillingDetail from './components/SubscriptionBilling/BillingDetail';
import AddSchool from './components/SchoolManagement/AddSchool';
import SchoolDetails from './components/SchoolManagement/SchoolDetails';
import AddStudent from './components/StudentManagement/AddStudent';
import StudentDetails from './components/StudentManagement/StudentDetails';
import MarkSheet from './components/StudentManagement/MarkSheet';
import AttendanceCalendar from './components/StudentManagement/AttendanceCalendar';

const App = () => {
  return (
    <Routes>
      {/* Routes without Sidebar/Header */}
      <Route path="/" element={<Login />} />

      {/* Routes with Layout (Sidebar + Header) */}
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/school-management">
          <Route index element={<SchoolManagement />} />
          <Route path="add" element={<AddSchool />} />
          <Route path=":id" element={<SchoolDetails />} />
        </Route>   
        <Route path="/student-management">
          <Route index element={<StudentManagement />} />
          <Route path="add" element={<AddStudent/>} />
          <Route path=":id" element={<StudentDetails/>} />
          <Route path="mark-sheet" element={<MarkSheet/>} />
          <Route path="attendance" element={<AttendanceCalendar/>} />
        </Route>       
        {/* <Route path="/student-management" element={<StudentManagement />} /> */}
        <Route path="/admin-management" element={<AdminManagement />} />
        <Route path="/billing" element={<SubscriptionBilling />} />
        <Route path="/billing/:id" element={<BillingDetail />} /> {/* Dynamic route for billing details */}
        <Route path="/rbac" element={<RBAC />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/settings" element={<GeneralSetting />} />
      </Route>
    </Routes>
  );
};

export default App;
