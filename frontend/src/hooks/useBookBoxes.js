import { useEffect } from 'react';
import axios from 'axios';
import { ACTIONS } from '../reducers/dataReducer';

const useBookBoxes = (dispatch) => {
  useEffect(() => {
    const fetchBookBoxes = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/book_boxes'); 
        dispatch({
          type: ACTIONS.SET_BOOK_BOXES,
          payload: response.data,
        });
      } catch (error) {
        console.error("Error fetching book boxes", error);
      }
    };

    fetchBookBoxes();
  }, [dispatch]);
};

export default useBookBoxes;
