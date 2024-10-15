import React from 'react';
import { FaTimes } from 'react-icons/fa';

const UsedSpace = () => {
  return (
    <div className="flex flex-column flex-start p-4 gap-2 rounded-md shadow-sm mt-4 mx-4 bg-[#F5F0EB]">
      <div className="relative flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mr-4">
        <span style={{color: "#17726D"}} className="text-indigo-600 font-bold">80%</span>
        <div className="absolute">
          <svg className="w-16 h-16">
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              // className="text-indigo-200"
              color='#17726D'
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
              // className="text-indigo-600"
              color='#17726D'
            />
          </svg>
        </div>
       </div>
      <div className="flex-1">
        <div style={{fontSize: "12px"}} className="text-gray-800 font-semibold">Used space</div>
        <div style={{fontSize: "12px"}} className="text-sm text-gray-500">
          Your team has used 80% of your available space. Need more?
        </div>
        <div className="flex mt-2">
          <button style={{fontSize: "12px"}} className="text-sm text-indigo-600 mr-4">Dismiss</button>
          <button style={{fontSize: "12px"}} className="text-sm text-indigo-600">Upgrade plan</button>
        </div>
      </div>
     
    </div>
  );
};

export default UsedSpace;