import React, {useState} from 'react';
import {StyleSheet, View,Text,TextInput,Image,Button,Modal,Alert} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {database} from '../databases';
import {userModel} from '../databases/models/userModel';

export default function RegisterScreen({navigation}) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');


  async function handleRegister(){
    console.log("You pressed me");
    await database.write(async() => {
      await database.get('users').create(data => {
        data.username = username,
        data.password = password,
        data.email = email,
        data.name = name,
        data.surname = surname
      })
    })
    Alert.alert('Success', 'Registration successful');
    navigation.navigate('Login');
  }

  return (
        <SafeAreaView style={styles.container}>
          <Text style={styles.title2}>Register</Text>
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
              value={username}
              onChangeText={text => setUsername(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={name}
              onChangeText={text => setName(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Surname"
              value={surname}
              onChangeText={text => setSurname(text)}
            />
          </View>
        {/* <Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 36 }}>User</Text> */}   
        <Button title="Register" onPress={(handleRegister)} /> 

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