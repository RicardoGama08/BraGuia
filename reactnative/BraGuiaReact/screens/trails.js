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
        navigation.navigate('TrailDetails', { trail: trail });
      };

      const renderTrailItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleTrailPress(item)}>
          <View style={styles.trailItem}>
            <Text style={styles.trailName}>{item.trail_name}</Text>
            <Text style={styles.trailDescription}>{item.trail_desc}</Text>
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
  alignItems: 'center',
  paddingHorizontal: 20,
  backgroundColor: '#E6E6FA', //Pastel Lavender
},
trailItem: {
     marginBottom: 16,
         padding: 160,
         backgroundColor: '#fff',
         borderRadius: 8,
         // Adjust the dimensions to make the trail item container larger
         width: '100%',
         minHeight: 100,
    },
    trailName: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    trailDescription: {
      fontSize: 14,
      color: '#888',
    },
    trailImage: {
      width: 100, // adjust the width and height as per your requirements
      height: 100,
      resizeMode: 'cover', // or 'contain' depending on your preference
    }
});