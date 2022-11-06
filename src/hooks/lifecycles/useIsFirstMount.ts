import { DependencyList, useEffect, useRef } from 'react';

export const useIsFirstMount = (deps?: DependencyList) => {
  const isFirstMount = useRef<boolean>(true);

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
    }
  }, deps || [])

  return isFirstMount;
};
