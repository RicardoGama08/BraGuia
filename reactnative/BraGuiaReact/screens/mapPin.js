import React from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function MapScreen({navigation}) {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 41.575,
          longitude: -8.2671,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 41.575, longitude: -8.2671 }}
          title="Casa do Porto Povoa Lanhoso"
          description="A Casa do Porto is a meeting place for FC Porto fans"
        />
      </MapView>
    </View>
  );
};
