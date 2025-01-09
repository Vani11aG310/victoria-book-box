import { useEffect } from "react";
import axios from "axios";
import { ACTIONS } from "../reducers/dataReducer";

const useUserDataFetch = (userId, dispatch) => {
  let payload = [];
  let loading = true;
  let error = null;

  useEffect(() => {
    axios.get(`http://localhost:3001/api/users/${userId}`)
      .then((res) => {
        loading = false;
        payload = res.data;
        dispatch({
          type: ACTIONS.SET_USER,
          payload,
        });
      })
      .catch((err) => {
        loading = false;
        error = err.message;
        console.error("Error: ", err.message);
      });
    }, [userId]);

  return {
    payload,
    loading,
    error,
  };
};

export default useUserDataFetch; 