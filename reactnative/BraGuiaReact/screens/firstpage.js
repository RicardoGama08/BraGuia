//pagina de acesso do login/registo
import React from 'react';
import {StyleSheet, View,Text,Image,Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function FirstPage({ navigation }){
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Primeira Pagina</Text>
            <View style={styles.logoContainer}>       
                <Image
                    source={require('../assets/images/login.png')}
                    style={styles.image_icon}
                /> 
            </View>
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
    logoContainer: {
      alignItems: 'center',
      marginBottom: 40,
    },
    image_icon:{
      width: 100,
      height: 100,
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
  });