import React, { JSX, ReactNode } from 'react';
import classes from './Header.module.css';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
export type HeaderProps = {
  children?: ReactNode;
};

const Header = (): JSX.Element => {
  return (
    <header className={classes.header}>
      <h1>IFT235 - Projet</h1>
      <h2>Bibliothèque</h2>
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
