import React from 'react';
import { Plus } from 'lucide-react'; // Assuming you're using lucide icons

const roles = ['School Admin', 'School Accountant', 'Student Panel'];

const RoleTab = () => {
  return (
    <div className="bg-white p-6 rounded-[16px] w-full">
      <div className="flex items-center justify-between mb-4">
        <label className="text-[16px] font-semibold text-[#262626]">Role</label>
        <button className="flex items-center gap-1 bg-[#1570EF] text-white text-sm px-3 py-1.5 rounded-full hover:bg-[#0e5fd4] transition">
          <Plus size={16} />
          Add
        </button>
      </div>

      <div className="border border-[#E6E6E6] rounded-[8px] p-3 flex flex-wrap gap-3">
        {roles.map((role, index) => (
          <span
            key={index}
            className="bg-[#1570EF] text-white text-[14px] px-4 py-1.5 rounded-full font-medium"
          >
            {role}
          </span>
        ))}
      </div>
    </div>
  );
};

export default RoleTab;
