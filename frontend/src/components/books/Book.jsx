import { Link, useLocation } from "react-router-dom";
import "../../styles/books/Book.scss";
// import "../../styles/book-boxes/BookBoxList.scss";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import logoIcon from "../../logo/logo icon.png";
import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";
import usePageTitle from "../../hooks/usePageTitle";

const Book = () => {
  const state = useContext(StateContext)
  const location = useLocation();

  const { bookId } = location.state;

  const [loading, setLoading] = useState(true);

  const [collection, setCollection] = useState();

  const [bookDetails, setBookDetails] = useState();

  const [error, setError] = useState(null);
  
  const dispatch = useContext(DispatchContext);
  usePageTitle("Books", dispatch);

  useEffect(() => {
    
    const retrieveBookCollections = axios.get(`http://localhost:3001/api/collections?book_id=${bookId}`)
    const retrieveBookDetails = axios.get(`http://localhost:3001/api/books/${bookId}`)

    Promise.all([retrieveBookCollections, retrieveBookDetails])
    .then(([collections, book]) => {
      setCollection(collections.data);
      setBookDetails(book.data);
      setLoading(false);
    })
    .catch((err) => {
      setError(err.message);
      console.error("Error: ", error);
    })
  }, [bookId]);

  if (loading) {
    return <h2>Loading Book Details...</h2>
  }
  
    
  return (
    <div>
      <h2 className="book__title">{bookDetails.title}</h2>
      <h3 className="book__author">By: {bookDetails.author}</h3>
      <h3 className="book__author">Subject: {bookDetails.subject} </h3>
      <img src={bookDetails.cover_url} alt="book cover" className="book__cover" />
      {bookDetails.book_description ? <p>{bookDetails.book_description}</p> : <p>Book Summary Unavailable</p>}
      <h3>Book Available At:</h3>
      <ul className={`book__info-list ${collection && collection.length === 1 ? "single-item" : "multi-item"
            }`}>
        {Array.isArray(collection) && collection.length > 0 ? collection.map((item) => (
          <Link key={item.id} to={`/book-boxes/${item.book_box.id}`} state={{ bookBox: item.book_box}}>
              <li className="book-boxes__item">
                <img src={logoIcon} alt="Logo" className="book-boxes__book-icon" />
                <div className="book-boxes__content">
                  <h4 className="book-boxes__name">{item.book_box.name}</h4>
                  <p className="book-boxes__address">{item.book_box.address}</p>
                </div>
              </li>
          </Link>
        )) : <h4>Not currently available at any book box</h4>}
      </ul>
    </div>
  );
}

export default Book;
