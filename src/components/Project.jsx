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
      <h2 className="font-inter text-[17px] font-medium leading-[23px] tracking-[-0.01em] text-left">
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

        <div className="absolute top-28 lg:top-20 lg:left-8   text-center lg:text-left">
          <span className="text-xl sm:text-2xl font-bold">
          <span className="font-inter text-[38px] font-semibold leading-[38px] text-center">
  {data.progress}%
</span>

            <p className="font-inter text-[14px] font-normal leading-[20px] tracking-[-0.01em] text-center text-gray-600 mt-1 -ml-2 sm:mt-2">
  Overall completion <br /> percentage
</p>

          </span>
        </div>

        {/* <div className="mt-8 lg:mt-0 grid grid-cols-1 lg:grid-cols-3 lg:w-auto lg:h-full lg:justify-between"> */}
      <div className="  grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 lg:-mt-24">
      <div className="flex flex-col items-start">
  <span className="w-3 h-3 bg-[#2E90FA] rounded-full mr-2"></span>
  <span className="font-inter text-[14px]  leading-[20px] text-left">
    Ground Floor
  </span>
  <span className="font-bold text-xl">26%</span>
</div>

          <div className="flex flex-col items-start">
            <span className="w-3 h-3 bg-[#F79009] rounded-full mr-2"></span>
            <span>First Floor</span>
            <span className="font-bold text-xl">17%</span>
          </div>  
          <div className="flex flex-col items-start">
            <span className="w-3 h-3 bg-[#12B76A] rounded-full mr-2"></span>
            <span>Second Floor</span>
            <span className="font-bold text-xl">5%</span>
          </div>
          <div className="flex flex-col items-start">
            <span className="w-3 h-3 bg-[#EE46BC] rounded-full mr-2"></span>
            <span>Third Floor</span>
            <span className="font-bold text-xl">6%</span>
          </div>
          <div className="flex flex-col items-start">
            <span className="w-3 h-3 bg-[#6172F3] rounded-full mr-2"></span>
            <span>Kitchen Floor</span>
            <span className="font-bold text-xl">4%</span>
          </div>
          <div className="flex flex-col items-start">
            <span className="w-3 h-3 bg-[#4E5BA6] rounded-full mr-2"></span>
            <span>Other</span>
            <span className="font-bold text-xl">10%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTeams;
