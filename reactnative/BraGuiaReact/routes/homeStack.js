import React from 'react';
import {StyleSheet, View,Text,Image,Button} from 'react-native';

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import LoginScreen from '../screens/login';
import RegisterScreen from '../screens/register';
import FirstPage from '../screens/firstpage'; //pagina depois do login/registo

const screens = {
    BraGuia:{
        screen: Home
    },
    LoginScreen: {
        screen: LoginScreen
    },
    RegisterScreen: {
        screen: RegisterScreen
    },
    FirstPage:{
        screen: FirstPage
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);

