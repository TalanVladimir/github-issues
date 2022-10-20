import React from 'react';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import { Theme } from '../../../themes/themes';

export const Header = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDarkMode
            ? Theme.colors.primaryDarkColor
            : Theme.colors.secondaryDarkColor,
        },
      ]}
    >
      <Text
        style={[
          styles.header,
          {
            color: isDarkMode
              ? Theme.colors.primaryColor
              : Theme.colors.secondaryColor,
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
