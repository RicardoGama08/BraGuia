import React from 'react';
import {StyleSheet, View,Text,Image,Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home({ navigation }){

    const login_button_handler = () => {
      navigation.navigate('LoginScreen')
    } 

    const register_button_handler = () => {
      navigation.navigate('RegisterScreen')
    }


    return (
      <SafeAreaView style={styles.container}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image
              source={require('../assets/images/braga2.jpg')}
              style={styles.image}
            />
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ marginBottom: 16 }}>Já tem conta registada? Faça login</Text>
            <Button title="Login" onPress={(login_button_handler) }/> 
            {/* => navigation.navigate('Login')}  */}
            <Text style={{ marginTop: 16, marginBottom: 16 }}>Não tem conta registada? Registe-se já!</Text>
            <Button title="Register" onPress={(register_button_handler) } />
          </View>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6FA', //Pastel Lavender
  },
  image: {
    alignSelf: 'flex-start',
    width: '100%',
    height: 355,
    resizeMode: 'cover',
  },
});