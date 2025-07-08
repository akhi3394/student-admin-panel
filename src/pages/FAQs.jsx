import React, { useState } from 'react';
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
    Question: 'Lorem ipsum dolor sit ame tLorem ipsum dolor sit amet',
    Answer: 'Lorem ipsum dolor sit amet',
    Role: 'School Accountant,',
  },
   {
    Question: 'Lorem ipsum dolor sit ame tLorem ipsum dolor sit amet',
    Answer: 'Lorem ipsum dolor sit amet',
    Role: 'School Accountant,',
  },
 {
    Question: 'Lorem ipsum dolor sit ame tLorem ipsum dolor sit amet',
    Answer: 'Lorem ipsum dolor sit amet',
    Role: 'School Accountant,',
  },
   {
    Question: 'Lorem ipsum dolor sit ame tLorem ipsum dolor sit amet',
    Answer: 'Lorem ipsum dolor sit amet',
    Role: 'School Accountant,',
  },
];

const FAQs = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleCreateAdminClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <div className="flex justify-between mb-5 py-2">
        <p className='text-[24px] font-semibold text-[#000000] font-jakarta'>FAQS</p>
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
            <button className='rounded-[8px] px-5 py-2 flex items-center text-white bg-[#1A71F6] text-[14px] font-bold font-jakarta' onClick={handleCreateAdminClick}>
              Add Faqs
              <span className='text-[20px] flex items-center'><img src={plus} alt="plus" className='w-[24px] h-[24px]' /></span>
            </button>
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
                    Question
                    <div className="flex flex-col">
                      <img src={upArrrow} alt="upArrow" />
                      <img src={downArrow} alt="downArrow" />
                    </div>
                  </div>
                </th>
                <th className="px-4 py-2 border-b border-[#E7E7E7] text-[#454545] font-jakarta">
                  <div className="flex items-center gap-5">
                    Answer
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
                    <span>Action</span>
                    <span>
                      <img src={ActionIcon} alt="ActionIcon" />
                    </span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} className="h-[60px] bg-white">
                  <td className="px-4 py-2 border-b border-[#E7E7E7] text-[#454545] font-jakarta">
                    <input
                      type="checkbox"
                      className="appearance-none w-5 h-5 border-2 border-[#454545] rounded-md checked:bg-[#454545] checked:border-[#454545] checked:appearance-auto cursor-pointer"
                    />
                  </td>
                  <td className="px-4 py-2 border-b border-[#E7E7E7] text-[14px] text-[#454545] font-jakarta">
                    {row.Question}
                  </td>
                  <td className="px-4 py-2 border-b border-[#E7E7E7] text-[14px] font-jakarta text-[#454545]">
                    {row.Answer}
                  </td>
                  <td className="px-4 py-2 border-b border-[#E7E7E7] text-[14px] font-jakarta text-[#454545]">
                    {row.Role}
                  </td>
                  <td className="px-4 py-2 border-b border-[#E7E7E7] text-[#454545] font-jakarta">
                    <div className="flex space-x-2">
                      <img src={EyeIcon} alt="EyeIcon" className='w-[24px] h-[24px]' />
                      <img src={EditIcon} alt="EditIcon" className='w-[24px] h-[24px]' />
                      <img src={DeleteIcon} alt="DeleteIcon" className='w-[24px] h-[24px]' />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-[16px] w-[763px] h-auto p-6 relative shadow-lg">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[16px] font-semibold text-[#000000] font-jakarta">Add FAQS</h2>
              <button onClick={handleClosePopup} className="text-[#FF0000] text-[20px] font-bold">×</button>

            </div>



            <div className="mb-4">
              <label className="block text-[14px] font-medium text-[#454545] mb-1 text-start">Select User</label>
              <select className="w-full h-[40px] px-3 border bg-transparent border-[#E6E6E6] rounded-[8px] text-[14px] text-[#000000] font-jakarta outline-none appearance-none">
                <option>Eg: Both User</option>
                <option>Student</option>
                <option>Teacher</option>
              </select>
            </div>

            {/* Title */}
            <div className="mb-4">
              <label className="block text-[14px] font-medium text-[#454545] mb-1 text-start">Question</label>
              <input
                type="text"
                placeholder="Enter Question"
                className="w-full h-[40px] px-3 border border-[#E6E6E6] rounded-[8px] text-[14px] text-[#000000] font-jakarta outline-none"
              />
            </div>




            {/* Content (Rich Text Area Lookalike) */}
            <div className="mb-2">
              <label className="block text-[14px] font-medium text-[#454545] mb-1 text-start">Content</label>
              <div className="border border-[#E6E6E6] rounded-[8px] overflow-hidden">
                {/* Toolbar */}
                <div className="flex items-center gap-2 px-3 py-2 border-b border-[#E6E6E6] bg-white text-[#454545]" >
                  <button className="text-[14px]">↺</button>
                  <button className="text-[14px]">↻</button>
                  <select className="text-[14px] outline-none">
                    <option>Normal text</option>
                    <option>Heading</option>
                  </select>
                  <button className="w-5 h-5 bg-black rounded-sm"></button>
                  <button className="font-bold text-[14px]">B</button>
                  <button className="italic text-[14px]">I</button>
                  <button className="underline text-[14px]">U</button>
                  <button className="text-[14px]">S</button>
                  <button className="text-[14px]">•</button>
                  <button className="text-[14px]">1.</button>
                  <button className="text-[14px]">{`</>`}</button>
                  <button className="text-[14px]">🔗</button>
                  <button className="text-[14px]">🖼️</button>
                  <button className="text-[14px]">”</button>
                </div>
                {/* Textarea */}
                <textarea
                  className="w-full h-[160px] px-3 py-2 text-[14px] font-jakarta text-[#000000] outline-none resize-none"
                  placeholder=""
                ></textarea>
              </div>
              <p className="text-[10px] text-end text-[#9A9A9A] mt-1">Description 750 to 2000</p>
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-4 mt-4">
              <button className="bg-[#F2F4F7] text-[#9A9A9A] text-[14px] font-jakarta px-6 py-2 rounded-[8px] hover:bg-[#e0e0e0]">
                Clear
              </button>
              <button className="bg-[#1A71F6] text-white text-[14px] font-jakarta px-6 py-2 rounded-[8px] hover:bg-[#155cd3]">
                Save
              </button>
            </div>
          </div>
        </div>

      )}
    </>
  );
};

export default FAQs;