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

describe('Filter Integration Tests', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should filter products by category', async () => {
    const user = userEvent.setup();
    
    api.useGetProductsQuery.mockReturnValue({
      data: mockProducts,
      isLoading: false,
      isError: false,
    });

    renderWithProviders(<Products />);

    // Find filter dropdown - first combobox is the filter
    const selects = screen.getAllByRole('combobox');
    const filterSelect = selects[0] || screen.getByDisplayValue('All Categories');
    
    // Select a category
    await user.selectOptions(filterSelect, "men's clothing");

    await waitFor(() => {
      expect(screen.getByText('Test Product 1')).toBeInTheDocument();
      expect(screen.queryByText('Test Product 2')).not.toBeInTheDocument();
      expect(screen.queryByText('Electronics Product')).not.toBeInTheDocument();
    });
  });

  it('should show all products when "All Categories" is selected', async () => {
    const user = userEvent.setup();
    
    api.useGetProductsQuery.mockReturnValue({
      data: mockProducts,
      isLoading: false,
      isError: false,
    });

    renderWithProviders(<Products />);

    // First combobox is the filter
    const selects = screen.getAllByRole('combobox');
    const filterSelect = selects[0] || screen.getByDisplayValue('All Categories');
    
    // First filter by a category
    await user.selectOptions(filterSelect, "women's clothing");

    await waitFor(() => {
      expect(screen.getByText('Test Product 2')).toBeInTheDocument();
    });

    // Then select "All Categories"
    await user.selectOptions(filterSelect, '');

    await waitFor(() => {
      expect(screen.getByText('Test Product 1')).toBeInTheDocument();
      expect(screen.getByText('Test Product 2')).toBeInTheDocument();
      expect(screen.getByText('Electronics Product')).toBeInTheDocument();
    });
  });

  it('should filter by multiple categories correctly', async () => {
    const user = userEvent.setup();
    
    const moreProducts = [
      ...mockProducts,
      {
        id: 4,
        title: 'Another Men Product',
        price: 39.99,
        description: 'Another men product',
        category: "men's clothing",
        image: 'https://example.com/image4.jpg',
        rating: { rate: 4.2, count: 75 },
      },
    ];

    api.useGetProductsQuery.mockReturnValue({
      data: moreProducts,
      isLoading: false,
      isError: false,
    });

    renderWithProviders(<Products />);

    // First combobox is the filter
    const selects = screen.getAllByRole('combobox');
    const filterSelect = selects[0] || screen.getByDisplayValue('All Categories');
    
    await user.selectOptions(filterSelect, "men's clothing");

    await waitFor(() => {
      expect(screen.getByText('Test Product 1')).toBeInTheDocument();
      expect(screen.getByText('Another Men Product')).toBeInTheDocument();
      expect(screen.queryByText('Test Product 2')).not.toBeInTheDocument();
    });
  });

  it('should combine filter with search', async () => {
    const user = userEvent.setup();
    
    api.useGetProductsQuery.mockReturnValue({
      data: mockProducts,
      isLoading: false,
      isError: false,
    });

    renderWithProviders(<Products />);

    // First apply filter - first combobox is the filter
    const selects = screen.getAllByRole('combobox');
    const filterSelect = selects[0] || screen.getByDisplayValue('All Categories');
    await user.selectOptions(filterSelect, "men's clothing");

    // Then search
    const searchInput = screen.getByPlaceholderText('Search products...');
    await user.type(searchInput, 'Test Product 1');

    await waitFor(() => {
      expect(screen.getByText('Test Product 1')).toBeInTheDocument();
      expect(screen.queryByText('Test Product 2')).not.toBeInTheDocument();
    }, { timeout: 1000 });
  });

  it('should be case-insensitive when filtering', async () => {
    const user = userEvent.setup();
    
    const productsWithMixedCase = [
      {
        ...mockProducts[0],
        category: "Men's Clothing",
      },
    ];

    api.useGetProductsQuery.mockReturnValue({
      data: productsWithMixedCase,
      isLoading: false,
      isError: false,
    });

    renderWithProviders(<Products />);

    // First combobox is the filter
    const selects = screen.getAllByRole('combobox');
    const filterSelect = selects[0] || screen.getByDisplayValue('All Categories');
    
    // Select lowercase category
    await user.selectOptions(filterSelect, "men's clothing");

    await waitFor(() => {
      expect(screen.getByText('Test Product 1')).toBeInTheDocument();
    });
  });
});

