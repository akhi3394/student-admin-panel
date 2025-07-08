import React from 'react';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import downArrow from '/downArrow.svg'
import upArrrow from '/upArrow.svg'
import EyeIcon from '/EyeIcon.svg'
import EditIcon from '/EditIcon.svg'
import DeleteIcon from '/DeleteIcon.svg'
import ActionIcon from '/ActionIcon.svg'

const data = [
    {
        logo: '',
        schoolNameCode: 'GVPS-998 Vidhya Vikas Ma...',
        board: 'CBSE',
        location: 'Thanjavur Tamil Nadu',
        admin: 'ID12451 Devon Lane',
        totalStudents: '1250',
        status: 'Active'
    },
    {
        logo: '',
        schoolNameCode: 'GVPS-998 Vidhya Vikas Ma...',
        board: 'CBSE',
        location: 'Thanjavur Tamil Nadu',
        admin: 'ID12451 Devon Lane',
        totalStudents: '1250',
        status: 'Active'
    },
    {
        logo: '',
        schoolNameCode: 'GVPS-998 Vidhya Vikas Ma...',
        board: 'CBSE',
        location: 'Thanjavur Tamil Nadu',
        admin: 'ID12451 Devon Lane',
        totalStudents: '1250',
        status: 'Active'
    },
    {
        logo: '',
        schoolNameCode: 'GVPS-998 Vidhya Vikas Ma...',
        board: 'CBSE',
        location: 'Thanjavur Tamil Nadu',
        admin: 'ID12451 Devon Lane',
        totalStudents: '1250',
        status: 'Active'
    },
];

const DashboardTable = () => {
    return (
        <div className="w-full overflow-x-auto  bg-white p-4 rounded-[16px] custom-scrollbar border border-[#E7E7E7]">
            <div className="flex justify-between items-center px-4 py-2 mb-5">
                <h2 className="text-[#454545] text-[16px] font-semibold">Top Schools</h2>
                <span className='flex gap-4 items-center'>
                    <span className="text-[#000] text-[14px] cursor-pointer">Show All</span>
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke='#3D3D3D'
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path d="M17 7L7 17M7 7h10v10" />
                    </svg>
                </span>
            </div>
            <div className="rounded-[16px] overflow-x-auto custom-scrollbar w-full border border-[#E7E7E7]">
                <table className="w-full text-left border-collapse min-w-[1200px] table-auto">
                    <thead>
                        <tr className="bg-[#F6F6F6] text-[#454545] text-[14px] h-[65px] font-medium">
                            <th className="px-4 py-2 border-b border-[#E7E7E7]">
                                <input
                                    type="checkbox"
                                    className="appearance-none w-5 h-5 border-2 border-[#454545] rounded-md checked:bg-[#454545] checked:border-[#454545] checked:appearance-auto cursor-pointer"
                                />                            </th>

                            {/* Logo column with sorting arrows */}
                            <th className="px-4 py-2 border-b border-[#E7E7E7]">
                                <div className="flex items-center gap-5">
                                    Logo
                                    <div className="flex flex-col">
                                        <img src={upArrrow} alt="upArrow" />
                                        <img src={downArrow} alt="downArrow" />
                                    </div>
                                </div>
                            </th>

                            {/* School Name & Code */}
                            <th className="px-4 py-2 border-b border-[#E7E7E7]">
                                <div className="flex items-center gap-5">
                                    School Name & Code
                                    <div className="flex flex-col">
                                        <img src={upArrrow} alt="upArrow" />
                                        <img src={downArrow} alt="downArrow" />
                                    </div>
                                </div>
                            </th>

                            {/* Board */}
                            <th className="px-4 py-2 border-b border-[#E7E7E7]">
                                <div className="flex items-center gap-5">
                                    Board
                                    <div className="flex flex-col">
                                        <img src={upArrrow} alt="upArrow" />
                                        <img src={downArrow} alt="downArrow" />
                                    </div>
                                </div>
                            </th>

                            {/* Location */}
                            <th className="px-4 py-2 border-b border-[#E7E7E7]">
                                <div className="flex items-center gap-5">
                                    Location
                                    <div className="flex flex-col">
                                        <img src={upArrrow} alt="upArrow" />
                                        <img src={downArrow} alt="downArrow" />
                                    </div>
                                </div>
                            </th>

                            {/* Assigned Admin */}
                            <th className="px-4 py-2 border-b border-[#E7E7E7]">
                                <div className="flex items-center gap-5">
                                    Assigned Admin
                                    <div className="flex flex-col">
                                        <img src={upArrrow} alt="upArrow" />
                                        <img src={downArrow} alt="downArrow" />
                                    </div>
                                </div>
                            </th>

                            {/* Total Students */}
                            <th className="px-4 py-2 border-b border-[#E7E7E7]">
                                <div className="flex items-center gap-5">
                                    Total Students
                                    <div className="flex flex-col">
                                        <img src={upArrrow} alt="upArrow" />
                                        <img src={downArrow} alt="downArrow" />
                                    </div>
                                </div>
                            </th>

                            {/* Status */}
                            <th className="px-4 py-2 border-b border-[#E7E7E7]">
                                <div className="flex items-center gap-5">
                                    Status
                                    <div className="flex flex-col">
                                        <img src={upArrrow} alt="upArrow" />
                                        <img src={downArrow} alt="downArrow" />
                                    </div>
                                </div>
                            </th>

                            {/* Action column */}
                            <th className="px-4 py-2 border-b border-[#E7E7E7]">
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
                                    <td className="px-4 py-2 border-b border-[#E7E7E7]">
                                        <input
                                            type="checkbox"
                                            className="appearance-none w-5 h-5 border-2 border-[#454545] rounded-md checked:bg-[#454545] checked:border-[#454545] checked:appearance-auto cursor-pointer"
                                        />                                        </td>
                                    <td className="px-4 py-2 border-b border-[#E7E7E7]">
                                        <div className="w-[40px] h-[40px] bg-[#E7E7E7] rounded" />
                                    </td>
                                    <td className="px-4 py-2 border-b border-[#E7E7E7] text-[14px] text-[#000]">
                                        <div className="flex flex-col leading-tight">
                                            <span className="text-[#1A71F6]">{schoolCode}</span>
                                            <span>{schoolName}</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border-b border-[#E7E7E7] text-[14px] text-[#000]">
                                        {row.board}
                                    </td>
                                    <td className="px-4 py-2 border-b border-[#E7E7E7] text-[14px] text-[#000]">
                                        <div className="flex flex-col leading-tight">
                                            <span>{locationCity}</span>
                                            <span>{locationState}</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border-b border-[#E7E7E7] text-[14px] text-[#000]">
                                        <div className="flex flex-col leading-tight">
                                            <span className="text-[#1A71F6]">{adminId}</span>
                                            <span>{adminName}</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border-b border-[#E7E7E7] text-[14px] text-[#000]">
                                        {row.totalStudents}
                                    </td>
                                    <td className="px-4 py-2 border-b border-[#E7E7E7] text-[14px] text-[#000]">
                                        <span className="px-2 py-1 bg-[#EFEFEF] rounded-full text-[12px]">{row.status}</span>
                                    </td>
                                    <td className="px-4 py-2 border-b border-[#E7E7E7]">
                                        <div className="flex space-x-2 text-[#1A1A1A]">
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
    );
};

export default DashboardTable;