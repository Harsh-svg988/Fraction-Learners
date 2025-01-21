import React from 'react';

const MathProblem = () => {
  return (
    <div className="max-w-xl mx-auto p-6 bg-white">
      {/* Top text */}
      <div className="text-center mb-8 text-xl">
        <span>So there are</span>
        <input 
          type="text"
          className="w-12 h-12 mx-2 border-2 border-gray-300 rounded text-center"
        />
        <span className="inline-flex items-center">
          <span className="border-b-2 border-black">1</span>
          <span className="mx-1">/</span>
          <span>4</span>
        </span>
        <span className="ml-2">sized pieces in 3 wholes</span>
      </div>

      {/* Green awesome banner */}
      <div className="bg-green-200 py-3 text-center mb-4 rounded-lg">
        <span className="text-xl font-bold uppercase">Awesome</span>
      </div>

      {/* Yellow equation box */}
      <div className="bg-yellow-50 p-4 rounded-lg text-center mb-8">
        <div className="flex items-center justify-center text-xl space-x-2">
          <span>3 wholes =</span>
          <div className="flex flex-col items-center">
            <input 
              type="text"
              className="w-12 h-12 border-2 border-gray-300 rounded text-center"
            />
            <span className="mt-1">4</span>
          </div>
        </div>
      </div>

      {/* Step button */}
      <div className="flex justify-center">
        <button className="bg-pink-400 hover:bg-pink-500 text-white px-8 py-3 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-200">
          <span className="text-xl">Step 3 &gt;&gt;</span>
        </button>
      </div>
    </div>
  );
};

export default MathProblem;