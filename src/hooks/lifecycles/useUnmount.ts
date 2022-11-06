import { useEffect } from 'react';

export const useUnmount = (callback?: VoidFunction | undefined): void => {
  useEffect(() => {
    return callback;
  }, []);
}
