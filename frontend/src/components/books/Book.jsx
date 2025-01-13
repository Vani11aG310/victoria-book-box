import { Link, useLocation } from "react-router-dom";
import "../../styles/books/Book.scss";
import "../../styles/book-boxes/BookBoxList.scss";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
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
    axios.get(`http://localhost:3001/api/collections?book_id=${bookId}`)
    .then((res) => {
      setCollection(res.data);
      axios.get(`http://localhost:3001/api/books/${bookId}`)
      .then((res) => {
        setBookDetails(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        console.error("Error: ", error);
      });
    })
    .catch((err) => {
      setError(err.message);
      console.error("Error: ", error);
    });
  }, [bookId]);
  
    
  return (
    <div>
      {loading && <h2>Loading Book Details...</h2>}
      {!loading && <h2 className="book__title">{bookDetails.title}</h2>}
      {!loading &&<h3 className="book__author">By: {bookDetails.author}</h3>}
      {!loading &&<h3 className="book__author">Subject: {bookDetails.subject} </h3>}
      {!loading &&<img src={bookDetails.cover_url} alt="book cover" className="book__cover" />}
      {!loading && <p>{bookDetails.book_description}</p>}
      {!loading &&<h3>Book Available At:</h3>}
      {!loading && <ul className="book__info-list">
                      {!collection && <h4>No book boxes available</h4>}
                      {!loading && Array.isArray(collection) && collection.map((item) => (
                        <Link to={`/book-boxes/${!loading && item.book_box.id}`} state={{ bookBox: item.book_box}}>
                            <li className="book-boxes__item">
                              <div className="book-boxes__content">
                                <h4 className="book-boxes__name">{item.book_box.name}</h4>
                                <p className="book-boxes__address">{item.book_box.address}</p>
                              </div>
                            </li>
                        </Link>
                      ))}
                  </ul>}
    </div>
  );
}

export default Book;
