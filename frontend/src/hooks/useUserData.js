import { useEffect } from "react";
import { ACTIONS } from "../reducers/dataReducer";

const useUserData = (userId, dispatch) => {
  useEffect(() => {
    dispatch({
      type: ACTIONS.SET_USER,
      userId,
    });
  }, []);
};

export default useUserData;