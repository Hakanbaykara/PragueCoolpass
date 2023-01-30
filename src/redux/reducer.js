import {forModalPresentationIOS} from 'react-navigation-stack/lib/typescript/src/vendor/TransitionConfigs/CardStyleInterpolators';

const INITIAL_STATE = {
  dataAll: [],
  dataCategories: [],
  dataTranslation: {},
  dataMenu: [],
  bookmark: [],
  isClickFavorites: false,
  isClickFilter: false,
  isClickFiltered: false,
  isClickSearch: false,
  isClickMap: false,
  isClickMapMarker: false,
  language: 'en',
  filterCategories: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_DATA_ALL':
      return {...state, dataAll: action.payload};

    case 'SET_DATA_CATEGORIES':
      return {...state, dataCategories: action.payload};

    case 'SET_DATA_POPULAR':
      return {...state, dataPopular: action.payload};

    case 'SET_DATA_TRANSLATION':
      return {...state, dataTranslation: action.payload};

    case 'SET_BOOKMARK':
      return {...state, bookmark: action.payload};

    case 'SET_ISCLICK_FAVORITES':
      return {...state, isClickFavorites: action.payload};

    case 'SET_ISCLICK_FILTER':
      return {...state, isClickFilter: action.payload};

    case 'SET_ISCLICK_FILTERED':
      return {...state, isClickFiltered: action.payload};

    case 'SET_ISCLICK_SEARCH':
      return {...state, isClickSearch: action.payload};

    case 'SET_ISCLICK_MAP':
      return {...state, isClickMap: action.payload};
    
    case 'SET_ISCLICK_MAP_MARKER':
      return {...state, isClickMapMarker: action.payload};
      
    case 'SET_LANGUAGE':
      return {...state, language: action.payload};

    case 'SET_DATA_MENU':
      return {...state, dataMenu: action.payload};

    case 'SET_FILTER_CATEGORIES':
      return {...state, filterCategories: action.payload};

    default:
      return state;
  }
};
