import "../../styles/wishlists/WishlistItem.scss";
import { useContext } from "react";
import DispatchContext from "../../context/DispatchContext";

const BooklistItem = (props) => {
  const { booklistItem } = props;

  return (
    <div className="wishlist__item">
      <img className="wishlist__book-cover" src={booklistItem.cover_url} alt={`Cover picture of ${booklistItem.title}`} />
      <div className="wishlist__book-info">
        <p className="wishlist__book-title"><strong>{booklistItem.title}</strong></p>
        <p className="wishlist__book-author">By: <strong>{booklistItem.author}</strong></p>
        <p className="wishlist__book-subject">Subject: <strong>{booklistItem.subject}</strong></p>
      </div>
    </div>
  );
}

export default BooklistItem;