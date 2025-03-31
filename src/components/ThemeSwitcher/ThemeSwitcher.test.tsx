import React from 'react';
import { TestWrapperComponent } from '@/tests/setupTests';
import ThemeSwitcher from './ThemeSwitcher';
import { render, screen } from '@testing-library/react';

const renderComponent = () =>
  render(
    <TestWrapperComponent>
      <ThemeSwitcher />
    </TestWrapperComponent>,
  );

describe('ThemeSwitcher', () => {
  it('should render', () => {
    renderComponent();

    const themeSwitcher = screen.getByRole('button');
    expect(themeSwitcher).toBeInTheDocument();
  });
});
