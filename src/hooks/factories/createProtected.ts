import { useEffect, useState } from 'react';

/**
 * Factory of hooks, which replace undefined values to application initial value
 *
 * If initial value is undefined, useProtected hook replace undefined
 * value to initial
 *
 * @example
 * const useProtected = createProtected('initial value');
 *
 * const App = ({ initialValue }) => {
 *   const protectedValue = useProtected(initialValue);
 *
 *   return protectedValue;
 * }
 * @param initialItem initial required param
 * @param item initial optional param inside hook component
 */
export const createProtected = <Item>(initialItem: Item) => (item?: Item | undefined): Item => {
  const [state, setState] = useState<Item>(item || initialItem);

  useEffect(() => {
    if (!item) {
      setState(initialItem);
      return;
    }
    setState(item);
  }, [item]);

  return state;
};
