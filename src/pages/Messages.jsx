import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import InputPin from '/InputPin.svg'
import InputSendIcon from '/InputSendIcon.svg'

const messages = [
  'Arlene McCoy',
  'Ralph Edwards',
  'Darrell Steward with a longer name than usual',
  'Savannah Nguyen',
  'Dianne Russell',
  'Eleanor Pena',
  'Albert Flores',
  'Floyd Miles',
];

const Messages = () => {
  return (
    <>
      <div className="flex justify-between py-2">
        <p className='text-[24px] font-semibold text-[#000000] font-jakarta'>Messages</p>
      </div>
    <div className="flex h-screen bg-[#F9F9F9] font-jakarta">
      {/* Left Column */}
      <div className="w-full max-w-[320px] bg-white rounded-[12px] shadow-sm flex flex-col">
        {/* Tabs */}
        <div className="flex border-b border-[#EAEAEA]">
          {['User', 'Creator', 'Astrologer'].map((tab, i) => (
            <div
              key={i}
              className={`flex-1 text-center py-3 cursor-pointer text-[14px] font-medium ${
                tab === 'Creator'
                  ? 'text-[#1A71F6] border-b-2 border-[#1A71F6]'
                  : 'text-[#949494]'
              }`}
            >
              {tab}
            </div>
          ))}
        </div>

        {/* User List */}
        <div className="p-4 divide-y divide-[#EAEAEA] overflow-hidden flex-1">
          <div className="space-y-3  h-[600px] mb-2">
            {messages.map((name, index) => (
              <>
              <div key={index} className="flex gap-6 mb-2 ">
                <img
                  src={`https://randomuser.me/api/portraits/thumb/men/${index}.jpg`}
                  alt="avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p className="text-[14px] font-semibold text-[#2A2A2A] break-words text-start">
                    {name}
                  </p>
                  <p className="text-[12px] text-[#949494] leading-tight break-words text-start">
                    Lorem Ipsum is simply dummy text of the printing
                  </p>
                </div>
                <span className="text-[12px] text-[#949494] whitespace-nowrap">1 min ago</span>
                <div className="border-b border-[#000]"></div>
              </div>
                            <div key={index} className="flex gap-6 mb-2 border-b border-[#EAEAEA]"/>

              </>
            ))}
          </div>
        </div>

        {/* Pagination - Fixed */}
        <div className="px-4 py-3 border-t border-[#EAEAEA] text-[12px] text-[#949494] flex items-center justify-between">
          <p>
            <span className="font-semibold text-[#2A2A2A]">1 - 10</span> of 13 Pages
          </p>
          <div className="flex items-center gap-1">
            <span>The page on</span>
            <select className="border border-[#EAEAEA] rounded px-1 py-[2px] text-[#2A2A2A]">
              <option>1</option>
            </select>
            <FaChevronDown className="text-[10px] ml-1" />
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex-1 ml-4 bg-white rounded-[12px] shadow-sm flex flex-col relative">
        {/* Header */}
        <div className="flex items-center gap-3 p-4 border-b border-[#EAEAEA]">
          <img
            src="https://randomuser.me/api/portraits/thumb/women/1.jpg"
            className="w-10 h-10 rounded-full"
            alt="profile"
          />
          <div>
            <p className="text-[14px] font-semibold text-[#2A2A2A]">Arlene McCoy</p>
            <p className="text-[12px] text-[#28C76F] text-start">Online</p>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {/* Sender message */}
          <div className="flex items-start gap-2">
            <img
              src="https://randomuser.me/api/portraits/thumb/women/1.jpg"
              className="w-6 h-6 rounded-full"
              alt="sender"
            />
            <div className="space-y-2"> 
              <div className="bg-[#F3F6FD] px-4 py-2 rounded-[8px] w-fit text-[12px] text-[#2A2A2A] text-start">
                Lorem Ipsum is simply
              </div>
              <div className="bg-[#F3F6FD] px-4 py-2 rounded-[8px] w-fit text-[12px] text-[#2A2A2A] max-w-sm text-start">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </div>
            </div>
          </div>

          {/* Receiver message */}
          <div className="flex items-end justify-end gap-2">
            <div className="space-y-2 text-right">
              <div className="bg-[#F3F6FD] px-4 py-2 rounded-[8px] w-fit text-[12px] text-[#2A2A2A] ml-auto text-start">
                Lorem Ipsum is simply
              </div>
              <div className="bg-[#F3F6FD] px-4 py-2 rounded-[8px] w-fit text-[12px] text-[#2A2A2A] ml-auto max-w-sm text-start">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </div>
            </div>
            <img
              src="https://randomuser.me/api/portraits/thumb/men/5.jpg"
              className="w-6 h-6 rounded-full"
              alt="receiver"
            />
          </div>
        </div>

        {/* Input - Fixed */}
        <div className="relative flex items-center gap-3 p-2">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 text-[14px] px-4 py-4 bg-[#F5F5F9] rounded-[12px] outline-none"
          />
          <button className=" absolute  right-5">
           <img src={InputSendIcon} alt="send" className='w-[22px] h-[22px]'/>
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Messages;
