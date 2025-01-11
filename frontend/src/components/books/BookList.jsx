import "../../styles/books/BookList.scss";
import "../../styles/search/Search.scss";
import { useContext, useState } from "react";
import StateContext from "../../context/StateContext";
import { FaSearch } from "react-icons/fa";
import DispatchContext from "../../context/DispatchContext";
import usePageTitle from "../../hooks/usePageTitle";
import BooklistItem from "./BooklistItem";

const BookList = () => {
  const state = useContext(StateContext);
  const [filteredBooklist, setFilteredBooklist] = useState(null);
  const bookList = filteredBooklist ? filteredBooklist : state.bookData;
  const dispatch = useContext(DispatchContext);
  usePageTitle("Books", dispatch);

  const handleSubmit = (event) => {
    event.preventDefault();
    const query = event.target.search.value;
    const filteredBooks = query ? state.bookData.filter((book) => {
      if (book.title.toLowerCase().includes(query.toLowerCase())) {
        return book.title.toLowerCase().includes(query.toLowerCase());;
      }
      if (book.author.toLowerCase().includes(query.toLowerCase())) {
        return book.author.toLowerCase().includes(query.toLowerCase());
      }
      if (book.subject.toLowerCase().includes(query.toLowerCase())) {
        return book.subject.toLowerCase().includes(query.toLowerCase());
      }
    }) : state.bookData;
    setFilteredBooklist(filteredBooks);
  }
    
  return (
    <div>
      <form className="search__form" onSubmit={handleSubmit}>
        <input
            name="search"
            type="search"
            className="search__input"
            placeholder="Search by book title, author, or subject..."
            autoComplete="off"
          />
          <button type="submit" className="search__submit-button">
            <FaSearch className="search__submit-icon" />
          </button>
      </form>
      
      {Array.isArray(bookList) && <ul className="booklist">
        {bookList.map((book) => (
          (state.collections.find((collection) => collection.book_id === book.id) && <BooklistItem key={book.id} booklistItem={book} />)
        ))}
      </ul>}
      
    </div>
  );
}

export default BookList;
