import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setRepo } from '../../../../store/reducers/repo';
import { RootState } from '../../../../store/store';

export const Repo = () => {
  const dispatch = useDispatch();
  const { repo } = useSelector((state: RootState) => state.repo);

  return (
    <View style={styles.container}>
      <Text>Search Repo: {repo}</Text>
      <TextInput
        placeholder='your text...'
        style={styles.input}
        onChangeText={(newText) => dispatch(setRepo(newText))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  input: {
    backgroundColor: '#8EA1FF',
    marginTop: 10,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 4,
    borderStyle: 'solid',
  },
});
