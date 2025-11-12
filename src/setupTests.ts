/**
 * Configures shared testing utilities for Vitest and Testing Library.
 */
import '@testing-library/jest-dom/vitest';

/**
 * Provides a minimal IntersectionObserver shim for Framer Motion during tests.
 */
class TestIntersectionObserver implements IntersectionObserver {
  readonly root: Element | Document | null = null;

  readonly rootMargin: string = '0px';

  readonly thresholds: readonly number[] = [0];

  /**
   * Creates a no-op observer implementation for testing environments.
   */
  constructor() {}

  /**
   * Disconnects the observer (no-op).
   */
  disconnect(): void {}

  /**
   * Retrieves queued intersection entries (always empty).
   */
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }

  /**
   * Observes the provided target element (no-op).
   */
  observe(): void {}

  /**
   * Stops observing the provided target element (no-op).
   */
  unobserve(): void {}
}

if (typeof window !== 'undefined' && !('IntersectionObserver' in window)) {
  (
    window as unknown as {
      IntersectionObserver: typeof TestIntersectionObserver;
    }
  ).IntersectionObserver = TestIntersectionObserver;
}

if (typeof window !== 'undefined' && typeof window.matchMedia !== 'function') {
  window.matchMedia = (query: string): MediaQueryList => ({
    media: query,
    matches: query.includes('prefers-reduced-motion'),
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  });
}
