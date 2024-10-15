import React from "react";
import Charts from "./Charts";

function App() {
  return (
    <div className="col-span-1 w-full bg-white p-4 sm:p-6 rounded-lg shadow-md border-[1px] lg:h-full lg:w-full">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
        <div>
          <h2 className="text-lg font-semibold">Compliance Section</h2>
          <p className="text-sm text-gray-500">
            You can check an overview of the project here
          </p>
        </div>
        <span className="mt-2 lg:mt-0 text-sm font-medium bg-green-100 text-teal-700 px-3 py-1 rounded-full">
          Non-compliant
        </span>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col items-center justify-center w-full lg:w-1/3 mb-4 lg:mb-0">
          <div className="relative w-full">
            <Charts />
          </div>
          <p style={{fontSize: "14px"}} className=" text-center font-medium -mt-12">Water Efficiency is Low</p>
          <p style={{fontSize: "12px"}} className="text-center text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>

        <div className="w-full lg:w-2/3 lg:pl-6">
          <p style={{ fontSize: "12px" }} className="mb-4">
            AI-powered compliance check assistant to Improve Water Efficiency
            Level
          </p>

          <button
            style={{ fontSize: "11px" }}
            className="w-full flex items-center p-3 mb-4 bg-[#BD7D4929] text-teal-900 rounded-lg shadow-sm hover:bg-orange-200"
          >
              <span className="inline-flex items-center justify-center h-8 w-8 bg-white text-teal-900 rounded-full mr-4">
                &#9889;
              </span>
              Follow these steps to fix water efficiency
          </button>

          <button
            style={{ fontSize: "11px" }}
            className="w-full flex items-center p-3 bg-[#BD7D4929] text-teal-900 rounded-lg shadow-sm hover:bg-orange-200"
          >
            <span className="inline-flex items-center justify-center h-8 w-8 bg-white text-teal-900 rounded-full mr-4">
              &#9889;
            </span>
            Prevent Water Efficiency in Future
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
