import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ThemeContext } from '../../themes/ThemeProvider';

export const Header = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.container,
        {
          borderColor: colors.divider,
          backgroundColor: colors.primaryDark,
        },
      ]}
    >
      <Text style={[styles.header, { color: colors.text }]}>
        Search Github Issues{' '}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
  },

  header: {
    fontSize: 35,
    textAlign: 'center',
  },
});
