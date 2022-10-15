import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setOrganisation } from '../../../../store/reducers/organisation';
import { RootState } from '../../../../store/store';

export const Organisation = () => {
  const dispatch = useDispatch();
  const { organisation } = useSelector(
    (state: RootState) => state.organisation,
  );

  return (
    <View style={styles.container}>
      <Text>Search Organisation: {organisation}</Text>
      <TextInput
        placeholder='your text...'
        style={styles.input}
        onChangeText={(newText) => dispatch(setOrganisation(newText))}
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
