import React from 'react';
import backIcon from '/BackIcon.svg';
import BasicInformation from '/BasicInformation.svg';
import ContactInformation from '/ContactInformation.svg';
import SchoolLogo from '/SchoolLogo.svg'
import { useNavigate, useSearchParams } from 'react-router-dom';
import ClassTable from './ClassTable';
import FeesTable from './FeesTable';
import SubscritionTable from './SubscritionTable';
import Admintable from './Admintable';
import TabNavigation from './TabNavigation';
const SchoolDetails = () => {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate('/school-management')
  }
    const [searchParams, setSearchParams] = useSearchParams();

  const activeTab = searchParams.get('tab') || 'Class';

  const handleTabChange = (tab) => {
    setSearchParams({ tab });
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Class':
        return <ClassTable />;
      case 'Admin':
        return <Admintable />;
      case 'Subsciption & Billing':
        return <SubscritionTable />;
      case 'Fees Collection':
        return <FeesTable />;
      default:
        return <ClassTable />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F6FA] font-sans ">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <img src={backIcon} alt="Back" className="w-[24px] h-[24px] cursor-pointer" onClick={handleBack}/>
          <h1 className="text-lg font-semibold text-[#1B1E25]">School Profile</h1>
        </div>
        <button className="bg-[#1A71F6] hover:bg-[#155CD1] text-white px-4 py-1.5 text-sm font-medium rounded-md">
          Message
        </button>
      </div>

      {/* Info Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
        {/* Basic Information */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <img src={BasicInformation} alt="Basic" className="w-5 h-5" />
              <p className="text-[16px] font-semibold text-[#1B1E25]">Basic Information</p>
            </div>
            <img src="/EditIcon.svg" alt="Edit" className="w-4 h-4 cursor-pointer" />
          </div>

          <div className="bg-[#F5F6FA] rounded-md px-4 py-3 mb-4 text-[#1B1E25] font-medium text-sm flex justify-start items-center">
            <img
              src={SchoolLogo}
              alt="Logo"
              className="w-[62px] h-[62px]  mr-3 flex justify-start"
            />
            <span className="text-[16px] font-semibold">Vidhya Vikas Matric Hr Sec School</span>
          </div>

          <div className=" space-y-3 px-4">
            <div className="flex justify-between">
              <p className='text-[#666666] text-sm'>School Code</p>
              <p className="font-medium text-[#000000] text-sm">Code001234</p>
            </div>
            <div className="flex justify-between">
              <p className='text-[#666666] text-sm'>School type</p>
              <p className="font-medium text-[#000000] text-sm">Private School</p>
            </div>
            <div className="flex justify-between">
              <p className='text-[#666666] text-sm'>Board Affiliation</p>
              <p className="font-medium text-[#000000] text-sm">State Board</p>
            </div>
            <div className="pt-3">
              <p className="font-semibold text-[#333333] text-start text-sm">Class Strength</p>
              <div className="flex justify-between mt-2">
                <p className=" text-[#666666] text-sm">Class</p>
                <p className="font-medium text-[#000000] text-sm">LKG to 12th Std</p>
              </div>
              <div className="flex justify-between">
                <p className="text-[#666666] text-sm">Total Strength</p>
                <p className="font-medium text-[#000000] text-sm">1256</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-sm p-4">
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
              <img src={ContactInformation} alt="Contact" className="w-5 h-5" />
              <p className="text-[16px] font-semibold text-[#1B1E25]">Contact Information</p>
            </div>
            <img src="/EditIcon.svg" alt="Edit" className="w-4 h-4 cursor-pointer" />
          </div>
          <div className="border-b border-[#E5E7EB] mb-5"></div>
          <div className="text-sm text-[#1B1E25] space-y-3 px-2 text-start">
            <p className="font-semibold text-[#333333] text-sm">Primary Contact</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <p className="text-[#666666]">Primary Email</p>
                <p className="text-[#000000] font-medium">Natrajan</p>
              </div>
              <div className="flex justify-between text-sm">
                <p className="text-[#666666]">Alternate Email</p>
                <p className="text-[#000000] font-medium">+918906576774</p>
              </div>
              <div className="flex justify-between text-sm">
                <p className="text-[#666666]">Phone Number 1</p>
                <p className="text-[#000000] font-medium">Father</p>
              </div>
              <div className="flex justify-between text-sm">
                <p className="text-[#666666]">Phone Number 2</p>
                <p className="text-[#000000] font-medium">Father</p>
              </div>
            </div>

            <div className="pt-3">
              <p className="font-semibold text-[#333333] text-sm">Address</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <p className="text-[#666666]">Address Line 1</p>
                  <p className="text-[#000000] font-medium">123 Address line 1</p>
                </div>
                <div className="flex justify-between text-sm">
                  <p className="text-[#666666]">Address Line 2</p>
                  <p className="text-[#000000] font-medium">123 Address line 2</p>
                </div>
                <div className="flex justify-between text-sm">
                  <p className="text-[#666666]">City</p>
                  <p className="text-[#000000] font-medium">Chennai</p>
                </div>
                <div className="flex justify-between text-sm">
                  <p className="text-[#666666]">State</p>
                  <p className="text-[#000000] font-medium">Tamil Nadu</p>
                </div>
                <div className="flex justify-between text-sm">
                  <p className="text-[#666666]">Pincode</p>
                  <p className="text-[#000000] font-medium">600026</p>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>

       <div className="bg-white rounded-[16px]  mb-5 ">
        <TabNavigation activeTab={activeTab} onTabChange={handleTabChange} />
      </div>
      <div className="">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default SchoolDetails;
