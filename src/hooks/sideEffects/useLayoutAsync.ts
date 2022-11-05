import { DependencyList, useLayoutEffect } from 'react';

/**
 * @example
 * useLayoutAsync(async () => {
 *   await Promise.resolve();
 * })
 * Provide asynchronous callback to useEffect
 * @param callback async callback
 * @param args arguments of useEffect
 */
export const useLayoutAsync = (
  effect: () => Promise<void | VoidFunction>,
  deps: DependencyList,
): void => {
  useLayoutEffect(() => {
    let onUnmount: VoidFunction | undefined;

    (async () => {
      onUnmount = (await effect()) || undefined;
    })();

    return () => {
      if (onUnmount) {
        onUnmount();
      }
    };
  }, deps);
};
