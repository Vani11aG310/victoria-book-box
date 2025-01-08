import "../../styles/book-boxes/BookBox.scss";
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import StateContext from '../../context/StateContext';
import DispatchContext from "../../context/DispatchContext";
import useCollections from "../../hooks/useCollections";
import usePageTitle from "../../hooks/usePageTitle";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import useDecrement from "../../hooks/useDecrement";
import useIncrement from "../../hooks/useIncrement";

const BookBox = () => {
  const { id } = useParams();
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);



  const bookBox = state.bookBoxes.find(box => box.id === parseInt(id));


  usePageTitle(bookBox.name, dispatch);


  useCollections(dispatch, id);
  const increment = useIncrement();
  const decrement = useDecrement();




  const handleIncrement = (event, collectionId) => {
    event.preventDefault();
    increment(collectionId);
  };

  const handleDecrement = (event, collectionId) => {
    event.preventDefault();
    decrement(collectionId);
  };

  return (
    <div className="book-box">
      {bookBox ? (
        <>
          <div className="book-box__header">

            <p className="book-box__address">{bookBox.address}</p>
          </div>
          <h5>Books in this Box:</h5>
          <ul className="book-box__collections">
            {state.collections && state.collections.length > 0 ? (
              state.collections.map((collection) => (
                <li key={collection.id} className="book-box__collection-item">
                  <img className="book-box__book-cover" src={collection.book.cover_url} alt={`Cover of ${collection.book.title}`} />
                  <div className="book-box__book-info">
                    <p className="book-box__book-title">{collection.book.title}</p>
                    <p className="book-box__book-author">By: {collection.book.author}</p>
                    <p className="book-box__book-subject">Subject: {collection.book.subject}</p>
                  </div>
                  <div className="book-box__quantity">
                    <FaMinusCircle
                      className="book-box__decrement-icon"
                      onClick={(event) => handleDecrement(event, collection.id)}
                    />
                    <span className="book-box__quantity-text">Quantity: {collection.quantity}</span>
                    <FaPlusCircle
                      className="book-box__increment-icon"
                      onClick={(event) => handleIncrement(event, collection.id)}
                    />
                  </div>

                </li>
              ))
            ) : (
              <p>No books available in this box.</p>
            )}
          </ul>
        </>
      ) : (
        <p>Loading book box details...</p>
      )}
      <Link to='/books/search'>
        <div className="book-box__fab">
          <FaPlusCircle className="book-box__add-icon" />
        </div>
      </Link>
    </div>
  );
}

export default BookBox;
