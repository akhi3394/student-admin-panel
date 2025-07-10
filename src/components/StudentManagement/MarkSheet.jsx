import React from 'react'
import { CheckCircle } from 'lucide-react' // optional icon lib
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
import backIcon from '/BackIcon.svg';
import { useNavigate } from 'react-router-dom'

const marksData = [
    {
        subject: 'Mathematics',
        totalMarks: 100,
        obtainedMarks: 92,
        grade: 'A+',
    },
    {
        subject: 'Science',
        totalMarks: 100,
        obtainedMarks: 88,
        grade: 'A',
    },
    // ...more subjects
];


const MarkSheet = () => {
      const navigate = useNavigate()
    const handleBack = () => {
        navigate(-1)
    }
    return (
        <>


            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-5">
                    <img src={backIcon} alt="Back" className="w-[24px] h-[24px] cursor-pointer" onClick={handleBack} />
                    <div>
                        <h1 className="text-lg font-semibold text-[#0A0E15] text-start font-roboto">Mark Sheet</h1>
                    </div>
                </div>
            </div>
            <div className="rounded-[16px] overflow-x-auto custom-scrollbar w-full border border-[#E7E7E7]">
                <table className="w-full text-left border-collapse min-w-[1200px] table-auto">
                    <thead>
                        <tr className="bg-[#F6F6F6] text-[#454545] text-[14px] h-[65px] font-medium font-jakarta">
                            <th className="px-4 py-2 border-b border-[#E7E7E7]">
                                <input
                                    type="checkbox"
                                    className="appearance-none w-5 h-5 border-2 border-[#454545] rounded-md checked:bg-[#454545] checked:border-[#454545] checked:appearance-auto cursor-pointer" />
                            </th>
                            <th className="px-4 py-2 border-b border-[#E7E7E7]">
                                <div className="flex items-center gap-5">
                                    Subject
                                    <div className="flex flex-col">
                                        <img src={upArrrow} alt="upArrow" />
                                        <img src={downArrow} alt="downArrow" />
                                    </div>
                                </div>
                            </th>
                            <th className="px-4 py-2 border-b border-[#E7E7E7]">
                                <div className="flex items-center gap-5">
                                    Total Marks
                                    <div className="flex flex-col">
                                        <img src={upArrrow} alt="upArrow" />
                                        <img src={downArrow} alt="downArrow" />
                                    </div>
                                </div>
                            </th>
                            <th className="px-4 py-2 border-b border-[#E7E7E7]">
                                <div className="flex items-center gap-5">
                                    Marks Obtained
                                    <div className="flex flex-col">
                                        <img src={upArrrow} alt="upArrow" />
                                        <img src={downArrow} alt="downArrow" />
                                    </div>
                                </div>
                            </th>
                            <th className="px-4 py-2 border-b border-[#E7E7E7]">
                                <div className="flex items-center gap-5">
                                    Grade
                                    <div className="flex flex-col">
                                        <img src={upArrrow} alt="upArrow" />
                                        <img src={downArrow} alt="downArrow" />
                                    </div>
                                </div>
                            </th>
                            <th className="px-4 py-2 border-b border-[#E7E7E7]">
                                <div className="flex items-center gap-5">
                                    <span>Action</span>
                                    <span>
                                        <img src={ActionIcon} alt="ActionIcon" className="w-[24px] h-[24px]" />
                                    </span>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {marksData.map((mark, index) => (
                            <tr key={index} className="h-[60px] bg-white">
                                <td className="px-4 py-2 border-b border-[#E7E7E7]">
                                    <input
                                        type="checkbox"
                                        className="appearance-none w-5 h-5 border-2 border-[#454545] rounded-md checked:bg-[#454545] checked:border-[#454545] checked:appearance-auto cursor-pointer" />
                                </td>
                                <td className="px-4 py-2 border-b border-[#E7E7E7] text-[14px] text-[#454545] font-jakarta">
                                    {mark.subject}
                                </td>
                                <td className="px-4 py-2 border-b border-[#E7E7E7] text-[14px] text-[#454545] font-jakarta">
                                    {mark.totalMarks}
                                </td>
                                <td className="px-4 py-2 border-b border-[#E7E7E7] text-[14px] text-[#454545] font-jakarta">
                                    {mark.obtainedMarks}
                                </td>
                                <td className="px-4 py-2 border-b border-[#E7E7E7] text-[14px] text-[#454545] font-jakarta">
                                    {mark.grade}
                                </td>
                                <td className="px-4 py-2 border-b border-[#E7E7E7] text-[#454545] font-jakarta">
                                    <div className="flex space-x-2">
                                        <img src={EyeIcon} alt="View" className="w-[24px] h-[24px]" />
                                        <img src={EditIcon} alt="Edit" className="w-[24px] h-[24px]" />
                                        <img src={DeleteIcon} alt="Delete" className="w-[24px] h-[24px]" />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div></>

    )
}

export default MarkSheet;
