import React, { createContext, useContext, useState, ReactNode } from 'react';
import { THEME } from '@/constants';

type ThemeContextType = {
  theme: THEME;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export type ThemeProviderProps = {
  children?: ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(THEME.LIGHT);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT,
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeProvider;
