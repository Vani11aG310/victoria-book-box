import axios from "axios";
import { ACTIONS } from "../../reducers/dataReducer";

const wishlistDataFetch = (userId, dispatch) => {
  let payload = [];
  let loading = true;
  let error = null;

  axios.get(`http://localhost:3001/api/wishlists?user_id=${userId}`)
    .then((res) => {
      loading = false;
      payload = res.data;
      dispatch({
        type: ACTIONS.SET_WISHLIST,
        payload,
      });
    })
    .catch((err) => {
      loading = false;
      error = err.message;
      console.error("Error: ", err.message);
    });

  return {
    payload,
    loading,
    error,
  };
};

export default wishlistDataFetch;