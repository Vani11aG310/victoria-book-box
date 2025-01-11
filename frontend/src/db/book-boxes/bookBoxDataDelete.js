import axios from "axios";
import { ACTIONS } from "../../reducers/dataReducer";

const bookBoxDataDelete = (bookBox, dispatch) => {
  let error = null;

  axios.delete(`http://localhost:3001/api/book_boxes/${bookBox.id}`, {   
    name: bookBox.name,
    address: bookBox.address
  })
  .then(() => {
      dispatch({
        type: ACTIONS.DELETE_BOOK_BOX,
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