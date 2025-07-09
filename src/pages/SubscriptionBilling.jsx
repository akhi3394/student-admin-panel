// SubscriptionBilling.jsx
import React from 'react';

import { useLocation, useSearchParams } from 'react-router-dom';
import TabNavigation from '../components/SubscriptionBilling/TabNavigation';
import SubscriptionTab from '../components/SubscriptionBilling/SubscriptionTab';
import BillingTab from '../components/SubscriptionBilling/BillingTab';

const SubscriptionBilling = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const activeTab = searchParams.get('tab') || 'Subscription';

  const handleTabChange = (tab) => {
    setSearchParams({ tab });
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Subscription':
        return <SubscriptionTab />;
      case 'Billing':
        return <BillingTab />;
      default:
        return <SubscriptionTab />;
    }
  };

  return (
    <>
      <div className="flex justify-between mb-5 py-2">
        <h1 className="text-[24px] font-semibold text-[#000000] font-jakarta">Subscription & Billing</h1>
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

export default SubscriptionBilling;