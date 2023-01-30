import {Image, Text, TouchableOpacity, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../../../app.styles';
import {useDispatch, useSelector} from 'react-redux';
import {SetIsClickFilter, SetIsClickFiltered} from '../../redux/action';
import {TranslationFunc} from '../../utils/Translation';
import {FilterSelection} from '../../utils/Attractions/FilterSelection';
import {getSelectedFilter} from '../../utils/Attractions/FilterSelection';


export const FilterPart = ({isClickFilter}) => {
  const dispatch = useDispatch();
  const {GeneralResponse} = useSelector(state => state);
  const FilterSelections = FilterSelection();
  const GetSelectedFilters = getSelectedFilter();

  const count_result_translation = TranslationFunc('COUNT_RESULTS');
  const count = GeneralResponse.filterCategories.length;


  const onPressIsClick = (name, setName) => {
    if (!name) {
      dispatch(setName(true));
      dispatch(SetIsClickFilter(false));
    } else {
      dispatch(setName(false));
    }
  };

  const CategoriesOfAttractions = ({id, selected}) => {
    return (
      <TouchableOpacity
        style={{alignSelf: 'flex-start'}}
        onPress={() => {
          FilterSelections(GeneralResponse.dataCategories[id]._id);
          console.log(GeneralResponse.dataCategories[id]._id);
        }}>
        {!selected && (
          <View>
            <View style={styles.filterCategoriesnotSelected}>
              <Image
                style={{
                  resizeMode: 'contain',
                  height: 50,
                  width: 50,
                }}
                source={require('../icons/check.png')}
              />
            </View>
            <View style={styles.filtercategoriesNotSelectedTextView}>
              <Text style={styles.filtersTitle}>
                {
                  GeneralResponse.dataCategories[id].content[
                    GeneralResponse.language
                  ].title
                }
              </Text>
            </View>
          </View>
        )}
        {selected && (
          <View>
            <View style={styles.filterCategoriesSelected}>
              <View style={styles.filterCategoriesSelectedOrangeView}>
                <Image
                  style={{
                    resizeMode: 'contain',
                    height: 50,
                    width: 50,
                  }}
                  source={require('../icons/checkOrange.png')}
                />
              </View>
            </View>
            <View style={styles.filtercategoriesSelectedTextView}>
              <Text style={styles.filtersTitleSelected}>
                {
                  GeneralResponse.dataCategories[id].content[
                    GeneralResponse.language
                  ].title
                }
              </Text>
            </View>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  if (isClickFilter) {
    return (
      <View style={styles.filters}>
        <ScrollView
          style={styles.filterPartScrollView}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <View style={styles.filterPartCategories}>
            <View style={styles.categoriesOfAttraction}>
              <CategoriesOfAttractions
                selected={GetSelectedFilters(
                  GeneralResponse.dataCategories[0]._id,
                )}
                id={0}></CategoriesOfAttractions>
              <CategoriesOfAttractions
                selected={GetSelectedFilters(
                  GeneralResponse.dataCategories[1]._id,
                )}
                id={1}></CategoriesOfAttractions>
              <CategoriesOfAttractions
                selected={GetSelectedFilters(
                  GeneralResponse.dataCategories[2]._id,
                )}
                id={2}></CategoriesOfAttractions>
            </View>
            <View style={styles.categoriesOfAttraction}>
              <CategoriesOfAttractions
                selected={GetSelectedFilters(
                  GeneralResponse.dataCategories[3]._id,
                )}
                id={3}></CategoriesOfAttractions>
              <CategoriesOfAttractions
                selected={GetSelectedFilters(
                  GeneralResponse.dataCategories[4]._id,
                )}
                id={4}></CategoriesOfAttractions>
              <CategoriesOfAttractions
                selected={GetSelectedFilters(
                  GeneralResponse.dataCategories[5]._id,
                )}
                id={5}></CategoriesOfAttractions>
            </View>
            <View style={styles.categoriesOfAttraction}>
              <CategoriesOfAttractions
                selected={GetSelectedFilters(
                  GeneralResponse.dataCategories[6]._id,
                )}
                id={6}></CategoriesOfAttractions>
              <CategoriesOfAttractions
                selected={GetSelectedFilters(
                  GeneralResponse.dataCategories[7]._id,
                )}
                id={7}></CategoriesOfAttractions>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              onPressIsClick(
                GeneralResponse.isClickFiltered,
                SetIsClickFiltered,
              );
            }}
            style={styles.bigUglyOrangeButton}>
            <View>
              <Text> {count_result_translation} </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  } else return;
};
