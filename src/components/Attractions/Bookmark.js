import {
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {styles} from '../../../app.styles';

export const Bookmark = ({bookmark, selected, onPress}) => {
  if (bookmark == 'yes')
    return (
      <TouchableOpacity
        style={{
          position: 'absolute',
          zIndex: 1,
          alignSelf: 'flex-end',
          right: 5,
          top: 5,
        }}
        onPress={onPress}>
        {!selected && (
          <Image
            style={styles.attractionBookmarkImages}
            source={require('../icons/love.png')}
          />
        )}
        {selected && (
          <Image
            style={styles.attractionBookmarkImages}
            source={require('../icons/like.png')}
          />
        )}
      </TouchableOpacity>
    );
};
