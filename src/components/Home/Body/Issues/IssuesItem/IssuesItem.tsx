import { Linking, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { Theme } from '../../../../../themes/themes';

export const IssuesItem: React.FC<{
  key: number;
  numb: number;
  title: string;
  url: string;
  created_at: Date;
  updated_at: Date;
}> = (children): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';

  const { numb, title, url, created_at, updated_at } = children;

  return (
    <View style={styles.container}>
      <View style={styles.row_first}>
        <Text
          style={[
            styles.numb,
            {
              borderRightWidth: 1,
              color: isDarkMode
                ? Theme.colors.primaryColor
                : Theme.colors.secondaryColor,
            },
          ]}
        >
          {numb}
        </Text>
        <Text
          style={[
            styles.title,
            {
              borderRightWidth: 1,
              color: isDarkMode
                ? Theme.colors.primaryColor
                : Theme.colors.secondaryColor,
            },
          ]}
        >
          {title}
        </Text>
      </View>
      <View style={styles.row_second}>
        <Text
          style={[
            styles.url,
            {
              borderRightWidth: 1,
              color: isDarkMode
                ? Theme.colors.primaryColor
                : Theme.colors.secondaryColor,
            },
          ]}
          onPress={() => {
            Linking.openURL(url);
          }}
        >
          Url: {url}
        </Text>
      </View>
      <View style={styles.row_third}>
        <Text
          style={[
            styles.date,
            {
              borderRightWidth: 1,
              color: isDarkMode
                ? Theme.colors.primaryColor
                : Theme.colors.secondaryColor,
            },
          ]}
        >
          Created: {created_at.toISOString().substring(0, 10)}
        </Text>
        <Text
          style={[
            styles.date,
            {
              borderRightWidth: 1,
              color: isDarkMode
                ? Theme.colors.primaryColor
                : Theme.colors.secondaryColor,
            },
          ]}
        >
          Updated: {updated_at.toISOString().substring(0, 10)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 4,
    marginTop: 3,
    marginBottom: 3,
    borderColor: '#005611',
    flex: 1,
    flexDirection: 'column',
  },

  row_first: {
    flexDirection: 'row',
  },

  numb: {
    flex: 0.5,
    textAlign: 'center',
  },

  title: {
    borderLeftWidth: 1,
    flex: 0.5,
    textAlign: 'center',
  },

  row_second: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },

  url: {
    flex: 1,
    textAlign: 'center',
  },

  row_third: {
    flexDirection: 'row',
  },

  date: {
    flex: 0.5,
    textAlign: 'center',
  },
});
