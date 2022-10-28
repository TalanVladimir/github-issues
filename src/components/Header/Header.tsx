import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ThemeContext } from '../../themes/ThemeProvider';

export const Header: React.FC = (): JSX.Element => {
  const { colors } = useContext(ThemeContext);

  return (
    <View style={{ backgroundColor: colors.primaryDark }}>
      <Text style={[styles.header, { color: colors.text }]}>
        Search Github Issues{' '}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 35,
    textAlign: 'center',
  },
});
