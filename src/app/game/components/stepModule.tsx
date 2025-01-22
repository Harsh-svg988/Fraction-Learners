import React from "react";

const StepModule = ({step,task})=>{
    return(
        <>
        <div className="flex items-center gap-4 mb-8 justify-center">
          <div className="border-[5px] border-[#f54f7b] px-4 py-2 text-[#f54f7b] font-bold w-24 flex justify-center text-[18px]">
            {step}
          </div>
          <div className="bg-[#f54f7b] text-white px-6 py-2  border-[5px] border-[#f54f7b] w-80 flex justify-start text-[18px]">
            {task}
          </div>
        </div>
        </>
    )
}

export default StepModule