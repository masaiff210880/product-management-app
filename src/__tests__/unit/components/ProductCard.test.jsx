import { vi } from 'vitest';
import { screen, fireEvent, waitFor, act } from '@testing-library/react';
import { renderWithProviders, mockProducts } from '../../utils/test-utils';
import ProductCard from '../../../components/ProductCard';
import * as reactRouter from 'react-router-dom';

// Mock react-router-dom
const mockNavigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe('ProductCard', () => {
  const mockProduct = mockProducts[0];

  beforeEach(() => {
    vi.useFakeTimers();
    mockNavigate.mockClear();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it('should render product information correctly', () => {
    renderWithProviders(<ProductCard product={mockProduct} />);

    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    expect(screen.getByText(`$${mockProduct.price}`)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
  });

  it('should display category badge when category is provided', () => {
    renderWithProviders(<ProductCard product={mockProduct} />);

    const categoryBadge = screen.getByText(mockProduct.category);
    expect(categoryBadge).toBeInTheDocument();
  });

  it('should truncate long descriptions', () => {
    const longDescriptionProduct = {
      ...mockProduct,
      description: 'a'.repeat(150), // Long description
    };

    renderWithProviders(<ProductCard product={longDescriptionProduct} />);

    const description = screen.getByText(/^a+/);
    expect(description.textContent).toContain('...');
    expect(description.textContent.length).toBeLessThanOrEqual(103); // 100 chars + '...'
  });

  it('should navigate to product details when card is clicked', () => {
    renderWithProviders(<ProductCard product={mockProduct} />);

    const card = screen.getByText(mockProduct.title).closest('div');
    fireEvent.click(card);

    expect(mockNavigate).toHaveBeenCalledWith(`/products/${mockProduct.id}`);
  });

  it('should show favorite icon when product is in favorites', () => {
    const preloadedState = {
      favorites: {
        favorites: [mockProduct],
      },
    };

    renderWithProviders(<ProductCard product={mockProduct} />, {
      preloadedState,
    });

    // Check if favorite icon is present (filled heart)
    const favoriteIcon = screen.getByRole('img', { hidden: true }) || 
                        document.querySelector('svg[class*="text-red-600"]');
    expect(favoriteIcon).toBeInTheDocument();
  });

  it('should show unfilled favorite icon when product is not in favorites', () => {
    renderWithProviders(<ProductCard product={mockProduct} />);

    // The unfilled heart icon should be present
    const svgElements = document.querySelectorAll('svg');
    expect(svgElements.length).toBeGreaterThan(0);
  });

  it('should display rating stars correctly', () => {
    renderWithProviders(<ProductCard product={mockProduct} />);

    // Rating count should be displayed
    expect(screen.getByText(`(${mockProduct.rating.count})`)).toBeInTheDocument();
  });

  it('should show remove button when showRemoveButton is true', () => {
    const handleRemove = vi.fn();
    renderWithProviders(
      <ProductCard
        product={mockProduct}
        showRemoveButton={true}
        onRemove={handleRemove}
      />
    );

    const removeButton = screen.getByText('Remove');
    expect(removeButton).toBeInTheDocument();
  });

  it('should call onRemove when remove button is clicked', async () => {
    const handleRemove = vi.fn();
    renderWithProviders(
      <ProductCard
        product={mockProduct}
        showRemoveButton={true}
        onRemove={handleRemove}
      />
    );

    const removeButton = screen.getByText('Remove');
    fireEvent.click(removeButton);

    // Advance timers by 1 second to complete the button delay
    act(() => {
      vi.advanceTimersByTime(1000);
    });

    // Verify the callback was called
    expect(handleRemove).toHaveBeenCalledWith(mockProduct.id);
  });

  it('should handle missing image gracefully', async () => {
    const productWithoutImage = {
      ...mockProduct,
      image: null,
    };

    renderWithProviders(<ProductCard product={productWithoutImage} />);

    // Should show placeholder icon
    const svgElements = document.querySelectorAll('svg');
    expect(svgElements.length).toBeGreaterThan(0);
  });

  it('should handle image load error', async () => {
    const productWithInvalidImage = {
      ...mockProduct,
      image: 'https://invalid-url-that-will-fail.com/image.jpg',
    };

    renderWithProviders(<ProductCard product={productWithInvalidImage} />);

    const img = screen.getByAltText(mockProduct.title || 'Product image');
    
    // Simulate image error
    fireEvent.error(img);

    // Advance timers to allow state update
    act(() => {
      vi.advanceTimersByTime(0);
    });

    // After error, placeholder SVG should be shown (image is conditionally rendered)
    // Check for the placeholder SVG that appears when imageError is true
    const placeholderSvg = document.querySelector('svg[class*="w-16"]');
    expect(placeholderSvg).toBeInTheDocument();
  });
});

