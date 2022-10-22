import { useContext } from 'react';
import { StatusBar } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import { ThemeContext } from '../themes/ThemeProvider';

export const Status = () => {
  const { isDark } = useContext(ThemeContext);

  const backgroundStyle = {
    backgroundColor: isDark ? Colors.darker : Colors.lighter,
  };

  return (
    <StatusBar
      barStyle={isDark ? 'dark-content' : 'light-content'}
      backgroundColor={backgroundStyle.backgroundColor}
    />
  );
};
