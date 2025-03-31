import { render, screen } from '@testing-library/react';
import React from 'react';
import Shell, { ShellProps } from './Shell';
import { TestWrapperComponent } from '@/tests/setupTests';

const renderComponent = ({ ...props }: Partial<ShellProps> = {}) =>
  render(
    <TestWrapperComponent>
      <Shell {...props} />
    </TestWrapperComponent>,
  );

describe('Shell', () => {
  it('should render', () => {
    renderComponent({ children: <div>Test Children</div> });

    const children = screen.getByText('Test Children');

    expect(children).toBeInTheDocument();
  });
});
