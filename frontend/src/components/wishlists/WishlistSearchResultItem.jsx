import "../../styles/wishlists/WishlistSearchResultItem.scss";
import { FaPlusCircle } from "react-icons/fa";
import { useContext } from "react";
import DispatchContext from "../../context/DispatchContext";
import wishListDataCreate from "../../db/wishlists/wishlistDataCreate";

const WishlistSearchResultItem = (props) => {
  const { book } = props;
  book.cover_url = `https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-L.jpg`;

  const dispatch = useContext(DispatchContext);

  const handleAdd = () => {
    wishListDataCreate(
      {userId: 1, bookId: book.key},
      dispatch
    );
  }

   return (
    <div className="wishlist__item">
      <img className="wishlist-search-result__book-cover" src={book.cover_url} alt={`Cover picture of ${book.title}`} />
      <div className="wishlist-search-result__book-info">
        <p className="wishlist-search-result__book-title"><strong>{book.title}</strong></p>
        <p className="wishlist-search-result__book-author">By: <strong>{book.author_name}</strong></p>
        <p className="wishlist-search-result__book-open-library-key">Key: <strong>{book.key}</strong></p>
      </div>
      <div className="wishlist-search-result__add-button">
        <FaPlusCircle className="wishlist-search-result__add-icon" onClick={() => handleAdd()} />
      </div>
    </div>
  );
}

export default WishlistSearchResultItem;