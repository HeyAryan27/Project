import React, { useState } from "react";
import { FiSearch, FiBell, FiMenu, FiX } from "react-icons/fi";
import { BiMessageDetail } from "react-icons/bi";
import Notification from '/home/aryan/Documents/Dashs/Dash/src/components/images/Notification.png';
import Create  from '/home/aryan/Documents/Dashs/Dash/src/components/images/Create.png';
import Profile  from '/home/aryan/Documents/Dashs/Dash/src/components/images/Profile.png';
const Navbar = ({ toggleSidebar }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isHeadingVisible, setIsHeadingVisible] = useState(true);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsHeadingVisible(!isHeadingVisible);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
    setIsHeadingVisible(true);
  };

  return (
    <div className="bg-[#FFFAF5]  p-4    shadow-md  h-16 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <FiMenu
          className="text-gray-800 cursor-pointer md:hidden"
          size={24}
          onClick={toggleSidebar}
        />
        {
         <h1 className="font-inter text-[20px] font-medium leading-[38px] text-left text-gray-800">
         Green Building Monitoring
       </h1>
        }

      </div>

      <div className="flex items-center space-x-2">
       

      <button className="cursor-pointer hidden md:block">
      <img src={Create} alt="Create" className="w-8 h-8 mr-2" /></button>
<button className="cursor-pointer hidden md:block">
      <img src={Notification} alt="Notification" className="w-12 h-12 mr-2" /></button>
       <button className="cursor-pointer hidden md:block">
       <img src={Profile} alt="Profile" className="w-8 h-8 mr-2" />
       </button>

        
      </div>
    </div>
  );
};

export default Navbar;
