import axios from "axios";
import { ACTIONS } from "../../reducers/dataReducer";

const bookBoxDataCreate = async (bookBox, dispatch) => {
  let error = null;
  let createdBookBox = null;

  try {
    const res = await axios.post(`http://localhost:3001/api/book_boxes`, {   
      name: bookBox.name,
      address: bookBox.address
    });
    createdBookBox = res.data;
    dispatch({
      type: ACTIONS.CREATE_BOOK_BOX,
      bookBox: createdBookBox,
    });
  } catch (err) {
    error = err.message;
    console.error("Error: ", err.message);
  }

  return {
    bookBox: createdBookBox,
    error,
  };
};

export default bookBoxDataCreate;