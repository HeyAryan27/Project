import React from "react";
import { FaFlag, FaCalendarAlt } from "react-icons/fa";

const milestones = [
  {
    name: "Milestone Name 1",
    date: "25 Aug 2022 - 11:30AM",
  },
  {
    name: "Milestone Name 2",
    date: "26 Aug 2022 - 01:30PM",
  },
  {
    name: "Milestone Name 3",
    date: "27 Aug 2022 - 02:30PM",
  },
];

const ProjectTimeline = () => {
  return (
    <div className="bg-white p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded-lg shadow-md border border-gray-200 mx-auto max-w-full sm:w-full lg:max-w-xl lg:h-full xl:max-w-5xl">
      <div className="text-left mb-4">
        <h2 className="text-base md:text-lg lg:text-xl font-semibold">
          Project Timeline
        </h2>
        <p className="text-xs sm:text-sm lg:text-sm text-gray-500">
          You can check the timeline of the project here
        </p>
      </div>

      <div className="relative pl-2 sm:pl-4 md:pl-6 lg:pl-6">
        <div className="absolute h-full border-l-2 border-teal-600 left-8 sm:left-4 lg:left-12"></div>

        {milestones.map((milestone, index) => (
          <div
            key={index}
            className="relative flex items-start space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-5 mb-4 sm:mb-6"
          >
            <div className="bg-white border border-teal-200 rounded-lg p-2 md:p-3 lg:p-4 w-full max-w-[80%] sm:max-w-[90%] lg:max-w-[95%] shadow-sm">
              <div className="flex gap-2 items-center">
                <div className="flex items-center justify-center bg-teal-100 text-teal-600 w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full">
                  <FaFlag className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                </div>
                <div>
                  <h3 className="text-sm md:text-base lg:text-sm font-semibold">
                    {milestone.name}
                  </h3>
                  <div className="flex items-center text-gray-500 text-xs md:text-sm  lg:text-xs space-x-1 md:space-x-2">
                    <FaCalendarAlt className="w-3 h-3 md:w-4 md:h-4 lg:w-2 lg:h-3" />
                    <span>{milestone.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full mt-4 sm:mt-6 flex justify-center lg:justify-start ">
        <button className="border border-gray-300 bg-white hover:bg-gray-50 text-gray-700 px-4 md:px-6 lg:px-8 py-2 md:py-2.5 lg:py-3 rounded-md shadow-sm text-sm md:text-base lg:text-sm">
          Check More
        </button>
      </div>
    </div>
  );
};

export default ProjectTimeline;
