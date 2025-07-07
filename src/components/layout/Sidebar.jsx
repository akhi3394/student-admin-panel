import { FaSchool, FaUserGraduate, FaUsers, FaBell, FaCog, FaSignOutAlt } from "react-icons/fa";

const sidebarItems = [
  { label: "Dashboard", icon: <FaSchool /> },
  { label: "School Management", icon: <FaSchool /> },
  { label: "Student Management", icon: <FaUserGraduate /> },
  { label: "Admin Management", icon: <FaUsers /> },
  { label: "Subscription & Billing", icon: <FaBell /> },
  { label: "RBAC", icon: <FaUsers /> },
  { label: "Notifications", icon: <FaBell /> },
  { label: "Messages", icon: <FaBell /> },
  { label: "Faq's", icon: <FaBell /> },
  { label: "Feedback", icon: <FaBell /> },
  { label: "General Setting", icon: <FaCog /> },
];

export default function Sidebar() {
  return (
    <aside className="bg-blue-700 text-white w-64 flex flex-col min-h-screen">
      <div className="flex items-center px-6 py-6">
        <div className="bg-white rounded-full w-10 h-10 mr-3" />
        <span className="font-bold text-2xl">SMD</span>
      </div>
      <nav className="flex-1">
        <ul>
          {sidebarItems.map((item, idx) => (
            <li key={idx} className="flex items-center px-6 py-3 hover:bg-blue-800 cursor-pointer">
              <span className="mr-3">{item.icon}</span>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto px-6 py-4">
        <button className="flex items-center text-red-500 hover:text-red-700">
          <FaSignOutAlt className="mr-2" /> Logout
        </button>
      </div>
    </aside>
  );
}
