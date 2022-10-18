import React from 'react';
import { View } from 'react-native';

import { Search } from './Search/Search';
import { Issues } from './Issues/Issues';

export const Body = () => {
  return (
    <View>
      <Search />
      <Issues />
    </View>
  );
};
