import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from '../../redux/favoritesSlice';
import { productManagementApi } from '../../server/api';

/**
 * Creates a test store with the provided initial state
 */
export function createTestStore(preloadedState = {}) {
  return configureStore({
    reducer: {
      [productManagementApi.reducerPath]: productManagementApi.reducer,
      favorites: favoritesReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productManagementApi.middleware),
    preloadedState,
  });
}

/**
 * Renders a component with Redux Provider and Router
 */
export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    store = createTestStore(preloadedState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    );
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

/**
 * Mock product data for testing
 */
export const mockProducts = [
  {
    id: 1,
    title: 'Test Product 1',
    price: 19.99,
    description: 'This is a test product description',
    category: "men's clothing",
    image: 'https://example.com/image1.jpg',
    rating: { rate: 4.5, count: 100 },
  },
  {
    id: 2,
    title: 'Test Product 2',
    price: 29.99,
    description: 'Another test product description',
    category: "women's clothing",
    image: 'https://example.com/image2.jpg',
    rating: { rate: 4.0, count: 50 },
  },
  {
    id: 3,
    title: 'Electronics Product',
    price: 99.99,
    description: 'An electronics product for testing',
    category: 'electronics',
    image: 'https://example.com/image3.jpg',
    rating: { rate: 4.8, count: 200 },
  },
];

