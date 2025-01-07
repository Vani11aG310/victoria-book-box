import "../../styles/book-boxes/BookBox.scss";
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import StateContext from '../../context/StateContext';
import DispatchContext from "../../context/DispatchContext";
import useCollections from "../../hooks/useCollections";
import usePageTitle from "../../hooks/usePageTitle";

const BookBox = () => {
  const { id } = useParams();
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const bookBox = state.bookBoxes.find(box => box.id === parseInt(id));


  usePageTitle(bookBox.name, dispatch);


  useCollections(id, dispatch);
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
                  <img className="book-box__book-cover" src={collection.book.cover_url} alt={`Cover picture of ${collection.book.title}`} />
                  <div className="book-box__book-info">
                    <p className="book-box__book-title">{collection.book.title}</p>
                    <p className="book-box__book-author">By: {collection.book.author}</p>
                    <p className="book-box__book-subject">Subject: {collection.book.subject}</p>
                  </div>

                  <p className="book-box__quantity">Quantity: {collection.quantity}</p>

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
