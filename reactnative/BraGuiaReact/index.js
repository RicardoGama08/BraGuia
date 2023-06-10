/**
 * @format
 */

import {AppRegistry, Text} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

import {useState} from 'react';
import {View, ScrollView, SafeAreaView} from 'react-native';
// import {Stack, useRouter} from 'expo-router';

import {COLORS, icons, images, SIZES} from './constants';
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from './components';

const Home = () => {
    const router = useRouter();

    return(
        // O Safe Area permite a visualizacao do conteudo sem interferencia dos home buttons ou notches do device 
        <SafeAreaView style={{flex:1, backgroundColor:COLORS.lightWhite}}>
            <Stack.Screen
                options={{
                    headerStyle:{backgroundColor:COLORS.lightWhite},
                    headerTitle: "BraGuia"
                }}
            />
        </SafeAreaView>
    )
}

// export default Home