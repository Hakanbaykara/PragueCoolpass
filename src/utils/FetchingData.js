import {useDispatch} from 'react-redux';
import {SetDataAll} from '../redux/action';
import {SetDataPopular} from '../redux/action';
import {SetDataCategories} from '../redux/action';
import {SetDataTranslation} from '../redux/action';
import {BASE_URL} from './URLs';

const DATA_POPULAR_URL = BASE_URL + '/object/attraction/top-attractions';
const DATA_ALL_ATTRACTIONS_URL = BASE_URL + '/object/attraction';
const DATA_CATAGORIES_URL = BASE_URL + '/category';
const DATA_TRANSLATION_URL = BASE_URL + '/translation';
const DATA_MENU_URL = BASE_URL + '/menu';


export const fetchDataPopular = async () => {
  const dispatch = useDispatch();
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

export const fetchDataTranslation = async () => {
  const dispatch = useDispatch();
  {
    try {
      const response = await fetch(DATA_TRANSLATION_URL);
      const json = await response.json();
      dispatch(SetDataTranslation(json));
    } catch (error) {
      console.error(error);
    }
  }
};

export const fetchDataCategories = async () => {
  const dispatch = useDispatch();
  {
    try {
      const response = await fetch(DATA_CATAGORIES_URL);
      const json = await response.json();
      dispatch(SetDataCategories(json));
    } catch (error) {
      console.error(error);
    }
  }
};

export const fetchDataAll = async () => {
  const dispatch = useDispatch();
  {
    try {
      const response = await fetch(DATA_ALL_ATTRACTIONS_URL);
      const json = await response.json();
      dispatch(SetDataAll(json));
    } catch (error) {
      console.error(error);
    }
  }
};

export const fetchDataMenu = async () => {
  const dispatch = useDispatch();
  {
    try {
      const response = await fetch(DATA_MENU_URL);
      const json = await response.json();
      dispatch(SetDataMenu(json));
    } catch (error) {
      console.error(error);
    }
  }
};
