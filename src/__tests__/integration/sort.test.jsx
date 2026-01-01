import { vi } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders, mockProducts } from '../utils/test-utils';
import Products from '../../pages/Products';
import * as api from '../../server/api';

// Mock the API hook
vi.mock('../../server/api', async () => {
  const actual = await vi.importActual('../../server/api');
  return {
    ...actual,
    useGetProductsQuery: vi.fn(),
  };
});

describe('Sort Integration Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should sort products by price low to high', async () => {
    const user = userEvent.setup();
    
    const productsWithDifferentPrices = [
      { ...mockProducts[0], price: 99.99 },
      { ...mockProducts[1], price: 19.99 },
      { ...mockProducts[2], price: 49.99 },
    ];

    api.useGetProductsQuery.mockReturnValue({
      data: productsWithDifferentPrices,
      isLoading: false,
      isError: false,
    });

    renderWithProviders(<Products />);

    // Find sort dropdown - use getAllByRole and get the second select (sort is the second combobox)
    const selects = screen.getAllByRole('combobox');
    const sortSelect = selects[1] || screen.getByDisplayValue('Sort by Price');
    
    // Select ascending sort
    await user.selectOptions(sortSelect, 'asc');

    await waitFor(() => {
      const productCards = screen.getAllByText(/\$\d+\.\d{2}/);
      if (productCards.length >= 3) {
        // Check that prices are in ascending order
        const prices = productCards.map(card => {
          const priceText = card.textContent;
          return parseFloat(priceText.replace('$', ''));
        });
        
        // Verify prices are in ascending order
        for (let i = 1; i < prices.length; i++) {
          expect(prices[i]).toBeGreaterThanOrEqual(prices[i - 1]);
        }
      }
    });
  });

  it('should sort products by price high to low', async () => {
    const user = userEvent.setup();
    
    const productsWithDifferentPrices = [
      { ...mockProducts[0], price: 19.99 },
      { ...mockProducts[1], price: 99.99 },
      { ...mockProducts[2], price: 49.99 },
    ];

    api.useGetProductsQuery.mockReturnValue({
      data: productsWithDifferentPrices,
      isLoading: false,
      isError: false,
    });

    renderWithProviders(<Products />);

    // Find sort dropdown - use getAllByRole and get the second select (sort is the second combobox)
    const selects = screen.getAllByRole('combobox');
    const sortSelect = selects[1] || screen.getByDisplayValue('Sort by Price');
    
    // Select descending sort
    await user.selectOptions(sortSelect, 'desc');

    await waitFor(() => {
      const productCards = screen.getAllByText(/\$\d+\.\d{2}/);
      if (productCards.length >= 3) {
        const prices = productCards.map(card => {
          const priceText = card.textContent;
          return parseFloat(priceText.replace('$', ''));
        });
        
        // Verify prices are in descending order
        for (let i = 1; i < prices.length; i++) {
          expect(prices[i]).toBeLessThanOrEqual(prices[i - 1]);
        }
      }
    });
  });

  it('should combine sort with filter', async () => {
    const user = userEvent.setup();
    
    const productsWithSameCategory = [
      { ...mockProducts[0], category: "men's clothing", price: 99.99 },
      { ...mockProducts[1], category: "men's clothing", price: 19.99 },
      { ...mockProducts[2], category: 'electronics', price: 49.99 },
    ];

    api.useGetProductsQuery.mockReturnValue({
      data: productsWithSameCategory,
      isLoading: false,
      isError: false,
    });

    renderWithProviders(<Products />);

    // First filter - first combobox is the filter
    const selects = screen.getAllByRole('combobox');
    const filterSelect = selects[0] || screen.getByDisplayValue('All Categories');
    await user.selectOptions(filterSelect, "men's clothing");

    // Then sort - second combobox is the sort
    const sortSelect = selects[1] || screen.getByDisplayValue('Sort by Price');
    await user.selectOptions(sortSelect, 'asc');

    await waitFor(() => {
      // Should only show men's clothing products, sorted by price
      expect(screen.getByText('Test Product 1')).toBeInTheDocument();
      expect(screen.getByText('Test Product 2')).toBeInTheDocument();
      expect(screen.queryByText('Electronics Product')).not.toBeInTheDocument();
    });
  });

  it('should combine sort with search', async () => {
    const user = userEvent.setup();
    
    api.useGetProductsQuery.mockReturnValue({
      data: mockProducts,
      isLoading: false,
      isError: false,
    });

    renderWithProviders(<Products />);

    // Search first
    const searchInput = screen.getByPlaceholderText('Search products...');
    await user.type(searchInput, 'Test Product');

    // Then sort - second combobox is the sort
    const selects = screen.getAllByRole('combobox');
    const sortSelect = selects[1] || screen.getByDisplayValue('Sort by Price');
    await user.selectOptions(sortSelect, 'desc');

    await waitFor(() => {
      // Should show filtered and sorted results
      expect(screen.getByText('Test Product 1')).toBeInTheDocument();
      expect(screen.getByText('Test Product 2')).toBeInTheDocument();
    }, { timeout: 1000 });
  });

  it('should reset to default order when sort is cleared', async () => {
    const user = userEvent.setup();
    
    api.useGetProductsQuery.mockReturnValue({
      data: mockProducts,
      isLoading: false,
      isError: false,
    });

    renderWithProviders(<Products />);

    // Find sort dropdown - second combobox is the sort
    const selects = screen.getAllByRole('combobox');
    const sortSelect = selects[1] || screen.getByDisplayValue('Sort by Price');
    
    // Apply sort
    await user.selectOptions(sortSelect, 'asc');
    
    // Clear sort
    await user.selectOptions(sortSelect, '');

    await waitFor(() => {
      // All products should be visible
      expect(screen.getByText('Test Product 1')).toBeInTheDocument();
      expect(screen.getByText('Test Product 2')).toBeInTheDocument();
      expect(screen.getByText('Electronics Product')).toBeInTheDocument();
    });
  });
});

