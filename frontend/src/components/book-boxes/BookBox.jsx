import "../../styles/book-boxes/BookBox.scss";
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import StateContext from '../../context/StateContext';
import DispatchContext from "../../context/DispatchContext";
import useCollections from "../../hooks/useCollections"; 

const BookBox = () => {
  const { id } = useParams();
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);


  useCollections(id, dispatch);
  const bookBox = state.bookBoxes.find(box => box.id === parseInt(id));
  return (
    <div className="book-box">
      {bookBox ? (
        <>
        <div className="book-box__header">
          <h4 className="book-box__title">{bookBox.name}</h4>
          <p className="book-box__address">{bookBox.address}</p>
          </div>
          <h5>Books in this Box:</h5>
          <ul className="book-box__collections">
            {state.collections && state.collections.length > 0 ? (
              state.collections.map((collection) => (
                <li key={collection.id} className="book-box__collection-item">
                 <span>{collection.book.title} - {collection.book.subject}</span>
                  <span className="book-box__quantity">Quantity: {collection.quantity}</span>

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
    </div>
  );
}

export default BookBox;
