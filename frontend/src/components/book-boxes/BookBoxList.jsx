import "../../styles/book-boxes/BookBoxList.scss";
import { useContext } from "react";
import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";
import usePageTitle from "../../hooks/usePageTitle";

const BookBoxList = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  usePageTitle("Book Boxes", dispatch);
    
  return (
    <div>
      <h4>These are the Book Boxes in Victoria</h4>
    </div>
  );
}

export default BookBoxList;
