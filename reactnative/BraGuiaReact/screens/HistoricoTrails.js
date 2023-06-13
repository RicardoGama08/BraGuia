import React, {useState, useEffect} from 'react';
import {StyleSheet, View,Text,Image,Button, TouchableOpacity, FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-gesture-handler';

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
      <Image style={styles.image2}
          source={require('../assets/images/history.png')}
          // style={{width: 40, height: 40 }} // Adjust the size as needed
      />
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
      // justifyContent: 'center',
      // alignItems: 'center',
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
      backgroundColor: '#B2D8B2',
    // paddingHorizontal: 10,
    // paddingVertical: 10,
    padding: 5,
    marginBottom:10,
    borderRadius: 5,
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
    image2: {
      width: 70,
      height: 70,
      marginTop: 20,
      marginLeft:50,
      marginBottom: 10,
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