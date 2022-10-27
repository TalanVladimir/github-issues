import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { getIssues } from '../../services/octokitApi';
import { RootState } from '../../store/store';
import { Issue } from '../../types';

import { IssuesItem } from './IssuesItem/IssuesItem';
import { Pagination } from '../Pagination/Pagination';

import { ThemeContext } from '../../themes/ThemeProvider';
import { IssuesHeaders } from './IssuesHeaders/IssuesHeaders';
import { setPrepare } from '../../store/reducers/prepare';

const { height } = Dimensions.get('window');

const PAGE_LIMIT = 10;

export const Issues: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  const dispatch = useDispatch();
  const { query } = useSelector((state: RootState) => state);
  const { prepare } = useSelector((state: RootState) => state);

  const [load, setLoad] = useState(true);

  const [data, setData] = useState<Issue[]>([]);
  const [filteredData, setFilteredData] = useState<Issue[]>([]);

  useEffect(() => {
    filterData();
  }, [data]);

  const fetchData = async () => {
    await getIssues(query.organisation, query.repo)
      .then((newData: any) => {
        const newArray = newData.data.reduce(
          (lastItem: Issue[], newItem: any) => {
            const addItem: Issue = {
              id: newItem.id,
              title: newItem.title,
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
          const totalPages = Math.ceil(newArray.length / PAGE_LIMIT);
          dispatch(setPrepare({ ...prepare, page: 1, pages: totalPages }));
        }, 500);
      })
      .catch(() => {
        setTimeout(() => {
          setData([]);
          setLoad(true);
          dispatch(setPrepare({ ...prepare, page: 1, pages: 1 }));
        }, 500);
      });
  };

  useEffect(() => {
    if (query.query !== 0) {
      setLoad(false);
      fetchData();
    }
  }, [query]);

  useEffect(() => {
    filterData();
  }, [prepare]);

  const filterData = () => {
    const startItem = prepare.page * PAGE_LIMIT - PAGE_LIMIT;
    const endItem = prepare.page * PAGE_LIMIT;

    const updateData = data
      .filter(
        (item: Issue, index: number) => index >= startItem && index < endItem,
      )
      .sort((a: Issue, b: Issue) => {
        switch (prepare.filter) {
          default:
          case 1:
            return prepare.isAsc
              ? a.title.localeCompare(b.title)
              : b.title.localeCompare(a.title);

          case 2:
            return prepare.isAsc
              ? b.created_at.getTime() - a.created_at.getTime()
              : a.created_at.getTime() - b.created_at.getTime();

          case 3:
            return prepare.isAsc
              ? b.updated_at.getTime() - a.updated_at.getTime()
              : a.updated_at.getTime() - b.updated_at.getTime();
        }
      });

    setFilteredData(updateData);
  };

  return data.length === 0 || !load ? (
    <View style={styles.message}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          height: height - 500,
        }}
      >
        <Text style={{ color: colors.primaryText, fontSize: 30 }}>
          {!load
            ? 'Loading...'
            : query.query === 0
            ? 'Press search!!!'
            : 'Not Found !!!'}
        </Text>
      </View>
    </View>
  ) : (
    <Fragment>
      <IssuesHeaders />
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        style={styles.scroll_view}
      >
        <View style={styles.container}>
          {filteredData.map((item: Issue, index: number) => (
            <IssuesItem
              key={index}
              title={item.title}
              created_at={item.created_at}
              updated_at={item.updated_at}
            />
          ))}
        </View>
      </ScrollView>
      <Pagination />
    </Fragment>
  );
};

const styles = StyleSheet.create({
  message: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  scroll_view: {
    backgroundColor: '#FFFFFF',
  },

  container: {
    flex: 1,
    height: '100%',
  },
});
