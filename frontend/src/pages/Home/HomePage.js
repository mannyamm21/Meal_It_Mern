import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import Search from '../../components/Search/Search';
import Tags from '../../components/Tags/Tags';
import Thumbnails from '../../components/Thumbnails/Thumbnails';
import { getAll, getAllByTag, getAllTags, search } from '../../services/foodService';
import NotFound from '../../components/NotFound/NotFound';

const initialState = { foods: [], tags: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case 'FOODS_LOADED':
      return { ...state, foods: action.payload };
    case 'TAGS_LOADED':
      return { ...state, tags: action.payload };
    default:
      return state;
  }
};

export default function HomePage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { foods, tags } = state;
  const { searchTerm, tag } = useParams();

  useEffect(() => {
    const fetchTags = async () => {
      const tags = await getAllTags();
      dispatch({ type: 'TAGS_LOADED', payload: tags });
    };

    const fetchFoods = async () => {
      let foods = [];
      if (tag) {
        foods = await getAllByTag(tag);
      } else if (searchTerm) {
        foods = await search(searchTerm);
      } else {
        foods = await getAll();
      }
      dispatch({ type: 'FOODS_LOADED', payload: foods });
    };

    fetchTags();
    fetchFoods();
  }, [searchTerm, tag]);

  return (
    <>
      <Search />
      <Tags tags={tags} />
      {foods.length === 0 && <NotFound linkText="Reset Search" />}
      <Thumbnails foods={foods} />
    </>
  );
}
