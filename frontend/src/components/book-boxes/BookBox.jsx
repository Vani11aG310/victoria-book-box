import "../../styles/book-boxes/BookBox.scss";
import { useContext } from 'react';
import StateContext from '../../context/StateContext';
import DispatchContext from "../../context/DispatchContext";
import usePageTitle from "../../hooks/usePageTitle";
import { FaPlusCircle } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import BookBoxItem from "./BookBoxItem";

const BookBox = () => {
  const location = useLocation();
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const { bookBox } = location.state;

  const collectionForBookBox = state.collections && state.collections.filter((collection) => collection.book_box.id === bookBox.id);

  usePageTitle(bookBox.name, dispatch);

 

  return (
    <div className="book-box">

      <div className="book-box__header">

        <p className="book-box__address">{bookBox.address}</p>
      </div>
      <h5>Books in this Box:</h5>
      <ul className="book-box__collections">
        {collectionForBookBox && 
          collectionForBookBox.map((collection) => {
            return <BookBoxItem key={collection.id} collection={collection} />
          })}
      </ul>


      <Link to='/books/search' state={{ boxId: bookBox.id}}>
        <div className="book-box__fab">
          <FaPlusCircle className="book-box__add-icon" />
        </div>
      </Link>
    </div>

  );
}

export default BookBox;
