import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const SchoolDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data for demonstration (replace with actual data fetching logic)
  const school = {
    id,
    schoolName: 'Vidhya Vikas Matriculation',
    schoolCode: 'GVPS-998',
    board: 'CBSE',
    city: 'Thanjavur',
    state: 'Tamil Nadu',
    adminId: 'ID12451',
    adminName: 'Devon Lane',
    totalStudents: '1250',
    status: 'Active',
  };

  return (
    <div className="p-6 bg-white rounded-[16px] border border-[#E7E7E7]">
      <h1 className="text-[24px] font-semibold text-[#000000] font-jakarta mb-6">School Details</h1>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <p className="text-[14px] text-[#454545] font-jakarta font-semibold">School Code</p>
          <p className="text-[16px] text-[#1A71F6] font-jakarta">{school.schoolCode}</p>
        </div>
        <div>
          <p className="text-[14px] text-[#454545] font-jakarta font-semibold">School Name</p>
          <p className="text-[16px] text-[#454545] font-jakarta">{school.schoolName}</p>
        </div>
        <div>
          <p className="text-[14px] text-[#454545] font-jakarta font-semibold">Board</p>
          <p className="text-[16px] text-[#454545] font-jakarta">{school.board}</p>
        </div>
        <div>
          <p className="text-[14px] text-[#454545] font-jakarta font-semibold">Location</p>
          <p className="text-[16px] text-[#454545] font-jakarta">{`${school.city}, ${school.state}`}</p>
        </div>
        <div>
          <p className="text-[14px] text-[#454545] font-jakarta font-semibold">Assigned Admin</p>
          <p className="text-[16px] text-[#1A71F6] font-jakarta">{school.adminId}</p>
          <p className="text-[16px] text-[#454545] font-jakarta">{school.adminName}</p>
        </div>
        <div>
          <p className="text-[14px] text-[#454545] font-jakarta font-semibold">Total Students</p>
          <p className="text-[16px] text-[#454545] font-jakarta">{school.totalStudents}</p>
        </div>
        <div>
          <p className="text-[14px] text-[#454545] font-jakarta font-semibold">Status</p>
          <p className="text-[16px] text-[#008000] font-jakarta">{school.status}</p>
        </div>
      </div>
      <div className="flex justify-end mt-6">
        <button
          onClick={() => navigate('/school-management')}
          className="px-5 py-2 rounded-[8px] bg-[#1A71F6] text-white font-jakarta font-bold"
        >
          Back to School List
        </button>
      </div>
    </div>
  );
};

export default SchoolDetails;