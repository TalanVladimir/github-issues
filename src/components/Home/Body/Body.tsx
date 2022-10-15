import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Organisation } from './Organisation/Organisation';

import { List } from './List/List';
import { Repo } from './Repo/Repo';

export const Body = () => {
  return (
    <View style={styles.container}>
      <Organisation />
      <Repo />
      <List />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
