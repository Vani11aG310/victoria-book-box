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
  const [filteredBooklist, setFilteredBooklist] = useState();
  const bookList = filteredBooklist ? filteredBooklist : state.bookData;
  const dispatch = useContext(DispatchContext);
  usePageTitle("Books", dispatch);

  const handleSubmit = (event) => {
    event.preventDefault();
    const query = event.target.search.value.toLowerCase();
    const filteredBooks = query ? state.bookData.filter((book) => {
      const titleMatch = book.title && book.title.toLowerCase().includes(query);
      const authorMatch = book.author && book.author.toLowerCase().includes(query);
      const subjectMatch = book.subject && book.subject.toLowerCase().includes(query);

      return titleMatch || authorMatch || subjectMatch;
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

      {bookList.length === 0 && <h3 className="search-result__status">No results found.</h3>}
      
      {bookList.length > 0 && Array.isArray(bookList) && <ul className="booklist">
        {bookList.map((book) => (
          (state.collections.find((collection) => collection.book_id === book.id) && <BooklistItem key={book.id} booklistItem={book} />)
        ))}
      </ul>}
      
    </div>
  );
}

export default BookList;
