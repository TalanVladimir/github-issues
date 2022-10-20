import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { Body } from './Home/Body/Body';
import { Header } from './Home/Header/Header';

export const Home = () => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior='automatic'
      style={styles.container}
    >
      <Header />
      <Body />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    color: '#000000',
  },
});
