import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ThemeContext } from '../../themes/ThemeProvider';

export const Pagination: React.FC<{
  currentPage: number;
  pages: number;
  updatePage: any;
}> = (children) => {
  const { colors } = useContext(ThemeContext);

  const { currentPage, pages, updatePage } = children;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.primary,
          borderTopColor: colors.divider,
        },
      ]}
    >
      {[...Array(pages + 1).keys()]
        .filter((item: number) => item !== 0)
        .map((item: number, index: number) => (
          <Text
            key={index}
            style={[
              styles.page,
              {
                backgroundColor:
                  item === currentPage
                    ? colors.primaryLight
                    : colors.primaryDark,
                color: colors.text,
              },
            ]}
            onPress={() => {
              updatePage(item);
            }}
          >
            {item}
          </Text>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopWidth: 1,
    fontSize: 14,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
  },

  page: {
    width: 40,
    height: 40,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginLeft: 3,
    marginRight: 3,
    alignSelf: 'center',
    borderRadius: 12,
  },
});
