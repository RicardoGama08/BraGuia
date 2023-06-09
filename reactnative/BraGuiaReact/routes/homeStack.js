import React from 'react';
import {StyleSheet, View,Text,Image,Button} from 'react-native'
import { withNavigation } from 'react-navigation';
import TrailDetails from '../screens/singleTrail';
import PinDetails from '../screens/singlePin';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import LoginScreen from '../screens/login';
import RegisterScreen from '../screens/register';
import FirstPage from '../screens/firstpage'; //pagina depois do login/registo
import TrailsScreen from '../screens/trails';
import PinsScreen from '../screens/pins';
import SettingsScreen from '../screens/SettingsScreen';
import EditProfile from '../screens/EditProfile';
import ContactUsScreen from '../screens/contactUsScreen';
import ReportBugScreen from '../screens/reportBugScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HistoricoTrails from '../screens/HistoricoTrails';

import AsyncStorage from '@react-native-async-storage/async-storage';

const clearTrails = async () => {
  await AsyncStorage.removeItem("trails");
}

const screens = {
    BraGuia: {
        screen: Home,
    },
    Login: {
        screen: LoginScreen
    },
    Register: {
        screen: RegisterScreen,
    },

    HistoricoTrails: {
      screen: HistoricoTrails,
      navigationOptions: ({ navigation }) => ({
        headerTitle: 'Historico',
        headerRight: () => (
        <View style={{ marginRight: 25 }}>
          <TouchableOpacity onPress={() => clearTrails()}>
            <Image
              source={require('../assets/images/bin.png')}
              style={{ marginRight:10, width: 25, height: 25 }} // Adjust the size as needed
            />
          </TouchableOpacity>
        </View>
        ),
      }),
    },

    //<Button title="CLEAR" onPress={(historico_button_handler) } />

    FirstPage:{
        screen: FirstPage,
        navigationOptions: ({ navigation }) => ({
            headerTitle: 'BraGuia',
            headerRight: () => (
            <View style={{ marginRight: 25 }}>
              {/* <Button
                onPress={() => navigation.navigate('SettingsScreen')}
                // title="Settings"
              /> */}
                <TouchableOpacity onPress={() => navigation.navigate('SettingsScreen')}>
                    <Image
                        source={require('../assets/images/gear.png')}
                        style={{ width: 25, height: 25 }} // Adjust the size as needed
                    />
                </TouchableOpacity>
            </View>
            ),
          }),
    },
    PinsScreen:{
        screen: PinsScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitle: 'BraGuia',
            headerRight: () => (
            <View style={{ marginRight: 25 }}>
              {/* <Button
                onPress={() => navigation.navigate('SettingsScreen')}
                // title="Settings"
              /> */}
                <TouchableOpacity onPress={() => navigation.navigate('SettingsScreen')}>
                    <Image
                        source={require('../assets/images/gear.png')}
                        style={{ width: 25, height: 25 }} // Adjust the size as needed
                />
                </TouchableOpacity>
            </View>
            ),
          }),
    },
    TrailsScreen:{
        screen: TrailsScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitle: 'BraGuia',
            headerRight: () => (
            <View style={{ marginRight: 25 }}>
              {/* <Button
                onPress={() => navigation.navigate('SettingsScreen')}
                // title="Settings"
              /> */}
                <TouchableOpacity onPress={() => navigation.navigate('SettingsScreen')}>
                    <Image
                        source={require('../assets/images/gear.png')}
                        style={{ width: 25, height: 25 }} // Adjust the size as needed
                />
                </TouchableOpacity>
            </View>
            ),
          }),
    },
    TrailDetails:{
        screen: TrailDetails,
        navigationOptions: ({ navigation }) => ({
            headerTitle: 'BraGuia',
            headerRight: () => (
            <View style={{ marginRight: 25 }}>
              {/* <Button
                onPress={() => navigation.navigate('SettingsScreen')}
                // title="Settings"
              /> */}
                <TouchableOpacity onPress={() => navigation.navigate('SettingsScreen')}>
                    <Image
                        source={require('../assets/images/gear.png')}
                        style={{ width: 25, height: 25 }} // Adjust the size as needed
                />
                </TouchableOpacity>
            </View>
            ),
          }),
        
    },
    PinDetails:{
        screen: PinDetails,
        navigationOptions: ({ navigation }) => ({
            headerTitle: 'BraGuia',
            headerRight: () => (
            <View style={{ marginRight: 25 }}>
              {/* <Button
                onPress={() => navigation.navigate('SettingsScreen')}
                // title="Settings"
              /> */}
                <TouchableOpacity onPress={() => navigation.navigate('SettingsScreen')}>
                    <Image
                        source={require('../assets/images/gear.png')}
                        style={{ width: 25, height: 25 }} // Adjust the size as needed
                />
                </TouchableOpacity>
            </View>
            ),
          }),
    },
    SettingsScreen:{
        screen: SettingsScreen
    },
    EditProfile:{
        screen: EditProfile
    },
    ContactUsScreen:{
        screen: ContactUsScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitle: 'BraGuia',
            headerRight: () => (
            <View style={{ marginRight: 25 }}>
              {/* <Button
                onPress={() => navigation.navigate('SettingsScreen')}
                // title="Settings"
              /> */}
                <TouchableOpacity onPress={() => navigation.navigate('SettingsScreen')}>
                    <Image
                        source={require('../assets/images/gear.png')}
                        style={{ width: 25, height: 25 }} // Adjust the size as needed
                />
                </TouchableOpacity>
            </View>
            ),
          }),
    },
    ReportBugScreen:{
        screen: ReportBugScreen,
        navigationOptions: ({ navigation }) => ({
            headerTitle: 'BraGuia',
            headerRight: () => (
            <View style={{ marginRight: 25 }}>
              {/* <Button
                onPress={() => navigation.navigate('SettingsScreen')}
                // title="Settings"
              /> */}
                <TouchableOpacity onPress={() => navigation.navigate('SettingsScreen')}>
                    <Image
                        source={require('../assets/images/gear.png')}
                        style={{ width: 25, height: 25 }} // Adjust the size as needed
                />
                </TouchableOpacity>
            </View>
            ),
          }),
    },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);

