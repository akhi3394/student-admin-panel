import { FaSun, FaBell, FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between bg-white px-8 py-4 shadow">
      <input
        type="text"
        placeholder="Search product"
        className="border rounded px-4 py-2 w-1/3"
      />
      <div className="flex items-center space-x-4">
        <FaSun className="text-xl" />
        <FaBell className="text-xl" />
        <div className="flex items-center space-x-2">
          <FaUserCircle className="text-2xl" />
          <div>
            <div className="font-semibold">Guy Hawkins</div>
            <div className="text-xs text-gray-500">Admin</div>
          </div>
        </div>
      </div>
    </header>
  );
}
