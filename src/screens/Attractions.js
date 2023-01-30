import {View, SafeAreaView, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native-gesture-handler';
import {styles} from '../../app.styles';
import {useSelector} from 'react-redux';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Cards} from '../components/Attractions/Cards'
import {Header} from '../components/Attractions/Header'
import {TranslationFunc} from '../utils/Translation';

export default Attractions = () => {
  const Menu = createDrawerNavigator();
  const navigation = useNavigation();
  const {GeneralResponse} = useSelector(state => state);
  console.log(Dimensions.get('screen').width)
  console.log(Dimensions.get('screen').height)

  return (
    <SafeAreaView style={styles.background}>
      <Header></Header>
      <Cards
        isClickFavorites={GeneralResponse.isClickFavorites}
        title={TranslationFunc('Most Popular')}
        data={GeneralResponse.dataPopular}
        images={'images[0]'}
        popular={'yes'}
        bookmark={'yes'}
        included={'INCLUDED'}
        extra={'yes'}></Cards>
      <Cards
        title={TranslationFunc('AREAS')}
        data={GeneralResponse.dataAll}
        images={'images[0]'}></Cards>
      <Cards
        title={TranslationFunc('Categories')}
        data={GeneralResponse.dataCategories}
        images={'images'}
        counter={'yes'}></Cards>
    </SafeAreaView>
  );
};