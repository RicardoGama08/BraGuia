import React from 'react';
import {StyleSheet, View,Text,TextInput,Image,Button} from 'react-native';

export default function LoginScreen() {
  return (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image
              source={require('../assets/images/login.png')}
              style={styles.image_icon}
            /> 
        </View>    
    <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 10 }}>Login</Text>
    <Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 36 }}>User</Text>
    <TextInput style={{ width: 325, height: 40 }} placeholder="Enter username" />
    <Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 16 }}>Password</Text>
    <TextInput style={{ width: 325, height: 40 }} secureTextEntry placeholder="Enter password" />
    <Button title="Go" onPress={() => {}} />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image_icon:{
    width: 100,
    height: 100,
    resizeMode: 'contain',
  }
});