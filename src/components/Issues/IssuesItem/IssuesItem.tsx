import React, { useContext } from 'react';
import { Linking, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { ThemeContext } from '../../../themes/ThemeProvider';

export const IssuesItem: React.FC<{
  key: number;
  title: string;
  url: string;
  created_at: Date;
  updated_at: Date;
}> = (children): JSX.Element => {
  const { colors } = useContext(ThemeContext);

  const { title, url, created_at, updated_at } = children;

  return (
    <TouchableOpacity
      style={[styles.headers, { borderColor: colors.divider }]}
      onPress={() => Linking.openURL(url)}
    >
      <Text style={[styles.title, { color: colors.secondaryText }]}>
        {title}
      </Text>

      <Text style={[styles.created, { color: colors.secondaryText }]}>
        {created_at.toISOString().substring(0, 10)}
      </Text>
      <Text style={[styles.updated, { color: colors.secondaryText }]}>
        {updated_at.toISOString().substring(0, 10)}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  headers: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    padding: 10,
  },

  title: {
    paddingHorizontal: 5,
    flex: 0.5,
    textAlign: 'center',
    textAlignVertical: 'center',
  },

  created: {
    flex: 0.25,
    textAlign: 'center',
    textAlignVertical: 'center',
  },

  updated: {
    flex: 0.25,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
