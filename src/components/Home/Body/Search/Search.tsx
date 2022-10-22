import React, { useContext, useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { ThemeContext } from '../../../../themes/ThemeProvider';

import { RootState } from '../../../../store/store';
import { setOrganisation } from '../../../../store/reducers/organisation';
import { setRepo } from '../../../../store/reducers/repo';
import { setQuery } from '../../../../store/reducers/query';

export const Search = () => {
  const { colors } = useContext(ThemeContext);

  const dispatch = useDispatch();
  const { query } = useSelector((state: RootState) => state.query);

  const [inputOrganisation, setInputOrganisation] = useState('');
  const [inputRepo, setInputRepo] = useState('');

  useEffect(() => {
    setInputOrganisation('TalanVladimir');
    setInputRepo('epam_lab');
  }, []);

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.primaryColor }]}>
        Organisation:
      </Text>
      <TextInput
        placeholder='your text...'
        style={[
          styles.input,
          {
            backgroundColor: colors.primaryLightColor,
            color: colors.primaryTextColor,
          },
        ]}
        onChangeText={(newOrganisation: string) => {
          setInputOrganisation(newOrganisation);
        }}
        value={inputOrganisation}
      />
      <Text
        style={[
          styles.title,
          {
            color: colors.primaryColor,
          },
        ]}
      >
        Repo:
      </Text>
      <TextInput
        placeholder='your text...'
        style={[
          styles.input,
          {
            backgroundColor: colors.primaryLightColor,
            color: colors.primaryTextColor,
          },
        ]}
        onChangeText={(newRepo: string) => {
          setInputRepo(newRepo);
        }}
        value={inputRepo}
      />
      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.primaryColor }]}
        onPress={() => {
          dispatch(setOrganisation(inputOrganisation));
          dispatch(setRepo(inputRepo));
          dispatch(setQuery(1 + query));
        }}
      >
        <Text style={[styles.buttonText, { color: colors.primaryTextColor }]}>
          Search
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },

  title: {
    textAlign: 'left',
    fontWeight: '900',
    fontSize: 18,
  },

  input: {
    borderColor: '#000000',
    borderWidth: 2,
    paddingLeft: 15,
    borderRadius: 4,
    borderStyle: 'solid',
  },

  button: {
    marginTop: 10,
    borderColor: '#000000',
    borderWidth: 2,
    borderRadius: 4,
    alignItems: 'center',
    padding: 10,
  },

  buttonText: {
    fontSize: 18,
    fontWeight: '900',
  },
});
