import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LoginScreen from '../screens/login';
import RegisterScreen from '../screens/register';
import Home from '../screens/home';
import React from 'react';
import {StyleSheet, View,Text,Image,Button} from 'react-native';


const screens = {
    BraGuia:{
        screen: Home
    },
    LoginScreen: {
        screen: LoginScreen
    },
    RegisterScreen: {
        screen: RegisterScreen
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);

