import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  RefreshControl,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../../../app.styles';
import {STATIC_URL} from '../../utils/URLs';
import {useSelector, useDispatch} from 'react-redux';
import {AllPart} from './fourTouchables';
import {BASE_URL} from '../../utils/URLs';
import {SetDataPopular} from '../../redux/action';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export default HomeScreenCard = props => {
  const {GeneralResponse} = useSelector(state => state);
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();
  const DATA_POPULAR_URL = BASE_URL + '/object/attraction/top-attractions';
  const Language = GeneralResponse.language;

  const fetchdata = async () => {
    {
      try {
        const response = await fetch(DATA_POPULAR_URL);
        const json = await response.json();
        dispatch(SetDataPopular(json));
      } catch (error) {
        console.error(error);
      }
    }
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchdata();
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <View style={styles.homeScreen}>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        data={GeneralResponse.dataPopular}
        keyExtractor={({_id}, index) => _id}
        renderItem={({item}) => (
          <View style={{width: '100%'}}>
            <TouchableOpacity
              //onPress={() => _onPress()}
              style={{
                flex: 1,
                flexDirection: 'column',
                margin: 10,
                alignSelf: 'center',
                borderRadius: 10,
                height: 200,
                width: '92%',
              }}>
              <Image source={{uri: STATIC_URL + item.images[0], height: 200}} />
            </TouchableOpacity>
            <View>
              <Text
                style={{
                  bottom: 35,
                  left: 25,
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                {item.content[Language].title}
              </Text>
            </View>
          </View>
        )}
        ListHeaderComponent={AllPart}
      />
    </View>
  );
};
