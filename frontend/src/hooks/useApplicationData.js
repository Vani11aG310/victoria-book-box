import {useReducer} from 'react';
import dataReducer from '../reducers/dataReducer';

const useApplicationData = () => {
  const initialState = {
    userId: null,
    pageTitle: null,
    bookData: [],
    bookBoxesData: [],
    wishlistData: [],
    collections: [],
  };

  const [state, dispatch] = useReducer(dataReducer, initialState);

  return {state, dispatch};
};

export default useApplicationData;
