import React, { JSX } from 'react';
import classes from './NavLink.module.css';
import { NavLink, NavLinkProps } from 'react-router';

export type CustomNavLinkProps = NavLinkProps & {
  children?: JSX.Element | string;
};
const CustomNavLink = ({
  children,
  ...props
}: CustomNavLinkProps): JSX.Element => {
  return (
    <NavLink
      {...props}
      className={({ isActive }) =>
        isActive ? `${classes.navLink} ${classes.active}` : classes.navLink
      }
    >
      {children}
    </NavLink>
  );
};
export default CustomNavLink;
