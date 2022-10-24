import React, { createContext, PropsWithChildren } from 'react';
import { useColorScheme } from 'react-native';
import { DarkTheme } from './DarkTheme';
import { InitTheme } from './InitTheme';
import { LightTheme } from './LightTheme';
import { ThemeType } from './types';

export const ThemeContext = createContext<ThemeType>(InitTheme);

export const ThemeProvider: React.FC<PropsWithChildren> = ({
  children,
}): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ThemeContext.Provider value={isDarkMode ? DarkTheme : LightTheme}>
      {children}
    </ThemeContext.Provider>
  );
};
