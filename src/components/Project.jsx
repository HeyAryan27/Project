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
    <div className="col-span-1 w-full max-w-[90vw] lg:max-w-full bg-white p-4 sm:p-6 rounded-lg shadow-md border-[1px] lg:h-[350px] lg:w-full" style={{ borderColor: 'rgba(189, 125, 73, 0.4)' }}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-inter text-[17px] font-medium leading-[23px] tracking-[-0.01em] text-left">
          Project Overview
          <p className="text-xs font-inter text-gray-600 mt-1 sm:mt-2">
            You can check overview
          </p>
        </h2>
      </div>

      <div className="relative font-inter flex flex-col lg:flex-row items-center lg:flex-start lg:h-full xl:ml-2 2xl:ml-20">
        <div className="flex font-inter justify-center lg:justify-start">
          <PieChart className="lg:mb-28" width={180} height={250}>
            <Pie
              data={dataForPie}
              cx="50%"
              cy="50%"
              innerRadius={75}
              outerRadius={90}
              fill="#17726D"
              paddingAngle={0}
              dataKey="value"
              startAngle={-270}
              endAngle={-630}
            >
              {dataForPie.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={index === 0 ? "#17726D" : index === 1 ? "#a9a9a9" : COLORS[index]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        <div className="absolute font-inter top-[10vh] mt-10 sm:mt-10 md:mt-10 lg:-mt-1 lg:left-8 text-center lg:text-left">
          <span className="text-xl sm:text-2xl font-bold text-gray-700">
            {data.progress}%
            <p className="text-xs font-inter text-gray-600 mt-1 sm:mt-2">
              Overall completion <br />percentage
            </p>
          </span>
        </div>

        <div className="ml-6 grid grid-cols-1 lg:grid-cols-3 lg:mt-16 gap-2 lg:w-auto lg:h-full lg:justify-between  2xl:ml-44">
          <ul className="text-sm ml-2" style={{ padding: "6px" }}>
            <li style={{ width: "130%" }} className="flex items-center -mt-1">
              <span className="w-2 h-2 font-inter rounded-full bg-[#2E90FA] mr-2 flex items-center justify-center"></span>
              <span className="font-inter" style={{ fontSize: "13px" }}>Ground Floor</span>
            </li>
            <span style={{ fontSize: "20px", fontWeight: 600 }} className="ml-6">{data.attendance.details.InOffice}%</span>

            <li style={{ width: "120%" }} className="flex items-center mt-4">
              <span className="w-2 h-2 font-inter rounded-full bg-[#EE46BC] mr-2 flex items-center justify-center"></span>
              <span style={{ fontSize: "13px" }}>Third Floor</span>
            </li>
            <span style={{ fontSize: "20px", fontWeight: 600 }} className="ml-6">{data.attendance.details.Halfday}%</span>
          </ul>

          <ul className="text-sm ml-2 font-inter" style={{ padding: "6px" }}>
            <li style={{ width: "120%" }} className="flex items-center -mt-1">
              <span className="w-2 h-2 font-inter rounded-full bg-[#F79009] mr-2 flex items-center justify-center"></span>
              <span style={{ fontSize: "13px" }}>First Floor</span>
            </li>
            <span style={{ fontSize: "20px", fontWeight: 600 }} className="ml-6">{data.attendance.details.Workfromhome}%</span>

            <li style={{ width: "120%" }} className="flex items-center mt-4">
              <span className="w-2 h-2 rounded-full bg-[#6172F3] mr-2 flex items-center justify-center"></span>
              <span className="font-inter" style={{ fontSize: "13px" }}>Kitchen Floor</span>
            </li>
            <span style={{ fontSize: "20px", fontWeight: 600 }} className="ml-6">{data.attendance.details.Onleave}%</span>
          </ul>

          <ul className="text-sm ml-2" style={{ padding: "6px" }}>
            <li style={{ width: "120%" }} className="flex items-center -mt-1">
              <span className="w-2 h-2 font-inter rounded-full bg-[#12B76A] mr-2 flex items-center justify-center"></span>
              <span className="font-inter" style={{ fontSize: "13px" }}>Second Floor</span>
            </li>
            <span style={{ fontSize: "20px", fontWeight: 600 }} className="ml-6">{data.attendance.details.Workfromhome}%</span>

            <li style={{ width: "120%" }} className="flex items-center mt-4">
              <span className="w-2 h-2 rounded-full bg-[#4E5BA6] mr-2 flex items-center justify-center"></span>
              <span style={{ fontSize: "13px" }}>Others</span>
            </li>
            <span style={{ fontSize: "20px", fontWeight: 600 }} className="ml-6">{data.attendance.details.Onleave}%</span>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyTeams;
