import React, { useState } from "react";
import { FaSortUp, FaSortDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

function Totalteam() {
  const handleSort = (key) => {
    setSortKey(key);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className=" bg-white p-3 h-auto mt-4  rounded-lg shadow-md   lg:ml-52   border-[1px]">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <div className="mb-4 md:mb-0">
          <h2 className="font-semibold text-lg   md:text-left">
            Total Team Member
          </h2>
        </div>
        <div className="relative w-full mb-8 md:w-auto">
          <select className="block appearance-none w-full md:w-auto py-2 px-3 border border-gray-300 bg-white text-gray-700 text-xs rounded-lg focus:outline-none">
            <option>All Team</option>
            <option>Team 1</option>
            <option>Team 2</option>
            <option>Team 3</option>
          </select>
          <svg
            className="absolute right-1 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-500 pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </div>
      Find Team Member
      <div className=" md:flex relative w-full">
        <input
          type="text"
          placeholder="Member List"
          className="border rounded-lg px-4  py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 w-full"
        />

        <FiSearch className="absolute  top-2.5 right-3 text-gray-500" />
      </div>
    </div>
  );
}

export default Totalteam;
