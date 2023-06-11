//pagina de trails

import { Card } from 'react-native-paper';
import React, { useEffect, useState } from 'react';
import {StyleSheet,Text,Image,Button,View, FlatList,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function TrailsScreen({navigation}){
    //const navigation = useNavigation();
    const [trails, setTrails] = useState([]);

      useEffect(() => {
        fetchTrails();
      }, []);

      const fetchTrails = async () => {
          try {
            const response = await axios.get('https://c5a2-193-137-92-29.eu.ngrok.io/trails');
            setTrails(response.data);
          } catch (error) {
            console.error(error);
          }
        };

      const handleTrailPress = (trail) => {
        navigation.navigate('SingleTrail', { trail });
      };

      const renderTrailItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleTrailPress(item)}>
          <View style={styles.trailItem}>
            <Text style={styles.trailName}>{item.name}</Text>
            <Text style={styles.trailDescription}>{item.description}</Text>
          </View>
        </TouchableOpacity>
      );

      return (
        <View style={styles.container}>
          <FlatList
            data={trails}
            renderItem={renderTrailItem}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
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
card: {
    backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 5,
        padding: 16,
  },
  innerContainer: {
    flexDirection: 'row',
  },
  leftContainer: {
    flex: 2,
    marginTop: 12,
  },
  itemId: {
    margin: 8,
    fontSize: 16,
    // Add other text styles if needed
  },
  nameTrail: {
    margin: 8,
    // Add text styles
  },
  trailItem: {
      marginBottom: 16,
      padding: 16,
      backgroundColor: '#fff',
      borderRadius: 8,
    },
    trailName: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    trailDescription: {
      fontSize: 14,
      color: '#888',
    },
});