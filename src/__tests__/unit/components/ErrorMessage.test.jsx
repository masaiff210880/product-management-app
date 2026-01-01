import { vi } from 'vitest';
import { screen, fireEvent } from '@testing-library/react';
import { render } from '@testing-library/react';
import ErrorMessage from '../../../components/ErrorMessage';

describe('ErrorMessage', () => {
  it('should render default error message', () => {
    render(<ErrorMessage />);

    expect(screen.getByText('Error')).toBeInTheDocument();
    expect(
      screen.getByText('Something went wrong. Please try again later.')
    ).toBeInTheDocument();
  });

  it('should render custom title and message', () => {
    const customTitle = 'Custom Error Title';
    const customMessage = 'Custom error message';

    render(<ErrorMessage title={customTitle} message={customMessage} />);

    expect(screen.getByText(customTitle)).toBeInTheDocument();
    expect(screen.getByText(customMessage)).toBeInTheDocument();
  });

  it('should render retry button when onRetry is provided', () => {
    const handleRetry = vi.fn();
    render(<ErrorMessage onRetry={handleRetry} />);

    const retryButton = screen.getByText('Retry');
    expect(retryButton).toBeInTheDocument();
  });

  it('should not render retry button when onRetry is not provided', () => {
    render(<ErrorMessage />);

    const retryButton = screen.queryByText('Retry');
    expect(retryButton).not.toBeInTheDocument();
  });

  it('should call onRetry when retry button is clicked', () => {
    const handleRetry = vi.fn();
    render(<ErrorMessage onRetry={handleRetry} />);

    const retryButton = screen.getByText('Retry');
    fireEvent.click(retryButton);

    expect(handleRetry).toHaveBeenCalledTimes(1);
  });

  it('should have correct styling classes', () => {
    render(<ErrorMessage />);

    // Find the container with bg-red-50 class
    const errorContainer = screen.getByText('Error').closest('.bg-red-50');
    expect(errorContainer).toBeInTheDocument();
  });
});

