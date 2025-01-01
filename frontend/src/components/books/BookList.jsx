import "../../styles/books/BookList.scss";
import { useContext } from "react";
import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";
import usePageTitle from "../../hooks/usePageTitle";

const BookList = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  usePageTitle("Books", dispatch);
    
  return (
    <div>
      <h4>These are the Books in our Collection.</h4>
    </div>
  );
}

export default BookList;
