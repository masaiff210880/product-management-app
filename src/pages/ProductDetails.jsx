import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Wrapper from '../components/Wrapper';
import CommonHeader from '../common/CommonHeader';
import ProductDetailsSkeleton from '../components/ProductDetailsSkeleton';
import ErrorMessage from '../components/ErrorMessage';
import WishlistButton from '../components/WishlistButton';
import { useGetSingleProductQuery } from '../server/api';
import { addFavorite, removeFavorite } from '../redux/favoritesSlice';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  const { data: product, isLoading, isError, error, refetch } = useGetSingleProductQuery(id);

  // Check if product is in favorites
  const isFavorite = favorites.some((fav) => fav.id === product?.id);

  // Handle add/remove favorite
  const handleFavoriteToggle = () => {
    if (isFavorite) {
      dispatch(removeFavorite(product.id));
    } else {
      dispatch(addFavorite(product));
    }
  };

  // Render stars for rating
  const renderStars = (rate) => {
    const fullStars = Math.floor(rate);
    const hasHalfStar = rate % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
        {hasHalfStar && (
          <svg
            className="w-5 h-5 text-yellow-400 fill-current"
            viewBox="0 0 20 20"
          >
            <defs>
              <linearGradient id={`half-detail-${id}`}>
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="transparent" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path
              fill={`url(#half-detail-${id})`}
              d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
            />
          </svg>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-gray-300 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
        <span className="ml-2 text-base text-gray-600">({product?.rating?.count || 0} reviews)</span>
      </div>
    );
  };

  const headerContent = (
    <div className="w-full">
      <CommonHeader
        title="Product Details"
        description="View complete product information"
      />
    </div>
  );

  if (isLoading) {
    return (
      <Wrapper fullScreen={true} headerContent={headerContent}>
        <ProductDetailsSkeleton />
      </Wrapper>
    );
  }

  if (isError) {
    return (
      <Wrapper fullScreen={true} headerContent={headerContent}>
        <ErrorMessage
          title="Failed to load product"
          message={error?.data?.message || error?.message || "Unable to fetch product details. Please try again."}
          onRetry={refetch}
        />
      </Wrapper>
    );
  }

  if (!product) {
    return (
      <Wrapper fullScreen={true} headerContent={headerContent}>
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <p className="text-gray-600 text-lg">Product not found</p>
            <button
              onClick={() => navigate('/products')}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to Products
            </button>
          </div>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper fullScreen={true} headerContent={headerContent}>
      <div className="w-full h-full flex flex-col overflow-hidden">
        <button
          onClick={() => navigate('/products')}
          className="mb-3 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors shrink-0"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span>Back to Products</span>
        </button>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden w-full flex-1 min-h-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 p-4 lg:p-6 h-full">
            {/* Product Image */}
            <div className="relative w-full max-w-xs mx-auto lg:max-w-full h-48 lg:h-64 bg-gray-100 rounded-lg overflow-hidden shrink-0">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              ) : null}
              <div className="w-full h-full flex items-center justify-center text-gray-400" style={{ display: product.image ? 'none' : 'flex' }}>
                <svg
                  className="w-24 h-24"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              {product.category && (
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 text-sm font-semibold text-white bg-blue-600 rounded-full capitalize">
                    {product.category}
                  </span>
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="flex flex-col h-full overflow-hidden">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">{product.title}</h1>

              {/* Rating */}
              {product.rating && (
                <div className="mb-4">
                  {renderStars(product.rating.rate)}
                </div>
              )}

              {/* Price */}
              <div className="mb-4">
                <span className="text-3xl lg:text-4xl font-bold text-gray-900">${product.price}</span>
              </div>

              {/* Description */}
              {product.description && (
                <div className="mb-4 flex-1 overflow-y-auto min-h-0">
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">Description</h2>
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed">{product.description}</p>
                </div>
              )}

              {/* Wishlist */}
              <div className="pt-4 border-t border-gray-200 mt-auto">
                <WishlistButton
                  isFavorite={isFavorite}
                  onToggle={handleFavoriteToggle}
                  variant="full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProductDetails;

