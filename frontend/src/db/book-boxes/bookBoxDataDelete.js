import axios from "axios";
import { ACTIONS } from "../../reducers/dataReducer";

const bookBoxDataDelete = (bookBoxId, dispatch) => {
  let error = null;

  axios.delete(`http://localhost:3001/api/book_boxes/${bookBoxId}`)
  .then(() => {
      dispatch({
        type: ACTIONS.DELETE_BOOK_BOX,
        bookBoxId,
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

export default bookBoxDataDelete;