import {Text, View} from 'react-native';
import React from 'react';
import {styles} from '../../../app.styles';
import {useSelector} from 'react-redux';
import {TranslationFunc} from '../../utils/Translation';

export const AttractionTitle = props => {
  const AllAttractionTranslation = TranslationFunc('ALL_ATTRACTIONS');
  const {GeneralResponse} = useSelector(state => state);

  if (props.extra == 'yes')
    return (
      <View style={styles.attractionsTitle}>
        <Text style={styles.attractionsTitleFont}> {props.title} </Text>
        {GeneralResponse.language == 'en' && (
          <Text style={styles.AttractionTitlePartAllAttractionsEn}>
            {AllAttractionTranslation}
          </Text>
        )}
        {GeneralResponse.language == 'fr' && (
          <Text style={styles.AttractionTitlePartAllAttractionsFr}>
            {AllAttractionTranslation}
          </Text>
        )}
        {GeneralResponse.language == 'de' && (
          <Text style={styles.AttractionTitlePartAllAttractionsDe}>
            {AllAttractionTranslation}
          </Text>
        )}
      </View>
    );
  else
    return (
      <View style={styles.attractionsTitle}>
        <Text style={styles.attractionsTitleFont}> {props.title} </Text>
      </View>
    );
};
