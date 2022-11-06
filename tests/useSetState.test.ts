import { renderHook } from '@testing-library/react-hooks';
import { useSetState } from '../src';

test('Empty object hook', () => {
  const { result } = renderHook(() => {
    const [state, setState] = useSetState({});

    return {
      state,
      setState,
    }
  })

  const {
    state, setState
  } = result.current;

  type TState = Record<string, unknown>;

  expect(typeof state).toBe('object');
  expect(Object.values(state as TState).length).toBe(0);
})
