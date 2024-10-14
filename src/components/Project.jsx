import { dashboardData } from "../utils/constant";
import * as React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const COLORS = ["#0088FE", "#f00", "#FFBB28", "#a9a9a9"];

const MyTeams = () => {
  const data = dashboardData;
  
  const dataForPie = [
    { name: "Progress", value: data.progress },
    { name: "Remaining", value: 100 - data.progress }
  ];

  return (
    <div className="col-span-1 w-full bg-white p-4 sm:p-6 rounded-lg shadow-md border-[1px] lg:h-96 lg:w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-base sm:text-lg">
          Project Overview
          <p className="text-xs text-gray-600 mt-1 sm:mt-2">
            You can check overview
          </p>
        </h2>
      </div>

      <div className="relative flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:h-full">
        <div className="flex justify-center lg:justify-start">
          <PieChart className="lg:mb-28" width={180} height={250}>
            <Pie
              data={dataForPie}
              cx="50%"
              cy="50%"
              innerRadius={75}
              outerRadius={90}
              fill="#1abc9c"
              paddingAngle={0}
              dataKey="value"
              startAngle={-270}
              endAngle={-630}
            >
              {dataForPie.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={index === 0 ? "#5f9ea0" : index === 1 ? "#a9a9a9" : COLORS[index]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        <div className="absolute top-28 lg:top-20 lg:left-8   text-center lg:text-left">
          <span className="text-xl sm:text-2xl font-bold text-gray-700">
            {data.progress}%
            <p className="text-xs text-gray-600 mt-1 sm:mt-2 ">
              Overall completion  <br></br>percentage
            </p>
          </span>
        </div>

        <div className="mt-8 lg:mt-0 grid grid-cols-1 lg:grid-cols-3 lg:w-auto lg:h-full lg:justify-between">
          <ul className="text-sm space-y-4 sm:space-y-6 lg:space-y-8">
            <li className="flex items-center">
              <span className="w-4 h-4 rounded-full bg-blue-500 mr-2"></span>
              Ground Floor: 
            </li>
            <b className="ml-6">{data.attendance.details.InOffice}%</b>
            <li className="flex items-center">
              <span className="w-4 h-4 rounded-full bg-yellow-500 mr-2"></span>
              Third Floor: 
            </li>
            <b className="ml-6">{data.attendance.details.Halfday}%</b>
          </ul>

          <ul className="text-sm space-y-4 sm:space-y-6 lg:space-y-8 lg:-mt-2">
            <li className="flex items-center">
              <span className="w-4 h-4 rounded-full bg-red-500 mr-2"></span>
              First Floor:
            </li>
            <b className="ml-6">{data.attendance.details.Workfromhome}%</b>
            <li className="flex items-center">
              <span className="w-4 h-4 rounded-full bg-orange-500 mr-2"></span>
              Kitchen Floor:
            </li>
            <b className="ml-6">{data.attendance.details.Onleave}%</b>
          </ul>

          <ul className="text-sm space-y-2 lg:space-y-4 lg:-mt-2">
            <li className="flex items-center">
              <span className="w-4 h-4 rounded-full bg-pink-500 mr-2"></span>
              Second Floor: 
            </li>
            <b className="ml-6">{data.attendance.details.Workfromhome}%</b>
  
            <li className="flex items-center mt-4 lg:mt-8">
              <span className="w-4 h-4 rounded-full bg-gray-500 mr-2 mt-4"></span>
              Others:  
            </li>
            <b className="ml-6">{data.attendance.details.Onleave}%</b>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyTeams;
