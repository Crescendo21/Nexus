import React from "react";
import medieval from "../static/medieval.png";
import cyberpunk from "../static/cyberpunk.png";
import cosmos from "../static/cosmos.png";
import apocalyptic from "../static/apocalyptic.png";

const Frame12 = (props) => {
  return (
  <div className="flex justify-center items-center h-full">
    <div className="box-border grid grid-cols-5 gap-9 mt-0 p-4">
                <div className="box-border flex flex-col justify-start items-start relative gap-3.5">
          <img
            className="flex-grow-0 flex-shrink-0 w-full h-64 rounded-2xl object-cover"
            src={medieval}
          />
          <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 font-['Ubuntu'] text-lg leading-5 font-medium text-left text-black">
            Medieval
          </p>
          <div className="box-border block flex-grow-0 flex-shrink-0 w-24 h-7 relative">
            <div className="w-24 h-7 absolute top-0 left-0 rounded-md bg-green-500" />
            <p className="relative font-['Poppins'] text-sm leading-5 font-bold text-center text-white">
              PLAY
            </p>
          </div>
        </div>
        <div className="box-border flex flex-col justify-start items-start relative gap-3.5">
          <img
            className="flex-grow-0 flex-shrink-0 w-full h-64 rounded-2xl object-cover"
            src={cyberpunk}
          />
          <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 font-['Ubuntu'] text-lg leading-5 font-medium text-left text-black">
            Cyberpunk
          </p>
          <div className="box-border block flex-grow-0 flex-shrink-0 w-24 h-7 relative">
            <div className="w-24 h-7 absolute top-0 left-0 rounded-md bg-green-500" />
            <p className="relative font-['Poppins'] text-sm leading-5 font-bold text-center text-white">
              PLAY
            </p>
          </div>
        </div>
        <div className="box-border flex flex-col justify-start items-start relative gap-3.5">
          <img
            className="flex-grow-0 flex-shrink-0 w-full h-64 rounded-2xl object-cover"
            src={cosmos}
          />
          <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 font-['Ubuntu'] text-lg leading-5 font-medium text-left text-black">
            Cosmos
          </p>
          <div className="box-border block flex-grow-0 flex-shrink-0 w-24 h-7 relative">
            <div className="w-24 h-7 absolute top-0 left-0 rounded-md bg-green-500" />
            <p className="relative font-['Poppins'] text-sm leading-5 font-bold text-center text-white">
              PLAY
            </p>
          </div>
        </div>
        <div className="box-border flex flex-col justify-start items-start relative gap-3.5">
          <img
            className="flex-grow-0 flex-shrink-0 w-full h-64 rounded-2xl object-cover"
            src={apocalyptic}
          />
          <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 font-['Ubuntu'] text-lg leading-5 font-medium text-left text-black">
            Apocalyptic
          </p>
          <div className="box-border block flex-grow-0 flex-shrink-0 w-24 h-7 relative">
            <div className="w-24 h-7 absolute top-0 left-0 rounded-md bg-green-500" />
            <p className="relative font-['Poppins'] text-sm leading-5 font-bold text-center text-white">
              PLAY
            </p>
          </div>
        </div>
        <div className="box-border flex flex-col justify-start items-start relative gap-3.5">
          <img
            className="flex-grow-0 flex-shrink-0 w-full h-64 rounded-2xl object-cover"
            src={medieval}
          />
          <p className="whitespace-pre-wrap flex-grow-0 flex-shrink-0 font-['Ubuntu'] text-lg leading-5 font-medium text-left text-black">
            Medieval
          </p>
          <div className="box-border block flex-grow-0 flex-shrink-0 w-24 h-7 relative">
            <div className="w-24 h-7 absolute top-0 left-0 rounded-md bg-green-500" />
            <p className="relative font-['Poppins'] text-sm leading-5 font-bold text-center text-white">
              PLAY
            </p>
          </div>
        </div>
    </div>
    </div>
  );
};


export default Frame12;
