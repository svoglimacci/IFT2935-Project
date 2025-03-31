import React, { JSX, ReactNode } from 'react';
import classes from './Header.module.css';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import NavLink from '../NavLink/NavLink';

export type HeaderProps = {
  children?: ReactNode;
};

const Header = (): JSX.Element => {
  return (
    <header className={classes.header}>
      <h1>IFT235 - Projet</h1>
      <nav className={classes.navList}>
        <NavLink to="/"> Home</NavLink>
        <NavLink to="/1"> Page 1</NavLink>
        <NavLink to="/2"> Page 2</NavLink>
        <NavLink to="/3"> Page 3</NavLink>
      </nav>
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
