//pagina de acesso do login/registo

import React from 'react';
import {StyleSheet, View,Text,Image,Button, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function FirstPage({ navigation }){

    const pins_button_handler = () => {
      navigation.navigate('PinsScreen');
    }
    const trails_button_handler = () => {
      navigation.navigate('TrailsScreen');
    }

    const historico_button_handler = () => {
      navigation.navigate('HistoricoTrails');
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title2}>Sobre a BraGuia</Text>
            <View style={styles.image_icon}>       
              <Image
                source={require('../assets/images/information.png')}
                style={styles.image_icon}
              /> 
            </View>

            <Text style={styles.description}>
            Bem-vindo ao BraGuia! Quer seja um local à procura de novos locais para explorar ou um visitante, esta aplicação tem tudo o que precisa para tirar o máximo partido da sua experiência em Braga. Desde locais históricos como a Sé de Braga a marcos modernos como a escadaria do Bom Jesus do Monte, nós temos tudo o que precisa. A nossa aplicação apresenta passeios a pé que o levam pelos bairros e jóias escondidas da cidade. Cada passeio é acompanhado por mapas detalhados, dicas internas e informações históricas, facilitando a navegação pela rica cultura e história da cidade. Com BraGuia, pode explorar Braga como um local e criar memórias inesquecíveis.
            </Text>
            <Button style={styles.button} title="Pontos de Interesse" onPress={(pins_button_handler) } />
            <Text> </Text>
            <Button title="Trilhos" onPress={(trails_button_handler) } />
            <Button title="Historico" onPress={(historico_button_handler) } />




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
      width: 70,
      height: 60,
      resizeMode: 'contain',
      marginBottom: 10,
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
    description: {
      fontSize: 14,
      lineHeight: 20,
      fontFamily: 'OpenSans',
      color: '#666666',
      textAlign: 'justify',
      marginBottom: 20,
    },
    button: {
      backgroundColor: '#007AFF',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5,
      marginHorizontal: 10,
      marginBottom: 20,
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });