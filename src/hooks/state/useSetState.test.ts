import { act, renderHook } from '@testing-library/react-hooks';
import { useSetState } from '../../index';

const initializeHook = (initialState: Record<string, unknown> = {}) => {
  return renderHook(() => {
    const [state, setState] = useSetState(initialState);

    return {
      state,
      setState,
    }
  })
}

const useHook = (initialState: Record<string, unknown> = {}) => {
  const { result } = initializeHook(initialState);
  return result.current;
}

describe('useSetState', () => {
  test('should be empty object state', () => {
    const { state, setState } = useHook()

    type TState = Record<string, unknown>;

    expect(typeof state).toBe('object');
    expect(Object.values(state as TState).length).toBe(0);
  })

  test('should init state and setter', () => {
    const { state, setState } = useHook({
      x: 2,
    })

    expect(state).toEqual({ x: 2 })
    expect(setState).toBeInstanceOf(Function);
  })

  test('should update state', () => {
    const { state, setState } = useHook({
      x: 2,
    })

    act(() => setState({ x: 3 }))

    expect(state).toEqual({ x: 3 })
  })

  test('should merge state', () => {
    const { state, setState } = useHook({
      x: 2,
    })

    act(() => setState({ x: 3, y: 1 }))

    expect(state).toEqual({ x: 3, y: 1 })
  })

  test('should expand state', () => {
    const { state, setState } = useHook({
      x: 2,
    })

    act(() => setState({ y: 3 }))

    expect(state).toEqual({ x: 2, y: 3 })
  })

  test('should return memoized setState', () => {
    const { result, rerender } = initializeHook({
      flag: true,
    })
    const { setState: setStateBefore } = result.current;

    act(() => setStateBefore({
      flag: false,
    }))
    rerender()
    const { setState: setStateAfter } = result.current;

    expect(setStateBefore).toEqual(setStateBefore)
  })
})
