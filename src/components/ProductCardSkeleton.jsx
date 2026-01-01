import React from 'react';

const ProductCardSkeleton = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col h-full animate-pulse">
      {/* Product Image Skeleton */}
      <div className="relative w-full h-48 bg-gray-200">
        {/* Category Badge Skeleton */}
        <div className="absolute top-2 left-2">
          <div className="h-5 w-20 bg-gray-300 rounded-full"></div>
        </div>
        {/* Favorites Icon Skeleton */}
        <div className="absolute top-2 right-2">
          <div className="bg-gray-300 rounded-full p-1.5 w-8 h-8"></div>
        </div>
      </div>

      {/* Product Content Skeleton */}
      <div className="p-4 flex-1 flex flex-col">
        {/* Title Skeleton */}
        <div className="mb-2">
          <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-5 bg-gray-200 rounded w-1/2"></div>
        </div>

        {/* Description Skeleton */}
        <div className="mb-3 space-y-2">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>

        {/* Rating Skeleton */}
        <div className="mb-3 flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-4 h-4 bg-gray-200 rounded"></div>
          ))}
          <div className="ml-1 h-4 w-12 bg-gray-200 rounded"></div>
        </div>

        {/* Price Skeleton */}
        <div className="mt-auto pt-3 border-t border-gray-200">
          <div className="h-8 bg-gray-200 rounded w-24"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;

