import axios from "axios";
import { ACTIONS } from "../../reducers/dataReducer";

const bookBoxDataUpdate = (bookBox, dispatch) => {
  let error = null;

  axios.patch(`http://localhost:3001/api/book_boxes/${bookBox.id}`, {   
    name: bookBox.name,
    address: bookBox.address
  })
  .then((res) => {
      dispatch({
        type: ACTIONS.UPDATE_BOOK_BOX,
        bookBox: res.data,
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

export default bookBoxDataUpdate;