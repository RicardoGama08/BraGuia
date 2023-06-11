import React, {useState} from 'react';
import {StyleSheet, View,Text,TextInput,Image,Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';

export default function LoginScreen({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const first_page_button_handler = () => {
    navigation.navigate('FirstPage')
  }

  const handleLogin = () => {
  const credentials = [{username: 'premium_user',password: 'paiduser'},
                {username: 'standard_user',password: 'cheapuser'}];

  const user = credentials.find((cred) => cred.username === username && cred.password === password);

  if (user) {
      const data = {
        username: user.username,
        password: user.password
      };
    axios.post("https://c5a2-193-137-92-29.eu.ngrok.io/login",data,{
         withCredentials: false,
        headers: {
            "Content-Type": "application/json",},})
        .then((response) => {
            console.log(response.data);
            first_page_button_handler();
            })
        .catch((error) => {
            console.error(error.response.data);
        });
  }else{
     console.log("Invalid password or username");
    }
  };

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
          value={username}
          onChangeText={text => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
    </View>
    {/* <Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 36 }}>User</Text> */}    
    <Button title="Go" onPress={(handleLogin)} />
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