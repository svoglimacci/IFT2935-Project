import React from 'react';
import { render, screen } from '@testing-library/react';
import ThemeProvider, { ThemeProviderProps } from './ThemeProvider';

const renderComponent = ({ ...props }: Partial<ThemeProviderProps> = {}) =>
  render(<ThemeProvider {...props} />);

describe('ThemeProvider', () => {
  it('should render', () => {
    renderComponent({ children: <div>Test Children</div> });

    const children = screen.getByText('Test Children');

    expect(children).toBeInTheDocument();
  });
});
