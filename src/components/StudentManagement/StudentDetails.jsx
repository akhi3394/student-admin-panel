import React from 'react'
import backIcon from '/BackIcon.svg';
import { useNavigate } from 'react-router-dom';
import BasicInformation from '/BasicInformation.svg';
import ContactInformation from '/ContactInformation.svg';
import SchoolLogo from '/StudentLogo.svg'
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
    id:1,
    Photo: '',
    StudentName: 'GVPS-998 Eleanor Pena',
    School: 'GVPS-998 Vidhya Vikas matric Hr Sec school',
    Class: '4th A',
    location: 'Thanjavur Tamil Nadu',
    Payment: 'Auto Debit',
  },
  {
    id:2,
    Photo: '',
    StudentName: 'GVPS-998 Eleanor Pena',
    School: 'GVPS-998 Vidhya Vikas matric Hr Sec school',
    Class: '4th A',
    location: 'Thanjavur Tamil Nadu',
    Payment: 'Manual',
  },
  {
    id:3,
    Photo: '',
    StudentName: 'GVPS-998 Eleanor Pena',
    School: 'GVPS-998 Vidhya Vikas matric Hr Sec school',
    Class: '4th A',
    location: 'Thanjavur Tamil Nadu',
    Payment: 'Auto Debit',
  },
  {
    id:4,
    Photo: '',
    StudentName: 'GVPS-998 Eleanor Pena',
    School: 'GVPS-998 Vidhya Vikas matric Hr Sec school',
    Class: '4th A',
    location: 'Thanjavur Tamil Nadu',
    Payment: 'Manual',
  },
];

const StudentDetails = () => {
    const navigate = useNavigate()
    const handleBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-5">
                    <img src={backIcon} alt="Back" className="w-[24px] h-[24px] cursor-pointer" onClick={handleBack} />
                    <div>
                        <h1 className="text-lg font-semibold text-[#0A0E15] text-start font-roboto">Student Info</h1>
                    </div>
                </div>
                <div className="flex gap-5">
                    <button className="bg-[#1A71F6] text-white text-sm px-4 py-1.5 rounded font-roboto" onClick={()=>navigate('/student-management/mark-sheet')}>Mark sheet</button>
                    <button className="bg-[#1A71F6] text-white text-sm px-4 py-1.5 rounded font-roboto">Set up</button>
                </div>
            </div>

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

                    <div className="bg-[#F5F6FA] rounded-md px-4 py-3 mb-4 text-[#1B1E25] font-medium text-sm flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <img src={SchoolLogo} alt="Student" className="w-[62px] h-[62px] rounded-full" />
                            <span className="text-[16px] font-semibold">Vinoth</span>
                        </div>
                        <span className="text-[#4D4D4D] text-sm underline" onClick={()=>navigate('/student-management/attendance')}>
                            Over All Attendance <span className="font-semibold text-[#000]">95%</span>
                        </span>
                    </div>

                    <div className="space-y-3 px-4">
                        <div className="flex justify-between">
                            <p className='text-[#666666] text-sm'>ID</p>
                            <p className="font-medium text-[#000000] text-sm">418487</p>
                        </div>
                        <div className="flex justify-between">
                            <p className='text-[#666666] text-sm'>Class / Section</p>
                            <p className="font-medium text-[#000000] text-sm">Grade 5 / A</p>
                        </div>
                        <div className="flex justify-between">
                            <p className='text-[#666666] text-sm'>Gender</p>
                            <p className="font-medium text-[#000000] text-sm">Male</p>
                        </div>
                        <div className="flex justify-between">
                            <p className='text-[#666666] text-sm'>Date of Birth</p>
                            <p className="font-medium text-[#000000] text-sm">12 July 2013</p>
                        </div>
                        <div className="flex justify-between">
                            <p className='text-[#666666] text-sm'>Blood Group</p>
                            <p className="font-medium text-[#000000] text-sm">B+</p>
                        </div>
                        <div className="flex justify-between">
                            <p className='text-[#666666] text-sm'>School</p>
                            <p className="font-medium text-[#000000] text-sm text-right">Vidhya Vikas Matric Hr Sec School</p>
                        </div>
                    </div>
                </div>

                {/* Primary Contact & Fee Summary */}
                <div className="bg-white rounded-lg shadow-sm p-2">
                    <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center gap-2">
                          <p className="text-[16px] font-semibold text-[#1B1E25]">Primary Contact</p>
                        </div>
                        <img src="/EditIcon.svg" alt="Edit" className="w-4 h-4 cursor-pointer" />
                    </div>

                    <div className="space-y-2 text-sm px-2 text-[#1B1E25]">
                        <div className="flex justify-between">
                            <p className="text-[#666]">Guardian Name</p>
                            <p className="font-medium text-[#000]">Natrajan</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-[#666]">Contact Number</p>
                            <p className="font-medium text-[#000]">+918906576774</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-[#666]">Email</p>
                            <p className="font-medium text-[#000]">praveen.sharma@gmail.com</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-[#666]">Address</p>
                            <p className="font-medium text-[#000] text-right">102, MG Road, Bangalore</p>
                        </div>
                    </div>

                    <div className="mt-5 mb-2 flex justify-between items-center">
                        <p className="text-[16px] font-semibold text-[#1B1E25]">Fee Summary</p>
                        <img src="/EditIcon.svg" alt="Edit" className="w-4 h-4 cursor-pointer" />
                    </div>

                    <div className="space-y-2 text-sm px-2 text-[#1B1E25]">
                        <div className="flex justify-between">
                            <p className="text-[#666]">Total Fee (Annual)</p>
                            <p className="font-medium text-[#000]">₹50,000</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-[#666]">Total Paid</p>
                            <p className="font-medium text-[#000]">₹35,000</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-[#666]">Total Due</p>
                            <p className="font-medium text-[#000]">₹15,000</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-[#666]">Payment Mode</p>
                            <p className="font-medium text-[#000]">Auto-Debit (Active)</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-[#666]">Next Installment Date</p>
                            <p className="font-medium text-[#000]">10 July 2025</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-[#666]">Fee Plan</p>
                            <p className="font-medium text-[#000]">Quarterly / Monthly</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white p-4">
                <p className='text-black text-start mb-4 font-semibold'>Payment History Table</p>
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
                                Photo
                                <div className="flex flex-col">
                                  <img src={upArrrow} alt="upArrow" />
                                  <img src={downArrow} alt="downArrow" />
                                </div>
                              </div>
                            </th>
                            <th className="px-4 py-2 border-b border-[#E7E7E7] text-[#454545] font-jakarta">
                              <div className="flex items-center gap-5">
                                Student Name
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
                                Class
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
                                Payment
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
                                  <img src={ActionIcon} alt="ActionIcon" className='w-[24px] h-[24px]'/>
                                </span>
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.map((row, index) => {
                            const [studentCode, ...studentNameParts] = row.StudentName.split(' ');
                            const studentName = studentNameParts.join(' ');
            
                            const [schoolCode, ...schoolParts] = row.School.split(' ');
                            const SchoolName = schoolParts.join(' ');
            
                            const [locationCity, ...locationStateParts] = row.location.split(' ');
                            const locationState = locationStateParts.join(' ');
            
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
                                    <span className="text-[#1A71F6] font-jakarta">{studentCode}</span>
                                    <span font-jakarta>{studentName}</span>
                                  </div>
                                </td>
                                <td className="px-4 py-2 border-b border-[#E7E7E7] text-[14px] text-[#454545] font-jakarta">
                                  <div className="flex flex-col leading-tight">
                                    <span className="text-[#1A71F6] font-jakarta">{schoolCode}</span>
                                    <span font-jakarta>{SchoolName}</span>
                                  </div>
                                </td>
                                <td className="px-4 py-2 border-b border-[#E7E7E7] text-[14px] text-[#454545] font-jakarta">
                                  {row.Class}
                                </td>
                                <td className="px-4 py-2 border-b border-[#E7E7E7] text-[14px] text-[#454545] font-jakarta">
                                  <div className="flex flex-col leading-tight">
                                    <span font-jakarta>{locationCity}</span>
                                    <span font-jakarta>{locationState}</span>
                                  </div>
                                </td>
                                <td className="px-4 py-2 border-b border-[#E7E7E7] text-[14px] text-[#454545] font-jakarta">
                                  {row.Payment}
                                </td>
                                <td className="px-4 py-2 border-b border-[#E7E7E7] text-[#454545] font-jakarta">
                                  <div className="flex space-x-2 underline text-[#454545] font-jakarta text-sm">
                                     Download PDF
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
            </div>

        </div>
    )
}

export default StudentDetails
