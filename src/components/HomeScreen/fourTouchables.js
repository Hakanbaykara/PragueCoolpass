import { Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {styles} from '../../../app.styles';
import {useNavigation} from '@react-navigation/native';
import {TranslationFunc} from '../../utils/Translation'

export const AllPart = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.fourTouchablesBasic}>
      <View style={styles.main}>
        <TouchableOpacity style={styles.fourTouchables}>
          <Image
            style={styles.fourtouchableImage}
            source={require('./myCoolPass1.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.fourTouchables}
          onPress={() => navigation.navigate('Attractions')}>
          <Image
            style={styles.fourtouchableImage}
            source={require('./Attractions1.jpg')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        <TouchableOpacity style={styles.fourTouchables}>
          <Image
            style={styles.fourtouchableImage}
            source={require('./Alerts1.jpg')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.fourTouchables}>
          <Image
            style={styles.fourtouchableImage}
            source={require('./Buy1.jpg')}
          />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '700',
          color: 'black',
          top: 25,
          left: 16,
        }}>
        {TranslationFunc('Most Popular')}
      </Text>
    </View>
  );
};
