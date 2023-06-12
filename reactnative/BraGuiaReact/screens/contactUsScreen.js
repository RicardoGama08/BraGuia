import React from 'react';
import {StyleSheet, View,Text,TextInput,Image,Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ContactUsScreen({navigation}) {


    return(

        <SafeAreaView style={styles.container}>
          <Text style={styles.title2}>Our contacts</Text>
        {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> */}
          <View style={styles.logoContainer}>       
              <Image
                source={require('../assets/images/email.png')}
                style={styles.image_icon}
              /> 
          </View>    
          {/* <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 10 }}>Register</Text> */}
          <View style={styles.inputContainer}>
            <Text style = {{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>Francisco Andrade:</Text>
            <Text>pg47185@alunos.uminho.pt</Text> 
            <Text style = {{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>Gonçalo Medeiros:</Text>
            <Text>pg50399@alunos.uminho.pt</Text> 
            <Text style = {{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>Ricardo Gama:</Text>
            <Text>pg50709@alunos.uminho.pt</Text> 
          </View>
        {/* <Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 36 }}>User</Text> */}    
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