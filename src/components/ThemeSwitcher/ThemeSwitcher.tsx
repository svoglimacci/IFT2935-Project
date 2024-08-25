import React, { JSX } from 'react';
import Button from '../Button/Button';
import { useTheme } from '@/providers/ThemeProvider';
import { THEME } from '@/constants';
import { IconMoon, IconSunFilled } from '@tabler/icons-react';

const ThemeSwitcher = (): JSX.Element => {
  const { theme, toggleTheme } = useTheme();
  document.body.dataset.theme = theme;

  return (
    <div>
      <Button
        onClick={toggleTheme}
        icon={theme === THEME.LIGHT ? <IconSunFilled /> : <IconMoon />}
      />
    </div>
  );
};

export default ThemeSwitcher;
