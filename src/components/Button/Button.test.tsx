import { render, screen } from '@testing-library/react';
import React from 'react';
import Button, { ButtonProps } from './Button';

const renderComponent = ({ ...props }: Partial<ButtonProps> = {}) =>
  render(<Button {...props} />);

describe('Button', () => {
  it('should render', () => {
    renderComponent();

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('should apply active class when isActive is true', () => {
    renderComponent({ isActive: true });

    const button = screen.getByRole('button');
    expect(button).toHaveClass('active');
  });

  it('should not apply active class when isActive is false', () => {
    renderComponent({ isActive: false });

    const button = screen.getByRole('button');
    expect(button).not.toHaveClass('active');
  });
});
