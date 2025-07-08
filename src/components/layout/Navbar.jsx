import NavMessage from '/NavMessage.svg';
import profile from '/dummyProfile.svg';
import darkTheme from '/darktheme.svg';
import lightTheme from '/lightTheme.svg';
import lightMode from '/lightMode.svg'
import { useState } from 'react';

export default function Navbar() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white shadow-md w-full">
      {/* Search */}
      <div className="relative w-[300px] h-[40px] mx-10">
        <input
          type="text"
          placeholder="Search product"
          className="w-full h-full rounded-[12px] border border-gray-300 pl-4 pr-10 text-sm placeholder-gray-400 focus:outline-none"
        />
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm">
          🔍
        </span>
      </div>

      {/* Right Icons & Profile */}
      <div className="flex items-center gap-6 mx-10">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="flex items-center w-[60px] h-[28px] bg-[#1A71F6] rounded-full px-[4px] relative transition-all duration-300"
        >
          <div
            className={`w-[20px] h-[20px] rounded-full bg-white shadow-md transition-all duration-300 ${
              isDark ? 'translate-x-0' : 'translate-x-[28px]'
            }`}
          ></div>
          <img
            src={darkTheme}
            alt="Dark"
            className="absolute left-[6px] w-[14px] h-[14px]"
          />
          <img
            src={lightTheme}
            alt="Light"
            className="absolute right-[6px] w-[14px] h-[14px]"
          />
        </button>

        {/* Messages */}
        <div className="relative">
          <img src={NavMessage} alt="Messages" className="w-[24px] h-[24px]" />
          <div className="absolute -top-[6px] -right-[6px] w-[10px] h-[10px] bg-[#FF3A29] rounded-full border-2 border-white"></div>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-2">
          <img
            src={profile}
            alt="Profile"
            className="w-[36px] h-[36px] rounded-full object-cover"
          />
          <div className="leading-[16px]">
            <p className="text-[14px] font-medium text-gray-900">Guy Hawkins</p>
            <p className="text-[12px] text-[#6B7280]">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
}
