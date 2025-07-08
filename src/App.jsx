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
  console.log("hlo");
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
      <Route path="/school-management" element={<Layout><SchoolManagement /></Layout>} />
      <Route path="/student-management" element={<Layout><StudentManagement /></Layout>} />
      <Route path="/admin-management" element={<Layout><AdminManagement /></Layout>} />
      <Route path="/billing" element={<Layout><SubscriptionBilling /></Layout>} />
      <Route path="/rbac" element={<Layout><RBAC /></Layout>} />
      <Route path="/notifications" element={<Layout><Notifications /></Layout>} />
      <Route path="/messages" element={<Layout><Messages /></Layout>} />
      <Route path="/faqs" element={<Layout><FAQs /></Layout>} />
      <Route path="/feedback" element={<Layout><Feedback /></Layout>} />
      <Route path="/settings" element={<Layout><GeneralSetting /></Layout>} />
    </Routes>
  );
};

export default App;