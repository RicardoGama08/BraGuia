import React from 'react';
import { View, StyleSheet,Text, ScrollView, Image, Dimensions, Linking, Button } from 'react-native';
import { useRoute } from '@react-navigation/native';
import MapView, { Marker, Polyline } from 'react-native-maps';


export default function TrailDetails({navigation}){


  //console.log(navigation);
  //const params = navigation
  //console.log(params);
  const trail = navigation.getParam('trail', null);

    const edges = trail.edges;

    const handleOpenGoogleMaps = () => {
      const coordinates = edges.map((edge) => `${edge.edge_start.pin_lat},${edge.edge_start.pin_lng}`);
      const lastEdge = edges[edges.length - 1];
      coordinates.push(`${lastEdge.edge_end.pin_lat},${lastEdge.edge_end.pin_lng}`);
      const googleMapsUrl = `https://www.google.com/maps/dir/${coordinates.join('/')}`;
      Linking.openURL(googleMapsUrl);
    };

    const renderMarkers = () => {
      const markers = edges.map((edge) => (
        <Marker
          key={`start_${edge.id}`}
          coordinate={{
            latitude: edge.edge_start.pin_lat,
            longitude: edge.edge_start.pin_lng,
          }}
          title={edge.edge_start.pin_name}
          description={edge.edge_start.pin_desc}
        />
      ));

      const lastEdge = edges[edges.length - 1];
      markers.push(
        <Marker
          key={`end_${lastEdge.id}`}
          coordinate={{
            latitude: lastEdge.edge_end.pin_lat,
            longitude: lastEdge.edge_end.pin_lng,
          }}
          title={lastEdge.edge_end.pin_name}
          description={lastEdge.edge_end.pin_desc}
        />
      );

      return markers;
    };

    const renderPolylines = () => {
      return edges.map((edge) => (
        <Polyline
          key={edge.id}
          coordinates={[
            {
              latitude: edge.edge_start.pin_lat,
              longitude: edge.edge_start.pin_lng,
            },
            {
              latitude: edge.edge_end.pin_lat,
              longitude: edge.edge_end.pin_lng,
            },
          ]}
          strokeColor="#F00"
          strokeWidth={3}
        />
      ));
    };

    const initialRegion = {
      latitude: edges[0].edge_start.pin_lat,
      longitude: edges[0].edge_start.pin_lng,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    };

  return (
      <ScrollView style={styles.container}>
        <Text style={styles.trailName}>{trail.trail_name}</Text>
        <Image
          source={require('../assets/images/map.png')}
          style={styles.image}
        />
        <Text style={styles.link} onPress={handleOpenGoogleMaps}>
                      Mapa
                </Text>
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
          <MapView style={styles.map} initialRegion={initialRegion}>
                  {renderMarkers()}
                  {renderPolylines()}
          </MapView>
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
  map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });