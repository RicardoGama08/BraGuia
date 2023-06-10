import React from 'react';
import {StyleSheet, View,Text,Image,Button} from 'react-native';


export default function Home(){
    return (
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image
              source={require('../braga2.jpg')}
              style={styles.image}
            />
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ marginBottom: 16 }}>Já tem conta registada? Faça login</Text>
            <Button title="Login" onPress={() => navigation.navigate('Login')} />
            <Text style={{ marginTop: 16, marginBottom: 16 }}>Não tem conta registada? Registe-se já!</Text>
            <Button title="Registar" onPress={() => navigation.navigate('Register')} />
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    alignSelf: 'flex-start',
    width: '100%',
    height: 355,
    resizeMode: 'cover',
  },
});