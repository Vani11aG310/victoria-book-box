import "../../styles/book-boxes/BookBoxItem.scss";
import { useContext, useState } from 'react';
import StateContext from '../../context/StateContext';
import DispatchContext from "../../context/DispatchContext";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import useDecrement from "../../hooks/useDecrement";
import useIncrement from "../../hooks/useIncrement";


const BookBoxItem = (props) => {
  const { collection } = props;
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const increment = useIncrement();
  const decrement = useDecrement();
  const [quantity, setQuantity] = useState(collection.quantity);

  const handleIncrement = (event, collectionId) => {
    event.preventDefault();
    setQuantity((prev) => prev + 1);
    increment(collectionId);
  };

  const handleDecrement = (event, collectionId) => {
    event.preventDefault();
    setQuantity((prev) => prev - 1);
    decrement(collectionId);
  };
  return (
    <div>
      <li key={collection.id} className="book-box__collection-item">
        <div className="book-box__collection-details">
        <Link to={{ pathname: `/books/${collection.book.id}` }} state={{ bookId: collection.book.id }}>
          <img className="book-box__book-cover" src={collection.book.cover_url} alt={`Cover of ${collection.book.title}`} />
        </Link>
        <div className="book-box__book-info">
          <p className="book-box__book-title">{collection.book.title}</p>
          <p className="book-box__book-author">By: {collection.book.author}</p>
          <p className="book-box__book-subject">Subject: {collection.book.subject}</p>
        </div>
        </div>
        <div className="book-box__quantity">
          <p className="book-box__quantity-text">Quantity:</p>
          <FaMinusCircle
            className="book-box__decrement-icon"
            onClick={(event) => handleDecrement(event, collection.id)}
          />
          <span className="book-box__quantity-text"> {quantity}</span>
          <FaPlusCircle
            className="book-box__increment-icon"
            onClick={(event) => handleIncrement(event, collection.id)}
          />
        </div>

      </li>
    </div>
  );
}

export default BookBoxItem