import { vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import useDebounce from '../../../hooks/useDebounce';

describe('useDebounce', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  it('should return initial value immediately', () => {
    const { result } = renderHook(() => useDebounce('initial', 500));
    expect(result.current).toBe('initial');
  });

  it('should debounce value changes', async () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: 'initial', delay: 500 },
      }
    );

    expect(result.current).toBe('initial');

    // Change value
    rerender({ value: 'updated', delay: 500 });

    // Value should not change immediately
    expect(result.current).toBe('initial');

    // Fast-forward time by 500ms and flush React updates
    act(() => {
      vi.advanceTimersByTime(500);
    });

    // Value should be updated after delay
    expect(result.current).toBe('updated');
  });

  it('should use custom delay', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: 'initial', delay: 1000 },
      }
    );

    rerender({ value: 'updated', delay: 1000 });

    // Value should not change after 500ms
    vi.advanceTimersByTime(500);
    expect(result.current).toBe('initial');

    // Value should change after 1000ms
    act(() => {
      vi.advanceTimersByTime(500);
    });
    expect(result.current).toBe('updated');
  });

  it('should cancel previous timeout when value changes quickly', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: 'initial', delay: 500 },
      }
    );

    // Change value multiple times quickly
    rerender({ value: 'first', delay: 500 });
    vi.advanceTimersByTime(200);

    rerender({ value: 'second', delay: 500 });
    vi.advanceTimersByTime(200);

    rerender({ value: 'third', delay: 500 });
    vi.advanceTimersByTime(200);

    // Value should still be initial
    expect(result.current).toBe('initial');

    // After full delay, should be the last value
    act(() => {
      vi.advanceTimersByTime(300);
    });
    expect(result.current).toBe('third');
  });

  it('should handle delay change', () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: 'initial', delay: 500 },
      }
    );

    rerender({ value: 'updated', delay: 1000 });

    // After 500ms with new delay, should not update
    vi.advanceTimersByTime(500);
    expect(result.current).toBe('initial');

    // After full 1000ms, should update
    act(() => {
      vi.advanceTimersByTime(500);
    });
    expect(result.current).toBe('updated');
  });

  it('should cleanup timeout on unmount', () => {
    const { result, rerender, unmount } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: 'initial', delay: 500 },
      }
    );

    rerender({ value: 'updated', delay: 500 });

    // Unmount before timeout completes
    unmount();

    // Fast-forward time
    vi.advanceTimersByTime(500);

    // Should not cause errors
    expect(result.current).toBe('initial');
  });
});

