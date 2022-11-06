import { render } from '@testing-library/react';
import React, { ReactElement, useRef } from 'react';
import '@testing-library/jest-dom/extend-expect';
import { useClickOutside } from '../src';

const App = ({ handler }: { handler: VoidFunction }): ReactElement => {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, handler)

  return (
    <div>
      parent
      <div ref={ref}>
        child
      </div>
    </div>
  );
}

describe('useClickOutside', () => {
  test('should render', () => {
    const handler = jest.fn();
    const { getByText } = render(<App handler={handler} />);

    expect(getByText('child')).toBeDefined();
  })

  test('should handle click outside', () => {
    const handler = jest.fn();
    const { getByText } = render(<App handler={handler} />);

    getByText('parent').click();
    expect(handler).toBeCalled();
  });

  test('should not handle on click child', () => {
    const handler = jest.fn();
    const { getByText } = render(<App handler={handler} />);

    getByText('child').click();
    expect(handler).not.toBeCalled();
  });
})

