import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { RootState } from '../../../store/store';
import { setItems } from '../../../store/reducers/items';

export const Header = () => {
  const dispatch = useDispatch();
  const { items: items } = useSelector((state: RootState) => state.items);

  const handlePress = () => {
    dispatch(setItems(items + 1));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header} onPress={handlePress}>
        Search Github Issues: {items}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
    borderColor: Colors.black,
    // borderTopWidth: 1,
    borderBottomWidth: 1,
  },
});
