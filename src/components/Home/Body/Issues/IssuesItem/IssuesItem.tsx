import { StyleSheet, Text, View } from 'react-native';

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
      <Text style={styles.numb}>{numb}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.url}>{url}</Text>
      <Text style={styles.date}>
        {created_at.toISOString().substring(0, 10)}
      </Text>
      <Text style={styles.date}>
        {updated_at.toISOString().substring(0, 10)}
      </Text>
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
    flexDirection: 'row',
  },

  numb: {
    flex: 0.05,
    textAlign: 'center',
  },

  title: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    flex: 0.2,
    textAlign: 'center',
  },

  url: {
    flex: 0.5,
    textAlign: 'center',
  },

  date: {
    flex: 0.3,
    textAlign: 'center',
  },
});
