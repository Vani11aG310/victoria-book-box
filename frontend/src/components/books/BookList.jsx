import "../../styles/books/BookList.scss";
import "../../styles/search/Search.scss";
import { useContext, useState } from "react";
import StateContext from "../../context/StateContext";
import { FaSearch } from "react-icons/fa";
import DispatchContext from "../../context/DispatchContext";
import usePageTitle from "../../hooks/usePageTitle";
import BooklistItem from "./BooklistItem";

const BookList = () => {
  const [searchValue, setSearchValue] = useState("");
  const state = useContext(StateContext);
  const [bookList, setBooklist] = useState(state.bookData);
  const dispatch = useContext(DispatchContext);
  usePageTitle("Books", dispatch);

  const handleSubmit = (event) => {
    event.preventDefault();
    const query = event.target.search.value;
    setSearchValue(query);
    const filteredBooks = bookList.filter((book) => {
      if (book.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return book.title.toLowerCase().includes(searchValue.toLowerCase());;
      }
      if (book.author.toLowerCase().includes(searchValue.toLowerCase())) {
        return book.author.toLowerCase().includes(searchValue.toLowerCase());
      }
      if (book.subject.toLowerCase().includes(searchValue.toLowerCase())) {
        return book.subject.toLowerCase().includes(searchValue.toLowerCase());
      }
    });
    setBooklist(filteredBooks);
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
      {bookList.length > 0 ? (
        <ul className="booklist">
          {bookList.map((book) => (
            <BooklistItem key={book.id} booklistItem={book} />
          ))}
        </ul>
      ) : (
        <p>Loading books...</p>
      )}
    </div>
  );
}

export default BookList;
