

import React from 'react';
import backIcon from '/BackIcon.svg';
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {
    const navigate = useNavigate()
    const inputStyle = 'border border-[#E5E5E5] p-2 rounded-[8px] bg-white text-[#333333] font-roboto';
    const labelStyle = 'text-[#333333] text-[16px] mb-1 text-start font-roboto';
    const handleBack = () => {
        navigate(-1)
    }
    return (
        <div className="min-h-screen font-roboto">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-5">
                    <img src={backIcon} alt="Back" className="w-[24px] h-[24px] cursor-pointer" onClick={handleBack} />
                    <div>
                        <h1 className="text-lg font-semibold text-[#0A0E15] text-start font-roboto">Add New Student</h1>
                        <p className="text-sm text-[#333333] font-roboto">Complete all required information to add a new Student to the system.</p>
                    </div>
                </div>
                <button className="bg-[#FF0000] text-white text-sm px-4 py-1.5 rounded font-roboto">Close</button>
            </div>

            {/* Basic Information */}
            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
                <h2 className="text-[20px] text-start font-semibold text-[#1B1E25] mb-4 font-roboto">Basic Information</h2>

                <div className="flex items-center gap-6 mb-6 bg-[#F8F9FA] py-3 px-3">
                    <div className="w-24 h-24 rounded-full bg-[#D9D9D9] flex items-center justify-center text-xs text-gray-500 font-roboto">
                        Photo
                    </div>
                    <div className="text-sm text-gray-500 font-roboto">
                        <p className="text-[#000000] font-semibold">School Logo</p>
                        <p>PNG, JPG or JPEG</p>
                        <p>(MAX. 800x400px)</p>
                        <div className="mt-2 flex gap-2">
                            <button className="bg-[#1A71F6] text-white px-3 py-1 rounded text-xs font-roboto">Upload</button>
                            <button className="border border-gray-300 px-3 py-1 rounded text-xs font-roboto">Cancel</button>
                        </div>
                    </div>
                </div>

                {/* New Fields as per image */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="flex flex-col mb-2">
                        <label htmlFor="name" className={labelStyle}>Name</label>
                        <input id="name" placeholder="Name" className={inputStyle} />
                    </div>

                    {/* Registration ID */}
                    <div className="flex flex-col mb-2">
                        <label htmlFor="registrationId" className={labelStyle}>Registration ID</label>
                        <input id="registrationId" placeholder="Registration ID" className={inputStyle} />
                    </div>

                    {/* Class */}
                    <div className="flex flex-col mb-2">
                        <label htmlFor="class" className={labelStyle}>Class</label>
                        <select id="class" className={inputStyle}>
                            <option>Select</option>
                        </select>
                    </div>

                    {/* Session */}
                    <div className="flex flex-col mb-2">
                        <label htmlFor="session" className={labelStyle}>Session</label>
                        <select id="session" className={inputStyle}>
                            <option>Select</option>
                        </select>
                    </div>

                    {/* Gender */}
                    <div className="flex flex-col mb-2">
                        <label htmlFor="gender" className={labelStyle}>Gender</label>
                        <select id="gender" className={inputStyle}>
                            <option>Select</option>
                        </select>
                    </div>

                    {/* Date Of Birth */}
                    <div className="flex flex-col mb-2">
                        <label htmlFor="dob" className={labelStyle}>Date Of Birth</label>
                        <div className="relative">
                            <input id="dob" type="date" className={`${inputStyle} pr-10 w-full`} />
                        </div>
                    </div>

                    {/* Blood Group */}
                    <div className="flex flex-col mb-2">
                        <label htmlFor="bloodGroup" className={labelStyle}>Blood Group</label>
                        <select id="bloodGroup" className={inputStyle}>
                            <option>Select</option>
                        </select>
                    </div>

                    {/* School */}
                    <div className="flex flex-col mb-2">
                        <label htmlFor="school" className={labelStyle}>School</label>
                        <select id="school" className={inputStyle}>
                            <option>Select</option>
                        </select>
                    </div>
                </div>
            </div>


            {/* Contact Information */}
            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
                <h2 className="text-base font-semibold text-[#1B1E25] mb-4 text-start font-roboto">Guardian Details</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Guardian Name */}
                    <div className="flex flex-col mb-2">
                        <label htmlFor="guardianName" className={labelStyle}>Guardian Name</label>
                        <input id="guardianName" placeholder="Guardian Name" className={inputStyle} />
                    </div>

                    {/* Contact Number */}
                    <div className="flex flex-col mb-2">
                        <label htmlFor="guardianContact" className={labelStyle}>Contact Number</label>
                        <input id="guardianContact" placeholder="Contact Number" className={inputStyle} />
                    </div>

                    {/* Email Address - full width */}
                    <div className="flex flex-col md:col-span-2 mb-2">
                        <label htmlFor="guardianEmail" className={labelStyle}>Email Address</label>
                        <input id="guardianEmail" placeholder="Email Address" className={inputStyle} />
                    </div>
                </div>
            </div>




            {/* Class And Strength */}
            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
                <h2 className="text-base font-semibold text-[#1B1E25] mb-4 text-start font-roboto">Fee Details</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {/* Assign Fee Plan */}
                    <div>
                        <label className="text-sm font-medium text-[#1B1E25] font-roboto block mb-2">Assign Fee Plan?</label>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-[#008000] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                        </label>
                    </div>

                    {/* eNACH Link Sent */}
                    <div>
                        <label className="text-sm font-medium text-[#1B1E25] font-roboto block mb-2">eNACH Link Sent?</label>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-[#008000] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
                        </label>
                    </div>
                </div>

                <div className="flex flex-col mb-2">
                    <label className={labelStyle}>Payment Mode</label>
                    <select className={inputStyle}>
                        <option value="">Select Payment Mode</option>
                    </select>
                </div>
            </div>


            {/* Footer Buttons */}
            <div className="flex justify-center gap-4">
                <button className="bg-red-600 text-white px-6 py-2 rounded text-sm font-roboto">Clear</button>
                <button className="bg-green-600 text-white px-6 py-2 rounded text-sm font-roboto">Save</button>
            </div>
        </div>
    );
};

export default AddStudent;
