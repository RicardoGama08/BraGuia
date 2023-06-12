import React, { useState } from 'react';
import {StyleSheet, View,Text,TextInput,Image,Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Mailer from 'react-native-mail';


export default function ReportBugScreen({navigation}) {

    const sendBugReport = (bugReport) => {
        const emailSubject = 'Bug Report';
        const emailBody = `Bug Report:\n\n${bugReport}`;
        
      
        Mailer.mail(
          {
            subject: emailSubject,
            body: emailBody,
            recipients: ['pg47185@alunos.uminho.pt'],
            // recipients: ['pg47185@alunos.uminho.pt', 'pg50399@alunos.uminho.pt', 'pg50709@alunos.uminho.pt'],
            isHTML: false,
          },
          (error, event) => {
            if (error) {
              console.error('Error sending email:', error);
            }
          }
        );
      };

        const [bugReport, setBugReport] = useState('');
        const [submitted, setSubmitted] = useState(false);
      
        const handleSendBugReport = () => {
          sendBugReport(bugReport);
          setSubmitted(true);
        };
      
      

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title2}>Send us your feedback.</Text>
            <View style={styles.logoContainer}>       
                <Image
                    source={require('../assets/images/feedback.png')}
                    style={styles.image_icon}
                /> 
            </View>    
          

        <View>
            {submitted ? (
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
                    Bug report submitted! Thank you for your feedback.
                </Text>
            ) : null}
            <TextInput
                placeholder="Enter bug report..."
                value={bugReport}
                onChangeText={setBugReport}
            />
            <Button title="Submit" onPress={handleSendBugReport} />
        </View>
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