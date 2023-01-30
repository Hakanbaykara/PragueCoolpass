import {Image, Text, TouchableOpacity, View, FlatList} from 'react-native';
import React from 'react';
import {styles} from '../../../app.styles';
import {useSelector} from 'react-redux';
import {STATIC_URL} from '../../utils/URLs';
import {BookmarkSelections} from '../../utils/Attractions/BookmarkSelections';
import {getSelectedBookmark} from '../../utils/Attractions/BookmarkSelections';
import {DataIncluded} from './DataIncluded';
import {Bookmark} from './Bookmark';
import {TranslationFunc} from '../../utils/Translation';

export const FavoritePage = ({popular, bookmark, isClickFavorites}) => {
  const {GeneralResponse} = useSelector(state => state);
  const BookmarkSelection = BookmarkSelections();
  const GetSelectedBookmarks = getSelectedBookmark();
  const TranslationForNoFavorite = TranslationFunc('NO_FAVORITES');

  const favourites = GeneralResponse.bookmark.map(element => {
    return GeneralResponse.dataAll.find(e => e._id === element);
  });

  if (isClickFavorites && GeneralResponse.bookmark.length) {
    return (
      <View style={styles.favorites}>
        <FlatList
          data={favourites}
          keyExtractor={(item, index) => item._id}
          renderItem={({item}) => (
            <View>
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
                  <DataIncluded included={'INCLUDED'} popular={popular} />
                  <Bookmark
                    bookmark={bookmark}
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
            </View>
          )}
        />
      </View>
    );
  }
  if (isClickFavorites && !GeneralResponse.bookmark.length) {
    return (
      <View style={styles.noFavorites}>
        <Text style={styles.noFavoritesText}>{TranslationForNoFavorite}</Text>
      </View>
    );
  }
};
