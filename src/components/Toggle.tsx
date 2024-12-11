import {  RiMoreLine } from "@remixicon/react";
import { useState } from "react";

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <div className="flex items-center space-x-1">
        <div
        className={`relative w-[40px] h-[15px] flex items-center cursor-pointer border border-primary ${
            isOn ? "bg-primary" : "bg-"
        } rounded-full`}
        onClick={handleToggle}
        >
        <div
            className={`absolute bg-white w-[10px] h-[10px] rounded-full shadow transform transition-transform ${
            isOn ? "translate-x-6" : "translate-x-1"
            }`}
        ></div>
        </div>
        <RiMoreLine className="w-[18px]"/>
    </div>
    
  );
};

export default Toggle;
