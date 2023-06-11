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
                   if (!sessionid || !csrftoken) {
                        console.error('Session ID or CSRF token not found in storage');
                        return;
                      }
               const response = await axios.get('https://c5a2-193-137-92-29.eu.ngrok.io/pins',{
               headers: {
                         Cookie: `${sessionid}; ${csrftoken}`,
                         'X-CSRFToken': csrftoken
                       }});
               if(response && response.data)
                    setPins(response.data);
               else console.error('Invalid responde: ', response);
             } catch (error) {
               console.error(error);
             }
           };

         const handlePinPress = (pin) => {
           navigation.navigate('SinglePin', { pin });
         };

         const renderPinItem = ({ item }) => (
           <TouchableOpacity onPress={() => handlePinPress(item)}>
             <View style={styles.pinItem}>
               <Text style={styles.pinName}>{item.name}</Text>
               <Text style={styles.pinDescription}>{item.description}</Text>
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
      namePin: {
        margin: 8,
        // Add text styles
      },
      pinItemItem: {
            marginBottom: 16,
            padding: 16,
            backgroundColor: '#fff',
            borderRadius: 8,
          },
          pinNameName: {
            fontSize: 16,
            fontWeight: 'bold',
          },
          pinDescription: {
            fontSize: 14,
            color: '#888',
          },
  });