import axios from "axios";
import { ACTIONS } from "../../reducers/dataReducer";

const bookBoxDataUpdate = async (bookBox, dispatch) => {
  let error = null;
  let updatedBookBox = null;

  try {
    const res = await axios.patch(`http://localhost:3001/api/book_boxes/${bookBox.id}`, {   
      name: bookBox.name,
      address: bookBox.address
    });
    updatedBookBox = res.data;
    dispatch({
      type: ACTIONS.UPDATE_BOOK_BOX,
      bookBox: updatedBookBox,
    });
  } catch (err) {
    error = err.message;
    console.error("Error: ", err.message);
  }

  return {
    bookBox: updatedBookBox,
    error,
  };
};

export default bookBoxDataUpdate;