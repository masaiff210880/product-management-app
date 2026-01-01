import favoritesReducer, { addFavorite, removeFavorite } from '../../../redux/favoritesSlice';

describe('favoritesSlice', () => {
  const initialState = {
    favorites: [],
  };

  const mockProduct1 = {
    id: 1,
    title: 'Test Product 1',
    price: 19.99,
    description: 'Test description',
    category: "men's clothing",
    image: 'https://example.com/image1.jpg',
    rating: { rate: 4.5, count: 100 },
  };

  const mockProduct2 = {
    id: 2,
    title: 'Test Product 2',
    price: 29.99,
    description: 'Another test description',
    category: "women's clothing",
    image: 'https://example.com/image2.jpg',
    rating: { rate: 4.0, count: 50 },
  };

  describe('initial state', () => {
    it('should return the initial state', () => {
      expect(favoritesReducer(undefined, { type: 'unknown' })).toEqual(initialState);
    });
  });

  describe('addFavorite', () => {
    it('should add a product to favorites when favorites is empty', () => {
      const action = addFavorite(mockProduct1);
      const state = favoritesReducer(initialState, action);

      expect(state.favorites).toHaveLength(1);
      expect(state.favorites[0]).toEqual(mockProduct1);
    });

    it('should add a product to favorites when favorites already has items', () => {
      const stateWithOneFavorite = {
        favorites: [mockProduct1],
      };

      const action = addFavorite(mockProduct2);
      const state = favoritesReducer(stateWithOneFavorite, action);

      expect(state.favorites).toHaveLength(2);
      expect(state.favorites[0]).toEqual(mockProduct1);
      expect(state.favorites[1]).toEqual(mockProduct2);
    });

    it('should allow adding the same product multiple times', () => {
      const action = addFavorite(mockProduct1);
      const state1 = favoritesReducer(initialState, action);
      const state2 = favoritesReducer(state1, action);

      expect(state2.favorites).toHaveLength(2);
      expect(state2.favorites[0]).toEqual(mockProduct1);
      expect(state2.favorites[1]).toEqual(mockProduct1);
    });
  });

  describe('removeFavorite', () => {
    it('should remove a product from favorites by id', () => {
      const stateWithFavorites = {
        favorites: [mockProduct1, mockProduct2],
      };

      const action = removeFavorite(mockProduct1.id);
      const state = favoritesReducer(stateWithFavorites, action);

      expect(state.favorites).toHaveLength(1);
      expect(state.favorites[0]).toEqual(mockProduct2);
    });

    it('should not remove anything if product id does not exist', () => {
      const stateWithFavorites = {
        favorites: [mockProduct1, mockProduct2],
      };

      const action = removeFavorite(999);
      const state = favoritesReducer(stateWithFavorites, action);

      expect(state.favorites).toHaveLength(2);
      expect(state.favorites).toEqual([mockProduct1, mockProduct2]);
    });

    it('should handle removing from empty favorites', () => {
      const action = removeFavorite(1);
      const state = favoritesReducer(initialState, action);

      expect(state.favorites).toHaveLength(0);
      expect(state.favorites).toEqual([]);
    });

    it('should remove the correct product when multiple products exist', () => {
      const mockProduct3 = { ...mockProduct1, id: 3 };
      const stateWithFavorites = {
        favorites: [mockProduct1, mockProduct2, mockProduct3],
      };

      const action = removeFavorite(mockProduct2.id);
      const state = favoritesReducer(stateWithFavorites, action);

      expect(state.favorites).toHaveLength(2);
      expect(state.favorites).not.toContainEqual(mockProduct2);
      expect(state.favorites).toContainEqual(mockProduct1);
      expect(state.favorites).toContainEqual(mockProduct3);
    });
  });
});

