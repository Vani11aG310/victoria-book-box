import "../../styles/wishlists/WishlistItem.scss";
import { FaMinusCircle } from "react-icons/fa";
import { useContext } from "react";
import DispatchContext from "../../context/DispatchContext";
import wishListDataCreate from "../../db/wishlists/wishlistDataCreate";

const WishlistSearchResultItem = (props) => {
  const { book } = props;

  const dispatch = useContext(DispatchContext);

  const handleAdd = () => {
    wishListDataCreate(
      {userId: 1, bookId: book.key},
      dispatch
    );
  }

   return (
    <div className="wishlist__item">
      {/* <img className="wishlist__book-cover" src={book.cover_url} alt={`Cover picture of ${book.title}`} /> */}
      <div className="wishlist__book-info">
        <p className="wishlist__book-title"><strong>{book.title}</strong></p>
        <p className="wishlist__book-author">By: <strong>{book.author_name}</strong></p>
        <p className="wishlist__book-author">Open Library Key: <strong>{book.key}</strong></p>
        <p className="wishlist__book-author">Open Library Cover Key: <strong>{book.cover_edition_key}</strong></p>
        {/* <p className="wishlist__book-subject">Subject: <strong>{wishlistItem.book.subject}</strong></p> */}
      </div>
      <div className="wishlist__delete-button">
        <FaMinusCircle className="wishlist__delete-icon" onClick={() => handleAdd()} />
      </div>
    </div>
  );
}

export default WishlistSearchResultItem;