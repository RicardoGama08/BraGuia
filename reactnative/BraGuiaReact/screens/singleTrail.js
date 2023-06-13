import React from 'react';
import { View, StyleSheet,Text, ScrollView, Image, Dimensions, Linking, 
  Button, PermissionsAndroid, Platform, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Video from 'react-native-video';
import Sound from 'react-native-sound';

import RNFetchBlob from 'rn-fetch-blob';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { config } from 'rxjs';


export default function TrailDetails({navigation}){

  const trail = navigation.getParam('trail', null);

  const edges = trail.edges;



  const checkPermission = async (url) => {
    if(Platform.OS === 'ios'){
      console.log("Nos proximos episodios");
    }else{
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Request',
            message: 'App needs access to your storage to download Photos'
          }
        )

        if(granted === PermissionsAndroid.RESULTS.GRANTED){
          console.log('Storage Permission Granted.');
          downloadImage(url);
        }else{
          alert("Storage Permission not Granted");
        }
      } catch (error) {
        console.warn(error);
      }
    }
  }

  const downloadImage = (url) => {

    let date = new Date();
    let image_URL = url;
    let ext = getExtention(image_URL);
    ext = '.' + ext[0];
    // get config and fs from RNFetchBlob
    const {config, fs} = RNFetchBlob;
    let PictureDir = fs.dirs.PictureDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        // Related to Android only
        useDownloadManager: true,
        notification: true,
        path:  PictureDir + '/image_' +
        Math.floor(date.getTime() + date.getSeconds() /2 ) + ext,
        description: 'Image'  
      } 
    }

    config(options)
    .fetch('GET', image_URL)
    .then(res => {
      // Showing alert after success
      console.log('res -> ', JSON.stringify(res));
      alert('Image Downloaded Successfully')
    })
  }

  const getExtention = filename => {
    return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined
  }

  const MediaSection = ({ mediaInfo }) => {
    return (
      <View style={styles.infoContainer}>
        {mediaInfo.map((mediaItem, index) => {
          let key;
          if (mediaItem.media_type === 'I') {
            key = `image_${mediaItem.id}_${index}`;
            return (
              <View key={key}>
                <Image
                  
                  source={{ uri: mediaItem.media_file }}
                  style={{ marginLeft:20, width: 200, height: 200 }}
                />
              <TouchableOpacity onPress={() => checkPermission(mediaItem.media_file)}>
                <Image
                  source={require('../assets/images/download1.png')}
                  style={{ marginTop: 20, marginBottom: 10, marginLeft: 10, width: 50, height: 50 }}
                />
                <Text>click to download</Text>
              </TouchableOpacity>
              </View>
              
            );
          } else if (mediaItem.media_type === 'V') {
            key = `video_${mediaItem.id}_${index}`;
            return (
              <Video
                key={key}
                source={{ uri: mediaItem.media_file }}
                style={{ marginTop: 20, marginLeft:20, width: 200, height: 200 }}
                controls={true}
              />

            );
          } else if (mediaItem.media_type === 'R') {
            const sound = new Sound(mediaItem.media_file, '', error => {
              if (error) {
                console.log('Failed to load sound', error);
              }
            });
            key = `audio_${mediaItem.id}_${index}`;
            return (
              <TouchableOpacity key={key} onPress={() => sound.play()}>
                <Image
                  source={require('../assets/images/play2.png')}
                  style={{ marginTop: 20, marginBottom: 10, marginLeft: 10, width: 50, height: 50 }}
                />
                <Text>click to listen</Text>
              </TouchableOpacity>
            );
          } else {
            return null; // Handle other media types if needed
          }
        })}
      </View>
    );
  };

 const mediaInfo = edges.flatMap((edge, index) => {
   const currentEdge = edge;
       const nextEdge = edges[index + 1];

       let mediaItems = currentEdge.edge_start.media;

       if (nextEdge && currentEdge.edge_end.pin_lat === nextEdge.edge_start.pin_lat && currentEdge.edge_end.pin_lng === nextEdge.edge_start.pin_lng) {
         mediaItems = mediaItems.filter((mediaItem) => {
           const foundInNextEdge = nextEdge.edge_start.media.find(
             (nextMediaItem) => nextMediaItem.id === mediaItem.id
           );
           return !foundInNextEdge;
         });
       }

       return mediaItems;
 });


  const storeTrail = async () => {
    const trailToBeSaved = trail;
    const existingTrails = await AsyncStorage.getItem("trails");
    let newTrail = JSON.parse(existingTrails);

    if( !newTrail ){
      newTrail = []
    }

    newTrail.push( trailToBeSaved );

    await AsyncStorage.setItem("trails", JSON.stringify(newTrail) )
    .then( ()=>{
      console.log("It was saved successfully")
    } )
    .catch( ()=>{
      console.log("There was an error saving the product")
    } )
  }

    const handleOpenGoogleMaps = () => {
      storeTrail();
      const coordinates = edges.map((edge) => `${edge.edge_start.pin_lat},${edge.edge_start.pin_lng}`);
      const lastEdge = edges[edges.length - 1];
      coordinates.push(`${lastEdge.edge_end.pin_lat},${lastEdge.edge_end.pin_lng}`);
      const googleMapsUrl = `https://www.google.com/maps/dir/${coordinates.join('/')}`;
      Linking.openURL(googleMapsUrl);
      
    };

    const renderMarkers = () => {
      const markers = edges.map((edge) => (
        <Marker
          key={`start_${edge.id}`}
          coordinate={{
            latitude: edge.edge_start.pin_lat,
            longitude: edge.edge_start.pin_lng,
          }}
          title={edge.edge_start.pin_name}
          description={edge.edge_start.pin_desc}
        />
      ));

      const lastEdge = edges[edges.length - 1];
      markers.push(
        <Marker
          key={`end_${lastEdge.id}`}
          coordinate={{
            latitude: lastEdge.edge_end.pin_lat,
            longitude: lastEdge.edge_end.pin_lng,
          }}
          title={lastEdge.edge_end.pin_name}
          description={lastEdge.edge_end.pin_desc}
        />
      );

      return markers;
    };

    const renderPolylines = () => {
      return edges.map((edge) => (
        <Polyline
          key={edge.id}
          coordinates={[
            {
              latitude: edge.edge_start.pin_lat,
              longitude: edge.edge_start.pin_lng,
            },
            {
              latitude: edge.edge_end.pin_lat,
              longitude: edge.edge_end.pin_lng,
            },
          ]}
          strokeColor="#F00"
          strokeWidth={3}
        />
      ));
    };

    const initialRegion = {
      latitude: edges[0].edge_start.pin_lat,
      longitude: edges[0].edge_start.pin_lng,
      latitudeDelta: 0.009,
      longitudeDelta: 0.004,
    };

  return (
      <ScrollView style={styles.container}>
        <Text style={styles.trailName}>{trail.trail_name}</Text>
        <Image
          source={require('../assets/images/map.png')}
          style={styles.image}
        />
        <Text style={styles.trailDescription}>{trail.trail_desc}</Text>
        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Duration:</Text>
            <Text style={styles.infoText}>{trail.trail_duration}</Text>
          </View>  
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Difficulty:</Text>
            <Text style={styles.infoText}>{trail.trail_difficulty}</Text>
          </View>
          <View style={styles.infoContainer}>
              <TouchableOpacity onPress={handleOpenGoogleMaps}>
                <Image style={styles.image2}
                  source={require('../assets/images/start.png')}
                  // style={{width: 40, height: 40 }} // Adjust the size as needed
                />
              </TouchableOpacity>  
              <MapView style={styles.map} initialRegion={initialRegion}>
                {renderMarkers()}
                {renderPolylines()}
              </MapView>
              
          </View>
          
        </View>
          <MediaSection mediaInfo={mediaInfo} 
        />

      </ScrollView>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 70,
    paddingVertical: 20,
    paddingHorizontal: 60,
    height: 300,
    marginBottom: 20,
    // backgroundColor: '#FFFFFF',
  },
  infoContainer: {
    flexDirection: 'column',
    height: 870,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    // justifyContent: 'space-between',
    // flexWrap: 'wrap',
    // height: 50,
  },
  infoLabel: {
    marginRight: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    // height: 60,
  },
  infoText: {
    fontSize: 17,
    color: '#777777',
    fontWeight: 'bold',
    marginLeft: 20,
  },
  trailName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333333',
    // marginBottom: 10,
  },
  trailDescription: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 20,
    color: '#555555',
    // justifyContent: 'center',

  },
  trailDuration: {
    fontSize: 16,
    marginBottom: 8,
    height: 50,
  },
  trailDifficulty: {
    fontSize: 16,
    marginBottom: 50,
    height: 50,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  image: {
    width: 40,
    height: 40,
  },
  image2: {
    width: 60,
    height: 60,
    marginTop: 20,
    marginLeft:100,
    marginBottom: 5,
  },
  map: {
      // width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      width: 500,
    },
    button: {
          backgroundColor: '#B2D8B2',
          // paddingHorizontal: 10,
          // paddingVertical: 10,
          padding: 5,
          marginBottom:10,
          borderRadius: 5,
        },
  });