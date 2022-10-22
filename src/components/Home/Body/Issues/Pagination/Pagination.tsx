import React, { useContext } from 'react';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import { ThemeContext } from '../../../../../themes/ThemeProvider';

import { Issue } from '../../../../../types';

export const Pagination: React.FC<{
  data: Issue[];
}> = (children) => {
  const { colors } = useContext(ThemeContext);

  const { data } = children;

  return (
    <View style={styles.container}>
      <Text style={{ color: colors.primaryColor }}> {data.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 5,
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 4,
  },
});
