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
});
