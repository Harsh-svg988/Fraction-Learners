import React from "react";

const Fraction = ({size})=>{
    return(
        <div className=" flex flex-col items-center px-5 ">
            <div className={`${size} font-bold`}>?</div>
            <div className="border-t border-black w-4"></div>
            <div className={`${size} font-bold`}>?</div>
        </div>
    )
}
export default Fraction;  