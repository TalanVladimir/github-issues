import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { getIssues } from '../../../../services/octokitApi';
import { RootState } from '../../../../store/store';
import { Issue } from '../../../../types';
import { IssuesItem } from './IssuesItem/IssuesItem';

import { Dimensions } from 'react-native';
const { height } = Dimensions.get('window');

export const Issues: React.FC = () => {
  const { organisation } = useSelector(
    (state: RootState) => state.organisation,
  );
  const { repo } = useSelector((state: RootState) => state.repo);

  const [status, setStatus] = useState(false);
  const [data, setData] = useState<Issue[]>([]);

  const changeStatus = () => {
    // setStatus(!status);
  };

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

        setData(newArray);
        setStatus(true);
      })
      .catch((error: Error) => {
        setData([]);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 2000);
  }, []);

  useEffect(() => {
    setStatus(false);

    console.log('zopa');

    setTimeout(() => {
      console.log('popa');
      fetchData();
    }, 2000);

    console.log('gopa');
  }, [organisation, repo]);

  return data.length === 0 || !status ? (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: height - 263,
      }}
    >
      <Text style={{ color: '#000000' }}>
        {!status ? 'Loading...' : 'Not Found !!!'}
      </Text>
    </View>
  ) : (
    <View style={styles.container} onTouchStart={changeStatus}>
      <Text style={styles.title}>Your results:</Text>
      {data.map((item: Issue, index: Number) => (
        <IssuesItem
          key={item.id}
          numb={item.id}
          title={item.title}
          url={item.url}
          created_at={item.created_at}
          updated_at={item.updated_at}
        />
      ))}
      <View style={[styles.footer]}>
        <Text style={styles.footerTitle}>Search data:</Text>
        <Text style={styles.footerText}>
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
