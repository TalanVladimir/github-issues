import React, { useContext, useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { ThemeContext } from '../../themes/ThemeProvider';

import { RootState } from '../../store/store';
import { setOrganisation } from '../../store/reducers/organisation';
import { setRepo } from '../../store/reducers/repo';
import { setQuery } from '../../store/reducers/query';

export const Search = () => {
  const { colors } = useContext(ThemeContext);

  const dispatch = useDispatch();
  const { query } = useSelector((state: RootState) => state.query);

  const [inputOrganisation, setInputOrganisation] = useState('');
  const [inputRepo, setInputRepo] = useState('');

  useEffect(() => {
    setInputOrganisation('xpsilvester');
    setInputRepo('Project');
  }, []);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.white,
          borderBottomColor: colors.divider,
        },
      ]}
    >
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 0.5, marginLeft: 10, marginRight: 5 }}>
          <Text style={[styles.title, { color: colors.primaryText }]}>
            Organisation:
          </Text>
          <TextInput
            placeholder='your text...'
            style={[
              styles.input,
              {
                borderColor: colors.divider,
                backgroundColor: colors.primaryLight,
                color: colors.text,
              },
            ]}
            onChangeText={(newOrganisation: string) => {
              setInputOrganisation(newOrganisation);
            }}
            value={inputOrganisation}
          />
        </View>
        <View style={{ flex: 0.5, marginLeft: 5, marginRight: 10 }}>
          <Text
            style={[
              styles.title,
              {
                color: colors.primaryText,
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
                borderColor: colors.divider,
                backgroundColor: colors.primaryLight,
                color: colors.text,
              },
            ]}
            onChangeText={(newRepo: string) => {
              setInputRepo(newRepo);
            }}
            value={inputRepo}
          />
        </View>
      </View>
      <TouchableOpacity
        style={[
          styles.button,
          { borderColor: colors.divider, backgroundColor: colors.primary },
        ]}
        onPress={() => {
          dispatch(setOrganisation(inputOrganisation));
          dispatch(setRepo(inputRepo));
          dispatch(setQuery(1 + query));
        }}
      >
        <Text style={[styles.buttonText, { color: colors.text }]}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 138,
    borderBottomWidth: 1,
  },

  title: {
    textAlign: 'left',
    fontWeight: '900',
    fontSize: 18,
  },

  input: {
    paddingLeft: 15,
    borderRadius: 11,
    borderStyle: 'solid',
    borderWidth: 1,
  },

  button: {
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 11,
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 10,
  },

  buttonText: {
    fontSize: 18,
    fontWeight: '900',
  },
});
