import { useProtectedRef } from '../sideEffects';
import { Dispatch, RefObject, useEffect } from 'react';

type TListenerEvent = MouseEvent & {
  target: Element;
};

export const useClickOutside = (
  ref: RefObject<HTMLElement>,
  callback: Dispatch<MouseEvent>
): void => {
  const protectedCallbackRef = useProtectedRef(callback);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!ref?.current) {
        return;
      }

      if (
        protectedCallbackRef.current &&
        !ref.current.contains((event as TListenerEvent).target)
      ) {
        protectedCallbackRef.current(event);
      }
    }

    document.addEventListener('click', onClick);
    document.addEventListener('touchstart', onClick as unknown as Dispatch<TouchEvent>);

    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('touchstart', onClick as unknown as Dispatch<TouchEvent>);
    };
  }, [callback])
}
