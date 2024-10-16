import React from "react";
import Charts from "./Charts";
import File from "./images/compliance.png";

function App() {
  return (
    <div
      className="col-span-1 w-full bg-white p-4 sm:p-6 rounded-lg shadow-md border-[1px] lg:h-full lg:w-full"
      style={{ borderColor: "rgba(189, 125, 73, 0.4)" }}
    >
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
        <div>
          <h2 className="text-[17px] font-medium leading-[23px] tracking-[-0.01em] text-left font-inter">
            Compliance Section
          </h2>

          <p className="font-inter text-sm font-normal leading-5 tracking-[-0.01em] text-left text-gray-600 mt-1 sm:mt-2">
            You can check an overview of the project here
          </p>
        </div>
        <span
          style={{ background: "#D1e3e2" }}
          className="mt-2 font-inter lg:mt-0 text-sm font-medium bg-green-100 text-teal-700 px-3 py-1 rounded-full"
        >
          Non-compliant
        </span>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col items-center justify-center w-full lg:w-1/3 mb-4 lg:mb-0">
          <div className="relative w-full">
            <Charts />
          </div>
          <div
            style={{ position: "absolute", width: "190px", marginTop: "200px" }}
          >
            <p
              style={{ fontSize: "14px" }}
              className=" text-left font-medium mb-3"
            >
              Water Efficiency is Low
            </p>
            <p style={{ fontSize: "12px" }} className="text-left text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-2/3 lg:pl-6">
          <p className="font-inter text-[15px] font-medium  text-left mb-4">
            AI-powered compliance check assistant to Improve Water Efficiency
            Level
          </p>

          <button
            style={{ fontSize: "11px", fontWeight: 500, color: "black" }}
            className="w-full flex items-center p-3 mb-4 bg-[#BD7D4929] text-teal-900 rounded-lg shadow-sm hover:bg-orange-200"
          >
            <span className="inline-flex items-center justify-center h-8 w-8 bg-white text-teal-900 rounded-full mr-4">
              <img src={File} alt="Dashboard" className="w-2 h-3 " />
            </span>
            <p className="font-inter text-sm font-medium   text-left">
              Follow these steps to fix water efficiency
            </p>
          </button>

          <button
            style={{ fontSize: "11px", fontWeight: 500, color: "black" }}
            className="w-full flex items-center p-3 bg-[#BD7D4929] text-teal-900 rounded-lg shadow-sm hover:bg-orange-200"
          >
            <span className="inline-flex items-center justify-center h-8 w-8 bg-white text-teal-900 rounded-full mr-4">
              <img src={File} alt="Dashboard" className="w-2 h-3 " />
            </span>
            <p className="font-inter text-sm font-medium   text-left">
              Prevent Water Efficiency in Future
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
