import React from "react";
const documents = [
  {
    name: "First Floor Plan.doc",
    status: "In Progress",
    progress: 70,
    color: "bg-orange-500",
    icon: "bg-orange-200",
  },
  {
    name: "Ground Floor Plan.doc",
    status: "Rejected",
    progress: 100,
    color: "bg-pink-500",
    icon: "bg-pink-200",
  },
  {
    name: "Building Overall Plan.doc",
    status: "Approved",
    progress: 100,
    color: "bg-teal-500",
    icon: "bg-teal-200",
  },
];

const Timing = () => {
  return (
    <div className="col-span-1 w-full lg:w-96 bg-white p-4 sm:p-6 rounded-lg shadow-md border-[1px] lg:h-96">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <h2 className="font-semibold text-base sm:text-lg">
          Document Repository
          <p className="text-xs text-gray-600 mt-1 sm:mt-2 md:mt-0">
            You can check overview of project here
          </p>
        </h2>
      </div>

    
      <div className="mb-4">
        <label className="w-full flex justify-center items-center px-4 py-2 bg-gray-100 text-blue-500 rounded-lg border border-gray-300 cursor-pointer hover:bg-gray-200 transition-all">
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
              className={`w-8 h-8 rounded-full flex justify-center items-center ${doc.icon}`}
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
                <span className="font-medium">{doc.name}</span>
                <span
                  className={`text-sm font-medium ${
                    doc.status === "Approved"
                      ? "text-teal-500"
                      : doc.status === "Rejected"
                      ? "text-pink-500"
                      : "text-orange-500"
                  }`}
                >
                  {doc.status}
                </span>
              </div>
            
              <div className="relative mt-2">
                <div className="h-1 bg-gray-200 rounded-full">
                  <div
                    className={`h-full rounded-full ${doc.color}`}
                    style={{ width: `${doc.progress}%` }}
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
