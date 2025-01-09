import axios from "axios";
import { ACTIONS } from "../../reducers/dataReducer";

const wishlistDataCreate = (wishlist, dispatch) => {
  let error = null;

  axios.post(`http://localhost:3001/api/wishlists`, {   
    wishlist: { 
      user_id: wishlist.userId,
      title: wishlist.book.title,
      author: wishlist.book.author,
      subject: wishlist.book.subject,
      open_library_key: wishlist.book.openLibraryKey,
      open_library_cover_key: wishlist.book.openLibraryCoverKey,
    }
  })
  .then((res) => {
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