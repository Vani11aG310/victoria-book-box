import axios from "axios";
import { ACTIONS } from "../../reducers/dataReducer";

const bookBoxDataDelete = async (bookBoxId, dispatch) => {
  let error = null;

  try {
    await axios.delete(`http://localhost:3001/api/book_boxes/${bookBoxId}`);
    dispatch({
      type: ACTIONS.DELETE_BOOK_BOX,
      bookBoxId,
    });
  } catch (err) {
    error = err.message;
    console.error("Error: ", err.message);
  }

  return {
    error,
  };
};

export default bookBoxDataDelete;