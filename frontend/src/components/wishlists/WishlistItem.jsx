import "../../styles/wishlists/WishlistItem.scss";
import { FaMinusCircle } from "react-icons/fa";

const WishlistItem = (props) => {
  const { wishlistItem } = props;

  return (
    <div className="wishlist__item">
      <img className="wishlist__book-cover" src={wishlistItem.book.cover_url} alt={`Cover picture of ${wishlistItem.book.title}`} />
      <div className="wishlist__book-info">
        <p className="wishlist__book-title"><strong>{wishlistItem.book.title}</strong></p>
        <p className="wishlist__book-author">By: <strong>{wishlistItem.book.author}</strong></p>
        <p className="wishlist__book-subject">Subject: <strong>{wishlistItem.book.subject}</strong></p>
      </div>
      <div className="wishlist__delete-button">
        <FaMinusCircle className="wishlist__delete-icon" />
      </div>
    </div>
  );
}

export default WishlistItem;