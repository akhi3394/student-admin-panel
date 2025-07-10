import React from 'react';
import backIcon from '/BackIcon.svg';
import { useNavigate } from 'react-router-dom';

const AddSchool = () => {
  const navigate=useNavigate()
  const inputStyle = 'border border-[#E5E5E5] p-2 rounded-[8px] bg-white text-[#333333] font-roboto';
  const labelStyle = 'text-[#333333] text-[16px] mb-1 text-start font-roboto';
const handleBack=()=>{
  navigate(-1)
}
  return (
    <div className="min-h-screen font-roboto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-5">
          <img src={backIcon} alt="Back" className="w-[24px] h-[24px] cursor-pointer" onClick={handleBack}/>
          <div>
            <h1 className="text-lg font-semibold text-[#0A0E15] text-start font-roboto">Add New School</h1>
            <p className="text-sm text-[#333333] font-roboto">Complete all required information to add a new School to the system.</p>
          </div>
        </div>
        <button className="bg-[#FF0000] text-white text-sm px-4 py-1.5 rounded font-roboto">Close</button>
      </div>

      {/* Basic Information */}
      <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
        <h2 className="text-[20px] text-start font-semibold text-[#1B1E25] mb-4 font-roboto">Basic Information</h2>

        <div className="flex items-center gap-6 mb-6 bg-[#F8F9FA] py-3 px-3">
          <div className="w-24 h-24 rounded-full bg-[#D9D9D9] flex items-center justify-center text-xs text-gray-500 font-roboto">
            School Logo
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: 'School Name*', id: 'schoolName' },
            { label: 'School Code', id: 'schoolCode' },
            { label: 'Board Affiliation', id: 'boardAffiliation', isSelect: true },
            { label: 'School Type', id: 'schoolType', isSelect: true }
          ].map(({ label, id, isSelect }) => (
            <div key={id} className="flex flex-col mb-2">
              <label htmlFor={id} className={labelStyle}>{label}</label>
              {isSelect ? (
                <select id={id} className={inputStyle}>
                  <option value="">Select</option>
                </select>
              ) : (
                <input id={id} placeholder={label} className={inputStyle} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
        <h2 className="text-base font-semibold text-[#1B1E25] mb-4 text-start font-roboto">Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: 'Primary Email*', id: 'primaryEmail' },
            { label: 'Alternate Email*', id: 'alternateEmail' },
            { label: 'Phone Number 2*', id: 'phoneNumber' },
            { label: 'Principal Name', id: 'principalName' },
            { label: 'Principal Contact Number', id: 'principalContact', isSelect: true },
            { label: 'Principal Email ID', id: 'principalEmail' }
          ].map(({ label, id, isSelect }) => (
            <div key={id} className="flex flex-col mb-2">
              <label htmlFor={id} className={labelStyle}>{label}</label>
              {isSelect ? (
                <select id={id} className={inputStyle}>
                  <option value="">Select</option>
                </select>
              ) : (
                <input id={id} placeholder={label} className={inputStyle} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Address & Location */}
      <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
        <h2 className="text-base font-semibold text-[#1B1E25] mb-4 text-start font-roboto">Address & Location</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: 'Address Line 1*', id: 'address1' },
            { label: 'Address Line 2*', id: 'address2' },
            { label: 'Country*', id: 'country', isSelect: true },
            { label: 'State*', id: 'state', isSelect: true },
            { label: 'City*', id: 'city', isSelect: true },
            { label: 'Pin Code*', id: 'pinCode' }
          ].map(({ label, id, isSelect }) => (
            <div key={id} className="flex flex-col mb-2">
              <label htmlFor={id} className={labelStyle}>{label}</label>
              {isSelect ? (
                <select id={id} className={inputStyle}>
                  <option value="">Select</option>
                </select>
              ) : (
                <input id={id} placeholder={label} className={inputStyle} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Class And Strength */}
      <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
        <h2 className="text-base font-semibold text-[#1B1E25] mb-2 text-start font-roboto">Class And Strength</h2>
        <p className="text-sm text-gray-500 mb-4 text-start font-roboto">
          Use this section to add the class, its session, and the corresponding strength.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {['Class', 'Session', 'Strength'].map((label, idx) => (
            <div key={idx} className="flex flex-col mb-2">
              <label className={labelStyle}>{label}</label>
              <input placeholder={label} className={inputStyle} />
            </div>
          ))}
        </div>
        <button className="bg-green-600 text-white text-sm px-4 py-1.5 rounded font-roboto">Add Another</button>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-center gap-4">
        <button className="bg-red-600 text-white px-6 py-2 rounded text-sm font-roboto">Clear</button>
        <button className="bg-green-600 text-white px-6 py-2 rounded text-sm font-roboto">Save</button>
      </div>
    </div>
  );
};

export default AddSchool;
