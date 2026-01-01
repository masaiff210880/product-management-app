# 📦 Product Management Application

A modern, full-featured product management system built with React, Redux Toolkit, and Tailwind CSS. This application provides a comprehensive solution for managing products, favorites, and inventory with a beautiful, responsive user interface.

## 🌐 Live Demo

**Live Application**: [https://695652c02bdf20693a7ff75f--lambent-frangipane-f19343.netlify.app/dashboard](https://695652c02bdf20693a7ff75f--lambent-frangipane-f19343.netlify.app/dashboard)

## 📑 Table of Contents

- [Overview](#-overview)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Project Structure](#-project-structure)
- [Running the Application](#-running-the-application)
- [Technology Stack](#-technology-stack)
- [Components Documentation](#-components-documentation)
- [State Management](#-state-management)
- [API Integration](#-api-integration)
- [Features](#-features)
- [Testing](#-testing)
- [Build & Deployment](#-build--deployment)
- [Advanced Topics](#-advanced-topics)
- [Troubleshooting](#-troubleshooting)

## 🎯 Overview

The Product Management Application is a single-page application (SPA) designed to help users efficiently manage their product inventory. It features a modern dashboard interface with real-time product browsing, search, filtering, sorting capabilities, and a favorites system for quick access to preferred products.

**🔗 [View Live Application](https://695652c02bdf20693a7ff75f--lambent-frangipane-f19343.netlify.app/dashboard)**

### Key Highlights

- ✅ **Modern Stack**: React 19, Vite 7, Redux Toolkit 2
- ✅ **Performance**: Optimized with code splitting, lazy loading, and efficient state management
- ✅ **User Experience**: Debounced search, skeleton loading, error handling with retry
- ✅ **Responsive Design**: Fully responsive layout for all device sizes
- ✅ **Testing**: Comprehensive test suite with Vitest and React Testing Library

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js**: Version 18.x or higher
- **npm**: Version 9.x or higher (comes with Node.js)
- **Git**: For version control (optional but recommended)

You can verify your installations by running:

```bash
node --version
npm --version
git --version
```

### Installation

#### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/product-management-app.git
cd product-management-app
```

#### Step 2: Install Dependencies

```bash
npm install
```

This will install all required dependencies listed in `package.json`.

#### Step 3: Environment Configuration

Create a `.env` file in the root directory:

```bash
VITE_BASE_URL=https://fakestoreapi.com
```

> ⚠️ **Important**: Make sure to add `.env` to your `.gitignore` file to avoid committing sensitive information.

### Configuration

#### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `VITE_BASE_URL` | Base URL for the API endpoint | `https://fakestoreapi.com` |

## 📁 Project Structure

```
product-management-app/
├── public/                      # Static assets
│   └── vite.svg
├── src/
│   ├── __tests__/              # Test files
│   │   ├── integration/        # Integration tests
│   │   │   ├── favorite.test.jsx
│   │   │   ├── filter.test.jsx
│   │   │   ├── search.test.jsx
│   │   │   └── sort.test.jsx
│   │   ├── unit/                # Unit tests
│   │   │   ├── components/     # Component tests
│   │   │   ├── hooks/           # Hook tests
│   │   │   └── redux/           # Redux tests
│   │   ├── utils/               # Test utilities
│   │   └── setup.js             # Test setup configuration
│   ├── assets/                  # Images and other assets
│   │   ├── product.png
│   │   └── react.svg
│   ├── common/                  # Shared/common components
│   │   └── CommonHeader.jsx     # Reusable header component
│   ├── components/              # Reusable UI components
│   │   ├── ErrorMessage.jsx     # Error display component
│   │   ├── ProductCard.jsx     # Product card component
│   │   ├── ProductCardSkeleton.jsx  # Loading skeleton
│   │   ├── ProductDetailsSkeleton.jsx
│   │   ├── Spinner.jsx          # Loading spinner
│   │   ├── WishlistButton.jsx   # Favorite button
│   │   └── Wrapper.jsx          # Layout wrapper
│   ├── hooks/                   # Custom React hooks
│   │   └── useDebounce.js       # Debounce hook for search
│   ├── layout/                  # Layout components
│   │   ├── DashboardLayout.jsx # Main layout wrapper
│   │   ├── Header.jsx           # Top navigation header
│   │   └── Sidebar.jsx          # Sidebar navigation menu
│   ├── pages/                   # Page components
│   │   ├── Dashboard.jsx        # Dashboard page
│   │   ├── Favorites.jsx        # Favorites page
│   │   ├── ProductDetails.jsx  # Product details page
│   │   └── Products.jsx         # Products listing page
│   ├── redux/                   # Redux store and slices
│   │   ├── favoritesSlice.js    # Favorites state management
│   │   └── store.js             # Redux store configuration
│   ├── server/                  # API configuration
│   │   └── api.js               # RTK Query API setup
│   ├── utils/                   # Utility functions
│   ├── App.jsx                  # Main App component
│   ├── App.css                  # App-specific styles
│   ├── index.css                # Global styles
│   └── main.jsx                 # Application entry point
├── .env                         # Environment variables
├── eslint.config.js             # ESLint configuration
├── index.html                   # HTML template
├── package.json                 # Project dependencies and scripts
├── README.md                    # This file
└── vite.config.js              # Vite configuration
```

## 💻 Running the Application

### Development Mode

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

**Features of dev server:**
- Hot Module Replacement (HMR) for instant updates
- Fast refresh for React components
- Source maps for debugging
- Error overlay in the browser

### Production Build

Create an optimized production build:

```bash
npm run build
```

This creates a `dist` folder with optimized and minified files ready for deployment.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `npm run dev` | Start development server with HMR |
| `build` | `npm run build` | Create production build |
| `preview` | `npm run preview` | Preview production build locally |
| `lint` | `npm run lint` | Run ESLint to check code quality |
| `test` | `npm test` | Run test suite |
| `test:ui` | `npm run test:ui` | Run tests with Vitest UI |
| `test:coverage` | `npm run test:coverage` | Run tests with coverage report |

## 🛠️ Technology Stack

| Category | Technology | Version | Purpose |
|----------|------------|---------|---------|
| **Framework** | React | ^19.2.0 | UI library for building components |
| **Build Tool** | Vite | ^7.2.4 | Fast build tool and dev server |
| **State Management** | Redux Toolkit | ^2.11.2 | Centralized state management |
| **API Client** | RTK Query | Included | Data fetching and caching |
| **Routing** | React Router DOM | ^7.11.0 | Client-side routing |
| **Styling** | Tailwind CSS | ^4.1.18 | Utility-first CSS framework |
| **Testing** | Vitest | ^1.0.4 | Unit and integration testing |
| **Testing Library** | React Testing Library | ^16.0.1 | Component testing utilities |

## 🧩 Components Documentation

### Page Components

| Component | Location | Description | Key Features |
|-----------|----------|-------------|--------------|
| `Dashboard` | `src/pages/Dashboard.jsx` | Main dashboard with statistics | Stats cards, charts, recent activity, quick actions |
| `Products` | `src/pages/Products.jsx` | Product listing page | Search, filter, sort, grid layout |
| `ProductDetails` | `src/pages/ProductDetails.jsx` | Detailed view of a single product | Product info, images, rating, add to favorites |
| `Favorites` | `src/pages/Favorites.jsx` | Page displaying all favorited products | Favorite products list, remove from favorites |

### Reusable Components

| Component | Location | Props | Description |
|-----------|----------|-------|-------------|
| `ProductCard` | `src/components/ProductCard.jsx` | `product`, `showRemoveButton`, `onRemove` | Displays product information in a card format |
| `ProductCardSkeleton` | `src/components/ProductCardSkeleton.jsx` | - | Loading skeleton for product cards |
| `ErrorMessage` | `src/components/ErrorMessage.jsx` | `title`, `message`, `onRetry` | Error display component with retry functionality |
| `Spinner` | `src/components/Spinner.jsx` | - | Loading spinner component |
| `WishlistButton` | `src/components/WishlistButton.jsx` | `product` | Button for adding/removing favorites |
| `Wrapper` | `src/components/Wrapper.jsx` | `fullScreen`, `headerContent`, `children` | Layout wrapper component for pages |

### Layout Components

| Component | Location | Description |
|-----------|----------|-------------|
| `DashboardLayout` | `src/layout/DashboardLayout.jsx` | Main layout wrapper with sidebar and header |
| `Header` | `src/layout/Header.jsx` | Top navigation header |
| `Sidebar` | `src/layout/Sidebar.jsx` | Sidebar navigation menu |

### Component Usage Examples

**Using ProductCard:**

```jsx
import ProductCard from './components/ProductCard';

<ProductCard 
  product={product} 
  showRemoveButton={false}
  onRemove={handleRemove}
/>
```

**Using ErrorMessage:**

```jsx
import ErrorMessage from './components/ErrorMessage';

<ErrorMessage
  title="Failed to load products"
  message="Unable to fetch products. Please try again."
  onRetry={refetch}
/>
```

## 🗄️ State Management

### Redux Store Configuration

The Redux store is configured in `src/redux/store.js`:

```jsx
import { configureStore } from "@reduxjs/toolkit";
import { productManagementApi } from "../server/api";
import favoritesReducer from "./favoritesSlice";

export const store = configureStore({
  reducer: {
    [productManagementApi.reducerPath]: productManagementApi.reducer,
    favorites: favoritesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productManagementApi.middleware),
});
```

### Favorites Slice

Located in `src/redux/favoritesSlice.js`, manages favorite products:

```jsx
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        favorite => favorite.id !== action.payload
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
```

### Using Redux in Components

**Accessing state:**

```jsx
import { useSelector } from 'react-redux';

const favorites = useSelector((state) => state.favorites.favorites);
```

**Dispatching actions:**

```jsx
import { useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/favoritesSlice';

const dispatch = useDispatch();

// Add to favorites
dispatch(addFavorite(product));

// Remove from favorites
dispatch(removeFavorite(productId));
```

## 🔌 API Integration

### RTK Query Setup

The application uses RTK Query for API integration, configured in `src/server/api.js`:

```jsx
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productManagementApi = createApi({
  reducerPath: "productManagementApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  tagTypes: ["products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
      providesTags: ["products"],
    }),
    getSingleProduct: builder.query({
      query: (id) => `/products/${id}`,
      providesTags: ["products"],
    }),
  }),
});

export const { useGetProductsQuery, useGetSingleProductQuery } = productManagementApi;
```

### API Endpoints

| Endpoint | Method | Description | Response |
|----------|--------|-------------|----------|
| `/products` | GET | Fetch all products | Array of product objects |
| `/products/:id` | GET | Fetch a single product by ID | Single product object |

### Using RTK Query Hooks

**Fetch all products:**

```jsx
import { useGetProductsQuery } from '../server/api';

const {
  data: products,
  isLoading,
  isError,
  error,
  refetch,
} = useGetProductsQuery();
```

**Fetch single product:**

```jsx
import { useGetSingleProductQuery } from '../server/api';

const { data: product, isLoading, isError } = useGetSingleProductQuery(productId);
```

### Hook Return Values

| Property | Type | Description |
|----------|------|-------------|
| `data` | any | The fetched data |
| `isLoading` | boolean | True while the request is in progress |
| `isError` | boolean | True if the request failed |
| `error` | Error \| undefined | Error object if request failed |
| `refetch` | function | Function to manually refetch data |

## ✨ Features

### Search Functionality

The search feature uses a custom `useDebounce` hook to optimize performance:

- **Location**: `src/hooks/useDebounce.js`
- **Debounce delay**: 500ms
- **Search fields**: Title, description, and category

**Implementation:**

```jsx
const [searchValue, setSearchValue] = useState("");
const debouncedSearchValue = useDebounce(searchValue, 500);

const filteredProducts = products.filter(product => 
  product.title?.toLowerCase().includes(debouncedSearchValue.toLowerCase()) ||
  product.description?.toLowerCase().includes(debouncedSearchValue.toLowerCase())
);
```

### Filter Functionality

Filter products by category:

- Men's Clothing
- Women's Clothing
- Jewelery
- Electronics

**Implementation:**

```jsx
const [filterValue, setFilterValue] = useState("");

const filteredProducts = products.filter(product =>
  product.category?.toLowerCase() === filterValue.toLowerCase()
);
```

### Sort Functionality

Sort products by price:

- Price: Low to High (ascending)
- Price: High to Low (descending)

**Implementation:**

```jsx
const [sortValue, setSortValue] = useState("");

const sortedProducts = [...products].sort((a, b) => {
  const priceA = parseFloat(a.price) || 0;
  const priceB = parseFloat(b.price) || 0;
  if (sortValue === "asc") {
    return priceA - priceB;
  } else if (sortValue === "desc") {
    return priceB - priceA;
  }
  return 0;
});
```

### Favorites System

Features:
- Add products to favorites
- Remove products from favorites
- View all favorites on dedicated page
- Persistent state using Redux

**Usage:**

```jsx
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/favoritesSlice';

const dispatch = useDispatch();
const favorites = useSelector((state) => state.favorites.favorites);

// Add to favorites
dispatch(addFavorite(product));

// Remove from favorites
dispatch(removeFavorite(productId));

// Check if product is favorited
const isFavorite = favorites.some(fav => fav.id === product.id);
```

### Loading States

Skeleton components for better UX:
- `ProductCardSkeleton` - For product cards
- `ProductDetailsSkeleton` - For product details page
- `Spinner` - General loading indicator

**Implementation:**

```jsx
if (isLoading) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[...Array(6)].map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
}
```

### Error Handling

Error component with retry functionality:

```jsx
if (isError) {
  return (
    <ErrorMessage
      title="Failed to load products"
      message={error?.data?.message || "Unable to fetch products. Please try again."}
      onRetry={refetch}
    />
  );
}
```

## 🧪 Testing

### Test Setup

Testing is configured using Vitest and React Testing Library. Configuration in `vite.config.js`:

```js
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/__tests__/setup.js"],
    css: true,
  },
});
```

### Running Tests

| Command | Description |
|---------|-------------|
| `npm test` | Run all tests once |
| `npm test -- --watch` | Run tests in watch mode |
| `npm run test:ui` | Run tests with Vitest UI |
| `npm run test:coverage` | Run tests with coverage report |

### Test Structure

- **Unit Tests**: Located in `src/__tests__/unit/`
  - Component tests (ProductCard, ErrorMessage, Spinner)
  - Hook tests (useDebounce)
  - Redux slice tests (favoritesSlice)

- **Integration Tests**: Located in `src/__tests__/integration/`
  - Search functionality
  - Filter functionality
  - Sort functionality
  - Favorites functionality

### Writing Tests

**Example Component Test:**

```jsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import ProductCard from '../../components/ProductCard';

describe('ProductCard', () => {
  const mockProduct = {
    id: 1,
    title: 'Test Product',
    price: '19.99',
    description: 'Test description',
    category: 'electronics',
    image: 'test.jpg',
    rating: { rate: 4.5, count: 100 }
  };

  it('should render product information', () => {
    render(
      <Provider store={store}>
        <ProductCard product={mockProduct} />
      </Provider>
    );
    
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$19.99')).toBeInTheDocument();
  });
});
```

## 🚀 Build & Deployment

### Building for Production

**Step 1: Build the application**

```bash
npm run build
```

This creates an optimized build in the `dist` directory.

**Step 2: Preview the build**

```bash
npm run preview
```

Test the production build locally before deploying.

### Deployment Options

#### Netlify

**Option 1: Deploy via Netlify Dashboard (Easiest)**

1. Push your code to GitHub, GitLab, or Bitbucket
2. Go to [netlify.com](https://netlify.com) and sign in
3. Click "Add new site" → "Import an existing project"
4. Connect your Git repository
5. Netlify will auto-detect the build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Add environment variables:
   - Go to Site Settings → Environment Variables
   - Click "Add variable"
   - Add `VITE_BASE_URL` with your API base URL
7. Click "Deploy site"

**Option 2: Deploy via Netlify CLI**

1. Install Netlify CLI: `npm install -g netlify-cli`
2. Login to Netlify: `netlify login`
3. Initialize and deploy:
   ```bash
   netlify init
   ```
   - Follow the prompts to link/create your site
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Set environment variables:
   ```bash
   netlify env:set VITE_BASE_URL "your-api-url"
   ```
5. Deploy to production:
   ```bash
   netlify deploy --prod
   ```

**Option 3: Deploy via Drag & Drop**

1. Build your project locally: `npm run build`
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag and drop the `dist` folder
4. Your site will be deployed instantly

> 📝 **Note**: The `netlify.toml` configuration file is already included in the project for optimal SPA routing and build settings.

**🌐 Live Site**: [https://695652c02bdf20693a7ff75f--lambent-frangipane-f19343.netlify.app/dashboard](https://695652c02bdf20693a7ff75f--lambent-frangipane-f19343.netlify.app/dashboard)

#### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/product-management-app",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run `npm run deploy`

> 💡 **Important**: Make sure to set your `VITE_BASE_URL` environment variable in your deployment platform's configuration settings.

## 🎓 Advanced Topics

### Custom Hooks

**useDebounce Hook:**

```jsx
import { useState, useEffect } from 'react';

export default function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
```

### Performance Optimization

- **Code Splitting**: Lazy load routes and components
- **Memoization**: Use `useMemo` and `useCallback` for expensive operations
- **Debouncing**: Debounce search inputs to reduce API calls
- **Image Optimization**: Lazy load images and handle errors gracefully

### Best Practices

- Keep components small and focused
- Use TypeScript for type safety (optional)
- Follow React best practices and hooks rules
- Write tests for critical functionality
- Use ESLint and Prettier for code consistency
- Document complex logic and components

### Extending the Application

**Adding New Features:**

1. Create new components in `src/components/`
2. Add new pages in `src/pages/`
3. Update routes in `src/App.jsx`
4. Add Redux slices if needed in `src/redux/`
5. Add API endpoints in `src/server/api.js`
6. Write tests for new features

## 🔧 Troubleshooting

### Common Issues

#### Environment variables not working

**Solution:**
- Ensure variables start with `VITE_` prefix
- Restart the dev server after changing .env file
- Check that .env file is in the root directory

#### Build fails

**Solution:**
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Clear build cache: `rm -rf dist`
- Check for TypeScript errors if using TypeScript
- Verify all dependencies are installed

#### Tests not running

**Solution:**
- Ensure test files end with `.test.js` or `.test.jsx`
- Check that setup files are configured correctly
- Verify jsdom is installed for DOM testing

#### API calls failing

**Solution:**
- Verify `VITE_BASE_URL` is set correctly
- Check network connectivity
- Verify API endpoint is accessible
- Check browser console for CORS errors

### Getting Help

- Check the browser console for errors
- Review the network tab for API issues
- Check React DevTools for component state
- Review Redux DevTools for state management issues
- Open an issue on GitHub with error details

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Developed with ❤️ for efficient product management.

## 🙏 Acknowledgments

- React team for the amazing framework
- Redux Toolkit team for excellent state management tools
- Tailwind CSS for the utility-first CSS framework
- Vite team for the blazing-fast build tool
- Vitest team for the modern testing framework
- FakeStoreAPI for providing test data

---

> 📖 **Note**: For an interactive HTML version with PDF download, see [Documentation.html](./Documentation.html)
