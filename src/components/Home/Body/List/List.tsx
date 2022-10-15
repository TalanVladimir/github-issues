import React, { PropsWithChildren, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';

export const List: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const { organisation } = useSelector(
    (state: RootState) => state.organisation,
  );
  const { repo } = useSelector((state: RootState) => state.repo);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Title</Text>
      <Text style={[styles.description]}>{organisation}</Text>
      <Text style={[styles.description]}>{repo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#FF0000',
  },

  title: {
    fontSize: 28,
    fontWeight: '600',
    // backgroundColor: '#000FFF',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 4,
    borderStyle: 'solid',
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },

  description: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F00FFF',
    fontSize: 18,
    fontWeight: '400',
  },
});
