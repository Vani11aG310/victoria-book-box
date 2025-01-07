import "../../styles/book-boxes/BookBoxList.scss";
import { useContext } from "react";
import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";
import usePageTitle from "../../hooks/usePageTitle";
import { Link } from 'react-router-dom';

const BookBoxList = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  usePageTitle("Book Boxes", dispatch);
    
  return (
    <div className="book-boxes__list">
      <h4 className="book-boxes__header">Boxes in Victoria</h4>
      <ul className="book-boxes__items">
        {state.bookBoxes ? (
          state.bookBoxes.map((bookBox) => (
            <li key={bookBox.id} className="book-boxes__item">
              <Link to={`/book-boxes/${bookBox.id}`} className="book-boxes__link">
              <span className="bookbox__name">{bookBox.name}</span>
              </Link>
            </li>
          ))
        ) : (
          <p>Loading book boxes...</p>
        )}
      </ul>
    </div>
  );
}

export default BookBoxList;
