import React from 'react';
import { View, StyleSheet,Text, ScrollView } from 'react-native';


export default function TrailDetails({route,navigation}){
  const { trail } = route.params;

  return (
      <View style={styles.container}>
        <Text style={styles.trailName}>{trail.trail_name}</Text>
        <Text style={styles.trailDescription}>{trail.trail_desc}</Text>
        <Text style={styles.trailDuration}>Duration: {trail.trail_duration} </Text>
        <Text style={styles.trailDifficulty}>Difficulty: {trail.trail_difficulty}</Text>
        <Text style={styles.trailDesc}>Descrição: {trail.trail_desc}</Text>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  trailDesc: {
        fontSize: 14,
        color: '#888',
      },
  trailImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 16,
  },
  trailName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  trailDescription: {
    fontSize: 16,
    marginBottom: 8,
  },
  trailDuration: {
    fontSize: 16,
    marginBottom: 8,
  },
  trailDifficulty: {
    fontSize: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  }
});
