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
import { useNavigate } from 'react-router-dom';

const data = [
  {
    id:1,
    logo: '',
    schoolNameCode: 'GVPS-998 Vidhya Vikas Ma...',
    board: 'CBSE',
    location: 'Thanjavur Tamil Nadu',
    admin: 'ID12451 Devon Lane',
    totalStudents: '1250',
    status: 'Active'
  },
  {
    id:2,
    logo: '',
    schoolNameCode: 'GVPS-998 Vidhya Vikas Ma...',
    board: 'CBSE',
    location: 'Thanjavur Tamil Nadu',
    admin: 'ID12451 Devon Lane',
    totalStudents: '1250',
    status: 'Active'
  },
  {
    id:3,
    logo: '',
    schoolNameCode: 'GVPS-998 Vidhya Vikas Ma...',
    board: 'CBSE',
    location: 'Thanjavur Tamil Nadu',
    admin: 'ID12451 Devon Lane',
    totalStudents: '1250',
    status: 'Active'
  },
  {
    id:4,
    logo: '',
    schoolNameCode: 'GVPS-998 Vidhya Vikas Ma...',
    board: 'CBSE',
    location: 'Thanjavur Tamil Nadu',
    admin: 'ID12451 Devon Lane',
    totalStudents: '1250',
    status: 'Active'
  },
];

const SchoolManagement = () => {
    const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-between mb-5 py-2">
        <p className='text-[24px] font-semibold text-[#000000] font-jakarta'>School List</p>
        <button className='rounded-[8px] px-5 py-1 flex items-center text-white bg-[#1A71F6] text-[14px] font-bold font-jakarta'
         onClick={() => navigate('/school-management/add')}>
          Add School
          <span className='text-[20px] flex items-center'><img src={plus} alt="plus" className='w-[24px] h-[24px]' /></span></button>
      </div>
      <div className="w-full overflow-x-auto bg-white p-4 rounded-[16px] custom-scrollbar border border-[#E7E7E7]">
        <div className="flex justify-between items-center px-4 py-2 mb-5">
          <div className="relative w-[500px] h-[40px]">
            <input
              type="text"
              placeholder="Search for id, School Name"
              className="w-full h-full rounded-[12px] border border-gray-300 pl-4 pr-10 text-sm placeholder-[#949494] focus:outline-none font-jakarta"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm font-jakarta">
              <img src={SearchIcon} alt="SearchIcon" className='w-[24px] h-[24px]'/>
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
                    Logo
                    <div className="flex flex-col">
                      <img src={upArrrow} alt="upArrow" />
                      <img src={downArrow} alt="downArrow" />
                    </div>
                  </div>
                </th>
                <th className="px-4 py-2 border-b border-[#E7E7E7] text-[#454545] font-jakarta">
                  <div className="flex items-center gap-5">
                    School Name & Code
                    <div className="flex flex-col">
                      <img src={upArrrow} alt="upArrow" />
                      <img src={downArrow} alt="downArrow" />
                    </div>
                  </div>
                </th>
                <th className="px-4 py-2 border-b border-[#E7E7E7] text-[#454545] font-jakarta">
                  <div className="flex items-center gap-5">
                    Board
                    <div className="flex flex-col">
                      <img src={upArrrow} alt="upArrow" />
                      <img src={downArrow} alt="downArrow" />
                    </div>
                  </div>
                </th>
                <th className="px-4 py-2 border-b border-[#E7E7E7] text-[#454545] font-jakarta">
                  <div className="flex items-center gap-5">
                    Location
                    <div className="flex flex-col">
                      <img src={upArrrow} alt="upArrow" />
                      <img src={downArrow} alt="downArrow" />
                    </div>
                  </div>
                </th>
                <th className="px-4 py-2 border-b border-[#E7E7E7] text-[#454545] font-jakarta">
                  <div className="flex items-center gap-5">
                    Assigned Admin
                    <div className="flex flex-col">
                      <img src={upArrrow} alt="upArrow" />
                      <img src={downArrow} alt="downArrow" />
                    </div>
                  </div>
                </th>
                <th className="px-4 py-2 border-b border-[#E7E7E7] text-[#454545] font-jakarta">
                  <div className="flex items-center gap-5">
                    Total Students
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

                const [locationCity, ...locationStateParts] = row.location.split(' ');
                const locationState = locationStateParts.join(' ');

                const [adminId, ...adminNameParts] = row.admin.split(' ');
                const adminName = adminNameParts.join(' ');

                return (
                  <tr key={index} className="h-[60px] bg-white">
                    <td className="px-4 py-2 border-b border-[#E7E7E7] text-[#454545] font-jakarta">
                      <input
                        type="checkbox"
                        className="appearance-none w-5 h-5 border-2 border-[#454545] rounded-md checked:bg-[#454545] checked:border-[#454545] checked:appearance-auto cursor-pointer"
                      />
                    </td>
                    <td className="px-4 py-2 border-b border-[#E7E7E7] text-[#454545] font-jakarta">
                      <div className="w-[40px] h-[40px] bg-[#E7E7E7] rounded" />
                    </td>
                    <td className="px-4 py-2 border-b border-[#E7E7E7] text-[14px] text-[#454545] font-jakarta">
                      <div className="flex flex-col leading-tight">
                        <span className="text-[#1A71F6] font-jakarta">{schoolCode}</span>
                        <span font-jakarta>{schoolName}</span>
                      </div>
                    </td>
                    <td className="px-4 py-2 border-b border-[#E7E7E7] text-[14px] text-[#454545] font-jakarta">
                      {row.board}
                    </td>
                    <td className="px-4 py-2 border-b border-[#E7E7E7] text-[14px] text-[#454545] font-jakarta">
                      <div className="flex flex-col leading-tight">
                        <span font-jakarta>{locationCity}</span>
                        <span font-jakarta>{locationState}</span>
                      </div>
                    </td>
                    <td className="px-4 py-2 border-b border-[#E7E7E7] text-[14px] text-[#454545] font-jakarta">
                      <div className="flex flex-col leading-tight">
                        <span className="text-[#1A71F6] font-jakarta">{adminId}</span>
                        <span font-jakarta>{adminName}</span>
                      </div>
                    </td>
                    <td className="px-4 py-2 border-b border-[#E7E7E7] text-[14px] text-[#454545] font-jakarta">
                      {row.totalStudents}
                    </td>
                    <td className="px-4 py-2 border-b border-[#E7E7E7] text-[14px] text-[#000]">
                      <span className="px-2 py-1 rounded-full text-[12px] text-[#008000] font-semibold font-jakarta">{row.status}</span>
                    </td>
                    <td className="px-4 py-2 border-b border-[#E7E7E7] text-[#454545] font-jakarta">
                      <div className="flex space-x-2">
                        <img src={EyeIcon} alt="EyeIcon" className='w-[24px] h-[24px]' onClick={() => navigate(`/school-management/${row.id}`)}/>
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

export default SchoolManagement;