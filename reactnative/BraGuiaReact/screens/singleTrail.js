import React from 'react';
import { View, StyleSheet,Text, ScrollView, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';


export default function TrailDetails({navigation}){


  //console.log(navigation);
  //const params = navigation
  //console.log(params);
  const trail = navigation.getParam('trail', null);

  return (
      <ScrollView style={styles.container}>
        <Text style={styles.trailName}>{trail.trail_name}</Text>
        <Image
          source={require('../assets/images/map.png')}
          style={styles.image}
        />
        <Text style={styles.trailDescription}>{trail.trail_desc}</Text>
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Duration:</Text>
            <Text style={styles.infoText}>{trail.trail_duration}</Text>
          </View>  
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Difficulty:</Text>
            <Text style={styles.infoText}>{trail.trail_difficulty}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 70,
    paddingVertical: 20,
    paddingHorizontal: 60,
    height: 200,
    marginBottom: 20,
    // backgroundColor: '#FFFFFF',
  },
  infoContainer: {
    flexDirection: 'column',
    height: 170,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    // justifyContent: 'space-between',
    // flexWrap: 'wrap',
    // height: 50,
  },
  infoLabel: {
    marginRight: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    // height: 60,
  },
  infoText: {
    fontSize: 17,
    color: '#777777',
    fontWeight: 'bold',
    marginLeft: 20,
  },
  trailName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333333',
    // marginBottom: 10,
  },
  trailDescription: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 20,
    color: '#555555',
    // justifyContent: 'center',

  },
  trailDuration: {
    fontSize: 16,
    marginBottom: 8,
    height: 50,
  },
  trailDifficulty: {
    fontSize: 16,
    marginBottom: 50,
    height: 50,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  image: {
    width: 60,
    height: 60,
    marginLeft: 10,
  },
});
