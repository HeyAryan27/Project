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
    <div className="col-span-1 w-full bg-white p-4 sm:p-6 rounded-lg shadow-md border-[1px] lg:h-[350px] lg:w-full">
      <div className="flex justify-between items-center mb-4">
      <h2 className="font-inter text-[17px] font-medium leading-[23px] tracking-[-0.01em] text-left">
          Project Overview
          <p className="text-xs font-inter text-gray-600 mt-1 sm:mt-2">
            You can check overview
          </p>
        </h2>
      </div>

      <div className="relative font-inter flex flex-col lg:flex-row items-center lg:flex-start lg:h-full">
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

        <div className="absolute font-inter top-[10vh] lg:top-30 lg:left-8   text-center lg:text-left">
          <span className="text-xl sm:text-2xl font-bold text-gray-700">
            {data.progress}%
            <p className="text-xs font-inter text-gray-600 mt-1 sm:mt-2 ">
              Overall completion  <br></br>percentage
            </p>
          </span>
        </div>

        <div style={{marginTop: "100px"}} className="lg:mt-0 ml-6 grid grid-cols-1 lg:grid-cols-3 gap-2 lg:w-auto lg:h-full lg:justify-between">
          <ul className="text-sm ml-2" style={{padding: "0px"}}>
            <li style={{width: "120%"}}  className="flex items-center -mt-1">
              <span  className="w-2 h-2 font-inter rounded-full bg-blue-500 mr-2 flex items-center justify-center"></span>
              <span className="font-inter" style={{fontSize: "11px"}}>Ground Floor </span>
             
            </li>
            <span style={{fontSize: "20px", fontWeight: 600}} className="ml-6">{data.attendance.details.InOffice}%</span>
            <li style={{width: "120%"}}  className="flex items-center mt-4">
              <span className="w-2 h-2 font-inter rounded-full bg-yellow-500 mr-2 flex items-center justify-center"></span>
              
              <span style={{fontSize: "11px"}}>Third Floor  </span>
             
            </li> <span style={{fontSize: "20px", fontWeight: 600}}  className="ml-6 ">{data.attendance.details.Halfday}%</span>

          </ul>

          <ul className="text-sm ml-2 font-inter" style={{padding: "0px"}}>
            <li style={{width: "120%"}}  className="flex items-center -mt-1">
              <span className="w-2 h-2 font-inter rounded-full bg-red-500 mr-2 flex items-center justify-center"></span>
              
              <span style={{fontSize: "11px"}}>First Floor  </span>
            </li>
            <span style={{fontSize: "20px", fontWeight: 600}} className="ml-6">{data.attendance.details.Workfromhome}%</span>
            <li style={{width: "120%"}}  className="flex items-center mt-4">
              <span className="w-2 h-2 rounded-full bg-orange-500 mr-2 flex items-center justify-center"></span>
              
              <span className="font-inter" style={{fontSize: "11px"}}>Kitchen Floor  </span>
              
            </li>
            <span style={{fontSize: "20px", fontWeight: 600}} className="ml-6">{data.attendance.details.Onleave}%</span>
          </ul>

          <ul className="text-sm ml-2" style={{padding: "0px"}}>
            <li style={{width: "120%"}} className="flex items-center -mt-1">
              <span className="w-2 h-2 font-inter rounded-full bg-pink-500 mr-2 flex items-center justify-center"></span>
              
              <span className="font-inter" style={{fontSize: "11px"}}>Second Floor </span>
            </li>
            <span style={{fontSize: "20px", fontWeight: 600}} className="ml-6">{data.attendance.details.Workfromhome}%</span>
            <li style={{width: "120%"}} className="flex items-center mt-4">
              <span className="w-2 h-2 font-inter rounded-full bg-gray-500 mr-2 flex items-center justify-center"></span>
              
              <span style={{fontSize: "11px"}}>Others  </span>
            </li>
            <span style={{fontSize: "20px", fontWeight: 600}} className="ml-6">{data.attendance.details.Onleave}%</span>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyTeams;
