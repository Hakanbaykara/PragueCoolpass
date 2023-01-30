import React, {useEffect} from 'react';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SetBookmark} from '../../redux/action';

export const BookmarkSelections = () => {
  const {GeneralResponse} = useSelector(state => state);
  const dispatch = useDispatch();

  const selectItemsBookmark = item => {
    if (GeneralResponse.bookmark.includes(item._id)) {
      const newListItems = GeneralResponse.bookmark.filter(
        listItem => listItem !== item._id
      );
      dispatch(SetBookmark(newListItems));
      return GeneralResponse.bookmark;
    }
    if (!GeneralResponse.bookmark.includes(item._id)){
      const newListItems = GeneralResponse.bookmark.filter(
        listItem => listItem !== item._id
      );
      newListItems.push(item._id)
      dispatch(SetBookmark(newListItems));
    }
  };
  return selectItemsBookmark;
};

export const getSelectedBookmark = () => {
  const {GeneralResponse} = useSelector(state => state);
  const answer = item => GeneralResponse.bookmark.includes(item);
  return answer
};
