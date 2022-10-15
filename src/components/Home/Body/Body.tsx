import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Search } from './Search/Search';

import { List } from './List/List';

export const Body = () => {
  return (
    <View style={styles.container}>
      <Search />
      <List />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
