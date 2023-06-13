import React, { useEffect } from 'react';
import { View, Text,StyleSheet, ScrollView, Image, Button, TouchableOpacity } from 'react-native';
import { Linking } from 'react-native';
import { PermissionsAndroid } from 'react-native';

export default function PinDetails({navigation}) {
  const pin = navigation.getParam('pin', null);

  /*useEffect(() => {
      const requestLocationPermission = async () => {
         try {
            const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION,
                  {
                    title: 'Background Location Permission',
                    message: 'We need access to your location to send notifications.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                  },
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                }

  }
*/

  const openGoogleMaps = () => {
      const latitude = pin.pin_lat;
      const longitude = pin.pin_lng;
      const altitude = pin.pin_alt;
      const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}&z=${altitude}`;
      Linking.openURL(url);
    };

  return (

    <ScrollView style={styles.container}>
      <Text style={styles.pinName}>{pin.pin_name}</Text>
      <Image
          source={require('../assets/images/placeholder.png')}
          style={styles.image}
        />
      <Text style={styles.text}></Text>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.pinDesc}>{pin.pin_desc}</Text>
      </ScrollView>
      <TouchableOpacity onPress={openGoogleMaps}>
        <Image style={styles.image2}
          source={require('../assets/images/start.png')}
          // style={{width: 40, height: 40 }} // Adjust the size as needed
        />
      </TouchableOpacity>
      {/* <Button title=" Ver Ponto de Interesse" style={styles.button} onPress={openGoogleMaps}/> */}
    </ScrollView>

  );
};




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
  pinName: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#333333',
    // marginBottom: 10,
  },
  pinDescription: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 20,
    color: '#555555',
    // justifyContent: 'center',

  },
  pinDuration: {
    fontSize: 16,
    marginBottom: 8,
    height: 50,
  },
  pinDifficulty: {
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
    width: 40,
    height: 40,
    marginLeft: 10,
    marginTop: 15,
  },
  image2: {
    width: 70,
    height: 70,
    marginTop: 20,
    marginLeft:100,
    marginBottom: 10,
  },
  button: {
        backgroundColor: '#B2D8B2',
        // paddingHorizontal: 10,
        // paddingVertical: 10,
        padding: 5,
        marginBottom:10,
        borderRadius: 5,
      },
});