import React from 'react';
import { View, Text,StyleSheet, ScrollView, Image, Button } from 'react-native';
import { Linking } from 'react-native';

export default function PinDetails({navigation}) {
  const pin = navigation.getParam('pin', null);

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
      <Text></Text>
      <Button title=" Ver Ponto de Interesse" style={styles.button} onPress={openGoogleMaps}/>
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
    width: 60,
    height: 60,
    marginLeft: 10,
    marginTop: 15,
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



/* const styles = {
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

 */