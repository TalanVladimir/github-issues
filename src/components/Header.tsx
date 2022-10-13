import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { RootState } from '../store/store';
import { setCounter } from '../store/reducers/counter';

export const Header = () => {
  const dispatch = useDispatch();
  const { counter } = useSelector((state: RootState) => state.counter);

  const handlePress = () => {
    dispatch(setCounter(counter + 1));
  };

  return (
    <View style={styles.headerView}>
      <Text style={styles.headerText} onPress={handlePress}>
        Search Github Issues: {counter}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerView: { backgroundColor: '#000000' },
  headerText: {
    fontSize: 30,
    textAlign: 'center',
    borderColor: Colors.white,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
});
