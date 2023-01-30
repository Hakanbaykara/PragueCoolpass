import {useSelector, useDispatch} from 'react-redux';

export const TranslationFunc = name => {
  const {GeneralResponse} = useSelector(state => state);
  const Language = GeneralResponse.language
  const Name =typeof GeneralResponse.dataTranslation[Language] != 'undefined' && GeneralResponse.dataTranslation[Language][name];
  if (typeof GeneralResponse.dataTranslation[Language] != 'undefined') {
    return Name;
  }
  else return 'Translation Error'
};
