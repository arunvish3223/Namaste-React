import React from 'react';

export default function Shimmer() {
  return (
    <div className="flex flex-wrap justify-center p-4">
      {Array(16).fill("").map((_, index) => (
        <div
          key={index}
          className="w-60 h-84 m-4 bg-gray-200 rounded-lg animate-pulse"
        ></div>
      ))}
    </div>
  );
}
