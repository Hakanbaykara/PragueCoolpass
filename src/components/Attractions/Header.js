import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from '../../../app.styles';
import {useDispatch, useSelector} from 'react-redux';
import {
  SetIsClickMap,
  SetIsClickFavorites,
  SetIsClickFilter,
  SetIsClickSearch,
  SetIsClickFiltered
} from '../../redux/action';
import {TranslationFunc} from '../../utils/Translation';
import {Map} from './Map';
import {SearchPart} from './SearchPart';
import {FilterPart} from './FilterPart';
import {FilteredPart} from './FilteredPart';
import {FavoritePage} from './FavoritePage';

export const Header = props => {
  const {GeneralResponse} = useSelector(state => state);
  const dispatch = useDispatch();

  // It causes isClicks changes

  const onPressIsClick = (name, setName) => {
    var names = [SetIsClickFavorites,SetIsClickFilter, SetIsClickFiltered, SetIsClickSearch, SetIsClickMap]
    if (name == GeneralResponse.isClickFilter && GeneralResponse.isClickFiltered){
      dispatch(setName(true))
      dispatch(SetIsClickFiltered(false))
    }
    if (GeneralResponse.filterCategories.length > 0 && GeneralResponse.isClickMap && name == GeneralResponse.isClickMap){
      dispatch(setName(false))
      dispatch(SetIsClickFiltered(true))
    }
    if (GeneralResponse.isClickFilter && name == GeneralResponse.isClickFilter){return}
    if (!name) {
      dispatch(setName(true));
      const newList = names.filter(listItem => listItem !== setName);
      for (let i = 0; i < newList.length; i++) {
        dispatch(newList[i](false))
      }
    } else {
      dispatch(setName(false));
    }
  };

  return (
    <View>
      <SearchPart isClickSearch={GeneralResponse.isClickSearch}></SearchPart>
      <View style={styles.attractionsSearchPart}>
        <TouchableOpacity
          onPress={() =>
            onPressIsClick(
              GeneralResponse.isClickFavorites,
              SetIsClickFavorites,
            )
          }>{GeneralResponse.isClickFavorites &&
          <Image
            style={styles.attractionSearchFilterImages}
            source={require('../icons/love_black.png')}
          />}
          {!GeneralResponse.isClickFavorites &&
          <Image
            style={styles.attractionSearchFilterImages}
            source={require('../icons/love2.png')}
          />}
        </TouchableOpacity>
        <View style={styles.AttractionMapFilter}>
          <TouchableOpacity
            onPress={() => {
              onPressIsClick(GeneralResponse.isClickMap, SetIsClickMap);
            }}>
            <View style={styles.AtractionIcons}>
              <Image
                style={{
                  resizeMode: 'contain',
                  height: 20,
                  width: 20,
                }}
                source={require('../icons/pin.png')}
              />
              <Text> </Text>
              <Text style={styles.AttractionFilterMapText}>
                {TranslationFunc('FILTER_BAR_MAP')}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              onPressIsClick(GeneralResponse.isClickFilter, SetIsClickFilter);
            }}>
            <View style={styles.AtractionIcons}>
              <Image
                style={{
                  resizeMode: 'contain',
                  height: 20,
                  width: 20,
                }}
                source={require('../icons/filter.png')}
              />
              <Text> </Text>
              <Text style={styles.AttractionFilterMapText}>
                {TranslationFunc('FILTER_BAR_FILTERS')}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            onPressIsClick(GeneralResponse.isClickSearch, SetIsClickSearch);
          }}>
          <Image
            style={styles.attractionSearchFilterImages}
            source={require('../icons/search.png')}
          />
        </TouchableOpacity>
      </View>
      <Map isClickMap={GeneralResponse.isClickMap}></Map>
      <FilteredPart
        isClickFiltered={GeneralResponse.isClickFiltered}
        popular={'yes'}
        bookmark={'yes'}></FilteredPart>
      <FilterPart
        isClickFilter={GeneralResponse.isClickFilter}
        isClickFiltered={GeneralResponse.isClickFiltered}></FilterPart>
      <FavoritePage
        isClickFavorites={GeneralResponse.isClickFavorites}
        popular={'yes'}
        bookmark={'yes'}></FavoritePage>
    </View>
  );
};
