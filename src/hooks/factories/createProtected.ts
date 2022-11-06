import { useEffect, useState } from 'react';

/**
 * use protected param
 * @param initialItem initial param
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
