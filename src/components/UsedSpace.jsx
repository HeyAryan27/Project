import React from 'react';
import { FaTimes } from 'react-icons/fa';

const UsedSpace = () => {
  return (
    <div className="flex items-center p-4 rounded-md shadow-sm mt-4 mx-4 bg-[#F5F0EB]">
      <div className="relative flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mr-4">
        <span className="text-indigo-600 font-bold">80%</span>
        <div className="absolute">
          <svg className="w-16 h-16">
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              className="text-indigo-200"
            />
            <circle 
              cx="32"
              cy="32"
              r="28"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              strokeDasharray="175"
              strokeDashoffset="35"
              className="text-indigo-600"
            />
          </svg>
        </div>
       </div>
      <div className="flex-1">
        <div className="text-gray-800 font-semibold">Used space</div>
        <div className="text-sm text-gray-500">
          Your team has used 80% of your available space. Need more?
        </div>
        <div className="flex mt-2">
          <button className="text-sm text-indigo-600 mr-4">Dismiss</button>
          <button className="text-sm text-indigo-600">Upgrade plan</button>
        </div>
      </div>
     
    </div>
  );
};

export default UsedSpace;