import axios from "axios";
import { ACTIONS } from "../../reducers/dataReducer";

const wishlistDataCreate = (wishlist, dispatch) => {
  let error = null;

  axios.post(`http://localhost:3001/api/wishlists`, {
    user_id: wishlist.userId,
    title: wishlist.book.title,
    author: wishlist.book.author,
    subject: wishlist.book.subject,
    open_library_key: wishlist.book.open_library_keykey,
    open_library_cover_key: wishlist.book.open_library_cover_key,
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