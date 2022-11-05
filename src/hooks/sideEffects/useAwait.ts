import { Dispatch, SetStateAction, useState } from 'react';

import { useAsync } from './useAsync';

type IResult<Result> = [
  Result | undefined,
  Dispatch<SetStateAction<Result | undefined>>
];

/**
 * @example
 * const [state, setState] = useAwait(async () => {
 *   await new Promise((resolve) => {
 *     resolve()
 *   })
 * }, [])
 * @param fn callback function that accepting an asynchronous function
 * @param args rerender requirements, which batch the rerender
 * @returns {
 *   @param data current object state which updates on mount like useState
 *   @param setData current consumer function, which batch the rerender
 * };
 */
export function useAwait<Result>(
  fn: Promise<Result | null>,
  args: unknown[],
): IResult<Result> {
  const [data, setData] = useState<Result>();

  useAsync(async () => {
    fn.then((result) => {
      setData(result || undefined);
    });
  }, [...args]);

  return [ data, setData ];
}
