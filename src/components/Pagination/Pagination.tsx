import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setPrepare } from '../../store/reducers/prepare';
import { RootState } from '../../store/store';
import { Prepare } from '../../store/types';

import { ThemeContext } from '../../themes/ThemeProvider';

const usePrepare = (): [Prepare, (item: number) => void] => {
  const dispatch = useDispatch();
  const { prepare } = useSelector((state: RootState) => state);

  const updatePrepare = (item: number): void => {
    dispatch(setPrepare({ ...prepare, page: item }));
  };

  return [prepare, updatePrepare];
};

export const Pagination: React.FC = (): JSX.Element => {
  const { colors } = useContext(ThemeContext);

  const [prepare, updatePrepare] = usePrepare();

  return (
    <View style={[styles.container, { backgroundColor: colors.primary }]}>
      {[...Array(prepare.pages + 1).keys()]
        .filter((item: number) => item !== 0)
        .map((item: number, index: number) => (
          <Text
            key={index}
            style={[
              styles.page,
              {
                backgroundColor:
                  item === prepare.page
                    ? colors.primaryDark
                    : colors.primaryLight,
                color:
                  item === prepare.page ? colors.text : colors.secondaryText,
              },
            ]}
            onPress={() => updatePrepare(item)}
          >
            {item}
          </Text>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
