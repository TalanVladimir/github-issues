import React, { useContext, useState } from 'react';
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
import { setQuery } from '../../store/reducers/query';

type Search = {
  organisation: string;
  repo: string;
};

const useQuery = (): [
  Search,
  (elem: string) => void,
  (elem: string) => void,
  () => void,
] => {
  const dispatch = useDispatch();
  const { query } = useSelector((state: RootState) => state);

  const [search, setSearch] = useState<Search>({
    organisation: 'xpsilvester',
    repo: 'Project',
  });

  const updateOrganisation = (organisation: string) => {
    setSearch({ ...search, organisation });
  };

  const updateRepo = (repo: string) => {
    setSearch({ ...search, repo });
  };

  const updateQuery = () => {
    dispatch(
      setQuery({
        organisation: search.organisation,
        repo: search.repo,
        query: 1 + query.query,
      }),
    );
  };

  return [search, updateOrganisation, updateRepo, updateQuery];
};

export const Search: React.FC = (): JSX.Element => {
  const { colors } = useContext(ThemeContext);

  const [search, updateOrganisation, updateRepo, updateQuery] = useQuery();

  return (
    <View style={[styles.container, { backgroundColor: colors.white }]}>
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
                backgroundColor: colors.primaryLight,
                color: colors.secondaryText,
              },
            ]}
            onChangeText={updateOrganisation}
            value={search.organisation}
          />
        </View>
        <View style={{ flex: 0.5, marginLeft: 5, marginRight: 10 }}>
          <Text style={[styles.title, { color: colors.primaryText }]}>
            Repo:
          </Text>
          <TextInput
            placeholder='your text...'
            style={[
              styles.input,
              {
                backgroundColor: colors.primaryLight,
                color: colors.secondaryText,
              },
            ]}
            onChangeText={updateRepo}
            value={search.repo}
          />
        </View>
      </View>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.primary }]}
        onPress={() => updateQuery()}
      >
        <Text style={[styles.buttonText, { color: colors.text }]}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 138,
  },

  title: {
    textAlign: 'left',
    fontWeight: '900',
    fontSize: 18,
  },

  input: {
    paddingLeft: 15,
    borderRadius: 11,
  },

  button: {
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
