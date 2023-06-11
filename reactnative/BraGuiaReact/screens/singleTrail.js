import React from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function TrailDetails({navigation}){
  const { trail } = navigation.params;

  return (
      <View style={styles.container}>
        <Image source={{ uri: trail.trail_img }} style={styles.trailImage} />
        <Text style={styles.trailName}>{trail.trail_name}</Text>
        <Text style={styles.trailDescription}>{trail.trail_desc}</Text>
        <Text style={styles.trailDuration}>Duration: {trail.trail_duration} minutes</Text>
        <Text style={styles.trailDifficulty}>Difficulty: {trail.trail_difficulty}</Text>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
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
  },
  edgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  edgeTransport: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
  edgeDesc: {
    fontSize: 16,
  },
});
