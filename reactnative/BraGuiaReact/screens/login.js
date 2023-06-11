import React from 'react';
import {StyleSheet, View,Text,TextInput,Image,Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen({navigation}) {

  const first_page_button_handler = () => {
    navigation.navigate('FirstPage')
  }

  return (
  // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  <SafeAreaView style={styles.container}>
       {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> */}
       <Text style={styles.title2}>Login</Text>
       <View style={styles.logoContainer}>       
            <Image
              source={require('../assets/images/login.png')}
              style={styles.image_icon}
            /> 
        </View>   
    <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
    </View>
    {/* <Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 36 }}>User</Text> */}    
    <Button title="Go" onPress={(first_page_button_handler)} />
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