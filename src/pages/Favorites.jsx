import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Wrapper from '../components/Wrapper';
import CommonHeader from '../common/CommonHeader';
import ProductCard from '../components/ProductCard';
import { removeFavorite } from '../redux/favoritesSlice';

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);

  const handleRemoveFavorite = (productId) => {
    dispatch(removeFavorite(productId));
  };

  const headerContent = (
    <div className="w-full">
      <CommonHeader
        title="Favorites"
        description="Your favorite products"
        showSearch={false}
        showFilter={false}
        showSort={false}
      />
    </div>
  );

  return (
    <Wrapper fullScreen={true} headerContent={headerContent}>
      {favorites.length === 0 ? (
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <svg
              className="w-24 h-24 text-gray-300 mx-auto mb-4"
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
            <p className="text-gray-600 text-lg">No favorites yet</p>
            <p className="text-gray-500 text-sm mt-2">Start adding products to your favorites!</p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {favorites.map((product) => (
            <div key={product.id} className="relative">
              <ProductCard product={product} showRemoveButton={true} onRemove={handleRemoveFavorite} />
            </div>
          ))}
        </div>
      )}
    </Wrapper>
  );
};

export default Favorites;

