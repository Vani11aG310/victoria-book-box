import { useEffect } from 'react';
import axios from 'axios';
import { ACTIONS } from '../reducers/dataReducer';


const useCollections = (dispatch, bookBoxId = null) => {
  useEffect(() => {
    const fetchCollections = async () => {
      let url = 'http://localhost:3001/api/collections';
      if (bookBoxId) {
        url = `http://localhost:3001/api/collections?book_box_id=${bookBoxId}`;
      }

      try {
        const response = await axios.get(url);
        dispatch({
          type: ACTIONS.SET_COLLECTIONS,
          payload: response.data,  
        });
      } catch (error) {
        console.error("Error fetching collections", error);
      }
    };

    fetchCollections(); 
  }, [dispatch, bookBoxId]); 
};

export default useCollections;



