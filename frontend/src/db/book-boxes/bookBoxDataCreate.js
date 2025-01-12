import axios from "axios";
import { ACTIONS } from "../../reducers/dataReducer";

const bookBoxDataCreate = (bookBox, dispatch) => {
  let error = null;

  axios.post(`http://localhost:3001/api/book_boxes`, {   
    name: bookBox.name,
    address: bookBox.address
  })
  .then((res) => {
      dispatch({
        type: ACTIONS.CREATE_BOOK_BOX,
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

export default bookBoxDataCreate;