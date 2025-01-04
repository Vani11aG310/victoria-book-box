import axios from "axios";
import { ACTIONS } from "../../reducers/dataReducer";
import { use } from "react";

const wishlistDataCreate = (wishlist, dispatch) => {
  let error = null;

  axios.post(`http://localhost:3001/api/wishlists`, {
    user_id: wishlist.userId,
    book_key: wishlist.bookKey,
    })
    .then((res) => {
      console.log("*** Response: ", res.data);
      dispatch({
        type: ACTIONS.CREATE_WISHLIST_ITEM,
        payload: res.data,
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