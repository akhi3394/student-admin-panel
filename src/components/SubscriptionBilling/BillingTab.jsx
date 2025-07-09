import React, { useState } from 'react';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import downArrow from '/downArrow.svg'
import upArrrow from '/upArrow.svg'
import EyeIcon from '/EyeIcon.svg'
import EditIcon from '/EditIcon.svg'
import DeleteIcon from '/DeleteIcon.svg'
import ActionIcon from '/ActionIcon.svg'
import plus from '/plus.svg'
import filterIcon from '/filterIcon.svg'
import Export from '/Export.svg'
import SearchIcon from '/SearchIcon.svg'

const data = [
  {
    AdminName: 'Starter Spark',
    Contact: 'georgia@examp.... +6281913141435',
    School: 'Green Valley',
    Role: 'Admin',
    status: 'Active',
    LastLogin: '20 Jun 2035, 09:45 AM',
  },
  {
    AdminName: 'Starter Spark',
    Contact: 'georgia@examp.... +6281913141435',
    School: 'Green Valley',
    Role: 'Admin',
    status: 'Active',
    LastLogin: '20 Jun 2035, 09:45 AM',
  },
  {
    AdminName: 'Starter Spark',
    Contact: 'georgia@examp.... +6281913141435',
    School: 'Green Valley',
    Role: 'Admin',
    status: 'Active',
    LastLogin: '20 Jun 2035, 09:45 AM',
  },
  {
    AdminName: 'Starter Spark',
    Contact: 'georgia@examp.... +6281913141435',
    School: 'Green Valley',
    Role: 'Admin',
    status: 'Active',
    LastLogin: '20 Jun 2035, 09:45 AM',
  },
];

const BillingTab = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleCreateAdminClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <div className="w-full overflow-x-auto bg-white p-4 rounded-[16px] custom-scrollbar">
        <div className="flex justify-between items-center py-2 mb-5">
          <div className="relative w-[500px] h-[40px]">
            <input
              type="text"
              placeholder="Search for id, name Customer"
              className="w-full h-full rounded-[12px] border border-gray-300 pl-4 pr-10 text-sm placeholder-[#949494] focus:outline-none font-jakarta"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm font-jakarta">
              <img src={SearchIcon} alt="SearchIcon" className='w-[24px] h-[24px]' />
            </span>
          </div>
          <span className='flex gap-4 items-center'>
            <div className="flex gap-2 border border-[#B0B0B0] py-2 px-2 rounded-[12px] items-center">
              <span className="text-[#000] text-[14px] cursor-pointer font-jakarta">Filter</span>
              <img src={filterIcon} alt="filter" />
            </div>
            <div className="flex gap-2 border border-[#B0B0B0] py-2 px-2 rounded-[12px] items-center">
              <span className="text-[#000] text-[14px] cursor-pointer font-jakarta">Export</span>
              <img src={Export} alt="export" />
            </div>
            <button className='rounded-[8px] px-5 py-2 flex items-center text-white bg-[#1A71F6] text-[14px] font-bold font-jakarta' onClick={handleCreateAdminClick}>
              <span className='text-[20px] flex items-center'><img src={plus} alt="plus" className='w-[24px] h-[24px]' /></span>
               Add Subscription
            </button>
          </span>
        </div>
        <div className="rounded-[16px] overflow-x-auto custom-scrollbar w-full border border-[#E7E7E7]">
          <table className="w-full text-left border-collapse min-w-[1200px] table-auto">
            <thead>
              <tr className="bg-[#F6F6F6] text-[#454545] text-[14px] h-[65px] font-medium font-jakarta">
                <th className="px-4 py-2 border-b border-[#E7E7E7] text-[#454545] font-jakarta">
                  <input
                    type="checkbox"
                    className="appearance-none w-5 h-5 border-2 border-[#454545] rounded-md checked:bg-[#454545] checked:border-[#454545] checked:appearance-auto cursor-pointer"
                  />
                </th>
                <th className="px-4 py-2 border-b border-[#E7E7E7] text-[#454545] font-jakarta">
                  <div className="flex items-center gap-5">
                    Admin Name
                    <div className="flex flex-col">
                      <img src={upArrrow} alt="upArrow" />
                      <img src={downArrow} alt="downArrow" />
                    </div>
                  </div>
                </th>
                <th className="px-4 py-2 border-b border-[#E7E7E7] text-[#454545] font-jakarta">
                  <div className="flex items-center gap-5">
                    Contact
                    <div className="flex flex-col">
                      <img src={upArrrow} alt="upArrow" />
                      <img src={downArrow} alt="downArrow" />
                    </div>
                  </div>
                </th>
                <th className="px-4 py-2 border-b border-[#E7E7E7] text-[#454545] font-jakarta">
                  <div className="flex items-center gap-5">
                    School
                    <div className="flex flex-col">
                      <img src={upArrrow} alt="upArrow" />
                      <img src={downArrow} alt="downArrow" />
                    </div>
                  </div>
                </th>
                <th className="px-4 py-2 border-b border-[#E7E7E7] text-[#454545] font-jakarta">
                  <div className="flex items-center gap-5">
                    Role
                    <div className="flex flex-col">
                      <img src={upArrrow} alt="upArrow" />
                      <img src={downArrow} alt="downArrow" />
                    </div>
                  </div>
                </th>
                <th className="px-4 py-2 border-b border-[#E7E7E7] text-[#454545] font-jakarta">
                  <div className="flex items-center gap-5">
                    Status
                    <div className="flex flex-col">
                      <img src={upArrrow} alt="upArrow" />
                      <img src={downArrow} alt="downArrow" />
                    </div>
                  </div>
                </th>
                <th className="px-4 py-2 border-b border-[#E7E7E7] text-[#454545] font-jakarta">
                  <div className="flex items-center gap-5">
                    Last Login
                    <div className="flex flex-col">
                      <img src={upArrrow} alt="upArrow" />
                      <img src={downArrow} alt="downArrow" />
                    </div>
                  </div>
                </th>
                <th className="px-4 py-2 border-b border-[#E7E7E7] text-[#454545] font-jakarta">
                  <div className="flex items-center gap-5">
                    <span>Action</span>
                    <span>
                      <img src={ActionIcon} alt="ActionIcon" />
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => {
                const [contactEmail, contactPhone] = row.Contact.split(' ', 2);
                const [lastLoginDate, lastLoginTime] = row.LastLogin.split(', ');

                return (
                  <tr key={index} className="h-[60px] bg-white">
                    <td className="px-4 py-2 border-b border-[#E7E7E7] text-[#454545] font-jakarta">
                      <input
                        type="checkbox"
                        className="appearance-none w-5 h-5 border-2 border-[#454545] rounded-md checked:bg-[#454545] checked:border-[#454545] checked:appearance-auto cursor-pointer"
                      />
                    </td>
                    <td className="px-4 py-2 border-b border-[#E7E7E7] text-[14px] text-[#454545] font-jakarta">
                      {row.AdminName}
                    </td>
                    <td className="px-4 py-2 border-b border-[#E7E7E7] text-[14px] text-[#454545] font-jakarta">
                      <div className="flex flex-col leading-tight">
                        <span>{contactEmail}</span>
                        <span>{contactPhone}</span>
                      </div>
                    </td>
                    <td className="px-4 py-2 border-b border-[#E7E7E7] text-[14px] text-[#454545] font-jakarta">
                      {row.School}
                    </td>
                    <td className="px-4 py-2 border-b border-[#E7E7E7] text-[14px] text-[#454545] font-jakarta">
                      {row.Role}
                    </td>
                    <td className="px-4 py-2 border-b border-[#E7E7E7] text-[14px] text-[#000]">
                      <span className="px-2 py-1 rounded-full text-[12px] text-[#008000] font-semibold font-jakarta">{row.status}</span>
                    </td>
                    <td className="px-4 py-2 border-b border-[#E7E7E7] text-[14px] text-[#454545] font-jakarta">
                      <div className="flex flex-col leading-tight">
                        <span>{lastLoginDate}</span>
                        <span>{lastLoginTime}</span>
                      </div>
                    </td>
                    <td className="px-4 py-2 border-b border-[#E7E7E7] text-[#454545] font-jakarta">
                      <div className="flex space-x-2">
                        <img src={EyeIcon} alt="EyeIcon" className='w-[24px] h-[24px]' />
                        <img src={EditIcon} alt="EditIcon" className='w-[24px] h-[24px]' />
                        <img src={DeleteIcon} alt="DeleteIcon" className='w-[24px] h-[24px]' />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-[16px] w-[763px] h-[542px] p-6 relative shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-[18px] font-semibold text-[#000] font-jakarta">Create Admin</h2>
              <button onClick={handleClosePopup} className="text-red-500 text-[20px] font-bold">&times;</button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-[14px] text-[#454545] font-jakarta mb-1 text-start">Name</label>
                <input type="text" placeholder="Enter Name" className="w-full h-[40px] border border-[#E7E7E7] rounded-[8px] px-3 text-[14px] text-[#000] font-jakarta focus:outline-none" />
              </div>
              <div>
                <label className="block text-[14px] text-[#454545] font-jakarta mb-1 text-start">Number</label>
                <input type="text" placeholder="Enter Number" className="w-full h-[40px] border border-[#E7E7E7] rounded-[8px] px-3 text-[14px] text-[#000] font-jakarta focus:outline-none" />
              </div>
              <div>
                <label className="block text-[14px] text-[#454545] font-jakarta mb-1 text-start">Email</label>
                <input type="text" placeholder="Enter Email" className="w-full h-[40px] border border-[#E7E7E7] rounded-[8px] px-3 text-[14px] text-[#000] font-jakarta focus:outline-none" />
              </div>
              <div>
                <label className="block text-[14px] text-[#454545] font-jakarta mb-1 text-start">School</label>
                <select className="w-full h-[40px] border border-[#E7E7E7] rounded-[8px] px-3 text-[14px] text-[#000] font-jakarta focus:outline-none appearance-none bg-white">
                  <option>Select School</option>
                  <option>Select School</option>
                </select>
              </div>
              <div>
                <label className="block text-[14px] text-[#454545] font-jakarta mb-1 text-start">Role</label>
                <select className="w-full h-[40px] border border-[#E7E7E7] rounded-[8px] px-3 text-[14px] text-[#000] font-jakarta focus:outline-none appearance-none bg-white">
                  <option>Select Role</option>
                  <option>Select Role</option>
                </select>
              </div>
            </div>
            <div className="flex justify-center mt-6 space-x-4">
              <button className="px-4 py-2 bg-gray-200 rounded-[8px] text-[14px] text-[#000] font-jakarta">Clear</button>
              <button className="px-4 py-2 bg-[#1A71F6] rounded-[8px] text-[14px] text-white font-jakarta">Save</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BillingTab;