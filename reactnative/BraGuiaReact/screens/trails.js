//pagina de trails

import { Card } from 'react-native-paper';
import React, { useEffect, useState } from 'react';
import {StyleSheet,Text,Image,Button,View, FlatList,TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import TrailDetails from '../screens/singleTrail';

export default function TrailsScreen({navigation,route}){
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

      const handleTrailPress = (item) => {
        navigation.navigate('TrailDetails', { trail: item });
      };

      const renderTrailItem = ({ item }) => (
        <TouchableOpacity style={styles.button} onPress={() => handleTrailPress(item)}>
          <View style={styles.trailItem}>
            <Text style={styles.trailName}>{item.trail_name}</Text>
            {/* <Text style={styles.trailDescription}>{item.trail_desc}</Text> */}
            <Image source={{ uri: item.trail_img }} style={styles.trailImage} />
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
    paddingVertical:10,
    paddingHorizontal: 30,
    backgroundColor: '#E6E6FA', //Pastel Lavender
  },
  trailItem: {
    marginBottom: 1,
    padding: 70,
    backgroundColor: '#fff',
    borderRadius: 3,
    // Adjust the dimensions to make the trail item container larger
    width: '100%',
    height: 300,
    alignSelf: 'center'
    },
  button: {
    backgroundColor: '#B2D8B2',
    // paddingHorizontal: 10,
    // paddingVertical: 10,
    padding: 5,
    marginBottom:10,
    borderRadius: 5,
  },
  trailName: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    // marginTop:5,
    // marginBottom: 5,
    color: '#333333',
    paddingTop: 15,
    fontSize: 20,
    flex: 1,
  },
  trailDescription: {
    fontSize: 14,
    color: '#888',
  },
  trailImage: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // alignSelf: 'flex-start',
    alignSelf: 'center',
    // width: '50%',
    height: 100,
    // marginTop:5,
    width: 100, // adjust the width and height as per your requirements
  }
});