import { useEffect, useRef } from 'react';

/**
 * Memoize data on every data remount
 * When component is unmounted, but
 * useEffect is triggered, data make exists itself
 *
 * @example
 * const ref = useProtectedRef(() => {
 *   setState(state);
 * })
 * @param data - some data to memoize on remount
 */
export const useProtectedRef = <Data>(data: Data) => {
  const savedRef = useRef<Data | null>(data);

  useEffect(() => {
    savedRef.current = data;
  }, [data]);

  return savedRef;
}
