import { DependencyList, useEffect } from 'react';

/**
 * @example
 * useAsync(async () => {
 *   await Promise.resolve();
 * })
 * Provide asynchronous callback to useEffect
 * @param callback async callback
 * @param args arguments of useEffect
 */
export function useAsync(
  effect: () => Promise<void | VoidFunction>,
  deps: DependencyList,
): void {
  useEffect(() => {
    let onUnmount: VoidFunction | undefined;

    (async () => {
      onUnmount = (await effect()) || undefined;
    })();

    return () => {
      if (onUnmount) {
        onUnmount();
      }
    }
  }, deps);
}
