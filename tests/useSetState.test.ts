import { useSetState } from '../src/hooks/state/useSetState';
import { renderHook } from '@testing-library/react-hooks';

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

  expect(state).toBe('object');
})
