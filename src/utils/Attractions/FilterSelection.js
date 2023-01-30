import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SetFilterCategories} from '../../redux/action';

export const FilterSelection = () => {
  const {GeneralResponse} = useSelector(state => state);
  const dispatch = useDispatch();

  const selectItemsFilter = item => {
    if (GeneralResponse.filterCategories.includes(item)) {
      const newListItems = GeneralResponse.filterCategories.filter(
        listItem => listItem !== item,
      );
      dispatch(SetFilterCategories(newListItems));
      return GeneralResponse.filterCategories;
    } else {
      const newListItems = GeneralResponse.filterCategories.filter(
        listItem => listItem !== item,
      );
      newListItems.push(item);
      dispatch(SetFilterCategories(newListItems));
    }
  };
  return selectItemsFilter;
};

export const getSelectedFilter = () => {
  const {GeneralResponse} = useSelector(state => state);
  const answer = item => GeneralResponse.filterCategories.includes(item);
  return answer;
};

export const getData = () => {
  const {GeneralResponse} = useSelector(state => state);

  const categories = GeneralResponse.filterCategories.map(element => {
    return GeneralResponse.dataAll.filter(e =>
      e.categories.find(a => a === element),
    );
  });

  let arrayOfTheDream = [];
  const data = categories.forEach(insideArray => {
    insideArray.forEach(item => {
      if (!arrayOfTheDream.includes(item)) {
        arrayOfTheDream.push(item);
      }
    });
  });

  useEffect(() => {
    data;
  }, [categories.length]);

  return arrayOfTheDream;
};
