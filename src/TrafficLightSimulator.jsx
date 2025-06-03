import React, { useState, useEffect } from 'react';
const TrafficLightSimulator = () => {

  
  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 font-sans">
      {/* Title of the simulator */}
      <h1 className="text-4xl font-bold text-gray-800 mb-8 mt-4">Traffic Light Simulator</h1>

      {/* Traffic light casing */}
      <div className="bg-gray-900 rounded-2xl p-4 shadow-2xl flex flex-col items-center space-y-4">
        {
        }
        <div
          className={`
            w-24 h-24 rounded-full transition-all duration-500 ease-in-out
            ${currentLight === 'red' ? 'bg-red-500 shadow-red-glow' : 'bg-red-900 opacity-30'}
          `}
          aria-label="Red light"
        ></div>
        <div
          className={`
            w-24 h-24 rounded-full transition-all duration-500 ease-in-out
            ${currentLight === 'yellow' ? 'bg-yellow-400 shadow-yellow-glow' : 'bg-yellow-900 opacity-30'}
          `}
          aria-label="Yellow light"
        ></div>
        <div
          className={`
            w-24 h-24 rounded-full transition-all duration-500 ease-in-out
            ${currentLight === 'green' ? 'bg-green-500 shadow-green-glow' : 'bg-green-900 opacity-30'}
          `}
          aria-label="Green light"
        ></div>
      </div>

      {}
      {}
      <style>{`
        /* Custom glow effects for active lights */
        .shadow-red-glow {
          box-shadow: 0 0 40px 15px rgba(239, 68, 68, 0.8), 0 0 60px 20px rgba(239, 68, 68, 0.6);
        }
        .shadow-yellow-glow {
          box-shadow: 0 0 40px 15px rgba(250, 204, 21, 0.8), 0 0 60px 20px rgba(250, 204, 21, 0.6);
        }
        .shadow-green-glow {
          box-shadow: 0 0 40px 15px rgba(34, 197, 94, 0.8), 0 0 60px 20px rgba(34, 197, 94, 0.6);
        }
      `}</style>
    </div>
  );
};

export default TrafficLightSimulator;