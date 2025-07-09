

import React from 'react';

const socialFields = [
  'Firebase Api Key',
  'Firebase Database Url',
  'Firebase Auth Domain',
  'Firebase Project Id',
  'Firebase Storage Bucket',
  'Firebase Messaging Sender Id',
];

const WebsiteConfig = () => {
  return (
    <div className="bg-white p-2 rounded-[16px]  w-full">
      <p className='font-bold text-[16px] text-[#000000] text-start mb-2'>Firebase</p>
      <div className="grid grid-cols-1 gap-3">
        {socialFields.map((label, index) => (
          <div key={index} className="flex flex-col">
            <label className="text-[14px] text-[#262626] font-jakarta mb-[6px] text-start">
              {label}
            </label>
            <input
              type="text"
              placeholder="#"
              className="h-[40px] w-full rounded-[8px] border border-[#E6E6E6] px-3 text-[14px] text-[#8C8C8C] font-jakarta focus:outline-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebsiteConfig;
