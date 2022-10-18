import { Linking, StyleSheet, Text, View } from 'react-native';

export const IssuesItem: React.FC<{
  key: number;
  numb: number;
  title: string;
  url: string;
  created_at: Date;
  updated_at: Date;
}> = (children): JSX.Element => {
  const { numb, title, url, created_at, updated_at } = children;

  return (
    <View style={styles.container}>
      <View style={styles.row_first}>
        <Text style={styles.numb}>{numb}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.row_second}>
        <Text
          style={styles.url}
          onPress={() => {
            Linking.openURL(url);
          }}
        >
          Url: {url}
        </Text>
      </View>
      <View style={styles.row_third}>
        <Text style={[styles.date, { borderRightWidth: 1 }]}>
          Created: {created_at.toISOString().substring(0, 10)}
        </Text>
        <Text style={styles.date}>
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
    color: '#000000',
  },

  title: {
    borderLeftWidth: 1,

    flex: 0.5,
    textAlign: 'center',
    color: '#000000',
  },

  row_second: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },

  url: {
    flex: 1,
    textAlign: 'center',
    color: '#000000',
  },

  row_third: {
    flexDirection: 'row',
  },

  date: {
    flex: 0.5,
    textAlign: 'center',
    color: '#000000',
  },
});
