import React, { useContext, useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { getIssues } from '../../../../services/octokitApi';
import { RootState } from '../../../../store/store';
import { Issue } from '../../../../types';

import { IssuesItem } from './IssuesItem/IssuesItem';
import { Pagination } from './Pagination/Pagination';

import { ThemeContext } from '../../../../themes/ThemeProvider';

const { height } = Dimensions.get('window');

export const Issues: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  const { organisation } = useSelector(
    (state: RootState) => state.organisation,
  );
  const { repo } = useSelector((state: RootState) => state.repo);
  const { query } = useSelector((state: RootState) => state.query);

  const [load, setLoad] = useState(true);
  const [data, setData] = useState<Issue[]>([]);

  const [page, setPage] = useState(0);

  const fetchData = async () => {
    await getIssues(organisation, repo)
      .then((newData: any) => {
        const newArray = newData.data.reduce(
          (lastItem: Issue[], newItem: any) => {
            const addItem: Issue = {
              id: newItem.id,
              title: newItem.title,
              url: newItem.url,
              created_at: new Date(newItem.created_at),
              updated_at: new Date(newItem.updated_at),
            };
            lastItem.push(addItem);
            return lastItem;
          },
          [],
        );

        setTimeout(() => {
          setData(newArray);
          setLoad(true);
        }, 500);
      })
      .catch((error: Error) => {
        setTimeout(() => {
          setData([]);
          setLoad(true);
        }, 500);
      });
  };

  useEffect(() => {
    if (query !== 0) {
      setLoad(false);
      fetchData();
    }
  }, [query]);

  return data.length === 0 || !load ? (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: height - 263,
      }}
    >
      <Text style={{ color: colors.primaryDarkColor }}>
        {!load
          ? 'Loading...'
          : query === 0
          ? 'Press search!!!'
          : 'Not Found !!!'}
      </Text>
    </View>
  ) : (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.primaryColor }]}>
        Your results:
      </Text>

      {data
        .filter((item, index) => index >= page && index < page + 4)
        .map((item: Issue, index: Number) => (
          <IssuesItem
            key={item.id}
            numb={item.id}
            title={item.title}
            url={item.url}
            created_at={item.created_at}
            updated_at={item.updated_at}
          />
        ))}

      <Pagination data={data} />

      <View style={styles.footer}>
        <Text style={[styles.footerTitle, { color: colors.primaryColor }]}>
          Search data:
        </Text>
        <Text style={[styles.footerText, { color: colors.primaryColor }]}>
          org: {organisation} repo: {repo}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#005611',
    padding: 5,
  },

  title: {
    fontSize: 18,
    fontWeight: '900',
    borderBottomWidth: 1,
    marginBottom: 10,
    borderColor: '#005611',
  },

  footer: {
    marginTop: 10,
    borderTopWidth: 1,
    borderColor: '#005611',
    fontSize: 14,
  },

  footerTitle: {
    fontWeight: '900',
    textAlign: 'left',
  },

  footerText: {
    textAlign: 'right',
  },
});
