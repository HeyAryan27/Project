import React from "react";
import FileSvg from '/home/aryan/Documents/Dashs/Dash/src/components/images/File.svg';
const documents = [
  {
    name: "First Floor Plan.doc",
    status: "In Progress",
    progress: 70,
    color: "bg-[#BD7D49]", 
    icon: "bg-[#BD7D49]", 
  }
  
  ,
  {
    name: "Ground Floor Plan.doc",
    status: "Rejected",
    progress: 100,
    color: "bg-[#C11574]",
    icon: "bg-[#C11574]",
  },
  {
    name: "Building Overall Plan.doc",
    status: "Approved",
    progress: 100,
    color: "bg-[#17726D]",
    icon: "bg-[#17726D]",
  },
];

const Timing = () => {
  return (
    <div className="col-span-1 w-full  bg-white p-4 sm:p-6 rounded-lg shadow-md border-[1px] lg:h-[350px]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <h2 className="font-inter text-[17px] font-medium leading-[23px] tracking-[-0.01em] text-left">
          Document Repository
          <p className="text-xs text-gray-600 mt-1 sm:mt-2 md:mt-0">
            You can check overview of project here
          </p>
        </h2>
      </div>

    
      <div className="mb-4">
        <label className="w-full flex justify-center items-center px-4 py-2 bg-white-100 text-black-500 rounded-lg border border-black-300 cursor-pointer hover:bg-gray-200 transition-all">
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            ></path>
          </svg>
          <span>Upload Document</span>
          <input type="file" className="hidden" />
        </label>
      </div>

    
      <div className="space-y-4">
        {documents.map((doc, index) => (
          <div key={index} className="flex items-center space-x-4">
          
            <div
              className={`w-9 h-8 font-inter rounded-full flex justify-center items-center ${doc.icon}`}
            >
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                 <path
    fillRule="evenodd"
    d="M9 2a1 1 0 00-1 1v4a1 1 0 001 1h5a1 1 0 001-1V3a1 1 0 00-1-1H9zM4 3a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1V3zm6 7a1 1 0 011 1v7a1 1 0 01-2 0v-7a1 1 0 011-1z"
    clipRule="evenodd"
  />
              </svg>
            </div>

          
            <div className="w-full">
              <div className="flex justify-between items-center">
                <span className="font-medium" style={{fontSize: "13px", color: "#194185"}}>{doc.name}</span>
                <span
                  className={`text-sm font-medium ${
                    doc.status === "Approved"
                      ? "text-teal-500"
                      : doc.status === "Rejected"
                      ? "text-pink-500"
                      : "text-orange-500"
                  }`}
                  style={{fontSize: "13px"}}
                >
                  {doc.status}
                </span>
              </div>
            
              <div className="relative mt-2">
                <div className="h-1 bg-gray-200 rounded-full">
                  <div
                    className={`h-full rounded-full ${doc.color}`}
                    style={{ width: `${doc.progress}%`,fontSize: "13px" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timing;
