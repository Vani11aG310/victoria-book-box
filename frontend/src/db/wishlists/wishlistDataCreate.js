import axios from "axios";
import { ACTIONS } from "../../reducers/dataReducer";
import { use } from "react";

const wishlistDataCreate = (wishlist, dispatch) => {
  let error = null;
  console.log("*** wishlistDataCreate: ", wishlist);
  console.log("*** wishlistDataCreate: ", wishlist.userId);

  axios.post(`http://localhost:3001/api/wishlists`, {
    user_id: wishlist.userId,
    book_id: 28, 
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