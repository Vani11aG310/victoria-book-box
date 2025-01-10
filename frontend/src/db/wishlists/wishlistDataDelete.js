import axios from "axios";
import { ACTIONS } from "../../reducers/dataReducer";

const wishlistDataDelete = (wishlistId, dispatch) => {
  let error = null;

  axios.delete(`http://localhost:3001/api/wishlists/${wishlistId}`)
    .then(() => {
      dispatch({
        type: ACTIONS.DELETE_WISHLIST_ITEM,
        wishlistId,
      });
    })
    .catch((err) => {
      error = err.message ;
      console.error("Error: ", err.message);
    });

  return {
    error,
  };
};

export default wishlistDataDelete;