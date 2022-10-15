import React, { PropsWithChildren, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import { ListItem } from './ListItem/ListItem';

export const List: React.FC = () => {
  const { organisation } = useSelector(
    (state: RootState) => state.organisation,
  );
  const { repo } = useSelector((state: RootState) => state.repo);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your results:</Text>
      <ListItem title='default: title' text='default: item' />
      <View style={[styles.footer]}>
        <Text style={styles.footerTitle}>Footer:</Text>
        <Text style={styles.footerText}>
          org: {organisation} repo: {repo}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderWidth: 3,
    borderRadius: 4,
    borderColor: '#000000',
    padding: 5,
  },

  title: {
    fontSize: 18,
    fontWeight: '900',
    borderBottomWidth: 1,
    marginBottom: 10,
  },

  footer: { marginTop: 10, borderTopWidth: 1, fontSize: 14 },

  footerTitle: {
    fontWeight: '900',
    textAlign: 'left',
  },

  footerText: {
    textAlign: 'center',
  },
});
