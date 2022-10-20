import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setQuery } from '../../../../store/reducers/query';

import { setOrganisation } from '../../../../store/reducers/organisation';
import { setRepo } from '../../../../store/reducers/repo';
import { RootState } from '../../../../store/store';
import { Theme } from '../../../../themes/themes';

export const Search = () => {
  const { query } = useSelector((state: RootState) => state.query);

  const isDarkMode = useColorScheme() === 'dark';

  const dispatch = useDispatch();

  const [inputOrganisation, setInputOrganisation] = useState('');
  const [inputRepo, setInputRepo] = useState('');

  useEffect(() => {
    setInputOrganisation('TalanVladimir');
    setInputRepo('epam_lab');
  }, []);

  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.title,
          {
            color: isDarkMode
              ? Theme.colors.primaryColor
              : Theme.colors.secondaryColor,
          },
        ]}
      >
        Organisation:
      </Text>
      <TextInput
        placeholder='your text...'
        style={[
          styles.input,
          {
            color: isDarkMode
              ? Theme.colors.primaryColor
              : Theme.colors.secondaryColor,
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
            color: isDarkMode
              ? Theme.colors.primaryColor
              : Theme.colors.secondaryColor,
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
            color: isDarkMode
              ? Theme.colors.primaryColor
              : Theme.colors.secondaryColor,
          },
        ]}
        onChangeText={(newRepo: string) => {
          setInputRepo(newRepo);
        }}
        value={inputRepo}
      />
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: isDarkMode
              ? Theme.colors.primaryDarkColor
              : Theme.colors.secondaryDarkColor,
          },
        ]}
        onPress={() => {
          dispatch(setOrganisation(inputOrganisation));
          dispatch(setRepo(inputRepo));
          dispatch(setQuery(1 + query));
        }}
      >
        <Text
          style={[
            styles.buttonText,
            {
              color: isDarkMode
                ? Theme.colors.primaryColor
                : Theme.colors.secondaryColor,
            },
          ]}
        >
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
