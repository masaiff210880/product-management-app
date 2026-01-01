import { vi } from 'vitest';
import { screen, fireEvent, waitFor } from '@testing-library/react';
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

describe('Search Integration Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should filter products by search term in title', async () => {
    const user = userEvent.setup();
    
    // Mock API response
    api.useGetProductsQuery.mockReturnValue({
      data: mockProducts,
      isLoading: false,
      isError: false,
    });

    renderWithProviders(<Products />);

    // Find search input
    const searchInput = screen.getByPlaceholderText('Search products...');
    expect(searchInput).toBeInTheDocument();

    // Type search term
    await user.type(searchInput, 'Test Product 1');

    // Wait for debounce and filtered results
    await waitFor(() => {
      expect(screen.getByText('Test Product 1')).toBeInTheDocument();
      expect(screen.queryByText('Test Product 2')).not.toBeInTheDocument();
    }, { timeout: 1000 });
  });

  it('should filter products by search term in description', async () => {
    const user = userEvent.setup();
    
    api.useGetProductsQuery.mockReturnValue({
      data: mockProducts,
      isLoading: false,
      isError: false,
    });

    renderWithProviders(<Products />);

    const searchInput = screen.getByPlaceholderText('Search products...');
    await user.type(searchInput, 'Another test');

    await waitFor(() => {
      expect(screen.getByText('Test Product 2')).toBeInTheDocument();
      expect(screen.queryByText('Test Product 1')).not.toBeInTheDocument();
    }, { timeout: 1000 });
  });

  it('should filter products by search term in category', async () => {
    const user = userEvent.setup();
    
    api.useGetProductsQuery.mockReturnValue({
      data: mockProducts,
      isLoading: false,
      isError: false,
    });

    renderWithProviders(<Products />);

    const searchInput = screen.getByPlaceholderText('Search products...');
    await user.type(searchInput, 'electronics');

    await waitFor(() => {
      expect(screen.getByText('Electronics Product')).toBeInTheDocument();
      expect(screen.queryByText('Test Product 1')).not.toBeInTheDocument();
      expect(screen.queryByText('Test Product 2')).not.toBeInTheDocument();
    }, { timeout: 1000 });
  });

  it('should show "No products found" when search has no matches', async () => {
    const user = userEvent.setup();
    
    api.useGetProductsQuery.mockReturnValue({
      data: mockProducts,
      isLoading: false,
      isError: false,
    });

    renderWithProviders(<Products />);

    const searchInput = screen.getByPlaceholderText('Search products...');
    await user.type(searchInput, 'NonExistentProduct');

    await waitFor(() => {
      expect(screen.getByText('No products found matching your search.')).toBeInTheDocument();
    }, { timeout: 1000 });
  });

  it('should clear search when clear button is clicked', async () => {
    const user = userEvent.setup();
    
    api.useGetProductsQuery.mockReturnValue({
      data: mockProducts,
      isLoading: false,
      isError: false,
    });

    renderWithProviders(<Products />);

    const searchInput = screen.getByPlaceholderText('Search products...');
    await user.type(searchInput, 'Test');

    // Wait for search to apply
    await waitFor(() => {
      expect(searchInput.value).toBe('Test');
    });

    // Find and click clear button
    const clearButton = screen.getByRole('button', { hidden: true });
    fireEvent.click(clearButton);

    // Wait for search to clear
    await waitFor(() => {
      expect(searchInput.value).toBe('');
      // All products should be visible again
      expect(screen.getByText('Test Product 1')).toBeInTheDocument();
      expect(screen.getByText('Test Product 2')).toBeInTheDocument();
    });
  });

  it('should be case-insensitive when searching', async () => {
    const user = userEvent.setup();
    
    api.useGetProductsQuery.mockReturnValue({
      data: mockProducts,
      isLoading: false,
      isError: false,
    });

    renderWithProviders(<Products />);

    const searchInput = screen.getByPlaceholderText('Search products...');
    await user.type(searchInput, 'ELECTRONICS');

    await waitFor(() => {
      expect(screen.getByText('Electronics Product')).toBeInTheDocument();
    }, { timeout: 1000 });
  });

  it('should debounce search input', async () => {
    const user = userEvent.setup();
    
    api.useGetProductsQuery.mockReturnValue({
      data: mockProducts,
      isLoading: false,
      isError: false,
    });

    renderWithProviders(<Products />);

    const searchInput = screen.getByPlaceholderText('Search products...');
    
    // Type quickly
    await user.type(searchInput, 'Test', { delay: 50 });

    // All products should still be visible immediately
    expect(screen.getByText('Test Product 1')).toBeInTheDocument();
    expect(screen.getByText('Test Product 2')).toBeInTheDocument();

    // After debounce delay, filtered results should appear
    await waitFor(() => {
      const product1 = screen.queryByText('Test Product 1');
      const product2 = screen.queryByText('Test Product 2');
      expect(product1 || product2).toBeInTheDocument();
    }, { timeout: 1000 });
  });
});

