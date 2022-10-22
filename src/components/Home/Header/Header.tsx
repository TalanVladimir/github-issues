import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ThemeContext } from '../../../themes/ThemeProvider';

export const Header = () => {
  const theme = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.colors.primaryLightColor },
      ]}
    >
      <Text
        style={[
          styles.header,
          {
            color: theme.colors.primaryTextColor,
          },
        ]}
      >
        Search Github Issues{' '}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},

  header: {
    fontSize: 35,
    textAlign: 'center',
    borderColor: '#000000',
    borderBottomWidth: 2,
    borderTopWidth: 2,
  },
});
