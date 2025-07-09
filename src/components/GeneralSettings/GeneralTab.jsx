import React from 'react';

const GeneralTab = () => {
    return (
        <div className="bg-white p-2 rounded-[16px]  w-full">
            <div className="grid grid-cols-2 gap-6 mb-4">
                {/* App Name */}
                <div className="flex flex-col">
                    <label className="text-[14px] text-[#262626] font-jakarta mb-[6px] text-start">
                        App Name
                    </label>
                    <input
                        type="text"
                        placeholder="Enter  App Name"
                        className="h-[40px] w-full rounded-[8px] border border-[#E6E6E6] px-3 text-[14px] text-[#8C8C8C] font-jakarta focus:outline-none"
                    />
                </div>

                {/* App Logo */}
                <div className="flex flex-col">
                    <label className="text-[14px] text-[#262626] font-jakarta mb-[6px] text-start">
                        App Logo
                    </label>
                    <div className="h-[40px] w-full border border-[#E6E6E6] rounded-[8px] flex items-center px-3">
                        <label
                            htmlFor="app-logo"
                            className="bg-[#1A71F6] text-white text-[14px] font-jakarta rounded-[6px] px-4 py-[5px] cursor-pointer"
                        >
                            Upload
                        </label>
                        <input
                            type="file"
                            id="app-logo"
                            accept="image/*"
                            className="hidden"
                        />
                    </div>
                </div>
            </div>

            {/* App Language */}
            <div>
                <label className="text-[14px] text-[#262626] font-jakarta mb-[6px] block text-start">
                    App Language
                </label>
                <div className="w-full h-[40px] border border-[#E6E6E6] rounded-[8px] px-2 flex items-center space-x-2 overflow-x-auto">
                    {['Tamil', 'English', 'Hindi', 'Marathi'].map((lang) => (
                        <span
                            key={lang}
                            className="flex items-center bg-[#F0F0F0] text-[#3D3D3D] text-[12px] font-jakarta px-2 py-[2px] rounded-[999px]"
                        >
                            <span className="text-[12px] mr-1">×</span> {lang}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GeneralTab;
