import {useSelector} from 'react-redux';
import {useEffect} from 'react';

const myFunction = () => {
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
};
