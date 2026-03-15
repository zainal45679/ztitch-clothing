import React from "react";

const CardSkeleton = () => {
  return (
    <div className="bg-white overflow-hidden shadow-xl animate-pulse">
      
      {/* Image Skeleton */}
      <div className="h-65 bg-gray-300"></div>

      {/* Text Section */}
      <div className="flex flex-col md:gap-1 p-3 -my-2">

        <div>
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
        </div>

        <hr />

        <div className="flex items-end justify-end mt-2">
          <div className="h-5 bg-gray-300 rounded w-20"></div>
        </div>

      </div>
    </div>
  );
};

export default CardSkeleton;