import React from 'react';
import { ScrollView } from 'react-native';

import { Body } from './Body';
import { Header } from './Header';

export const Home = () => {
  return (
    <ScrollView contentInsetAdjustmentBehavior='automatic'>
      <Header />
      <Body />
    </ScrollView>
  );
};
