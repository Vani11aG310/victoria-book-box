import axios from "axios";
import { ACTIONS } from "../../reducers/dataReducer";

const collectionDataCreate = (collection, dispatch) => {
  let error = null;

  axios.post(`http://localhost:3001/api/collections`, {   
    collection: { 
      book_box_id: collection.bookBoxId,
      quantity: collection.quantity,
      title: collection.book.title,
      author: collection.book.author,
      subject: collection.book.subject,
      open_library_key: collection.book.openLibraryKey,
      open_library_cover_key: collection.book.openLibraryCoverKey,
    }
  })
  .then((res) => {
      dispatch({
        type: ACTIONS.CREATE_BOOK,
        collection: res.data
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

export default collectionDataCreate;