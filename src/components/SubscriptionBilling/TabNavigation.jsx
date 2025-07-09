import React from 'react';

const TabNavigation = ({ activeTab, onTabChange }) => {
  const tabs = ['Subscription', 'Billing'];

  return (
    <div className="rounded-[14px] border border-[#E7E7E7] flex items-center justify-between p-2 w-full  mx-auto bg-white">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`w-2/5 text-[14px] font-jakarta px-4 py-2 rounded-[10px] transition-all duration-300
            ${activeTab === tab
              ? 'bg-[#D9EDFF] text-[#1A71F6] font-semibold'
              : 'bg-transparent text-[#454545] font-semibold'
            }`}
          onClick={() => onTabChange(tab)}
        >
          <span className="block text-center">{tab}</span>
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;
