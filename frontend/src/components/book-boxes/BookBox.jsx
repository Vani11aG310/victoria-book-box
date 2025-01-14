import "../../styles/book-boxes/BookBox.scss";
import { useContext, useState } from 'react';
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
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  usePageTitle(bookBox.name, dispatch);

  const handleDelete = () => {
    // Delete the Book Box.
    bookBoxDataDelete(bookBox.id, dispatch);
    navigate(`/book-boxes`); 
  };

  const handleEdit = () => {
    navigate(`/book-boxes/edit/${bookBox.id}`); 
  };

  const openDeleteModal = () => {
    setShowDeleteModal(true);
  }

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
  }

  return (
    <div className="book-box">

      <div className="book-box__header">
        <p className="book-box__address">{bookBox.address}</p>
        <div className="book-box__header-button-group">
          <FaTrash className="book-box__delete-icon" onClick={openDeleteModal}/>
          <FaPencilAlt className="book-box__edit-icon" onClick={handleEdit}/>
        </div>
      </div>

      <ul className="book-box__collections">
        {collectionForBookBox && Array.isArray(collectionForBookBox) && collectionForBookBox.length > 0 ?
          collectionForBookBox.map((collection) => {
            return <BookBoxItem key={collection.id} collection={collection} />
          })
          : <h3>This Box currently does not have any Books. Use the + button below to add.</h3>
        }
      </ul>
      <Link to='/books/search' state={{ boxId: bookBox.id }}>
        <div className="book-box__fab">
          <FaPlusCircle className="book-box__add-icon" />
        </div>
      </Link>

      {showDeleteModal && (
        <div className="book-box__delete-modal">
          <div className="book-box__delete-modal-content">
            <h3>
              You are about to delete "{bookBox.name}". Are you sure you want to delete this book box?
            </h3>
            <div className="book-box__delete-modal-actions">
              <button className="book-box__delete-modal-button" onClick={handleDelete}>
                Yes, Delete
              </button>
              <button className="book-box__delete-modal-button" onClick={closeDeleteModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>

  );
}

export default BookBox;
