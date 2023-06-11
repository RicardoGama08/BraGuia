import React,{useState} from 'react';
import {StyleSheet, View,Text,Image,Button, TouchableOpacity} from 'react-native';
import { ScrollView, Switch } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

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
          type: 'link' },
        {
          icon: 'moon',
          color: '#007afe',
          label: 'Dark Mode',
          value: false,
          type: 'boolean',
        },
        {
          icon: 'wifi',
          color: '#007afe',
          label: 'Use Wi-Fi',
          value: true,
          type: 'boolean',
        },
        { 
          icon: 'navigation',
          color: '#32c759', 
          label: 'Location', 
          type: 'link' },
        {
          icon: 'users',
          color: '#32c759',
          label: 'Show collaborators',
          value: true,
          type: 'boolean',
        },
        {
          icon: 'airplay',
          color: '#fd2d54',
          label: 'Accessibility mode',
          value: false,
          type: 'boolean',
        },
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
  ];

export default function SettingsScreen({ navigation }){

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
                        // handle press
                    }}>
                        <View>
                        <Image
                            source={require('../assets/images/kemal.jpg')}
                            style={styles.profilePicture}
                        />
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.profileName}>Username</Text>
                    
                </View>


                {SECTIONS.map(({header, items }) => (
                    <View style={styles.section} key={header}>
                        <Text style={styles.sectionHeader}>{header}</Text>

                        {items.map(({label, type, icon, color}) => (
                            <TouchableOpacity 
                            key={icon}
                            onPress={() =>{
                                // handle press
                            }}> 
                                <View style={styles.row}>
                                    <View style={[styles.rowIcon, {backgroundColor:color}]}>
                                        <FeatherIcon name={icon} color="#fff" size={18}></FeatherIcon>
                                    </View>

                                    <Text style={styles.rowLabel}>{label}</Text>
                                    {type === 'boolean' && 
                                        <Switch 
                                            value={form[label]}
                                            onValueChange={value => setForm({...form, [label]: value})  }
                                        />
                                    }


                                    {type === 'link' && (
                                        <FeatherIcon
                                            color="#0c0c0c"
                                            name="chevron-right"
                                            size={22}
                                        />
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
      height: 70,
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
    description: {
      fontSize: 14,
      lineHeight: 20,
      fontFamily: 'OpenSans',
      color: '#666666',
      textAlign: 'justify',
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
    profilePicture:{
        width: 80,
        height: 80,
        borderRadius: 3000,
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