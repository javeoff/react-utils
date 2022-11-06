import { useMemo } from 'react';

/**
 * @example
 * import { createMemo } from 'react-utils-jave';
 *
 * const fibonacci = n => {
 *   if (n === 0) return 0;
 *   if (n === 1) return 1;
 *   return fibonacci(n - 1) + fibonacci(n - 2);
 * };
 *
 * const useMemoFibonacci = createMemo(fibonacci);
 *
 * const Demo = () => {
 *   const result = useMemoFibonacci(10);
 *
 *   return (
 *     <div>
 *       fib(10) = {result}
 *     </div>
 *   );
 * };
 *
 * @param fn
 */
export const createMemo =
  <T extends (...args: any[]) => any>(fn: T) =>
    (...args: Parameters<T>) =>
      useMemo<ReturnType<T>>(() => fn(...args), args);
