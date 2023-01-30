import {View, StyleSheet, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useFocusEffect} from '@react-navigation/native';

export default Explore = () => {
    const navigation = useNavigation();
    
    return (
        <TouchableOpacity style={{height:50, weight: 50,}}>
            <Text>Click to go Home</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  background:{
    backgroundColor:'white',
    flex:1,
    //flexDirection:'row', //main y, secondary x
    flexDirection:'column', //main x, secondary y
    justifyContent:'flex-start',
    alignItems:'flex-start',
    flexWrap:'wrap',
    alignContent:'center'
  }
});