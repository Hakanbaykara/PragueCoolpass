import {Image, Text, TouchableOpacity, View, FlatList, Dimensions} from 'react-native';
import React from 'react';
import {styles} from '../../../app.styles';
import {useSelector} from 'react-redux';
import {STATIC_URL} from '../../utils/URLs';
import {TranslationFunc} from '../../utils/Translation';
import {BookmarkSelections} from '../../utils/Attractions/BookmarkSelections';
import {getSelectedBookmark} from '../../utils/Attractions/BookmarkSelections';
import {DataIncluded} from './DataIncluded';
import {Bookmark} from './Bookmark';
import {AttractionTitle} from './AttractionTitle';

// const BlueBlur = props => {
//   return (
//     <View
//       style={{
//         justifyContent: 'center',
//         height: 40,
//         width: '100%',
//         backgroundColor: '#FAD067',
//         position: 'absolute',
//         zIndex: 1,
//         borderTopLeftRadius: 10,
//         borderBottomRightRadius: 10,
//         alignItems: 'center',
//       }}></View>
//   );
// };

// For Most Popular part 'All Attractions' Navigation

// Main Component

export const Cards = props => {
  const {GeneralResponse} = useSelector(state => state);
  const Language = GeneralResponse.language;

  const BookmarkSelection = BookmarkSelections();
  const GetSelectedBookmarks = getSelectedBookmark();

  const counterData = name => {
    const filteredData = GeneralResponse.dataAll.filter(a =>
      a.categories.find(k => k == name),
    );
    return filteredData.length;
  };

  // TODO => Counter for districts

  const CounterView = props => {
    if (props.counter == 'yes') return <Text>({counterData(props.id)})</Text>;
  };

  if (props.title == TranslationFunc('Categories')) {
    return (
      <View style={styles.attractionsViews}>
        <AttractionTitle title={props.title}></AttractionTitle>
        <FlatList
          data={props.data}
          keyExtractor={(item, index) => item._id}
          horizontal
          renderItem={({item}) => (
            <View>
              <TouchableOpacity
                //onPress={() => _onPress()}
                style={{
                  flex: 1,
                  height: 150,
                  width: 225,
                  margin: 10,
                }}>
                <Image
                  source={{
                    uri: STATIC_URL + item.image,
                    height: 150,
                    width: 225,
                  }}
                  style={{borderRadius: 10}}></Image>
              </TouchableOpacity>
              <View>
                <Text
                  style={{
                    bottom: 15,
                    left: 25,
                    fontWeight: 'bold',
                    color: 'white',
                  }}>
                  {item.content[Language].title}{' '}
                  <CounterView
                    id={item._id}
                    counter={props.counter}></CounterView>
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    );
  } else
    return (
      <View style={styles.attractionsViews}>
        <AttractionTitle
          title={props.title}
          extra={props.extra}></AttractionTitle>
        <FlatList
          data={props.data}
          keyExtractor={(item, index) => item._id}
          horizontal
          renderItem={({item}) => (
            <View>
              <TouchableOpacity
                //onPress={() => _onPress()}
                style={{
                  flex: 1,
                  height: 150,
                  width: 225,
                  margin: 10,
                }}>
                <DataIncluded
                  included={props.included}
                  popular={props.popular}
                />
                <Bookmark
                  bookmark={props.bookmark}
                  id={item._id}
                  data={GeneralResponse.bookmark}
                  onPress={() => BookmarkSelection(item)}
                  selected={GetSelectedBookmarks(item._id)}
                  item={item}></Bookmark>
                <Image
                  source={{
                    uri: STATIC_URL + item.images[0],
                    height: 150,
                    width: 225,
                  }}
                  style={{borderRadius: 10}}></Image>
              </TouchableOpacity>
              <View>
                <Text
                  style={{
                    bottom: 15,
                    left: 25,
                    fontWeight: 'bold',
                    color: 'white',
                  }}>
                  {item.content[Language].title}{' '}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    );
};
