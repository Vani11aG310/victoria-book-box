import { useEffect } from 'react';
import axios from 'axios';
import { ACTIONS } from '../reducers/dataReducer';

const useCollections = (bookBoxId, dispatch) => {
  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/collections?book_box_id=${bookBoxId}`);
        dispatch({
          type: ACTIONS.SET_COLLECTIONS,
          payload: response.data,
        });
      } catch (error) {
        console.error("Error fetching collections", error);
      }
    };

    if (bookBoxId) {
      fetchCollections();
    }
  }, [bookBoxId, dispatch]);
};

export default useCollections;