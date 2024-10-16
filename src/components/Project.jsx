import { dashboardData } from "../utils/constant";
import * as React from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const COLORS = ["#0088FE", "#f00", "#FFBB28", "#a9a9a9"];

const MyTeams = () => {
  const data = dashboardData;

  const dataForPie = [
    { name: "Progress", value: data.progress },
    { name: "Remaining", value: 100 - data.progress },
  ];

  return (
    <div
      className="col-span-1 w-full  bg-white p-4 sm:p-6 rounded-lg shadow-md border-[1px]  lg:h-[350px] lg:w-full "
      style={{ borderColor: "rgba(189, 125, 73, 0.4)" }}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-inter text-[17px] font-medium leading-[23px] tracking-[-0.01em] text-left items-center">
          Project Overview
          <p className="text-xs font-inter text-gray-600 mt-1 sm:mt-2">
            You can check overview
          </p>
        </h2>
      </div>

      <div className=" font-inter flex flex-col gap-4 lg:flex-row items-center lg:flex-start justify-around">
        <div className="relative">
          <div>
            <PieChart width={170} height={200}>
              <Pie
                data={dataForPie}
                cx="50%"
                cy="50%"
                innerRadius={72}
                outerRadius={84}
                fill="#17726D"
                paddingAngle={0}
                dataKey="value"
                startAngle={-270}
                endAngle={-630}
              >
                {dataForPie.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={
                      index === 0
                        ? "#17726D"
                        : index === 1
                        ? "#a9a9a9"
                        : COLORS[index]
                    }
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>

          <div className="absolute font-inter right-[25px] top-[50px] mt-4 sm:mt-10 md:mt-4   lg:-mt-1 lg:left-8   text-center lg:text-left ">
            <span className="text-xl sm:text-xl font-bold text-gray-700">
              {data.progress}%
              <p
                style={{ fontSize: "11px" }}
                className="text-xs font-inter text-gray-600 mt-1 sm:mt-2 "
              >
                Overall completion <br></br>percentage
              </p>
            </span>
          </div>
        </div>

        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-[16px] lg:w-auto lg:justify-between">
          <div className="flex flex-row gap-2">
            <div>
              <div className="font-inter w-[8px] h-[8px] mt-[4px] rounded-lg bg-[#2E90FA]"></div>
            </div>
            <div className=" flex flex-column align-left justify-start">
              <div
                className="font-inter"
                style={{ fontSize: "13px", color: "#475467" }}
              >
                Ground Floor{" "}
              </div>
              <div
                className="font-inter"
                style={{ fontSize: "22px", fontWeight: 600 }}
              >
                {data.attendance.details.InOffice}%
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <div>
              <div className="font-inter w-[8px] h-[8px] mt-[4px] rounded-lg bg-[#EE46BC]"></div>
            </div>
            <div className=" flex flex-column align-left justify-start">
              <div
                className="font-inter"
                style={{ fontSize: "13px", color: "#475467" }}
              >
                Third Floor{" "}
              </div>
              <div
                className="font-inter"
                style={{ fontSize: "22px", fontWeight: 600 }}
              >
                {data.attendance.details.Halfday}%
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <div>
              <div className="font-inter w-[8px] h-[8px] mt-[4px] rounded-lg bg-[#F79009]"></div>
            </div>
            <div className=" flex flex-column align-left justify-start">
              <div
                className="font-inter"
                style={{ fontSize: "13px", color: "#475467" }}
              >
                First Floor{" "}
              </div>
              <div
                className="font-inter"
                style={{ fontSize: "22px", fontWeight: 600 }}
              >
                {data.attendance.details.Workfromhome}%
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <div>
              <div className="font-inter w-[8px] h-[8px] mt-[4px] rounded-lg bg-[#6172F3]"></div>
            </div>
            <div className=" flex flex-column align-left justify-start">
              <div
                className="font-inter"
                style={{ fontSize: "13px", color: "#475467" }}
              >
                Kitchen Floor{" "}
              </div>
              <div
                className="font-inter"
                style={{ fontSize: "22px", fontWeight: 600 }}
              >
                {data.attendance.details.Onleave}%
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <div>
              <div className="font-inter w-[8px] h-[8px] mt-[4px] rounded-lg bg-[#12B76A]"></div>
            </div>
            <div className=" flex flex-column align-left justify-start">
              <div
                className="font-inter"
                style={{ fontSize: "13px", color: "#475467" }}
              >
                Second Floor{" "}
              </div>
              <div
                className="font-inter"
                style={{ fontSize: "22px", fontWeight: 600 }}
              >
                {data.attendance.details.Workfromhome}%
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <div>
              <div className="font-inter w-[8px] h-[8px] mt-[4px] rounded-lg bg-[#4E5BA6]"></div>
            </div>
            <div className=" flex flex-column align-left justify-start">
              <div
                className="font-inter"
                style={{ fontSize: "13px", color: "#475467" }}
              >
                Others{" "}
              </div>
              <div
                className="font-inter"
                style={{ fontSize: "22px", fontWeight: 600 }}
              >
                {data.attendance.details.Onleave}%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTeams;
