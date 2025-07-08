import React from 'react';
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
    AdminName: 'Vinoth',
    schoolNameCode: 'GVPS-998 Vidhya Vikas Ma...',
    Role: 'School Accountant',
    Review: 'View',
  },
  {
    AdminName: 'Vinoth',
    schoolNameCode: 'GVPS-998 Vidhya Vikas Ma...',
    Role: 'School Accountant',
    Review: 'View',
  },
  {
    AdminName: 'Vinoth',
    schoolNameCode: 'GVPS-998 Vidhya Vikas Ma...',
    Role: 'School Accountant',
    Review: 'View',
  },
  {
    AdminName: 'Vinoth',
    schoolNameCode: 'GVPS-998 Vidhya Vikas Ma...',
    Role: 'School Accountant',
    Review: 'View',
  },
];

const Feedback = () => {
  return (
    <>
      <div className="flex justify-between mb-5 py-2">
        <p className='text-[24px] font-semibold text-[#000000] font-jakarta'>Feedback</p>

      </div>
      <div className="w-full overflow-x-auto bg-white p-4 rounded-[16px] custom-scrollbar border border-[#E7E7E7]">
        <div className="flex justify-between items-center px-4 py-2 mb-5">
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
                    School Name
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
                    Review
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
                const [schoolCode, ...schoolNameParts] = row.schoolNameCode.split(' ');
                const schoolName = schoolNameParts.join(' ');

  

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
                        <span className="text-[#1A71F6] font-jakarta">{schoolCode}</span>
                        <span font-jakarta>{schoolName}</span>
                      </div>
                    </td>
                   
                   <td className="px-4 py-2 border-b border-[#E7E7E7] text-[14px] text-[#454545] font-jakarta">
                      {row.Role}
                    </td>
                  
                    <td className="px-4 py-2 border-b border-[#E7E7E7] text-[14px] text-[#454545] font-jakarta">
                      <span className='bg-[#1A71F6] px-2 py-2 rounded-[12px] text-white'>{row.Review}</span>
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
    </>
  );
};

export default Feedback;