import React from 'react';
import {StyleSheet, View,Text,TextInput,Image,Button} from 'react-native';


export default function RegisterScreen() {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image
              source={require('../assets/images/register.png')}
              style={styles.image_icon}
            /> 
        </View> 
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 10 }}>Register</Text>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 36 }}>User</Text>
        <TextInput style={{ width: 299, height: 48 }} placeholder="Enter username" />
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 16 }}>First Name</Text>
        <TextInput style={{ width: 299, height: 48 }} placeholder="Enter first name" />
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 16 }}>Last Name</Text>
        <TextInput style={{ width: 299, height: 48 }} placeholder="Enter last name" />
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 16 }}>Email</Text>
        <TextInput style={{ width: 304, height: 48 }} placeholder="Enter email" keyboardType="email-address" />
        <Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 16 }}>Password</Text>
        <TextInput style={{ width: 325, height: 48 }} secureTextEntry placeholder="Enter password" />
        <Button title="Register" onPress={() => {}} />
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