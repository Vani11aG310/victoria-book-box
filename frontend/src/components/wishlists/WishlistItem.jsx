import "../../styles/wishlists/WishlistItem.scss";
import { FaHeart } from "react-icons/fa";
import { useContext } from "react";
import { Link } from 'react-router-dom';
import DispatchContext from "../../context/DispatchContext";
import wishListDataDelete from "../../db/wishlists/wishlistDataDelete";

const WishlistItem = (props) => {
  const { wishlistItem } = props;

  const dispatch = useContext(DispatchContext);

  const handleDelete = () => {
    wishListDataDelete(wishlistItem.id, dispatch);
  }

  return (
    <div className="wishlist__item">
      <Link to={{ pathname: `/books/${wishlistItem.book_id}` }} state={{ bookId: wishlistItem.book_id }}>
        <img className="wishlist__book-cover" src={wishlistItem.book.cover_url} alt={`Cover picture of ${wishlistItem.book.title}`} />
      </Link>
      <div className="wishlist__book-info">
        <p className="wishlist__book-title"><strong>{wishlistItem.book.title}</strong></p>
        <p className="wishlist__book-author">By: <strong>{wishlistItem.book.author}</strong></p>
        <p className="wishlist__book-subject">Subject: <strong>{wishlistItem.book.subject}</strong></p>
      </div>
      <div className="wishlist__heart-button">
        <FaHeart className="wishlist__heart-icon" onClick={handleDelete} />
      </div>
    </div>
  );
}

export default WishlistItem;