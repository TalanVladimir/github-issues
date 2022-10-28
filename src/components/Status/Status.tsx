import { useContext } from 'react';
import { StatusBar } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import { ThemeContext } from '../../themes/ThemeProvider';

export const Status: React.FC = (): JSX.Element => {
  const { isDark } = useContext(ThemeContext);

  return (
    <StatusBar
      barStyle={isDark ? 'dark-content' : 'light-content'}
      backgroundColor={isDark ? Colors.darker : Colors.lighter}
    />
  );
};
