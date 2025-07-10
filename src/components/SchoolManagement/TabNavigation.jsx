// TabNavigation.jsx
import React from 'react';

const TabNavigation = ({ activeTab, onTabChange }) => {
  const tabs = ['Class', 'Admin', 'Subsciption & Billing', 'Fees Collection',];

  return (
    <div className="flex  items-center justify-around gap-10 py-3 px-5 ">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`text-[14px] font-jakarta ${activeTab === tab ? 'text-[#1A71F6]  font-semibold' : 'text-[#454545]'}`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;