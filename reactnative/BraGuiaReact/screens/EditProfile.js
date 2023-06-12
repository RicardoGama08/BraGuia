import {StyleSheet, View,Text,Image,Button, TouchableOpacity, ImageBackground} from 'react-native';


import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { TextInput } from 'react-native-gesture-handler';

import { useTheme } from 'react-native-paper';

export default function EditProfile({ navigation }){
    const colors = useTheme();
    return(
        <View style={styles.container}>
            <View style={{margin:3}}>
                <View style={styles.profile}>
                    <TouchableOpacity 
                    onPress={() =>{
                        // edit profile
                        navigation.navigate('EditProfile')
                    }}>
                        <View>
                            <Image
                                source={require('../assets/images/profile.png')}
                                style={styles.profilePicture}
                            />
                                <View style={styles.profileCamera}>
                                    <Icon name="camera" size={35} color="#fff" />
                                </View>

                                
                                
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.profileName}>Username</Text>
                </View>


    
                <View style={styles.action}>
                    <FontAwesome name="user-o" color={colors.text} size={20}/>
                    <TextInput 
                        placeholder="Username"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={[styles.textInput,{
                              color: colors.text, 
                            },
                        ]}
                    /> 
                </View>

                <View style={styles.action}>
                    <FontAwesome name="envelope" color={colors.text} size={20}/>
                    <TextInput 
                        keyboardType='email-address'
                        placeholder="Email"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={[styles.textInput,{
                              color: colors.text, 
                            },
                        ]}
                    /> 
                </View>

                <View style={styles.action}>
                    <FontAwesome name="phone" color={colors.text} size={20}/>
                    <TextInput 
                        keyboardType='number-pad'
                        placeholder="Phone"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={[styles.textInput,{
                              color: colors.text, 
                            },
                        ]}
                    /> 
                </View>

                <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
                    <Text style={styles.buttonTitle}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>

        
    );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    profile:{
        padding: 24,
        alignItems:'center',
        justifyContent: 'center',
    },
    profileName:{
        marginTop:18,
        fontSize:19,
        fontWeight: '600',
        textAlign: 'center',
    },
    profilePicture:{
        width: 90,
        height: 90,
        borderRadius: 100,
    },
    commandButton: {
      padding: 15,
      borderRadius: 10,
      backgroundColor: "#52c4eb",
      alignItems: 'center',
      marginTop: 10,
    },
    buttonTitle: {
      fontSize: 17,
      fontWeight: 'bold',
      color: 'white',
    },
    action: {
      flexDirection: 'row',
      marginTop: 10,
      marginBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f3f3f3',
      paddingBottom: 5,
    },
    actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF1111',
      paddingBottom: 5,
    },
    textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
    },
    profileCamera:{
        width: 30,
        borderRadius: 100,
        height: 30,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
  });