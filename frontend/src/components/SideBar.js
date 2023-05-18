import React from "react";
import Logo from "../static/Logo";
import UHomeAlt from "../static/icon/UHomeAlt";
import UCreateDashboard from "../static/icon/UCreateDashboard";
import UBox from "../static/icon/UBox";
import UAnalysis from "../static/icon/UAnalysis";
import UCalender from "../static/icon/UCalender";
import UClockFive from "../static/icon/UClockFive";
import UMoneyBill from "../static/icon/UMoneyBill";
import UAngleDown from "../static/icon/UAngleDown";
import UChat from "../static/icon/UChat";
import UBell from "../static/icon/UBell";
import USetting from "../static/icon/USetting";
import USignOutAlt from "../static/icon/USignOutAlt";

const DesktopContainer = (props) => {
  return (
    <div
      className="box-border flex flex-col justify-between items-start w-64 h-screen p-5 bg-white"
      style={{
        boxShadow: "0px 4px 4px 0 rgba(0,0,0,0.25)",
      }}
    >
      <div className="box-border flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-5">
        <div className="box-border flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-3 p-2">
          <Logo />
          <p className="whitespace-pre-wrap flex-grow font-ubuntu text-2xl leading-6 font-semibold text-left text-[#324054]">
            NEXUS
          </p>
        </div>
        <div className="box-border flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3">
          <div className="box-border flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 rounded bg-blue-50">
            <div className="box-border flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-4 p-3 rounded">
              <UHomeAlt />
              <p className="whitespace-pre-wrap flex-grow font-poppins text-base leading-5 font-medium text-left text-[#2d68fe]">
                HOME
              </p>
            </div>
          </div>
          <div className="box-border flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0">
            <div className="box-border flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-4 p-3 rounded">
              <UClockFive />
              <p className="whitespace-pre-wrap flex-grow font-poppins text-base leading-5 font-medium text-left text-[#324054]">
                FRIENDS
              </p>
            </div>
          </div>
          <div className="box-border flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0">
            <div className="box-border flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-4 p-3 rounded">
              <UMoneyBill />
              <p className="whitespace-pre-wrap flex-grow font-poppins text-base leading-5 font-medium text-left text-[#324054]">
                GAME
              </p>
              <UAngleDown />
            </div>
          </div>
        </div>
      </div>
      <div className="box-border flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3">
        <div className="box-border flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-3">
          <div className="box-border flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0">
            <div className="box-border flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-4 p-3 rounded">
              <UBell />
              <p className="whitespace-pre-wrap flex-grow font-poppins text-base leading-5 font-medium text-left text-[#324054]">
                Updates & FAQ
              </p>
            </div>
          </div>
          <div className="box-border flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0">
            <div className="box-border flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-4 p-3 rounded">
              <USetting />
              <p className="whitespace-pre-wrap flex-grow font-poppins text-base leading-5 font-medium text-left text-[#324054]">
                Settings
              </p>
            </div>
          </div>
          <div className="box-border flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0">
            <div className="box-border flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-4 p-3 rounded">
              <USignOutAlt />
              <p className="whitespace-pre-wrap flex-grow font-poppins text-base leading-5 font-medium text-left text-[#324054]">
                Logout
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopContainer;
