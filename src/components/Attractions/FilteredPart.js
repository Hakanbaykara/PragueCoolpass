import {
  Image,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from '../../../app.styles';
import {useDispatch, useSelector} from 'react-redux';
import {STATIC_URL} from '../../utils/URLs';
import {SetIsClickFiltered, SetIsClickFilter} from '../../redux/action';
import {FilterSelection} from '../../utils/Attractions/FilterSelection';
import {BookmarkSelections} from '../../utils/Attractions/BookmarkSelections';
import {getSelectedBookmark} from '../../utils/Attractions/BookmarkSelections';
import {getData} from '../../utils/Attractions/FilterSelection';
import {DataIncluded} from './DataIncluded';
import {Bookmark} from './Bookmark';

export const FilteredPart = ({isClickFiltered}) => {
  const {GeneralResponse} = useSelector(state => state);
  const dispatch = useDispatch();
  const BookmarkSelection = BookmarkSelections();
  const GetSelectedBookmarks = getSelectedBookmark();
  const FilterSelections = FilterSelection();
  const GetMyData = getData();

  const SelectedFilterData = GeneralResponse.filterCategories.map(element => {
    return GeneralResponse.dataCategories.filter(e => e._id === element);
  });

  useEffect(() => {
    if (SelectedFilterData?.length === 0) {
      dispatch(SetIsClickFiltered(false));
      dispatch(SetIsClickFilter(false));
    }
  }, [SelectedFilterData?.length]);

  //Filter selected
  const SelectedCategories = ({id, data}) => {
    const Items = () =>
      SelectedFilterData.map(item => (
        <TouchableOpacity
          onPress={() => {
            FilterSelections(item[0]._id);
          }}>
          <View style={styles.SelectedCategoriesItems}>
            <Text> </Text>
            <Text style={styles.SelectedCategoriesItemsText}>
              {' '}
              {item[0].content[GeneralResponse.language].title}{' '}
            </Text>
            <Text>  </Text>
            <Image
              style={{
                resizeMode: 'contain',
                backgroundColor: 'white',
                height: 8,
                width: 8,
              }}
              source={require('../icons/close.png')}
            />
            <Text> </Text>
          </View>
        </TouchableOpacity>
      ));

    return (
      <View style={styles.selectedFilters}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Items />
        </ScrollView>
      </View>
    );
  };
  // Bookmark function

  if (isClickFiltered) {
    return (
      <View style={styles.fitered}>
        <SelectedCategories data={SelectedFilterData}></SelectedCategories>
        <FlatList
          style={{paddingTop: 27, backgroundColor:'#E6E6E6'}}
          data={GetMyData}
          keyExtractor={(item, index) => item._id}
          renderItem={({item}) => (
            <View>
              <TouchableOpacity
                style={{
                  flex: 1,
                  height: 200,
                  width: '92%',
                  margin: 10,
                  borderRadius: 10,
                  alignSelf: 'center',
                }}>
                <DataIncluded included={'INCLUDED'} popular={'yes'} />
                <Bookmark
                  bookmark={'yes'}
                  id={item}
                  data={GeneralResponse.bookmark}
                  onPress={() => BookmarkSelection(item)}
                  selected={GetSelectedBookmarks(item._id)}
                  item={item}></Bookmark>
                <Image
                  source={{
                    uri: STATIC_URL + item.images[0],
                    height: 200,
                    width: '100%',
                  }}
                  style={{borderRadius: 10}}></Image>
              </TouchableOpacity>
              <View>
                <Text
                  style={{
                    bottom: 35,
                    left: 25,
                    fontWeight: 'bold',
                    color: 'white',
                  }}>
                  {item.content[GeneralResponse.language].title}{' '}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
  return;
};
