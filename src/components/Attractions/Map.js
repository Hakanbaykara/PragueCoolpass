import {Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../../../app.styles';
import {useSelector} from 'react-redux';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import {STATIC_URL} from '../../utils/URLs';
import {getData} from '../../utils/Attractions/FilterSelection';

export const Map = ({isClickMap}) => {
  const {GeneralResponse} = useSelector(state => state);
  const GetMyData = getData();

  // const Callout = index => {
  //   <View style={styles.mapCallout} key={index}>
  //     <View style={{height: 130, width: 160}}>
  //       <Text style={styles.imageWrapperAndroid}>
  //         <Image
  //           resizeMode="cover"
  //           source={{uri: STATIC_URL + item.images[0]}}
  //           style={styles.mapImage}
  //         />
  //       </Text>
  //       <Text
  //         style={{
  //           fontWeight: 'bold',
  //           color: 'red',
  //         }}>
  //         {item.content[GeneralResponse.language].title}{' '}
  //       </Text>
  //     </View>
  //     <View style={styles.mapCalloutHours}>
  //       <Image
  //         style={styles.attractionSearchFilterImages}
  //         source={require('../icons/clock.png')}
  //       />
  //       <Text style={styles.mapCalloutHoursText}>Now open</Text>
  //       <View></View>
  //     </View>
  //   </View>;
  // };


  const Markers = (lat, lon) => {
    const region = {
      latitude: lat,
      longitude: lon,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    };
    return region;
  };

  const MapMarkers = () => {
    return (
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: 50.073658,
          longitude: 14.41854,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
          {GetMyData && (GetMyData.map((item, index) => (
          <Marker key={index} coordinate={Markers(item.lat, item.lon)}>
            <Callout tooltip>
              <View
                style={{
                  backgroundColor: 'white',
                  heigth: 150,
                  width: 390,
                }}>
                <Image
                  source={{
                    uri: STATIC_URL + item.images[0],
                    height: 100,
                    width: '100%',
                  }}
                />
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'red',
                  }}>
                  {item.content[GeneralResponse.language].title}{' '}
                </Text>
              </View>
            </Callout>
          </Marker>
        ))

          )
          }
        {!GetMyData && GeneralResponse.dataAll.map((item, index) => (
          <Marker key={index} coordinate={Markers(item.lat, item.lon)}>
            <Callout tooltip>
              <View
                style={{
                  backgroundColor: 'white',
                  heigth: 150,
                  width: 390,
                }}>
                <Image
                  source={{
                    uri: STATIC_URL + item.images[0],
                    height: 100,
                    width: '100%',
                  }}
                />
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'red',
                  }}>
                  {item.content[GeneralResponse.language].title}{' '}
                </Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    );
  };

  if (isClickMap) {
    return (
      <View style={styles.mapPart}>
        <MapMarkers></MapMarkers>
      </View>
    );
  }
};
