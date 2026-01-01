<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product Management App - Documentation</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background: #f5f5f5;
            padding: 20px;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h1 {
            color: #2563eb;
            font-size: 2.5em;
            margin-bottom: 10px;
            border-bottom: 3px solid #2563eb;
            padding-bottom: 10px;
        }
        h2 {
            color: #1e40af;
            font-size: 1.8em;
            margin-top: 30px;
            margin-bottom: 15px;
            padding-top: 20px;
            border-top: 2px solid #e5e7eb;
        }
        h3 {
            color: #3b82f6;
            font-size: 1.4em;
            margin-top: 25px;
            margin-bottom: 10px;
        }
        h4 {
            color: #60a5fa;
            font-size: 1.2em;
            margin-top: 20px;
            margin-bottom: 8px;
        }
        p {
            margin-bottom: 15px;
            text-align: justify;
        }
        ul, ol {
            margin-left: 30px;
            margin-bottom: 15px;
        }
        li {
            margin-bottom: 8px;
        }
        code {
            background: #f3f4f6;
            padding: 2px 6px;
            border-radius: 4px;
            font-family: 'Courier New', monospace;
            font-size: 0.9em;
            color: #dc2626;
        }
        pre {
            background: #1f2937;
            color: #f9fafb;
            padding: 15px;
            border-radius: 6px;
            overflow-x: auto;
            margin: 15px 0;
        }
        pre code {
            background: transparent;
            color: #f9fafb;
            padding: 0;
        }
        .badge {
            display: inline-block;
            padding: 4px 12px;
            border-radius: 12px;
            font-size: 0.85em;
            font-weight: 600;
            margin: 2px;
        }
        .badge-blue {
            background: #dbeafe;
            color: #1e40af;
        }
        .badge-green {
            background: #d1fae5;
            color: #065f46;
        }
        .badge-purple {
            background: #e9d5ff;
            color: #6b21a8;
        }
        .badge-yellow {
            background: #fef3c7;
            color: #92400e;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th, td {
            border: 1px solid #e5e7eb;
            padding: 12px;
            text-align: left;
        }
        th {
            background: #2563eb;
            color: white;
            font-weight: 600;
        }
        tr:nth-child(even) {
            background: #f9fafb;
        }
        .feature-box {
            background: #eff6ff;
            border-left: 4px solid #2563eb;
            padding: 15px;
            margin: 15px 0;
            border-radius: 4px;
        }
        .warning-box {
            background: #fef3c7;
            border-left: 4px solid #f59e0b;
            padding: 15px;
            margin: 15px 0;
            border-radius: 4px;
        }
        .info-box {
            background: #d1fae5;
            border-left: 4px solid #10b981;
            padding: 15px;
            margin: 15px 0;
            border-radius: 4px;
        }
        .toc {
            background: #f9fafb;
            padding: 20px;
            border-radius: 6px;
            margin: 20px 0;
        }
        .toc ul {
            list-style: none;
            margin-left: 0;
        }
        .toc li {
            margin: 8px 0;
        }
        .toc a {
            color: #2563eb;
            text-decoration: none;
        }
        .toc a:hover {
            text-decoration: underline;
        }
        .footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 2px solid #e5e7eb;
            text-align: center;
            color: #6b7280;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>📦 Product Management Application</h1>
        <p style="font-size: 1.1em; color: #6b7280; margin-bottom: 30px;">
            A modern, full-featured product management system built with React, Redux Toolkit, and Tailwind CSS. 
            This application provides a comprehensive solution for managing products, favorites, and inventory with 
            a beautiful, responsive user interface.
        </p>

        <div class="toc">
            <h3>📑 Table of Contents</h3>
            <ul>
                <li><a href="#overview">Overview</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#tech-stack">Technology Stack</a></li>
                <li><a href="#prerequisites">Prerequisites</a></li>
                <li><a href="#installation">Installation</a></li>
                <li><a href="#configuration">Configuration</a></li>
                <li><a href="#usage">Usage</a></li>
                <li><a href="#project-structure">Project Structure</a></li>
                <li><a href="#components">Components</a></li>
                <li><a href="#state-management">State Management</a></li>
                <li><a href="#api-integration">API Integration</a></li>
                <li><a href="#testing">Testing</a></li>
                <li><a href="#scripts">Available Scripts</a></li>
                <li><a href="#deployment">Deployment</a></li>
                <li><a href="#contributing">Contributing</a></li>
            </ul>
        </div>

        <h2 id="overview">🎯 Overview</h2>
        <p>
            The Product Management Application is a single-page application (SPA) designed to help users 
            efficiently manage their product inventory. It features a modern dashboard interface with 
            real-time product browsing, search, filtering, sorting capabilities, and a favorites system 
            for quick access to preferred products.
        </p>
        <p>
            The application follows modern React best practices, utilizing functional components, hooks, 
            and a centralized state management system. It's built with performance and user experience 
            in mind, featuring debounced search, skeleton loading states, and responsive design.
        </p>

        <h2 id="features">✨ Features</h2>
        <div class="feature-box">
            <h3>Core Features</h3>
            <ul>
                <li><strong>📊 Dashboard:</strong> Overview with statistics, charts, and recent activity</li>
                <li><strong>🛍️ Product Catalog:</strong> Browse and view all available products</li>
                <li><strong>🔍 Advanced Search:</strong> Real-time search with debouncing for optimal performance</li>
                <li><strong>🎛️ Filtering:</strong> Filter products by category (Men's Clothing, Women's Clothing, Jewelery, Electronics)</li>
                <li><strong>📈 Sorting:</strong> Sort products by price (ascending/descending)</li>
                <li><strong>❤️ Favorites:</strong> Add and manage favorite products with persistent storage</li>
                <li><strong>📱 Responsive Design:</strong> Fully responsive layout for desktop, tablet, and mobile devices</li>
                <li><strong>⚡ Performance:</strong> Optimized with code splitting, lazy loading, and efficient state management</li>
            </ul>
        </div>

        <div class="feature-box">
            <h3>User Interface Features</h3>
            <ul>
                <li>Modern, clean design with Tailwind CSS</li>
                <li>Sidebar navigation with collapsible menu</li>
                <li>Loading skeletons for better UX during data fetching</li>
                <li>Error handling with retry mechanisms</li>
                <li>Smooth transitions and hover effects</li>
                <li>Product cards with images and detailed information</li>
            </ul>
        </div>

        <h2 id="tech-stack">🛠️ Technology Stack</h2>
        <table>
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Technology</th>
                    <th>Version</th>
                    <th>Purpose</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Framework</strong></td>
                    <td>React</td>
                    <td>^19.2.0</td>
                    <td>UI library for building components</td>
                </tr>
                <tr>
                    <td><strong>Build Tool</strong></td>
                    <td>Vite</td>
                    <td>^7.2.4</td>
                    <td>Fast build tool and dev server</td>
                </tr>
                <tr>
                    <td><strong>State Management</strong></td>
                    <td>Redux Toolkit</td>
                    <td>^2.11.2</td>
                    <td>Centralized state management</td>
                </tr>
                <tr>
                    <td><strong>API Client</strong></td>
                    <td>RTK Query</td>
                    <td>Included in Redux Toolkit</td>
                    <td>Data fetching and caching</td>
                </tr>
                <tr>
                    <td><strong>Routing</strong></td>
                    <td>React Router DOM</td>
                    <td>^7.11.0</td>
                    <td>Client-side routing</td>
                </tr>
                <tr>
                    <td><strong>Styling</strong></td>
                    <td>Tailwind CSS</td>
                    <td>^4.1.18</td>
                    <td>Utility-first CSS framework</td>
                </tr>
                <tr>
                    <td><strong>Testing</strong></td>
                    <td>Vitest</td>
                    <td>^1.0.4</td>
                    <td>Unit and integration testing</td>
                </tr>
                <tr>
                    <td><strong>Testing Library</strong></td>
                    <td>React Testing Library</td>
                    <td>^16.0.1</td>
                    <td>Component testing utilities</td>
                </tr>
            </tbody>
        </table>

        <h2 id="prerequisites">📋 Prerequisites</h2>
        <p>Before you begin, ensure you have the following installed on your system:</p>
        <ul>
            <li><strong>Node.js:</strong> Version 18.x or higher</li>
            <li><strong>npm:</strong> Version 9.x or higher (comes with Node.js)</li>
            <li><strong>Git:</strong> For version control (optional but recommended)</li>
        </ul>
        <p>You can verify your installations by running:</p>
        <pre><code>node --version
npm --version</code></pre>

        <h2 id="installation">🚀 Installation</h2>
        <h3>Step 1: Clone the Repository</h3>
        <pre><code>git clone https://github.com/yourusername/product-management-app.git
cd product-management-app</code></pre>

        <h3>Step 2: Install Dependencies</h3>
        <pre><code>npm install</code></pre>
        <p>This will install all required dependencies listed in <code>package.json</code>.</p>

        <h3>Step 3: Environment Configuration</h3>
        <p>Create a <code>.env</code> file in the root directory:</p>
        <pre><code>VITE_BASE_URL=https://fakestoreapi.com</code></pre>
        <div class="warning-box">
            <strong>⚠️ Note:</strong> Make sure to add <code>.env</code> to your <code>.gitignore</code> file 
            to avoid committing sensitive information.
        </div>

        <h2 id="configuration">⚙️ Configuration</h2>
        <h3>Environment Variables</h3>
        <table>
            <thead>
                <tr>
                    <th>Variable</th>
                    <th>Description</th>
                    <th>Default</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><code>VITE_BASE_URL</code></td>
                    <td>Base URL for the API endpoint</td>
                    <td>https://fakestoreapi.com</td>
                </tr>
            </tbody>
        </table>

        <h3>Vite Configuration</h3>
        <p>The project uses Vite as the build tool. Configuration can be found in <code>vite.config.js</code>:</p>
        <ul>
            <li>React plugin for JSX transformation</li>
            <li>Tailwind CSS plugin for styling</li>
            <li>Vitest configuration for testing</li>
        </ul>

        <h2 id="usage">💻 Usage</h2>
        <h3>Development Mode</h3>
        <p>Start the development server:</p>
        <pre><code>npm run dev</code></pre>
        <p>The application will be available at <code>http://localhost:5173</code> (or the next available port).</p>
        <p>The dev server includes:</p>
        <ul>
            <li>Hot Module Replacement (HMR) for instant updates</li>
            <li>Fast refresh for React components</li>
            <li>Source maps for debugging</li>
        </ul>

        <h3>Production Build</h3>
        <p>Create an optimized production build:</p>
        <pre><code>npm run build</code></pre>
        <p>This creates a <code>dist</code> folder with optimized and minified files ready for deployment.</p>

        <h3>Preview Production Build</h3>
        <p>Preview the production build locally:</p>
        <pre><code>npm run preview</code></pre>

        <h2 id="project-structure">📁 Project Structure</h2>
        <pre><code>product-management-app/
├── public/                 # Static assets
│   └── vite.svg
├── src/
│   ├── __tests__/          # Test files
│   │   ├── integration/    # Integration tests
│   │   ├── unit/           # Unit tests
│   │   └── setup.js        # Test setup configuration
│   ├── assets/             # Images and other assets
│   ├── common/             # Shared/common components
│   │   └── CommonHeader.jsx
│   ├── components/         # Reusable UI components
│   │   ├── ErrorMessage.jsx
│   │   ├── ProductCard.jsx
│   │   ├── ProductCardSkeleton.jsx
│   │   ├── ProductDetailsSkeleton.jsx
│   │   ├── Spinner.jsx
│   │   ├── WishlistButton.jsx
│   │   └── Wrapper.jsx
│   ├── hooks/              # Custom React hooks
│   │   └── useDebounce.js
│   ├── layout/             # Layout components
│   │   ├── DashboardLayout.jsx
│   │   ├── Header.jsx
│   │   └── Sidebar.jsx
│   ├── pages/              # Page components
│   │   ├── Dashboard.jsx
│   │   ├── Favorites.jsx
│   │   ├── ProductDetails.jsx
│   │   └── Products.jsx
│   ├── redux/              # Redux store and slices
│   │   ├── favoritesSlice.js
│   │   └── store.js
│   ├── server/             # API configuration
│   │   └── api.js
│   ├── App.jsx             # Main App component
│   ├── App.css             # App-specific styles
│   ├── index.css           # Global styles
│   └── main.jsx            # Application entry point
├── .env                    # Environment variables (create this)
├── eslint.config.js        # ESLint configuration
├── index.html              # HTML template
├── package.json            # Project dependencies and scripts
├── README.md               # This file
└── vite.config.js          # Vite configuration</code></pre>

        <h2 id="components">🧩 Components</h2>
        <h3>Page Components</h3>
        <table>
            <thead>
                <tr>
                    <th>Component</th>
                    <th>Location</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><code>Dashboard</code></td>
                    <td>src/pages/Dashboard.jsx</td>
                    <td>Main dashboard with statistics, charts, and quick actions</td>
                </tr>
                <tr>
                    <td><code>Products</code></td>
                    <td>src/pages/Products.jsx</td>
                    <td>Product listing page with search, filter, and sort functionality</td>
                </tr>
                <tr>
                    <td><code>ProductDetails</code></td>
                    <td>src/pages/ProductDetails.jsx</td>
                    <td>Detailed view of a single product</td>
                </tr>
                <tr>
                    <td><code>Favorites</code></td>
                    <td>src/pages/Favorites.jsx</td>
                    <td>Page displaying all favorited products</td>
                </tr>
            </tbody>
        </table>

        <h3>Reusable Components</h3>
        <table>
            <thead>
                <tr>
                    <th>Component</th>
                    <th>Location</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><code>ProductCard</code></td>
                    <td>src/components/ProductCard.jsx</td>
                    <td>Card component for displaying product information</td>
                </tr>
                <tr>
                    <td><code>ProductCardSkeleton</code></td>
                    <td>src/components/ProductCardSkeleton.jsx</td>
                    <td>Loading skeleton for product cards</td>
                </tr>
                <tr>
                    <td><code>ErrorMessage</code></td>
                    <td>src/components/ErrorMessage.jsx</td>
                    <td>Error display component with retry functionality</td>
                </tr>
                <tr>
                    <td><code>Spinner</code></td>
                    <td>src/components/Spinner.jsx</td>
                    <td>Loading spinner component</td>
                </tr>
                <tr>
                    <td><code>WishlistButton</code></td>
                    <td>src/components/WishlistButton.jsx</td>
                    <td>Button for adding/removing favorites</td>
                </tr>
                <tr>
                    <td><code>Wrapper</code></td>
                    <td>src/components/Wrapper.jsx</td>
                    <td>Layout wrapper component for pages</td>
                </tr>
            </tbody>
        </table>

        <h3>Layout Components</h3>
        <table>
            <thead>
                <tr>
                    <th>Component</th>
                    <th>Location</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><code>DashboardLayout</code></td>
                    <td>src/layout/DashboardLayout.jsx</td>
                    <td>Main layout wrapper with sidebar and header</td>
                </tr>
                <tr>
                    <td><code>Header</code></td>
                    <td>src/layout/Header.jsx</td>
                    <td>Top navigation header</td>
                </tr>
                <tr>
                    <td><code>Sidebar</code></td>
                    <td>src/layout/Sidebar.jsx</td>
                    <td>Sidebar navigation menu</td>
                </tr>
            </tbody>
        </table>

        <h2 id="state-management">🗄️ State Management</h2>
        <p>The application uses Redux Toolkit for state management with the following structure:</p>

        <h3>Store Configuration</h3>
        <p>The Redux store is configured in <code>src/redux/store.js</code> and includes:</p>
        <ul>
            <li><strong>RTK Query API:</strong> For data fetching and caching</li>
            <li><strong>Favorites Slice:</strong> For managing favorite products</li>
        </ul>

        <h3>Redux Slices</h3>
        <h4>Favorites Slice</h4>
        <p>Located in <code>src/redux/favoritesSlice.js</code>, this slice manages:</p>
        <ul>
            <li>Adding products to favorites</li>
            <li>Removing products from favorites</li>
            <li>Checking if a product is favorited</li>
        </ul>
        <p>Actions available:</p>
        <ul>
            <li><code>addToFavorites(product)</code> - Add a product to favorites</li>
            <li><code>removeFromFavorites(productId)</code> - Remove a product from favorites</li>
        </ul>

        <h2 id="api-integration">🔌 API Integration</h2>
        <p>The application uses RTK Query for API integration, configured in <code>src/server/api.js</code>.</p>

        <h3>API Endpoints</h3>
        <table>
            <thead>
                <tr>
                    <th>Endpoint</th>
                    <th>Method</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><code>/products</code></td>
                    <td>GET</td>
                    <td>Fetch all products</td>
                </tr>
                <tr>
                    <td><code>/products/:id</code></td>
                    <td>GET</td>
                    <td>Fetch a single product by ID</td>
                </tr>
            </tbody>
        </table>

        <h3>RTK Query Hooks</h3>
        <p>The following hooks are available for data fetching:</p>
        <ul>
            <li><code>useGetProductsQuery()</code> - Fetch all products</li>
            <li><code>useGetSingleProductQuery(id)</code> - Fetch a single product</li>
        </ul>
        <p>These hooks provide:</p>
        <ul>
            <li><code>data</code> - The fetched data</li>
            <li><code>isLoading</code> - Loading state</li>
            <li><code>isError</code> - Error state</li>
            <li><code>error</code> - Error object</li>
            <li><code>refetch</code> - Function to refetch data</li>
        </ul>

        <h2 id="testing">🧪 Testing</h2>
        <p>The project uses Vitest for testing with React Testing Library for component tests.</p>

        <h3>Running Tests</h3>
        <pre><code># Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage</code></pre>

        <h3>Test Structure</h3>
        <ul>
            <li><strong>Unit Tests:</strong> Located in <code>src/__tests__/unit/</code>
                <ul>
                    <li>Component tests</li>
                    <li>Hook tests</li>
                    <li>Redux slice tests</li>
                </ul>
            </li>
            <li><strong>Integration Tests:</strong> Located in <code>src/__tests__/integration/</code>
                <ul>
                    <li>Search functionality</li>
                    <li>Filter functionality</li>
                    <li>Sort functionality</li>
                    <li>Favorites functionality</li>
                </ul>
            </li>
        </ul>

        <h3>Writing Tests</h3>
        <p>Example test structure:</p>
        <pre><code>import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Component from './Component';

describe('Component', () => {
  it('should render correctly', () => {
    render(&lt;Component /&gt;);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });
});</code></pre>

        <h2 id="scripts">📜 Available Scripts</h2>
        <table>
            <thead>
                <tr>
                    <th>Script</th>
                    <th>Command</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>dev</strong></td>
                    <td><code>npm run dev</code></td>
                    <td>Start development server with HMR</td>
                </tr>
                <tr>
                    <td><strong>build</strong></td>
                    <td><code>npm run build</code></td>
                    <td>Create production build</td>
                </tr>
                <tr>
                    <td><strong>preview</strong></td>
                    <td><code>npm run preview</code></td>
                    <td>Preview production build locally</td>
                </tr>
                <tr>
                    <td><strong>lint</strong></td>
                    <td><code>npm run lint</code></td>
                    <td>Run ESLint to check code quality</td>
                </tr>
                <tr>
                    <td><strong>test</strong></td>
                    <td><code>npm test</code></td>
                    <td>Run test suite</td>
                </tr>
                <tr>
                    <td><strong>test:ui</strong></td>
                    <td><code>npm run test:ui</code></td>
                    <td>Run tests with Vitest UI</td>
                </tr>
                <tr>
                    <td><strong>test:coverage</strong></td>
                    <td><code>npm run test:coverage</code></td>
                    <td>Run tests with coverage report</td>
                </tr>
            </tbody>
        </table>

        <h2 id="deployment">🚀 Deployment</h2>
        <h3>Build for Production</h3>
        <pre><code>npm run build</code></pre>
        <p>This creates an optimized build in the <code>dist</code> directory.</p>

        <h3>Deployment Options</h3>
        <h4>Vercel</h4>
        <ol>
            <li>Install Vercel CLI: <code>npm i -g vercel</code></li>
            <li>Run <code>vercel</code> in the project directory</li>
            <li>Follow the prompts to deploy</li>
        </ol>

        <h4>Netlify</h4>
        <ol>
            <li>Build command: <code>npm run build</code></li>
            <li>Publish directory: <code>dist</code></li>
            <li>Add environment variables in Netlify dashboard</li>
        </ol>

        <h4>GitHub Pages</h4>
        <ol>
            <li>Install gh-pages: <code>npm install --save-dev gh-pages</code></li>
            <li>Add to package.json:
                <pre><code>"homepage": "https://yourusername.github.io/product-management-app",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}</code></pre>
            </li>
            <li>Run <code>npm run deploy</code></li>
        </ol>

        <div class="info-box">
            <strong>💡 Tip:</strong> Make sure to set your environment variables in your deployment platform's 
            configuration settings.
        </div>

        <h2 id="contributing">🤝 Contributing</h2>
        <p>Contributions are welcome! Please follow these steps:</p>
        <ol>
            <li>Fork the repository</li>
            <li>Create a feature branch: <code>git checkout -b feature/your-feature-name</code></li>
            <li>Make your changes and commit them: <code>git commit -m 'Add some feature'</code></li>
            <li>Push to the branch: <code>git push origin feature/your-feature-name</code></li>
            <li>Submit a pull request</li>
        </ol>

        <h3>Code Style Guidelines</h3>
        <ul>
            <li>Follow ESLint rules configured in the project</li>
            <li>Use meaningful variable and function names</li>
            <li>Add comments for complex logic</li>
            <li>Write tests for new features</li>
            <li>Ensure all tests pass before submitting PR</li>
        </ul>

        <h2>📝 License</h2>
        <p>This project is open source and available under the MIT License.</p>

        <h2>👨‍💻 Author</h2>
        <p>Developed with ❤️ for efficient product management.</p>

        <h2>🙏 Acknowledgments</h2>
        <ul>
            <li>React team for the amazing framework</li>
            <li>Redux Toolkit team for excellent state management tools</li>
            <li>Tailwind CSS for the utility-first CSS framework</li>
            <li>Vite team for the blazing-fast build tool</li>
            <li>FakeStoreAPI for providing test data</li>
        </ul>

        <div class="footer">
            <p>Last updated: 2024 | Product Management Application</p>
            <p>For issues and questions, please open an issue on GitHub.</p>
        </div>
    </div>
</body>
</html>
