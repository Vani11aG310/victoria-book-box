import { useEffect } from "react";
import { ACTIONS } from "../reducers/dataReducer";

const usePageTitle = (pageTitle, dispatch) => {
  useEffect(() => {
    dispatch({
      type: ACTIONS.SET_PAGE_TITLE,
      pageTitle,
    });
  }, []);
};

export default usePageTitle;