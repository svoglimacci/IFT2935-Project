import React, { JSX } from 'react';
import classes from './Button.module.css';

export type ButtonProps = {
  children?: JSX.Element | string;
  onClick?: () => void;
  icon?: JSX.Element;
  variant?: 'icon' | 'text' | 'primary' | 'secondary';
  isActive?: boolean; // New prop
};

const Button = ({
  children,
  onClick,
  icon,
  variant,
  isActive,
}: ButtonProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={`${classes.button} ${classes[variant || 'primary']} ${
        isActive ? classes.active : ''
      }`}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
