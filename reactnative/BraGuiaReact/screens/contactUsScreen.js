import React from 'react';
import {StyleSheet, View,Text,TextInput,Image,Button, Linking} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ContactUsScreen({navigation}) {

    const handleMakePhoneCall = (phoneNumber) => {
      Linking.openURL(`tel:${phoneNumber}`);
    };

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
            <Text style = {{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>University of Minho:</Text>
            <Text>alunos@uminho.pt</Text>
            <Text style = {{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>Customer Support:</Text>
            <Text>braguia@support.com</Text>
            <Text style = {{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>Medical Emergency Service:</Text>
            <Text>112@gmail.com</Text>
          </View>
          <Button title="Customer Support" onPress={() => handleMakePhoneCall('924567891')} />
          <Button title="Medical Emergency Service" onPress={() => handleMakePhoneCall('112')} />
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