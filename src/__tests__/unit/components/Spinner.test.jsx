import { screen } from '@testing-library/react';
import { render } from '@testing-library/react';
import Spinner from '../../../components/Spinner';

describe('Spinner', () => {
  it('should render with default props', () => {
    render(<Spinner />);

    const spinner = document.querySelector('.animate-spin');
    expect(spinner).toBeInTheDocument();
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should render with custom message', () => {
    const customMessage = 'Please wait...';
    render(<Spinner message={customMessage} />);

    expect(screen.getByText(customMessage)).toBeInTheDocument();
  });

  it('should render with small size', () => {
    render(<Spinner size="small" />);

    const spinner = document.querySelector('.w-6.h-6');
    expect(spinner).toBeInTheDocument();
  });

  it('should render with medium size', () => {
    render(<Spinner size="medium" />);

    const spinner = document.querySelector('.w-8.h-8');
    expect(spinner).toBeInTheDocument();
  });

  it('should render with large size (default)', () => {
    render(<Spinner size="large" />);

    const spinner = document.querySelector('.w-12.h-12');
    expect(spinner).toBeInTheDocument();
  });

  it('should not render message when message is empty string', () => {
    render(<Spinner message="" />);

    const message = screen.queryByText('Loading...');
    expect(message).not.toBeInTheDocument();
  });

  it('should have correct animation classes', () => {
    render(<Spinner />);

    const spinner = document.querySelector('.animate-spin');
    expect(spinner).toHaveClass('rounded-full');
    expect(spinner).toHaveClass('border-4');
  });
});

