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

const App = () => {
  return (
    <Routes>
      {/* Routes without Sidebar/Header */}
      <Route path="/" element={<Login />} />

      {/* Routes with Layout (Sidebar + Header) */}
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/school-management" element={<SchoolManagement />} />
        <Route path="/student-management" element={<StudentManagement />} />
        <Route path="/admin-management" element={<AdminManagement />} />
        <Route path="/billing" element={<SubscriptionBilling />} />
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
