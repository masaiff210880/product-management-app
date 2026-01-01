import React, { useState } from 'react';

const WishlistButton = ({ isFavorite, onToggle, variant = 'full' }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    
    // Show spinner for 1 second
    setTimeout(() => {
      setIsLoading(false);
      if (onToggle) {
        onToggle();
      }
    }, 1000);
  };

  // Full width button variant (for ProductDetails page)
  if (variant === 'full') {
    return (
      <button
        onClick={handleClick}
        disabled={isLoading}
        className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg transition-colors ${
          isFavorite
            ? 'bg-red-50 border-2 border-red-300 hover:bg-red-100'
            : 'border border-gray-300 hover:bg-gray-50'
        } ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
      >
        {isLoading ? (
          <>
            <div className={`animate-spin rounded-full h-5 w-5 border-2 border-t-transparent ${
              isFavorite ? 'border-red-600' : 'border-gray-600'
            }`}></div>
            <span className={`font-medium ${isFavorite ? 'text-red-600' : 'text-gray-600'}`}>
              {isFavorite ? 'Removing...' : 'Adding...'}
            </span>
          </>
        ) : (
          <>
            {isFavorite ? (
              <>
                <svg
                  className="w-5 h-5 text-red-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="text-red-600 font-medium">Remove from Wishlist</span>
              </>
            ) : (
              <>
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <span className="text-gray-600 font-medium">Add to Wishlist</span>
              </>
            )}
          </>
        )}
      </button>
    );
  }

  // Compact variant (for ProductCard remove button)
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        handleClick();
      }}
      disabled={isLoading}
      className={`px-3 py-1.5 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors ${
        isLoading ? 'opacity-75 cursor-not-allowed' : ''
      }`}
    >
      {isLoading ? (
        <div className="flex items-center gap-2">
          <div className="animate-spin rounded-full h-4 w-4 border-2 border-red-600 border-t-transparent"></div>
          <span>Removing...</span>
        </div>
      ) : (
        'Remove'
      )}
    </button>
  );
};

export default WishlistButton;

