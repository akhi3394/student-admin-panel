// GeneralSetting.jsx
import React from 'react';

import { useLocation, useSearchParams } from 'react-router-dom';
import GeneralTab from '../components/GeneralSettings/GeneralTab';
import RoleTab from '../components/GeneralSettings/RoleTab';
import PaymentsTab from '../components/GeneralSettings/PaymentsTab';
import TabNavigation from '../components/GeneralSettings/TabNavigation';
import SocialLink from '../components/GeneralSettings/SocialLink';
import WebsiteConfig from '../components/GeneralSettings/WebsiteConfig';

const GeneralSetting = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const activeTab = searchParams.get('tab') || 'General';

  const handleTabChange = (tab) => {
    setSearchParams({ tab });
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'General':
        return <GeneralTab />;
      case 'Role':
        return <RoleTab />;
      case 'Payments':
        return <PaymentsTab />;
      case 'SocialLink':
        return <SocialLink />;
      case 'WebsiteConfig':
        return <WebsiteConfig />;
      default:
        return <GeneralTab />;
    }
  };

  return (
    <>
      <div className="flex justify-between mb-5 py-2">
        <p className="text-[24px] font-semibold text-[#000000] font-jakarta">General Management</p>
      </div>
      <div className="bg-white rounded-[16px]   mb-5 ">
        <TabNavigation activeTab={activeTab} onTabChange={handleTabChange} />
      </div>
      <div className="bg-white rounded-[16px]  p-4">
        {renderTabContent()}
      </div>
    </>
  );
};

export default GeneralSetting;