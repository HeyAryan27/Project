import React from "react";
import {
  FiHome,
  FiUsers,
  FiCalendar,
  FiTruck,
  FiBriefcase,
  FiMessageSquare,
  FiX,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import UsedSpace from "./UsedSpace";
import { FaHome, FaTachometerAlt, FaTasks, FaUsers, FaRegChartBar, FaRegLifeRing, FaCog } from 'react-icons/fa';
const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`sm:h-screen fixed md:relative top-0 left-0 w-64 border-r  z-20 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-200 ease-in-out md:translate-x-0 bg-[#FFFAF5]`}
    >
      <div className="flex items-center justify-between h-16 px-2">
        {/* <img src="/logo.png" alt="Logo" className="h-10" /> */}
        <h3>Sample Work</h3>

        <FiX
          className="md:hidden text-gray-800 cursor-pointer"
          size={24}
          onClick={toggleSidebar}
        />
      </div>
      <ul className="mt-6 text-xs -ml-8">
      <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
            <FaHome   size={20} className="mr-2" />
            Home
          </li>
          <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
            <FaTachometerAlt  size={20} className="mr-2" />
            Dashboard
          </li>
          <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
            <FaTasks  size={20} className="mr-2" />
            Projects
          </li>
          <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
            <FaTasks  size={20} className="mr-2" />
            Tasks
          </li>
          <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
            <FaRegChartBar  size={20} className="mr-2" />
            Reporting
          </li>
        <li className="flex items-center  px-4 py-2 text-gray-700 hover:bg-gray-100">
            <FaUsers size={20} className="mr-2" />
            Users
          </li>
      </ul>
      <div className="mt-auto px-4 py-4">
        <div className="flex items-center -px-8 py-2 text-gray-700 hover:bg-gray-100">
          <FaRegLifeRing  size={20} className="mr-2" />
          Support
        </div>
        <div className="flex items-center -px-8 py-2 text-gray-700 hover:bg-gray-100">
          <FaCog   size={20} className="mr-2" />
          Settings
        </div>
      </div>
      <UsedSpace></UsedSpace>
    </div>
  );
};

export default Sidebar;
