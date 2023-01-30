import {
  Image,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles} from '../../../app.styles';
import {useDispatch, useSelector} from 'react-redux';
import {STATIC_URL} from '../../utils/URLs';
import {SetIsClickSearch} from '../../redux/action';
import {BookmarkSelections} from '../../utils/Attractions/BookmarkSelections';
import {getSelectedBookmark} from '../../utils/Attractions/BookmarkSelections';
import {DataIncluded} from './DataIncluded'
import {Bookmark} from './Bookmark';
import {TranslationFunc} from '../../utils/Translation';

export const SearchPart = ({isClickSearch}) => {
  const Translation = TranslationFunc('SEARCH')
  const {GeneralResponse} = useSelector(state => state);
  const dispatch = useDispatch();
  const [data, setData] = useState(GeneralResponse.dataAll);
  const [text, onChangeText] = useState('');

  const BookmarkSelection = BookmarkSelections();
  const GetSelectedBookmarks = getSelectedBookmark();

  const isclickSearchOff = () => {
    dispatch(SetIsClickSearch(false));
  };

  //find the element that's been search
  const searchData = text => {
    if (text) {
      const newData = GeneralResponse.dataAll.filter(item => {
        const itemData = item.content[GeneralResponse.language].title
          ? item.content[GeneralResponse.language].title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setData(newData);
      onChangeText(text);
    } else {
      setData(GeneralResponse.dataAll);
      onChangeText(text);
    }
  };

  if (isClickSearch) {
    return (
      <View style={styles.searchPart}>
        <View style={styles.search_Attractions}>
          <View
            style={styles.searchInputPart}>
            <View style={{width: 17}}>
              <Image
                style={{
                  resizeMode: 'contain',
                  height: 11,
                  width: 11,
                }}
                source={require('../icons/search.png')}
              />
            </View>
            <View style={{alignItems: 'center'}}>
              <TextInput
                style={styles.searchInput}
                onChangeText={text => searchData(text)}
                value={text}
                placeholder={Translation}
              />
            </View>
          </View>
          <View style={{alignItems: 'center', justifyContent: 'flex-end'}}>
            <TouchableOpacity
              onPress={() => {
                isclickSearchOff();
                setData(GeneralResponse.dataAll);
                onChangeText('');
              }}
              style={{width: 50, alignItems: 'flex-end'}}>
              <View style={{width: 40}}>
                <Image
                  style={styles.searchInputBackIcon}
                  source={require('../icons/left.png')}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.searchPartFlatList}>
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View>
                <TouchableOpacity
                  style={{
                    flex: 1,
                    height: 200,
                    width: 366,
                    margin: 10,
                    borderRadius: 7,
                  }}>
                  <DataIncluded included={'INCLUDED'} popular={'yes'} />
                  <Bookmark
                    bookmark={'yes'}
                    id={item._id}
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
      </View>
    );
  }
};
