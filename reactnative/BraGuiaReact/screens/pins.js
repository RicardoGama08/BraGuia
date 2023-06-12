//pagina de pins

import React, {useEffect,useState} from 'react';
import {StyleSheet, View,Text,Image,Button,FlatList,TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function PinsScreen({ navigation }){

   const [pins, setPins] = useState([]);

   const getSessionId = async () => {
     try {
       const sessionid = await AsyncStorage.getItem('sessionid');
       return sessionid;
     } catch (error) {
       console.error('Error retrieving session ID:', error);
       return null;
     }
   };

   const getCsrfToken = async () => {
     try {
       const csrftoken = await AsyncStorage.getItem('csrftoken');
       return csrftoken;
     } catch (error) {
       console.error('Error retrieving CSRF token:', error);
       return null;
     }
   };

         useEffect(() => {     
           fetchPins();
         }, []);

         const fetchPins = async () => {
             try {
               const sessionid = await getSessionId();
               const csrftoken = await getCsrfToken();
               //console.log(csrftoken);
               //console.log(sessionid);
                   if (!sessionid || !csrftoken) {
                        console.error('Session ID or CSRF token not found in storage');
                        return;
                      }
               const response = await axios.get('https://c5a2-193-137-92-29.eu.ngrok.io/pins',{
               headers: {
                         Cookie: `${sessionid}; ${csrftoken}`,
                         'X-CSRFToken': csrftoken
                       }});
                // possivel dar problemas no futuro
               if(response && response.data){
                //console.log(response.data);
                setPins(response.data);
                //console.log(pins);

               }else
                console.error('Invalid response: ', response);
             } catch (error) {
               console.error(error);
             }
           };

         const handlePinPress = (pin) => {
           navigation.navigate('PinDetails', { pin });
         };


         const renderPinItem = ({ item }) => (
           <TouchableOpacity onPress={() => handlePinPress(item)}>
             <View style={styles.pinItem}>
               <Text style={styles.pinName}>{item.pin_name}</Text>
               <Text style={styles.pinDescription}>{item.pin_desc}</Text>
             </View>
           </TouchableOpacity>
         );

         return (
           <View style={styles.container}>
             <FlatList
               data={pins}
               renderItem={renderPinItem}
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
      padding:5,
      backgroundColor: '#E6E6FA', //Pastel Lavender
    },
    pinItem: {
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
    pinName: {
      alignSelf: 'center',
      fontSize: 20,
      fontWeight: 'bold',
       //marginTop:5,
      // marginBottom: 5,
      paddingTop: 15,
      fontSize: 20,
      fontWeight: 'bold',
      flex: 1,
    },
    pinDescription: {
      fontSize: 10,
      color: '#888',
    }
  });