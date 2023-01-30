import React from 'react';
import {Image, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import 'react-native-gesture-handler';
import HomeScreen from './src/screens//HomeScreen';
import Explore from './src/screens/Explore';
import Attractions from './src/screens/Attractions';
import Language from './src/screens/DrawerMenu/Language';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './src/redux';
import {useSelector} from 'react-redux';
import {TranslationFunc} from './src/utils/Translation';
import {fetchDataPopular} from './src/utils/FetchingData';
import {fetchDataCategories} from './src/utils/FetchingData';
import {fetchDataAll} from './src/utils/FetchingData';
import {fetchDataTranslation} from './src/utils/FetchingData';

const Stack = createNativeStackNavigator();
const Menu = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function getHeaderTitle(route) {
  const attractionName = TranslationFunc('ATTRACTIONS')
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Attractions';
  switch (routeName) {
    case 'Attractions':
      return attractionName;
    case 'FilteredAttractions':
      return 'Attractions';
    case 'Explore':
      return 'Explore';
    case 'Language':
      return 'Language';
  }
}

const TabNavigator = () => {
  const attractionName = TranslationFunc('ATTRACTIONS')
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarActiveTintColor: "#FF8600"}}
      initialRouteName={'Attractionss'}
        >
      <Tab.Screen
        name='Attractionss'
        component={Attractions}
        options={{
          title: attractionName,
          tabBarIcon: ({focused, size}) => (
            <View>
              <Image
                source={
                  focused
                    ? require('./src/components/icons/museum_orange.png')
                    : require('./src/components/icons/museum.png')
                }
                style={{height: size, width: size,}}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const MenuNavigator = () => {
  return (
    <Menu.Navigator headerMode="screen" initialRouteName="PragueCoolPass">
      <Menu.Screen name="PragueCoolPass" component={HomeScreen} options={{headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:25,
          }}} />
      <Menu.Screen
        options={({route}) => ({
          headerTitle: getHeaderTitle(route),
          title: TranslationFunc('ATTRACTIONS'),
        })}
        name="Attractions"
        component={TabNavigator}
      />
      <Menu.Screen
        options={({route}) => ({
          title: TranslationFunc('LANGUAGE'),
        })}
        name={'Language'}
        component={Language}
      />
    </Menu.Navigator>
  );
};

const AppWrapper = () => {
  const store = createStore(reducer);
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const App = () => {
  fetchDataTranslation();
  fetchDataAll();
  fetchDataCategories();
  fetchDataPopular();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        headerMode="screen"
        initialRouteName="PragueCoolPasss">
        <Stack.Screen
          options={({route}) => ({
            headerTitle: getHeaderTitle(route),
            title: 'Prague Cool Pass',
          })}
          name="PragueCoolPasss"
          component={MenuNavigator}
        />
        <Stack.Screen
          options={({route}) => ({
            headerTitle: getHeaderTitle(route),
          })}
          name="Attractionss"
          component={TabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppWrapper;
