import React from 'react';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';

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
        <div className="w-full overflow-x-auto  bg-white p-4 rounded-xl shadow-[0px_1.97px_6.47px_0px_rgba(0,0,0,0.03),0px_9px_18.2px_0px_rgba(0,0,0,0.05),0px_22.78px_48.83px_0px_rgba(0,0,0,0.06),0px_45px_112px_0px_rgba(0,0,0,0.09)] custom-scrollbar">
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
            <div className="rounded-[16px] overflow-hidden">
                <table className="w-full text-left border-collapse">
                <thead>
                    <tr className='bg-[#F6F6F6] text-[#454545] text-[14px] font-medium'>
                        <th className="px-4 py-2 border-b border-[#E7E7E7] "><input type="checkbox" /></th>
                        <th className="px-4 py-2 border-b border-[#E7E7E7]">Logo</th>
                        <th className="px-4 py-2 border-b border-[#E7E7E7]">School Name & Code</th>
                        <th className="px-4 py-2 border-b border-[#E7E7E7]">Board</th>
                        <th className="px-4 py-2 border-b border-[#E7E7E7]">Location</th>
                        <th className="px-4 py-2 border-b border-[#E7E7E7]">Assigned Admin</th>
                        <th className="px-4 py-2 border-b border-[#E7E7E7]">Total Students</th>
                        <th className="px-4 py-2 border-b border-[#E7E7E7]">Status</th>
                        <th className="px-4 py-2 border-b border-[#E7E7E7]">Action</th>
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
                                <td className="px-4 py-2 border-b border-[#E7E7E7]"><input type="checkbox" /></td>
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
                                        <FaEye className="cursor-pointer" />
                                        <FaEdit className="cursor-pointer" />
                                        <FaTrash className="cursor-pointer" />
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