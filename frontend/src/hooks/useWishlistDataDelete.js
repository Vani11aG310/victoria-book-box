import { useEffect } from "react";
import axios from "axios";
import { ACTIONS } from "../reducers/dataReducer";

const wishlistDataDelete = (wishlistId, dispatch) => {
  let error = null;

  useEffect(() => {
    axios.delete(`http://localhost:3001/api/wishlists/${wishlistId}`)
      .then((res) => {
        dispatch({
          type: ACTIONS.DELETE_WISHLIST_ITEM,
          wishlistId,
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
    wishlistId,
    error,
  };
};

export default WishlistDataDelete;