import "../../styles/books/BookList.scss";
import { useContext } from "react";
import StateContext from "../../context/StateContext";
import { FaFilter } from "react-icons/fa";
import DispatchContext from "../../context/DispatchContext";
import usePageTitle from "../../hooks/usePageTitle";
import BooklistItem from "./BooklistItem";

const BookList = () => {
  const state = useContext(StateContext);
  const bookList = [...state.bookData]
  const dispatch = useContext(DispatchContext);
  usePageTitle("Books", dispatch);
    
  return (
    <div>
      <ul className="booklist">
        {Array.isArray(bookList) && bookList.map((book) => {
          return <BooklistItem key={book.id} booklistItem={book} />;
        })}
      </ul>
    </div>
  );
}

export default BookList;
