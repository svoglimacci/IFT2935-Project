import React, { JSX, ReactNode } from 'react';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import './Shell.module.css';
export type ShellProps = {
  children?: ReactNode;
};
const Shell = ({ children }: ShellProps): JSX.Element => {
  return (
    <div>
      <ThemeSwitcher />
      {children}
    </div>
  );
};

export default Shell;
