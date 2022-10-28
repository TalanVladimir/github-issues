import { useContext } from 'react';
import { StatusBar } from 'react-native';

import { ThemeContext } from '../../themes/ThemeProvider';

export const Status: React.FC = (): JSX.Element => {
  const { isDark, colors } = useContext(ThemeContext);

  return (
    <StatusBar
      barStyle={isDark ? 'dark-content' : 'light-content'}
      backgroundColor={colors.primaryDark}
    />
  );
};
