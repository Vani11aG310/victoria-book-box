import "../../styles/search/SearchResultItem.scss";
import { FaPlusCircle, FaHeart, FaRegHeart } from "react-icons/fa";
import { useContext } from "react";
import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";
import wishListDataCreate from "../../db/wishlists/wishlistDataCreate";
import wishListDataDelete from "../../db/wishlists/wishlistDataDelete";
import collectionDataCreate from "../../db/collections/collectionDataCreate";
import { Link, useNavigate } from "react-router-dom";

const SearchResultItem = (props) => {
  const { book, mode, boxId } = props;
  book.cover_url = `https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-L.jpg`;

  const navigate = useNavigate();

  const state = useContext(StateContext);
  const userId = state.userData.id;

  const dispatch = useContext(DispatchContext);

  const bookBox = state.bookBoxes.find((bookBox) => bookBox.id === boxId)

  const routeChange = () => {
    let path = `/book-boxes/${boxId}`;
    navigate(path, {state: {collections: state.collections, bookBox}});
  }

  // Is the book already included in the wishlist?
  const wishlistItem = state.wishlistData.find((wishlistItem) => wishlistItem.book.open_library_key === book.key);

  const handleAddToWishlist = () => {
    wishListDataCreate({
      userId,
      book: {
        title: book.title,
        author: book.author_name && book.author_name[0],
        subject: book.subject && book.subject[0],
        openLibraryKey: book.key,
        openLibraryCoverKey: book.cover_edition_key,
      },
    },
      dispatch
    );
  }

  const handleAddToCollection = () => {

    /// Add book to collection
    
    collectionDataCreate({
      bookBoxId: boxId,
      book: {
        title: book.title,
        author: book.author_name && book.author_name[0],
        subject: book.subject && book.subject[0],
        openLibraryKey: book.key,
        openLibraryCoverKey: book.cover_edition_key,
      },
      quantity: 1,
    }, 
      dispatch
    );
    setTimeout(() => routeChange(), 2000);
  }

  const handleDelete = () => {
    wishListDataDelete(wishlistItem.id, dispatch);
  }

  return (
    <div className="wishlist__item">
      <img className="search-result__book-cover" src={book.cover_url} alt={`Cover picture of ${book.title}`} />
      <div className="search-result__book-info">
        <p className="search-result__book-title"><strong>{book.title}</strong></p>
        <p className="search-result__book-author">By: <strong>{book.author_name && book.author_name[0]}</strong></p>
        <p className="search-result__book-subject">Subject: <strong>{book.subject && book.subject[0]}</strong></p>
      </div>
      {mode === 'books' && <div className="search-result__add-button">
        
        <FaPlusCircle className="search-result__add-icon" onClick={() => handleAddToCollection()} />

      </div>}
      {mode === 'wishlists' && <div className="search-result__heart-button">
        {wishlistItem && <FaHeart className="search-result__heart-icon" onClick={() => handleDelete()} />}
        {!wishlistItem && <FaRegHeart className="search-result__reg-heart-icon" onClick={() => handleAddToWishlist()} />}
      </div>}
    </div>
  );
}

export default SearchResultItem;