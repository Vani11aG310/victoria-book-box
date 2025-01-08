import { useEffect } from "react";
import axios from "axios";
import { ACTIONS } from "../reducers/dataReducer";

const useBooklistDataFetch = (dispatch) => {
  let payload = [];
  let error = null;

  useEffect(() => {
    axios.get(`http://localhost:3001/api/books`)
      .then((res) => {
        payload = res.data;
        dispatch({
          type: ACTIONS.SET_BOOKLIST,
          payload,
        });
      })
      .catch((err) => {
        error = err.message;
        console.error("Error: ", err.message);
      });
    }, []);

  return {
    payload,
    error,
  };
};

export default useBooklistDataFetch;