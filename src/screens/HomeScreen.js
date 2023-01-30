import React, {useEffect, useState} from 'react';
import { Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from '../../app.styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import HomeScreenCard from '../components/HomeScreen/HomeScreenCard';

export default HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.background}>
      <HomeScreenCard></HomeScreenCard>
    </SafeAreaView>
  );
};
