import React, {useState, useEffect} from 'react';
import {StyleSheet, View,Text,Image,Button, TouchableOpacity, FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HistoricoTrails({ navigation }){
    
  const [trails, setTrails] = useState([]);
  
  const handleTrailPress = (item) => {
    navigation.navigate('TrailDetails', { trail: item });
  };

  useEffect(() => {
    const getTrails = async () => {
      const existingTrails = await AsyncStorage.getItem("trails");
      if (existingTrails) {
        setTrails(JSON.parse(existingTrails));
      }
    };

    getTrails();
  }, []);

  const renderTrailItem = ({ item }) => (
    <TouchableOpacity style={styles.button} onPress={() => handleTrailPress(item)}>
      <View style={styles.trailItem}>
        <Text style={styles.trailName}>{item.trail_name}</Text>
        {/* <Text style={styles.trailDescription}>{item.trail_desc}</Text> */}
        <Image source={{ uri: item.trail_img }} style={styles.trailImage} />
      </View>
    </TouchableOpacity>
  );


  return(
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
      height: 60,
      resizeMode: 'contain',
      marginBottom: 10,
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
      marginBottom: 20,
    },
    button: {
      backgroundColor: '#007AFF',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5,
      marginHorizontal: 10,
      marginBottom: 20,
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });