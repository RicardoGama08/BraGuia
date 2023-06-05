/**
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

/*function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}*/

//function App(): JSX.Element {
  /*const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}*/

/*const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: MainActivity,
      navigationOptions: ({ navigation }) => ({
        title: 'Your App Title',
        headerRight: (
          <HeaderButtons>
            <Item
              title="Add"
              iconName="add"
              onPress={() => {
                // Handle your action here
              }}
            />
          </HeaderButtons>
        ),
      }),
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#ffffff', // Customize your header background color
      },
      headerTintColor: '#000000', // Customize your header text color
    },
  }
);*/


const MainActivity = ({ navigation }) => {

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require('./braga2.jpg')}
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
};

function RegisterScreen() {
  return (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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

function LoginScreen() {
  return (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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
  image: {
    alignSelf: 'flex-start',
    width: '100%',
    height: 355,
    resizeMode: 'cover',
  },
});

export default MainActivity;



