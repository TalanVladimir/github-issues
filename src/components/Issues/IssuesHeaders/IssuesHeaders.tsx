import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../../store/store';
import { Prepare } from '../../../store/types';
import { setPrepare } from '../../../store/reducers/prepare';

import { ThemeContext } from '../../../themes/ThemeProvider';

const usePrepare = (): [Prepare, (updateFilter: number) => void] => {
  const dispatch = useDispatch();
  const { prepare } = useSelector((state: RootState) => state);

  const updatePrepare = (updateFilter: number) => {
    if (updateFilter === prepare.filter) {
      dispatch(
        setPrepare({
          ...prepare,
          filter: updateFilter,
          isAsc: !prepare.isAsc,
        }),
      );
    } else {
      dispatch(
        setPrepare({
          ...prepare,
          filter: updateFilter,
          isAsc: true,
        }),
      );
    }
  };

  return [prepare, updatePrepare];
};

export const IssuesHeaders: React.FC = (): JSX.Element => {
  const { colors } = useContext(ThemeContext);

  const [prepare, updatePrepare] = usePrepare();

  return (
    <View style={[styles.headers, { backgroundColor: colors.primaryLight }]}>
      <Text
        style={[styles.title, { color: colors.secondaryText }]}
        onPress={() => {
          updatePrepare(1);
        }}
      >
        Title
        {prepare.filter === 1 && prepare.isAsc ? (
          <Text style={styles.asc}> ↑</Text>
        ) : prepare.filter === 1 ? (
          <Text style={styles.asc}> ↓</Text>
        ) : null}
      </Text>

      <Text
        style={[styles.created, { color: colors.secondaryText }]}
        onPress={() => {
          updatePrepare(2);
        }}
      >
        Created
        {prepare.filter === 2 && prepare.isAsc ? (
          <Text style={styles.asc}> ↑</Text>
        ) : prepare.filter === 2 ? (
          <Text style={styles.asc}> ↓</Text>
        ) : null}
      </Text>
      <Text
        style={[styles.updated, { color: colors.secondaryText }]}
        onPress={() => {
          updatePrepare(3);
        }}
      >
        Updated
        {prepare.filter === 3 && prepare.isAsc ? (
          <Text style={styles.asc}> ↑</Text>
        ) : prepare.filter === 3 ? (
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
