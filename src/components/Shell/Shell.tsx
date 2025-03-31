import React, { JSX, ReactNode } from 'react';
import classes from './Shell.module.css';
import Header from '../Header/Header';
export type ShellProps = {
  children?: ReactNode;
};
const Shell = ({ children }: ShellProps): JSX.Element => {
  return (
    <div className={classes.shell}>
      <Header />
      {children}
    </div>
  );
};

export default Shell;
