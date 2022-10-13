import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Section } from './Section';

export const Body = () => {
  return (
    <View style={styles.bodyView}>
      <Section title='Functional requirements:'>
        <Text style={[styles.sectionItemSame, styles.sectionItemOmw]}>
          - User should be able to provide GitHub organization and repository
          and fetch issues from it{'\n'}
        </Text>
        <Text style={[styles.sectionItemSame, styles.sectionItemOmw]}>
          - Pagination is used to navigate between pages{'\n'}
        </Text>
        <Text style={[styles.sectionItemSame, styles.sectionItemOmw]}>
          - User should be able to sort issues
        </Text>
      </Section>
      <Section title='Technical requirements'>
        <Text style={[styles.sectionItemSame, styles.sectionItemDone]}>
          - App is based on React Native{'\n'}
        </Text>
        <Text style={[styles.sectionItemSame, styles.sectionItemOmw]}>
          - State and Text of the app are separated{'\n'}
        </Text>
        <Text style={[styles.sectionItemSame, styles.sectionItemOmw]}>
          - Static types are used to ensure soundness of the app{'\n'}
        </Text>
        <Text style={[styles.sectionItemSame, styles.sectionItemOmw]}>
          - Code of the app adheres to the best industry practices{'\n'}
        </Text>
        <Text style={[styles.sectionItemSame, styles.sectionItemOmw]}>
          • App is well tested{'\n'}
        </Text>
        <Text style={[styles.sectionItemSame, styles.sectionItemOmw]}>
          - Minimum required documentation is provided{'\n'}
        </Text>
        <Text style={[styles.sectionItemSame, styles.sectionItemDone]}>
          - Source code is presented on GitHub
        </Text>
      </Section>
      <Section title='Repository'>Omw</Section>
      <Section title='Another'>Omw</Section>
      <Section title='Search'>Omw</Section>
      <Section title='Repository'>Omw</Section>
      <Section title='Another'>Omw</Section>
    </View>
  );
};

const itemPadding = {
  horizontal: 5,
  vertical: 15,
};

const styles = StyleSheet.create({
  bodyView: {
    backgroundColor: '#0FF000',
  },
  sectionItemSame: {
    flex: 1,
    flexWrap: 'wrap',
    paddingTop: itemPadding.vertical,
    paddingBottom: itemPadding.vertical,
  },
  sectionItemDone: {
    backgroundColor: '#19E456',
  },
  sectionItemOmw: {
    backgroundColor: '#E49319',
  },
});
