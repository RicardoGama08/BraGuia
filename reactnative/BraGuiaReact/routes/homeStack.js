import React from 'react';
import {StyleSheet, View,Text,Image,Button} from 'react-native'
import { withNavigation } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import LoginScreen from '../screens/login';
import RegisterScreen from '../screens/register';
import FirstPage from '../screens/firstpage'; //pagina depois do login/registo
import TrailsScreen from '../screens/trails'
import PinsScreen from '../screens/pins'
import SettingsScreen from '../screens/SettingsScreen';
import EditProfile from '../screens/EditProfile';
import { TouchableOpacity } from 'react-native-gesture-handler';

const screens = {
    BraGuia: {
        screen: Home,
    },
    LoginScreen: {
        screen: LoginScreen
    },
    RegisterScreen: {
        screen: RegisterScreen
    },
    FirstPage:{
        screen: FirstPage,
        navigationOptions: ({ navigation }) => ({
            headerTitle: 'BraGuia',
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate('SettingsScreen')}
                title="Settings"
              />
            ),
          }),
    },
    PinsScreen:{
        screen: PinsScreen
    },
    TrailsScreen:{
        screen: TrailsScreen
    },
    TrailDetails:{
        screen: TrailsScreen
    },
    PinDetails:{
        screen: PinsScreen
    },
    SettingsScreen:{
        screen: SettingsScreen
    },
    EditProfile:{
        screen: EditProfile
    },
    
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);

