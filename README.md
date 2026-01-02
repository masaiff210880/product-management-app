# 📦 Product Management Dashboard

> **Frontend Developer Assessment Solution**  
> A modern product dashboard built with React, Redux Toolkit, and comprehensive testing.

## 🌐 Live Demo

**🔗 Live Application**: [View on Netlify](https://695652c02bdf20693a7ff75f--lambent-frangipane-f19343.netlify.app/dashboard)

---

## 📋 Assignment Requirements & Implementation

| Requirement | Status | Implementation |
|-------------|--------|----------------|
| React with functional components and hooks | ✅ | All components use functional patterns with useState, useMemo, useEffect |
| Redux Toolkit for state management | ✅ | Store configured with RTK Query + favorites slice |
| Fetch data from Fake Store API | ✅ | RTK Query endpoints for products |
| Product Listing Page with responsive grid | ✅ | Responsive 1-5 column grid layout |
| Search by title (debounced) | ✅ | Custom useDebounce hook (500ms delay) |
| Filter by category | ✅ | Four categories: Men's, Women's, Jewelery, Electronics |
| Sort by price | ✅ | Low to High / High to Low sorting |
| Product Detail Page | ✅ | Complete product info with favorites toggle |
| Favorites Page | ✅ | View and remove favorited products |
| Redux with thunks/selectors | ✅ | RTK Query for async, selectors for state access |
| Unit tests (Redux slices & components) | ✅ | Vitest + React Testing Library |
| Integration tests (search, filter, favorites) | ✅ | End-to-end UI behavior tests |
| Responsive and accessible UI | ✅ | Tailwind CSS with mobile-first design |

---

## 📑 Table of Contents

- [Live Demo](#-live-demo)
- [Assignment Requirements](#-assignment-requirements--implementation)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Technology Stack](#-technology-stack)
- [Features](#-features)
- [State Management](#-state-management)
- [API Integration](#-api-integration)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [Video Walkthrough](#-video-walkthrough)

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** >= 18.x
- **npm** >= 9.x

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/product-management-app.git
cd product-management-app

# Install dependencies
npm install

# Create environment file
echo "VITE_BASE_URL=https://fakestoreapi.com" > .env

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `dev` | `npm run dev` | Start development server with HMR |
| `build` | `npm run build` | Create production build |
| `preview` | `npm run preview` | Preview production build |
| `test` | `npm test` | Run test suite |
| `test:ui` | `npm run test:ui` | Run tests with Vitest UI |
| `test:coverage` | `npm run test:coverage` | Generate coverage report |
| `lint` | `npm run lint` | Run ESLint |

---

## 📁 Project Structure

```
product-management-app/
├── src/
│   ├── __tests__/              # Test files
│   │   ├── integration/        # Integration tests
│   │   │   ├── favorite.test.jsx
│   │   │   ├── filter.test.jsx
│   │   │   ├── search.test.jsx
│   │   │   └── sort.test.jsx
│   │   ├── unit/               # Unit tests
│   │   │   ├── components/     # Component tests
│   │   │   ├── hooks/          # Hook tests
│   │   │   └── redux/          # Redux slice tests
│   │   └── setup.js            # Test configuration
│   ├── components/             # Reusable UI components
│   │   ├── ProductCard.jsx
│   │   ├── ProductCardSkeleton.jsx
│   │   ├── ErrorMessage.jsx
│   │   ├── Spinner.jsx
│   │   └── WishlistButton.jsx
│   ├── hooks/                  # Custom React hooks
│   │   └── useDebounce.js      # Debounce hook for search
│   ├── layout/                 # Layout components
│   │   ├── DashboardLayout.jsx
│   │   ├── Header.jsx
│   │   └── Sidebar.jsx
│   ├── pages/                  # Page components
│   │   ├── Dashboard.jsx
│   │   ├── Products.jsx        # Product listing with search/filter/sort
│   │   ├── ProductDetails.jsx  # Single product view
│   │   └── Favorites.jsx       # Favorites management
│   ├── redux/                  # Redux state management
│   │   ├── store.js            # Store configuration
│   │   └── favoritesSlice.js   # Favorites slice
│   └── server/                 # API configuration
│       └── api.js              # RTK Query endpoints
├── coverage/                   # Test coverage reports
├── VIDEO_SCRIPT.md             # Video recording script
├── Documentation.html          # Detailed documentation
└── README.md                   # This file
```

---

## 🛠️ Technology Stack

| Category | Technology | Version | Purpose |
|----------|------------|---------|---------|
| **Framework** | React | 19.2.0 | UI library with functional components |
| **Build Tool** | Vite | 7.2.4 | Fast development and build |
| **State Management** | Redux Toolkit | 2.11.2 | Centralized state with RTK Query |
| **Routing** | React Router DOM | 7.11.0 | Client-side navigation |
| **Styling** | Tailwind CSS | 4.1.18 | Utility-first responsive design |
| **Testing** | Vitest | 1.0.4 | Unit and integration testing |
| **Testing Utilities** | React Testing Library | 16.0.1 | Component testing |

---

## ✨ Features

### 1. Product Listing Page (`/products`)

- **Responsive Grid**: Adapts from 1 to 5 columns based on screen size
- **Debounced Search**: 500ms delay to optimize performance
- **Category Filter**: Men's Clothing, Women's Clothing, Jewelery, Electronics
- **Price Sorting**: Low to High / High to Low
- **Skeleton Loading**: Visual feedback during data fetch
- **Error Handling**: Retry functionality on API failures

### 2. Product Details Page (`/products/:id`)

- Complete product information display
- Large product image with fallback handling
- Star rating with review count
- Add/Remove from favorites functionality
- Back navigation

### 3. Favorites Page (`/favorites`)

- View all favorited products
- Remove products from favorites
- Empty state when no favorites
- Redux-managed state (no prop drilling)

### 4. Dashboard (`/dashboard`)

- Overview statistics
- Quick navigation
- Recent activity summary

---

## 🗄️ State Management

### Redux Store Configuration

```jsx
// src/redux/store.js
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

```jsx
// src/redux/favoritesSlice.js
const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: { favorites: [] },
  reducers: {
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        fav => fav.id !== action.payload
      );
    },
  },
});
```

---

## 🔌 API Integration

### RTK Query Setup

```jsx
// src/server/api.js
export const productManagementApi = createApi({
  reducerPath: "productManagementApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
    }),
    getSingleProduct: builder.query({
      query: (id) => `/products/${id}`,
    }),
  }),
});
```

### API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/products` | GET | Fetch all products |
| `/products/:id` | GET | Fetch single product |

---

## 🧪 Testing

### Test Structure

```
src/__tests__/
├── unit/
│   ├── components/
│   │   ├── ErrorMessage.test.jsx
│   │   ├── ProductCard.test.jsx
│   │   └── Spinner.test.jsx
│   ├── hooks/
│   │   └── useDebounce.test.js
│   └── redux/
│       └── favoritesSlice.test.js
└── integration/
    ├── favorite.test.jsx
    ├── filter.test.jsx
    ├── search.test.jsx
    └── sort.test.jsx
```

### Running Tests

```bash
# Run all tests
npm test

# Run with UI
npm run test:ui

# Generate coverage report
npm run test:coverage
```

### Coverage Report

| Category | Statements | Branches | Functions | Lines |
|----------|------------|----------|-----------|-------|
| **Overall** | 57.77% | 78.86% | 63.41% | 57.77% |
| `src/components` | 77.73% | 92.59% | 78.57% | 77.73% |
| `src/hooks` | 100% | 100% | 100% | 100% |
| `src/redux` | 62.5% | 75% | 66.66% | 62.5% |
| `src/common` | 100% | 85.71% | 100% | 100% |
| `src/server` | 100% | 100% | 33.33% | 100% |

> 📊 View detailed coverage: Open `coverage/index.html` after running `npm run test:coverage`

### Test Examples

**Unit Test - Redux Slice:**
```jsx
describe('favoritesSlice', () => {
  it('should add a favorite', () => {
    const product = { id: 1, title: 'Test Product' };
    const state = favoritesReducer(initialState, addFavorite(product));
    expect(state.favorites).toContainEqual(product);
  });
});
```

**Integration Test - Search:**
```jsx
describe('Search Integration', () => {
  it('should filter products by search term with debounce', async () => {
    render(<Products />);
    await userEvent.type(screen.getByPlaceholderText(/search/i), 'shirt');
    await waitFor(() => {
      expect(screen.getByText(/shirt/i)).toBeInTheDocument();
    });
  });
});
```

---

## 🚀 Deployment

### Netlify Deployment

The application is deployed on Netlify with continuous deployment.

**Live URL**: [https://695652c02bdf20693a7ff75f--lambent-frangipane-f19343.netlify.app](https://695652c02bdf20693a7ff75f--lambent-frangipane-f19343.netlify.app/dashboard)

#### Deploy Your Own

**Option 1: Netlify Dashboard**
1. Push code to GitHub
2. Connect repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add environment variable: `VITE_BASE_URL`

**Option 2: Netlify CLI**
```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

### Environment Variables

| Variable | Description | Value |
|----------|-------------|-------|
| `VITE_BASE_URL` | API base URL | `https://fakestoreapi.com` |

---

## 🎬 Video Walkthrough

A screen recording explaining the solution is available. The recording covers:

1. **Project Overview** - Requirements and implementation
2. **Live Demo** - All pages and features in action
3. **Code Architecture** - Project structure and patterns
4. **State Management** - Redux Toolkit implementation
5. **Testing** - Unit and integration test coverage
6. **Deployment** - Netlify configuration

> 📝 See `VIDEO_SCRIPT.md` for the complete video script.

---

## 📚 Additional Documentation

For detailed documentation including:
- Complete component API reference
- Advanced configuration options
- Performance optimization tips
- Troubleshooting guide

**See**: [Documentation.html](./Documentation.html)

---

## 🔧 Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| Environment variables not working | Ensure prefix is `VITE_`, restart dev server |
| API calls failing | Check `VITE_BASE_URL` is set correctly |
| Tests not running | Ensure test files end with `.test.jsx` |
| Build fails | Clear `node_modules` and reinstall |

---

## 📝 License

This project is open source and available under the MIT License.

---

## 🙏 Acknowledgments

- [React](https://react.dev) - UI Framework
- [Redux Toolkit](https://redux-toolkit.js.org) - State Management
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Vite](https://vitejs.dev) - Build Tool
- [Vitest](https://vitest.dev) - Testing Framework
- [Fake Store API](https://fakestoreapi.com) - Product Data

---

> 📖 **Note**: For an interactive HTML version with PDF download capability, see [Documentation.html](./Documentation.html)
