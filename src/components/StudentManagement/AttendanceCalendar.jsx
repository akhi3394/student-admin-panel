import React from "react";
import { ChevronLeft, CheckCircle } from "lucide-react";

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// June 2025 starts on Sunday → simulate calendar view starting from 1st (Sunday aligned to column)
const attendanceData = [
  ["", "", "", "", "", "", { day: "01", status: "Present" }],
  [
    { day: "02", status: "Present" },
    { day: "03", status: "Present" },
    { day: "04", status: "Present" },
    { day: "05", status: "Present" },
    { day: "06", status: "Present" },
    { day: "07", status: "Leave" },
    { day: "08", status: "Leave" },
  ],
  [
    { day: "09", status: "Present" },
    { day: "10", status: "Present" },
    { day: "11", status: "Present" },
    { day: "12", status: "Present" },
    { day: "13", status: "Present" },
    { day: "14", status: "Leave" },
    { day: "15", status: "Leave" },
  ],
  [
    { day: "16", status: "Present" },
    { day: "17", status: "Present" },
    { day: "18", status: "Present" },
    { day: "19", status: "Present" },
    { day: "20", status: "Present" },
    { day: "21", status: "Leave" },
    { day: "22", status: "Leave" },
  ],
  [
    { day: "23", status: "Present" },
    { day: "24", status: "Present" },
    { day: "25", status: "Present" },
    { day: "26", status: "Present" },
    { day: "27", status: "Present" },
    { day: "28", status: "Leave" },
    { day: "29", status: "Leave" },
  ],
  [
    { day: "30", status: "Present" },
    { day: "31", status: "Present" },
    { day: "01", status: "Present" },
    { day: "02", status: "Present" },
    { day: "03", status: "Leave" },
    { day: "04", status: "Leave" },
    "",
  ],
];

const AttendanceCalendar = () => {
  return (
    <div className="bg-[#F9F9F9] min-h-screen">
      {/* Header */}
      <div className="flex items-center gap-3 text-[#111827] font-semibold text-[18px] mb-4">
        <ChevronLeft className="w-5 h-5 cursor-pointer" />
        <span>Attendance Calendar</span>
      </div>

      {/* Card */}
      <div className="bg-white rounded-xl border border-[#E7E7E7] p-5 shadow-sm">
        {/* Month and Time Info */}
        <div className="flex items-center gap-4 text-sm text-[#111827] mb-6">
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4 text-[#1D4ED8]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3M16 7V3M3 11h18M5 5h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
              />
            </svg>
            <span>Jun 2025</span>
          </div>
          <div className="flex items-center gap-1 text-[#10B981] font-medium">
            <svg
              className="w-4 h-4 text-[#10B981]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Working Time: 8hrs 8 am - 4 pm</span>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 text-center text-[#6B7280] text-sm font-medium border-t border-l border-[#E5E7EB]">
          {daysOfWeek.map((day) => (
            <div
              key={day}
              className="p-2 border-r border-b border-[#E5E7EB] bg-[#F3F4F6]"
            >
              {day}
            </div>
          ))}

          {attendanceData.flat().map((cell, index) => (
            <div
              key={index}
              className="min-h-[65px] p-2 border-r border-b border-[#E5E7EB] text-[13px] text-[#111827] flex flex-col items-start justify-start"
            >
              {cell?.day ? (
                <>
                  <span className="text-[12px] font-medium">{cell.day}</span>
                  <div className="flex items-center gap-1 mt-1">
                    <CheckCircle
                      className={`w-3.5 h-3.5 ${
                        cell.status === "Present"
                          ? "text-green-500"
                          : "text-green-500"
                      }`}
                    />
                    <span
                      className={`text-[12px] ${
                        cell.status === "Present"
                          ? "text-green-600"
                          : "text-green-600"
                      }`}
                    >
                      {cell.status}
                    </span>
                  </div>
                </>
              ) : (
                <span>&nbsp;</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AttendanceCalendar;
