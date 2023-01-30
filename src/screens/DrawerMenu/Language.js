import {View, SafeAreaView, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {styles} from '../../../app.styles';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {SetLanguage} from '../../redux/action';
import {useDispatch, useSelector} from 'react-redux';

export default Language = () => {
  const Menu = createDrawerNavigator();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {GeneralResponse} = useSelector(state => state);

  const ImageUrl = '../../components/icons/';

  const AllLanguages = [
    {
      code: 'en',
      name: 'English',
      id: 1,
      image: 'english.png',
    },
    {
      code: 'de',
      name: 'Deutch',
      id: 2,
      image: 'Deutch.png',
    },
    {
      code: 'fr',
      name: 'Françias',
      id: 3,
      image: 'Francias.png',
    },
  ];

  const Languages = () => {
    return (
      <FlatList
        data={AllLanguages}
        keyExtractor={({id}) => id}
        renderItem={({item}) => (
          <View style={styles.languages}>
            <TouchableOpacity
              style={styles.languagesTouchable}
              onPress={() => {
                dispatch(SetLanguage(item.code));
              }}>
              <Text style={styles.languageText}>{item.name}</Text>
              {
                item.code == 'en' && (
                  <Image
                    source={require('./english.png')}
                    style={{height: 20, width: 20}}
                  />
                )
              }
              {
                (item.code == 'de' && (
                  <Image
                    source={require('./Deutch.png')}
                    style={{height: 20, width: 20}}
                  />
                ))
              }
              {
                (item.code == 'fr' && (
                  <Image
                    source={require('./Francias.png')}
                    style={{height: 20, width: 20}}
                  />
                ))
              }
            </TouchableOpacity>
            <View
              style={{
                height: 1,
                width: '100%',
                backgroundColor: '#313233',
                opacity: 0.13,
              }}></View>
          </View>
        )}
      />
    );
  };

  return (
    <SafeAreaView style={styles.backgroundLanguage}>
      <Languages></Languages>
    </SafeAreaView>
  );
};
