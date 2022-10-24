import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { getIssues } from '../../services/octokitApi';
import { RootState } from '../../store/store';
import { Issue } from '../../types';

import { IssuesItem } from './IssuesItem/IssuesItem';
import { Pagination } from '../Pagination/Pagination';

import { ThemeContext } from '../../themes/ThemeProvider';
import { IssuesHeaders } from './IssuesHeaders/IssuesHeaders';

const { height } = Dimensions.get('window');

const PAGE_LIMIT = 10;

export const Issues: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  const { organisation } = useSelector(
    (state: RootState) => state.organisation,
  );
  const { repo } = useSelector((state: RootState) => state.repo);
  const { query } = useSelector((state: RootState) => state.query);

  const [load, setLoad] = useState(true);
  const [data, setData] = useState<Issue[]>([]);
  const [filteredData, setFilteredData] = useState<Issue[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [pagesCount, setPagesCount] = useState(1);

  const [filter, setFilter] = useState({ column: 1, isAsc: true });

  useEffect(() => {
    const pagesNumber = Math.ceil(data.length / PAGE_LIMIT);

    setCurrentPage(1);
    setPagesCount(pagesNumber);

    filterData();
  }, [data]);

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
      .catch(() => {
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

  const updatePage = (newPage: number) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    filterData();
  }, [currentPage, filter]);

  const filterData = () => {
    const startItem = currentPage * PAGE_LIMIT - PAGE_LIMIT;
    const endItem = currentPage * PAGE_LIMIT;

    console.log(`startItem: ${startItem} endItem: ${endItem}`);

    const updateData = data
      .filter(
        (item: Issue, index: number) => index >= startItem && index < endItem,
      )
      .sort((a: Issue, b: Issue) => {
        switch (filter.column) {
          default:
          case 1:
            return filter.isAsc
              ? a.title.localeCompare(b.title)
              : b.title.localeCompare(a.title);

          case 2:
            return filter.isAsc
              ? b.created_at.getTime() - a.created_at.getTime()
              : a.created_at.getTime() - b.created_at.getTime();

          case 3:
            return filter.isAsc
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
            : query === 0
            ? 'Press search!!!'
            : 'Not Found !!!'}
        </Text>
      </View>
    </View>
  ) : (
    <Fragment>
      <IssuesHeaders filter={filter} setFilter={setFilter} />
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        style={styles.scroll_view}
      >
        <View style={styles.container}>
          {filteredData.map((item: Issue, index: number) => (
            <IssuesItem
              key={index}
              title={item.title}
              url={item.url}
              created_at={item.created_at}
              updated_at={item.updated_at}
            />
          ))}
        </View>
      </ScrollView>
      <Pagination
        currentPage={currentPage}
        pages={pagesCount}
        updatePage={updatePage}
      />
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
