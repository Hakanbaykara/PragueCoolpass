import {Text, View} from 'react-native';
import React from 'react';

export const DataIncluded = props => {
  if (props.included == 'INCLUDED' && props.popular == 'yes')
    return (
      <View
        style={{
          justifyContent: 'center',
          height: 25,
          width: 80,
          backgroundColor: '#FAD067',
          position: 'absolute',
          zIndex: 1,
          borderTopLeftRadius: 10,
          borderBottomRightRadius: 10,
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 14, fontWeight: 'bold'}}>INCLUDED</Text>
      </View>
    );
  else return null;
};
