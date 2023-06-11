import React from 'react';
import {StyleSheet, View,Text,Image,Button, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

//import FeatherIcon from 'react-native-vector-icons/Feather'

export default function SettingsScreen({ navigation }){

    return(
        <SafeAreaView style={{flex:1}}>
            <ScrollView contentContainerStyle={styles.container2}>
                <View style={styles.profile}>
                    <TouchableOpacity 
                        onPress={() =>{
                            // handle press
                        }}>
                        <View>
                        <Image
                            source={require('../assets/images/kemal.jpg')}
                            style={styles.profilePicture}
                        />
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.profileName}>Username</Text>
                    
                </View>
            </ScrollView>
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

    containter2:{
        paddingVertical: 24,
        backgroundColor: '#E6E6FA', //Pastel Lavender
    },

    profile:{
        padding: 24,
        alignItems:'center',
        justifyContent: 'center',
    },
    profileName:{
        marginTop:20,
        fontSize:19,
        fontWeight: '600',
        textAlign: 'center',
    },
    profilePicture:{
        width: 80,
        height: 80,
        borderRadius: 3000,
    },

  });