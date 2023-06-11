import React from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function PinDetails({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Header Pin</Text>
      <Text style={styles.link}>Link Mapa</Text>
      <Text style={styles.text}></Text>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.pinDesc}>Pin Description</Text>
      </ScrollView>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
  },
  header: {
    width: 322,
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
  },
  link: {
    width: 322,
    alignSelf: 'center',
    textAlign: 'center',
  },
  text: {
    flex: 1,
  },
  scrollView: {
    width: 345,
    alignSelf: 'center',
    marginTop: 10,
  },
  pinDesc: {
    width: '100%',
  },
};
