import axios from "axios";
import { ACTIONS } from "../../reducers/dataReducer";

const wishlistDataCreate = (wishlist, dispatch) => {
  let error = null;

  axios.post(`http://localhost:3001/api/wishlists`)
    .then((res) => {
      dispatch({
        type: ACTIONS.CREATE_WISHLIST_ITEM,
        // wishlistId,
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

export default wishlistDataCreate;