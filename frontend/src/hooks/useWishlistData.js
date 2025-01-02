import { useEffect } from "react";
import axios from "axios";
import { ACTIONS } from "../reducers/dataReducer";

const useWishlistData = (userId, dispatch) => {
  let payload = [];
  let error = null;

  useEffect(() => {
    axios.get(`http://localhost:3001/api/wishlists?user_id=${userId}`)
      .then((res) => {
        payload = res.data;
        dispatch({
          type: ACTIONS.SET_WISHLIST,
          payload,
        });
      })
      .catch((err) => {
        error = err;
        if (err.response) {
          console.error("Response error:", err.response);
        } else if (err.request) {
          console.error("Request error:", err.request);
        } else {
          console.error("General error:", err.message);
        }
      });
    }, []);

  return {
    payload,
    error,
  };
};

export default useWishlistData;