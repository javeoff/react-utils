import { DependencyList, useRef } from 'react';
import { useLayoutAsync } from '../sideEffects/useLayoutAsync';

interface ICallbackResult {
  onMount(): void;
  onUnmount(): void;
  onRemount(): void;
}

/**
 * useMount with side effects
 * @param callback
 * @param deps
 */
export const useMountEffect = (
  callback: () => Partial<ICallbackResult> | undefined,
  deps: DependencyList,
): void => {
  const isFirstMount = useRef(true);
  const isMount = useRef(false);

  useLayoutAsync(async () => {
    const result = callback();

    if (!result) {
      return;
    }

    if (result.onMount && isFirstMount.current) {
      isFirstMount.current = false;
      result.onMount();
    }

    isMount.current = true;

    return () => {
      isMount.current = false;
      setImmediate(() => {
        if (isMount.current) {
          if (result.onRemount) {
            result.onRemount();
          }
          return;
        }

        if (result?.onUnmount) {
          result.onUnmount();
        }
      });
    };
  }, deps);
};
