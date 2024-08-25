import React, { JSX } from 'react';
import classes from './Button.module.css';

export type ButtonProps = {
  children?: JSX.Element | string;
  onClick?: () => void;
  icon?: JSX.Element;
};

const Button = ({ children, onClick, icon }: ButtonProps): JSX.Element => {
  return (
    <button onClick={onClick} className={classes.button}>
      {icon}
      {children}
    </button>
  );
};

export default Button;
