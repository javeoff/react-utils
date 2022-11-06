import { Dispatch, SetStateAction, useState } from 'react';

type TUnknownState = Record<string ,unknown>;
type TResult = [TUnknownState, Dispatch<SetStateAction<TUnknownState>>];

/**
 * @example
 * const [state, setState] = useSetState({
 *   initialParam: 0,
 *   secondParam: 2,
 * });
 *
 * setState({
 *   initialParam: 1,
 * }) // { initialParam: 1, secondParam: 2 }
 * @param initialState initial object state
 * @returns
 * @param state - current object state which updates on mount like useState
 * @param setState - current consumer function, which batch the rerender
 */
export function useSetState<
  InitialState extends TUnknownState = TUnknownState
>(initialState: InitialState): TResult {
  const [state, setState] = useState<TUnknownState>(
    Object.assign({}, initialState)
  );

  const updateState = (partialState:
    Partial<TUnknownState> |
    ((state: TUnknownState) => TUnknownState)
  ) => {
    if (typeof partialState === 'object') {
      const newState = Object.assign(state, partialState);

      setState(newState);

      return newState
    }

    const stateConsumer = partialState;

    return stateConsumer(state)
  }

  return [state, updateState];
}
