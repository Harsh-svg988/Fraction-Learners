// import React, { useState } from 'react';
// import Button from './button';


// const SlicerIcon = ({ color }: { color: string }) => (
//   <svg viewBox="0 0 100 100" className="w-20 h-20">
//     {/* Base circle */}
//     <circle cx="50" cy="50" r="20" fill="#D9D9D9" />
//     {/* Center dot */}
//     <circle cx="50" cy="50" r="2" fill="black" />
//     {/* Slicer handle */}
//     <rect
//       x="35"
//       y="47"
//       width="45"
//       height="6"
//       fill={color}
//       transform="rotate(-45, 50, 50)"
//       rx="3"
//     />
//   </svg>
// );

// const PieSlicerSelector = () => {
//   const [selectedSlicer, setSelectedSlicer] = useState<number | null>(null);

//   const slicers = [
//     { id: 1, color: '#EF4444', slices: 4 },
//     { id: 2, color: '#3B82F6', slices: 3 },
//     { id: 3, color: '#EAB308', slices: 5 },
//   ];

//   return (
//     <div className="w-full max-w-5xl mx-auto">
//       <h1 className="text-4xl font-bold text-center mb-8">Choose your slicer</h1>
      
//       <div className="border border-blue-600 rounded-lg p-8 relative flex justify-between items-start">
//         <div className="flex gap-20">
//           {/* Left side - Slicer icons container */}
//           <div className="border rounded-lg p-6 min-w-fit">
//             <div className="flex flex-col gap-8">
//               {slicers.map(slicer => (
//                 <div key={slicer.id} className="flex items-center">
//                   <SlicerIcon color={slicer.color} />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Middle - Text descriptions */}
        //   <div className="flex flex-col justify-between py-6 gap-16">
        //     {slicers.map(slicer => (
        //       <div key={slicer.id} className="text-2xl text-blue-600 font-semibold whitespace-nowrap">
        //         Slices the pie in {slicer.slices} pieces
        //       </div>
        //     ))}
        //   </div>
//         </div>

//         {/* Slice button */}
        // <div className="mt-36  border-black  flex justify-center items-center shadow-[-5px_5px_0px_black] ">
        //   <button className="relative bg-pink-500 text-white text-2xl px-8 py-2 font-semibold ">
        //     Slice
        //   </button>
        // </div>
        
//       </div>
//     </div>
//   );
// };

// export default PieSlicerSelector;












import React, { useState } from 'react';

const SlicerIcon = ({ color }: { color: string }) => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 sm:w-20 sm:h-20">
    <circle cx="50" cy="50" r="20" fill="#D9D9D9" />
    <circle cx="50" cy="50" r="2" fill="black" />
    <rect
      x="35"
      y="47"
      width="45"
      height="6"
      fill={color}
      transform="rotate(-45, 50, 50)"
      rx="3"
    />
  </svg>
);

const PieSlicerSelector = ({setPage}) => {
  const [selectedSlicer, setSelectedSlicer] = useState<number | null>(null);

  const slicers = [
    { id: 1, color: '#EF4444', slices: 4 },
    { id: 2, color: '#3B82F6', slices: 3 },
    { id: 3, color: '#EAB308', slices: 5 },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl  text-center mb-6">
        Choose your slicer
      </h1>

      <div className="border border-blue-600 rounded-lg p-6 sm:p-8 flex flex-col lg:flex-row items-center lg:items-start gap-6">
        {/* Left side - Slicer icons container */}
        <div className="flex flex-wrap lg:flex-col gap-4 border rounded-lg p-4 sm:p-6">
          {slicers.map(slicer => (
            <div
              key={slicer.id}
              className="flex items-center cursor-pointer"
              onClick={() => setSelectedSlicer(slicer.id)}
            >
              <SlicerIcon color={slicer.color} />
            </div>
          ))}
        </div>

        {/* Middle - Text descriptions */}
        <div className="flex flex-col justify-between py-6 gap-16 mt-6">
            {slicers.map(slicer => (
              <div key={slicer.id} className="text-2xl text-blue-600 font-semibold whitespace-nowrap">
                Slices the pie in {slicer.slices} pieces
              </div>
            ))}
          </div>

        {/* Slice button */}
        <div className="mt-4 lg:mt-36   border-black  flex justify-center items-center shadow-[-5px_5px_0px_black] ml-9">
          <button className="relative bg-pink-500 text-white text-2xl px-8 py-2 font-semibold " onClick={() => setPage(4)}>
            Slice
          </button>
        </div>
      </div>
    </div>
  );
};

export default PieSlicerSelector;
