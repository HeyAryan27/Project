import React, { useState, useEffect } from "react";
import { FaRegClock } from "react-icons/fa";
import { dashboardData } from "../utils/constant";
import MyTeam from "./ProjectTimeline";
import MyTeams from "./Project";
import Timing from "./Document";
import ComplianceSection from "./Compliance";

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="">
      <div className=" flex flex-col lg:flex-row flex-wrap gap-4 -mt-7 ">
        <div className="flex-1 w-full lg:w-auto h-full">
          <MyTeams />
        </div>

        <div className=" w-full lg:w-96">
          <Timing />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 mt-4">
        <div className="lg:col-span-3">
          <MyTeam />
        </div>
        <div className="lg:col-span-4">
          <ComplianceSection />
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 370px) {
          .p-2 {
            padding: 0.5rem;
          }

          h1 {
            font-size: 20px;
          }

          .flex-1 {
            width: 100%;
          }

          .gap-4 {
            gap: 0.5rem;
          }

          .rounded-lg {
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
