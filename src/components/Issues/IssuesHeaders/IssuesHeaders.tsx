import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from '../../../themes/ThemeProvider';

export const IssuesHeaders: React.FC<{
  filter: { column: number; isAsc: boolean };
  setFilter: any;
}> = (children) => {
  const { colors } = useContext(ThemeContext);

  const { filter, setFilter } = children;

  const [column, setColumn] = useState(1);
  const [isAsc, setIsAsc] = useState(true);

  useEffect(() => {
    setColumn(filter.column);
    setIsAsc(filter.isAsc);
  }, [filter.column, filter.isAsc]);

  const updateFilter = (updateColumn: number) => {
    const { column, isAsc } = filter;
    if (updateColumn === column) {
      setFilter({ column: updateColumn, isAsc: !isAsc });
    } else {
      setFilter({ column: updateColumn, isAsc: true });
    }
  };

  return (
    <View
      style={[
        styles.headers,
        {
          borderColor: colors.divider,
          backgroundColor: colors.primaryLight,
        },
      ]}
    >
      <Text
        style={[styles.title, { color: colors.text }]}
        onPress={() => {
          updateFilter(1);
        }}
      >
        Title
        {column === 1 && isAsc ? (
          <Text style={styles.asc}> ↑</Text>
        ) : column === 1 ? (
          <Text style={styles.asc}> ↓</Text>
        ) : null}
      </Text>

      <Text
        style={[styles.created, { color: colors.text }]}
        onPress={() => {
          updateFilter(2);
        }}
      >
        Created
        {column === 2 && isAsc ? (
          <Text style={styles.asc}> ↑</Text>
        ) : column === 2 ? (
          <Text style={styles.asc}> ↓</Text>
        ) : null}
      </Text>
      <Text
        style={[styles.updated, { color: colors.text }]}
        onPress={() => {
          updateFilter(3);
        }}
      >
        Updated
        {column === 3 && isAsc ? (
          <Text style={styles.asc}> ↑</Text>
        ) : column === 3 ? (
          <Text style={styles.asc}> ↓</Text>
        ) : null}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headers: {
    flexDirection: 'row',
    height: 35,
    borderBottomWidth: 1,
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

  asc: {
    fontWeight: 'bold',
  },
});
