import { useState } from "react";

const SpaceButton = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      className={`relative flex items-center justify-center w-52 h-12 rounded-full overflow-hidden cursor-pointer transition-transform duration-500 ease-in-out border-4 shadow-[0_0_15px_rgba(255,215,0,0.5)]  
        ${isActive
          ? "border-[#FFD700]"
          : "border-transparent bg-gradient-to-r from-[#FFD700] via-[#FF9933] to-[#8B0000] bg-clip-padding"
        }
        hover:scale-110`}
    >
      <strong className="z-10 text-white tracking-widest text-xs drop-shadow-md">
        SPACE
      </strong>
      <div className="absolute inset-0 w-full h-full rounded-full backdrop-blur-lg"></div>
      <div className="absolute inset-0 flex w-48">
        <div
          className={`w-full h-8 blur-3xl transition-colors duration-300 
            ${isActive ? "bg-[#FFD700]" : "bg-[#FF9933] opacity-70"}`}
        ></div>
        <div
          className={`w-full h-8 blur-3xl transition-colors duration-300 
            ${isActive ? "bg-[#FFD700]" : "bg-[#8B0000] opacity-70"}`}
        ></div>
      </div>
      <div className="absolute inset-0 w-full h-full animate-spin-slow opacity-50">
        <div
          className="absolute w-[200rem] h-[200rem] bg-transparent"
          style={{
            backgroundImage: "radial-gradient(white 1px, transparent 1%)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>
    </button>
  );
};

export default SpaceButton;
