export type ThemeType = {
  theme: string;
  isDark: boolean;
  colors: {
    primaryColor: string;
    primaryLightColor: string;
    primaryDarkColor: string;
    secondaryColor: string;
    secondaryLightColor: string;
    secondaryDarkColor: string;
    primaryTextColor: string;
    secondaryTextColor: string;
  };
  setTheme: () => void;
};
