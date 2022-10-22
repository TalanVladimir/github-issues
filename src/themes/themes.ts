import { ThemeType } from './types';

export const Theme = {
  colors: {
    primaryColor: '#1976d2',
    primaryLightColor: '#63a4ff',
    primaryDarkColor: '#004ba0',
    secondaryColor: '#43a047',
    secondaryLightColor: '#76d275',
    secondaryDarkColor: '#00701a',
    primaryTextColor: '#ffffff',
    secondaryTextColor: '#000000',
  },
};

export const InitTheme: ThemeType = {
  theme: '',
  isDark: false,
  colors: {
    primaryColor: '',
    primaryLightColor: '',
    primaryDarkColor: '',
    secondaryColor: '',
    secondaryLightColor: '',
    secondaryDarkColor: '',
    primaryTextColor: '',
    secondaryTextColor: '',
  },
  setTheme: () => {},
};

export const LightTheme: ThemeType = {
  theme: '',
  isDark: false,
  colors: {
    primaryColor: '#1976d2',
    primaryLightColor: '#63a4ff',
    primaryDarkColor: '#004ba0',
    secondaryColor: '#43a047',
    secondaryLightColor: '#76d275',
    secondaryDarkColor: '#00701a',
    primaryTextColor: '#ffffff',
    secondaryTextColor: '#000000',
  },
  setTheme: () => {},
};

export const DarkTheme: ThemeType = {
  theme: 'dark',
  isDark: true,
  colors: {
    primaryColor: '#1976d2',
    primaryLightColor: '#63a4ff',
    primaryDarkColor: '#004ba0',
    secondaryColor: '#43a047',
    secondaryLightColor: '#76d275',
    secondaryDarkColor: '#00701a',
    primaryTextColor: '#ffffff',
    secondaryTextColor: '#000000',
  },
  setTheme: () => {},
};
