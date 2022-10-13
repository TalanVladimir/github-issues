import React, { PropsWithChildren } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({ children, title }) => {
  return (
    <View style={[styles.sectionContainer]}>
      <Text style={[styles.sectionTitle]}>{title}</Text>
      <Text style={[styles.sectionDescription]}>{children}</Text>
    </View>
  );
};

export const styles = StyleSheet.create({
  sectionContainer: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: '600',
    backgroundColor: '#000FFF',
    display: 'flex',
    textAlign: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  sectionDescription: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F00FFF',
    fontSize: 18,
    fontWeight: '400',
  },
});
