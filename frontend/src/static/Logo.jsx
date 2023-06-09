import React from "react";

const Logo = () => {
  return (
    <svg
      className="flex-grow-0 flex-shrink-0 w-8 h-8"
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y={32} width={32} height={32} rx={4} transform="rotate(-90 0 32)" fill="#2D68FE" />
      <path d="M23.2 16L12.4 22.2354L12.4 9.7646L23.2 16Z" fill="white" />
    </svg>
  );
};

export default Logo;
