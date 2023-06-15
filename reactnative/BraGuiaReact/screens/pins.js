//pagina de pins

import React, {useEffect,useState} from 'react';
import {StyleSheet, View,Text,Image,Button,FlatList,TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-gesture-handler';


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
                         Cookie: `sessionid:${sessionid}; csrftoken:${csrftoken}`,
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
               <ScrollView styles={styles.pinDescription}>
               {/* <ScrollView> */}
                  <Text style={styles.pinDescription}>{item.pin_desc}</Text>
               </ScrollView>
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
      padding: 20,
      backgroundColor: '#fff',
      borderRadius: 70,
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
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 16,
      fontFamily: 'Roboto',
      color: '#333333',
      textAlign: 'center',
    },
/*     pinSection: {
      height: 150,
      width: 250,
      justifyContent: 'center',
    },
 */   
      pinDescription: {
      // marginTop:5,
      padding: 5,
      height: 400,
      // width: 250,
      fontSize: 10.75,
      color: '#888',
      // justifyContent:'center',
      // alignSelf: 'center',
      // flex: 1,
    },
  });