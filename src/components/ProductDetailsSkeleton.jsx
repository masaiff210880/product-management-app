import React from 'react';

const ProductDetailsSkeleton = () => {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden animate-pulse">
      {/* Back Button Skeleton */}
      <div className="mb-3 shrink-0">
        <div className="h-6 w-32 bg-gray-200 rounded"></div>
      </div>

      {/* Main Content Card */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden w-full flex-1 min-h-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 p-4 lg:p-6 h-full">
          {/* Product Image Skeleton */}
          <div className="relative w-full max-w-xs mx-auto lg:max-w-full h-48 lg:h-64 bg-gray-200 rounded-lg shrink-0">
            {/* Category Badge Skeleton */}
            <div className="absolute top-4 left-4">
              <div className="h-7 w-24 bg-gray-300 rounded-full"></div>
            </div>
          </div>

          {/* Product Details Skeleton */}
          <div className="flex flex-col h-full overflow-hidden">
            {/* Title Skeleton */}
            <div className="mb-3 space-y-2">
              <div className="h-8 bg-gray-200 rounded w-full"></div>
              <div className="h-8 bg-gray-200 rounded w-5/6"></div>
            </div>

            {/* Rating Skeleton */}
            <div className="mb-4 flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-5 h-5 bg-gray-200 rounded"></div>
              ))}
              <div className="ml-2 h-5 w-24 bg-gray-200 rounded"></div>
            </div>

            {/* Price Skeleton */}
            <div className="mb-4">
              <div className="h-10 w-32 bg-gray-200 rounded"></div>
            </div>

            {/* Description Skeleton */}
            <div className="mb-4 flex-1 overflow-y-auto min-h-0">
              <div className="h-6 w-32 bg-gray-200 rounded mb-3"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-4/5"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            </div>

            {/* Wishlist Button Skeleton */}
            <div className="pt-4 border-t border-gray-200 mt-auto">
              <div className="w-full h-12 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;

