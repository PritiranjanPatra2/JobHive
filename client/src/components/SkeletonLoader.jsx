import React from "react";

const SkeletonCard = () => {
  return (
    <div className="w-full max-w-sm p-4 border border-gray-200 rounded-lg shadow-md animate-pulse">
      <div className="h-6 bg-gray-300 rounded w-1/2 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      <div className="flex mt-4">
        <div className="h-10 bg-gray-300 rounded w-24 mr-2"></div>
        <div className="h-10 bg-gray-300 rounded w-24"></div>
      </div>
    </div>
  );
};

const SkeletonLoader = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 p-4">
      {[...Array(count)].map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
};

export default SkeletonLoader;
