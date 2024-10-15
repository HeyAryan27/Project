import React from "react";
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import UsedSpace from "./UsedSpace";
import homeLogo from "/home/aryan/Documents/Dashs/Dash/src/components/images/home-line.png";
import Dashboard from "/home/aryan/Documents/Dashs/Dash/src/components/images/Dashboard.png";
import Project from "/home/aryan/Documents/Dashs/Dash/src/components/images/Project.png";
import Check from "/home/aryan/Documents/Dashs/Dash/src/components/images/Check.png";
import Reporting from "/home/aryan/Documents/Dashs/Dash/src/components/images/Reporting.png";
import User from "/home/aryan/Documents/Dashs/Dash/src/components/images/User.png";
import Support from "/home/aryan/Documents/Dashs/Dash/src/components/images/Support.png";
import Setting from "/home/aryan/Documents/Dashs/Dash/src/components/images/Setting.png";
import Icon from "/home/aryan/Documents/Dashs/Dash/src/components/images/Icon.png";
const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`sm:h-screen fixed md:relative top-0 left-0 w-64 border-r  z-20 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-200 ease-in-out md:translate-x-0 bg-[#FFFAF5]`}
    >
      <div className="flex items-center justify-between h-16 px-2">
        <img src={Icon} alt="Icon" className="w-8 h-8 mr-2" />
        <h3 className="font-inter text-[20px] font-semibold leading-tight tracking-custom text-left mr-12">
          Sample Work
        </h3>

        <FiX
          className="md:hidden text-gray-800 cursor-pointer"
          size={24}
          onClick={toggleSidebar}
        />
      </div>
      <ul className="mt-6 text-xs -ml-8">
      <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 font-inter text-[16px] font-semibold leading-[24px] text-left">
  <img src={homeLogo} alt="Home" className="w-5 h-5 mr-2" />
  Home
</li>

<li className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 font-inter text-[16px] font-semibold leading-[24px] text-left">
          <img src={Dashboard} alt="Dashboard" className="w-5 h-5 mr-2" />
          Dashboard
        </li>
        <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 font-inter text-[16px] font-semibold leading-[24px] text-left">
          <img src={Project} alt="Project" className="w-5 h-5 mr-2" />
          Projects
        </li>
        <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 font-inter text-[16px] font-semibold leading-[24px] text-left">
          <img src={Check} alt="Check" className="w-5 h-5 mr-2" />
          Tasks
        </li>
        <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 font-inter text-[16px] font-semibold leading-[24px] text-left">
          <img src={Reporting} alt="Reporting" className="w-5 h-5 mr-2" />
          Reporting
        </li>
        <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 font-inter text-[16px] font-semibold leading-[24px] text-left">
          <img src={User} alt="User" className="w-5 h-5 mr-2" />
          Users
        </li>
      </ul>
      <div className="mt-auto px-4 py-4">
        <div className="flex items-center -px-8 py-2 text-gray-700 hover:bg-gray-100 font-inter text-[16px] font-semibold leading-[24px] text-left">
          <img src={Support} alt="Support" className="w-5 h-5 mr-2" />
          Support
        </div>
        <div className="flex items-center -px-8 py-2 text-gray-700 hover:bg-gray-100 font-inter text-[16px] font-semibold leading-[24px] text-left">
          <img src={Setting} alt="Setting" className="w-5 h-5 mr-2" />
          Settings
        </div>
      </div>
      <UsedSpace></UsedSpace>
    </div>
  );
};

export default Sidebar;
