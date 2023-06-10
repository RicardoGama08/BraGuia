import React from 'react';
import {StyleSheet, View,Text,TextInput,Image,Button} from 'react-native';


export default function RegisterScreen() {
  return (
        <View style={styles.container}>
          <Text style={styles.title}>Register</Text>
        {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> */}
          <View style={styles.logoContainer}>       
              <Image
                source={require('../assets/images/register.png')}
                style={styles.image_icon}
              /> 
          </View>    
          {/* <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 10 }}>Register</Text> */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Username"
            />
            <TextInput
              style={styles.input}
              placeholder="Name"
            />
            <TextInput
              style={styles.input}
              placeholder="Surname"
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
            />
          </View>
        {/* <Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 36 }}>User</Text> */}    
        <Button title="Go" onPress={() => {}} />
      </View>
);

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
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