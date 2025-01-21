import React from "react";

const Button = ({ text, symbol }) => {
  return symbol === undefined ? (
        <button className="relative group">
            {/* Main button */}
            <div className="bg-[#f54f7b]  border-[#f54f7b] px-8 py-2 transform transition-transform duration-100 group-active:translate-x-1 group-active:translate-y-1">
            <div className="flex items-center space-x-2">
                <span className="text-2xl font-normal text-white">{text}</span>
            </div>
            </div>
        
            <div className="absolute -bottom-2 -left-2 bg-black w-full h-full -z-10" />
        </button>
  
  ) : (
    <button className="relative group">
      {/* Main button */}
      <div className="bg-white border-8 border-[#f54f7b] px-8 py-2 transform transition-transform duration-100 group-active:translate-x-1 group-active:translate-y-1">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-normal text-[#f54f7b]">{text}</span>
          <span className="text-2xl font-normal text-[#f54f7b]">{symbol}</span>
        </div>
      </div>
      <div className="absolute -bottom-2 -left-2 bg-black w-full h-full -z-10" />
    </button>
  );
};

export default Button;
