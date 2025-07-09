import React from 'react';

const PaymentsTab = () => {
  return (
    <div className="bg-white p-6 rounded-[16px]  w-full">
      <div className="grid grid-cols-2 gap-6">
        {/* GST Rate */}
        <div className="flex flex-col">
          <label className="text-[14px] text-[#262626] font-jakarta mb-[6px] text-start">
            GST Rate
          </label>
          <input
            type="text"
            placeholder="18%"
            className="h-[40px] w-full rounded-[8px] border border-[#E6E6E6] px-3 text-[14px] text-[#8C8C8C] font-jakarta focus:outline-none"
          />
        </div>

        {/* Payment Method */}
        <div className="flex flex-col">
          <label className="text-[14px] text-[#262626] font-jakarta mb-[6px] text-start">
            Payment Method
          </label>
          <div className="w-full h-[40px] border border-[#E6E6E6] rounded-[8px] px-2 flex items-center space-x-2 overflow-x-auto">
            {['Bank Account', 'UPI'].map((method) => (
              <span
                key={method}
                className="flex items-center bg-[#F0F0F0] text-[#3D3D3D] text-[12px] font-jakarta px-2 py-[2px] rounded-[999px]"
              >
                <span className="text-[12px] mr-1">×</span> {method}
              </span>
            ))}
          </div>
        </div>

        {/* Currency */}
        <div className="flex flex-col">
          <label className="text-[14px] text-[#262626] font-jakarta mb-[6px] text-start">
            Currency
          </label>
          <div className="w-full h-[40px] border border-[#E6E6E6] rounded-[8px] px-2 flex items-center space-x-2 overflow-x-auto">
            {['INR', 'CAD'].map((currency) => (
              <span
                key={currency}
                className="flex items-center bg-[#F0F0F0] text-[#3D3D3D] text-[12px] font-jakarta px-2 py-[2px] rounded-[999px]"
              >
                <span className="text-[12px] mr-1">×</span> {currency}
              </span>
            ))}
          </div>
        </div>

        {/* Currency Symbol */}
        <div className="flex flex-col">
          <label className="text-[14px] text-[#262626] font-jakarta mb-[6px] text-start">
            Currency Symbol
          </label>
          <div className="w-full h-[40px] border border-[#E6E6E6] rounded-[8px] px-2 flex items-center space-x-2 overflow-x-auto">
            {['₹', '$'].map((symbol) => (
              <span
                key={symbol}
                className="flex items-center bg-[#F0F0F0] text-[#3D3D3D] text-[12px] font-jakarta px-2 py-[2px] rounded-[999px]"
              >
                <span className="text-[12px] mr-1">×</span> {symbol}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentsTab;
