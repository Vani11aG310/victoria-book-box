import "../../styles/book-boxes/BookBox.scss";
import { useContext } from 'react';
import StateContext from '../../context/StateContext';
import DispatchContext from "../../context/DispatchContext";
import usePageTitle from "../../hooks/usePageTitle";
import { FaPlusCircle, FaTrash, FaPencilAlt, FaPen } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import BookBoxItem from "./BookBoxItem";
import bookBoxDataDelete from "../../db/book-boxes/bookBoxDataDelete";

const BookBox = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const { bookBox } = location.state;

  const collectionForBookBox = state.collections && state.collections.filter((collection) => collection.book_box.id === bookBox.id);

  usePageTitle(bookBox.name, dispatch);

  const handleDelete = () => {
    // Delete the Book Box.
    bookBoxDataDelete(bookBox.id, dispatch);
    navigate(`/book-boxes`); 
  };

  const handleEdit = () => {
    navigate(`/book-boxes/edit/${bookBox.id}`); 
  };

  return (
    <div className="book-box">

      <div className="book-box__header">
        <p className="book-box__address">{bookBox.address}</p>
        <div className="book-box__header-button-group">
          <FaTrash className="book-box__delete-icon" onClick={handleDelete}/>
          <FaPencilAlt className="book-box__edit-icon" onClick={handleEdit}/>
        </div>
      </div>

      <ul className="book-box__collections">
        {collectionForBookBox &&
          collectionForBookBox.map((collection) => {
            return <BookBoxItem key={collection.id} collection={collection} />
          })}
      </ul>
      <Link to='/books/search' state={{ boxId: bookBox.id }}>
        <div className="book-box__fab">
          <FaPlusCircle className="book-box__add-icon" />
        </div>
      </Link>
    </div>

  );
}

export default BookBox;
