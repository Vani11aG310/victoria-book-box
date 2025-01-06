import "../../styles/search/SearchResultItem.scss";
import { FaPlusCircle } from "react-icons/fa";
import { useContext } from "react";
import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";
import wishListDataCreate from "../../db/wishlists/wishlistDataCreate";

const SearchResultItem = (props) => {
  const { book } = props;
  book.cover_url = `https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-L.jpg`;

  const state = useContext(StateContext);
  const userId = state.userId;

  const dispatch = useContext(DispatchContext);

  const handleAdd = () => {
    wishListDataCreate({
        userId, 
        book: {
          title: book.title,
          author: book.author_name ? book.author_name[0] : "Unknown",
          subject: null,  // Not available in search results
          openLibraryKey: book.key,
          openLibraryCoverKey: book.cover_edition_key,
        },
      },
      dispatch
    );
  }

   return (
    <div className="wishlist__item">
      <img className="search-result__book-cover" src={book.cover_url} alt={`Cover picture of ${book.title}`} />
      <div className="search-result__book-info">
        <p className="search-result__book-title"><strong>{book.title}</strong></p>
        <p className="search-result__book-author">By: <strong>{book.author_name}</strong></p>
        {/* <p className="search-result__book-open-library-key">Key: <strong>{book.key}</strong></p>
        <p className="search-result__book-open-library-cover-key">Cover Key: <strong>{book.cover_edition_key}</strong></p> */}
      </div>
      <div className="search-result__add-button">
        <FaPlusCircle className="search-result__add-icon" onClick={() => handleAdd()} />
      </div>
    </div>
  );
}

export default SearchResultItem;