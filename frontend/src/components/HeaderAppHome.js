import React from "react";
import background11 from "../static/background11.png";

const Header = (props) => {
  return (
    <div className="box-border flex flex-col justify-start items-center relative p-4 mb-0 h-1/3 screen">
      <img
        className="flex-grow-0 flex-shrink-0 w-full rounded-[20px] object-cover h-full"
        src={background11}
      />
      <div className="box-border block flex-grow-0 flex-shrink-0 w-48 h-12 relative -mt-6 bg-[#ffb200] rounded-[20px] flex items-center justify-center">
        <p className="whitespace-pre-wrap font-['Poppins'] text-[22px] leading-5 font-bold text-center text-white">
          JOIN PARTY
        </p>
      </div>
    </div>
  );
};

export default Header;