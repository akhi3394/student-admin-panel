import { useLocation, NavLink } from "react-router-dom";
import Logo from '../../assets/Logo.png';
import LogoutIcon from '/Logout.svg';
import ActiveBar from '/ActiveBar.svg';

const sidebarItems = [
  { label: "Dashboard", path: "/dashboard", icon: "dashboard.svg", activeIcon: "ActiveDashboard.svg" },
  { label: "School Management", path: "/school-management", icon: "SchoolManagement.svg", activeIcon: "ActiveSchoolManagement.svg" },
  { label: "Student Management", path: "/student-management", icon: "StudentManagement.svg", activeIcon: "ActiveStudentManagement.svg" },
  { label: "Admin Management", path: "/admin-management", icon: "AdminManagement.svg", activeIcon: "ActiveAdmin.svg" },
  { label: "Subscription & Billing", path: "/billing", icon: "Subandbill.svg", activeIcon: "ActiveSubandBill.svg" },
  { label: "RBAC", path: "/rbac", icon: "RBAC.svg", activeIcon: "ActiveRBAC.svg" },
  { label: "Notifications", path: "/notifications", icon: "Notifications.svg", activeIcon: "ActiveNotifications.svg" },
  { label: "Messages", path: "/messages", icon: "Messages.svg", activeIcon: "ActiveMessages.svg" },
  { label: "Faq's", path: "/faqs", icon: "Faqs.svg", activeIcon: "ActiveFaqs.svg" },
  { label: "Feedback", path: "/feedback", icon: "Feedback.svg", activeIcon: "ActiveFeedback.svg" },
  { label: "General Setting", path: "/settings", icon: "Settings.svg", activeIcon: "ActiveSettings.svg" },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-[280px] min-h-screen flex flex-col gap-3 bg-white border-r border-gray-200 font-poppins">
      {/* Logo Section */}
      <div className="bg-[#1A71F6] h-[87px] flex items-center px-6 py-5">
        <img src={Logo} alt="Logo" className="bg-white rounded-full w-10 h-10 mr-3" />
        <span className="text-white font-bold text-2xl">SMD</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 relative">
        <ul>
          {sidebarItems.map((item, idx) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={idx}>
                <NavLink
                  to={item.path}
                  className={`flex items-center px-6 py-3 text-sm font-medium transition-all relative ${
                    isActive ? 'text-[#1A71F6]' : 'text-[#32343E] hover:bg-gray-100'
                  }`}
                >
                  {isActive && <img src={ActiveBar} alt="" className="absolute left-0" />}
                  <img
                    src={`/${isActive ? item.activeIcon : item.icon}`}
                    alt={`${item.label} icon`}
                    className="w-5 h-5 mr-3"
                  />
                  <span className="text-[16px]">{item.label}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout */}
      <div className="px-6 py-4 border-t border-gray-200">
        <button className="flex items-center text-red-500 hover:text-red-600 text-sm font-medium">
          <img src={LogoutIcon} alt="logout" className="w-5 h-5 mr-2" />
          <span className="text-[16px]">Logout</span>
        </button>
      </div>
    </aside>
  );
}
