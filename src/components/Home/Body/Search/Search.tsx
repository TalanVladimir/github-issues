import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { setOrganisation } from '../../../../store/reducers/organisation';
import { setRepo } from '../../../../store/reducers/repo';

export const Search = () => {
  const dispatch = useDispatch();

  const [inputOrganisation, setInputOrganisation] = useState('');
  const [inputRepo, setInputRepo] = useState('');

  useEffect(() => {
    setInputOrganisation('default organisation');
    setInputRepo('default repo');
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Organisation:</Text>
      <TextInput
        placeholder='your text...'
        style={styles.input}
        onChangeText={(newOrganisation: string) => {
          setInputOrganisation(newOrganisation);
        }}
        value={inputOrganisation}
      />
      <Text style={styles.title}>Repo:</Text>
      <TextInput
        placeholder='your text...'
        style={styles.input}
        onChangeText={(newRepo: string) => {
          setInputRepo;
        }}
        value={inputRepo}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          dispatch(setOrganisation(inputOrganisation));
          dispatch(setRepo(inputRepo));
        }}
      >
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  title: {
    textAlign: 'left',
    fontWeight: '900',
    fontSize: 18,
  },
  input: {
    borderColor: '#000000',
    borderWidth: 3,
    borderRadius: 4,
    borderStyle: 'solid',
  },
  button: {
    marginTop: 10,
    borderColor: '#000000',
    borderWidth: 3,
    borderRadius: 4,
    backgroundColor: '#FFAD40',
    alignItems: 'center',
    padding: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '900',
    color: '#000000',
  },
});
