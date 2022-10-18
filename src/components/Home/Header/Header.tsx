import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Search Github Issues</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FF8000',
  },

  header: {
    fontSize: 35,
    textAlign: 'center',
    borderColor: '#000000',
    color: '#FFFFFF',
    borderBottomWidth: 2,
    borderTopWidth: 2,
  },
});
