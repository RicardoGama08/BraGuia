//pagina de trails

import React from 'react';
import {StyleSheet, View,Text,Image,Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TrailsScreen({ navigation }){

    return(
    <SafeAreaView style={styles.container}>
        <Text style={styles.title2}>Trails</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: 20,
  backgroundColor: '#E6E6FA', //Pastel Lavender
},
title: {
  fontFamily:'DMSans-Bold',
  fontSize: 30,
  fontWeight: 'bold',
  marginBottom: 20,
},
title2: {
  fontSize: 28,
  fontWeight: 'bold',
  marginBottom: 16,
  fontFamily: 'Roboto',
  color: '#333333',
  textAlign: 'center',
},
logoContainer: {
  alignItems: 'center',
  marginBottom: 40,
},
image_icon:{
  width: 70,
  height: 70,
  resizeMode: 'contain',
},
inputContainer: {
  width: '100%',
},
input: {
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 5,
  paddingHorizontal: 10,
  paddingVertical: 8,
  marginBottom: 10,
},
description: {
  fontSize: 14,
  lineHeight: 20,
  fontFamily: 'OpenSans',
  color: '#666666',
  textAlign: 'justify',
},
button: {
  backgroundColor: '#007AFF',
  paddingHorizontal: 20,
  paddingVertical: 10,
  borderRadius: 5,
  marginHorizontal: 10,
},
buttonText: {
  color: '#FFFFFF',
  fontSize: 16,
  fontWeight: 'bold',
},
});