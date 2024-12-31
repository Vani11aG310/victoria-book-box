import { useEffect, useReducer } from "react";
import dataReducer, { ACTIONS } from '../reducers/dataReducer';
import axios from "axios";

const useWishlistData = (userId) => {
  const [state, dispatch] = useReducer(dataReducer, {
    wishlistData: [],
    loading: true,
  });

  useEffect(() => {
    axios.get(`http://localhost:3001/api/wishlists/user_id/${userId}`)
      .then((res) => {
        dispatch({
          type: ACTIONS.SET_WISHLIST,
          payload: res.data,
        });
      })
      .catch((err) => {
        if (err.response) {
          console.error("Response error:", err.response);
        } else if (err.request) {
          console.error("Request error:", err.request);
        } else {
          console.error("General error:", err.message);
        }
      });
    }, []);

  return {state, dispatch};
};

export default useWishlistData;