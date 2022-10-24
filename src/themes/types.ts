export type ThemeType = {
  theme: string;
  isDark: boolean;
  colors: {
    primaryDark: string;
    primaryLight: string;
    primary: string;
    text: string;
    accent: string;
    primaryText: string;
    secondaryText: string;
    divider: string;
    white: string;
  };
  setTheme: () => void;
};
