import React from "react";

const Fraction = ({size,num,denom})=>{
    return(
        <div className=" flex flex-col items-center px-5 ">
            <div className={`${size} font-bold`}>{num}</div>
            <div className="border-t border-black w-4"></div>
            <div className={`${size} font-bold`}>{denom}</div>
        </div>
    )
}
export default Fraction;  