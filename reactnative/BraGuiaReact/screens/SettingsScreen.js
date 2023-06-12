import React,{useState} from 'react';
import {StyleSheet, View,Text,Image,Button, TouchableOpacity} from 'react-native';
import { ScrollView, Switch } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import FeatherIcon from 'react-native-vector-icons/Feather'

const SECTIONS = [
    {
      header: 'Preferences',
      icon: 'settings',
      items: [
        { 
          icon: 'globe',
          color: '#fe9400',
          label: 'Language',
          type: 'link' 
        },

        { icon: 'bell',
          color: '#fd2d54',
          label: 'Notifications',
          type: 'boolean' 
        },

        {
          icon: 'moon',
          color: '#007afe',
          label: 'Dark Mode',
          value: false,
          type: 'boolean',
        },
        { 
          icon: 'navigation',
          color: '#32c759', 
          label: 'Location', 
          type: 'boolean' },
      ],
    },
    {
      header: 'Help',
      icon: 'help-circle',
      items: [
        { icon: 'flag', color: '#8e8d91', label: 'Report Bug', type: 'link' },
        { icon: 'mail', color: '#007afe', label: 'Contact Us', type: 'link' },
      ],
    },
    {
      header: 'Content',
      icon: 'align-center',
      items: [
        { icon: 'save', color: '#32c759', label: 'Saved', type: 'link' },
        { icon: 'download', color: '#fd2d54', label: 'Downloads', type: 'link' },
      ],
    },
    {
      header: 'Logout',
      icon: 'align-center',
      items: [
        {icon: 'log-out', color: '#fd2d54', label: 'Logout', type: 'link'}],
    }
  ];

const removeUser = async (navigation) => {
    try {
      await AsyncStorage.removeItem('csrftoken');
      await AsyncStorage.removeItem('sessionid');
      navigation.navigate("LoginScreen");
    } catch (error) {
      console.log(error);
    }
  };

export default function SettingsScreen({ navigation }){

    const settings_button_handler = (label) => {
        switch (label) {
            case "Contact Us":
                navigation.navigate("ContactUsScreen")
                break;
            case "Report Bug":
                navigation.navigate("ReportBugScreen")
                break;
            case "Logout":
                removeUser(navigation);
                break;
            default:
                break;
        }
    } 

    const [form, setForm] = useState({
        darkMode: true,
        wifi: false,
        showCollaborators: true,
        accessibilityMOde: false,
    })

    return(
        <SafeAreaView style={{flex:1}}>
            <ScrollView contentContainerStyle={styles.container2}>

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
                            <View style={styles.profileEdit}>
                                <FeatherIcon name="edit" size={15} color="#fff" ></FeatherIcon>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.profileName}>Username</Text>
                    <Text style={styles.profileEmail}>username@gmail.com</Text>
                </View>


                {SECTIONS.map(({header, items }) => (
                    <View style={styles.section} key={header}>
                        <Text style={styles.sectionHeader}>{header}</Text>

                        {items.map(({label, type, icon, color}) => (
                            <TouchableOpacity
                                key={icon}
                                onPress={() => {
                                    // handle press
                                    settings_button_handler(label);
                                } }>
                                <View style={styles.row}>
                                    <View style={[styles.rowIcon, { backgroundColor: color }]}>
                                        <FeatherIcon name={icon} color="#fff" size={18}></FeatherIcon>
                                    </View>

                                    <Text style={styles.rowLabel}>{label}</Text>
                                    {type === 'boolean' &&
                                        <Switch
                                            value={form[label]}
                                            onValueChange={value => setForm({ ...form, [label]: value })} />}


                                    {type === 'link' && (
                                        <FeatherIcon
                                            color="#0c0c0c"
                                            name="chevron-right"
                                            size={22} />
                                    )}

                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                ))}  
            </ScrollView>
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
    containter2:{
        paddingVertical: 24,
        backgroundColor: '#E6E6FA', //Pastel Lavender
    },

    profile:{
        padding: 24,
        alignItems:'center',
        justifyContent: 'center',
    },
    profileName:{
        marginTop:20,
        fontSize:19,
        fontWeight: '600',
        textAlign: 'center',
    },

    profileEmail:{
        marginTop: 6,
        fontSize: 16,
        color: "#a9a9a9",
        textAlign: 'center',
    },

    profilePicture:{
        width: 90,
        height: 90,
        borderRadius: 100,
    },

    profileEdit:{
        backgroundColor: "#52c4eb",
        width: 30,
        borderRadius: 100,
        height: 30,
        position: 'absolute',
        right: -3,
        bottom: -8,
        alignItems: 'center',
        justifyContent: 'center',
    },

    

    section:{
        paddingHorizontal: 24,

    },
    sectionHeader:{
        paddingVertical: 12,
        fontSize: 12,
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: 1.1,
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        height:50,
        backgroundColor:"#F9F9F9",
        borderRadius: 8,
        marginBottom: 12,
        paddingHorizontal: 12,
    },
    rowIcon:{
        width:32,
        height:32,
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center',
        marginRight:12,
    },
    rowLabel:{
        fontSize: 16,
        color: '#666666',
    }

  });