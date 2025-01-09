import { Link, useLocation } from "react-router-dom";
import "../../styles/books/Book.scss";
import { useEffect, useState } from "react";
import axios from "axios";

const Book = () => {
  const location = useLocation();

  const { bookId } = location.state;

  const [loading, setLoading] = useState(true);

  const [collection, setCollection] = useState();

  const [bookDetails, setBookDetails] = useState();

  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/collections?book_id=${bookId}`)
    .then((res) => {
      setCollection(res.data);
      console.log(res.data)
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
                    <Link to={`/book-boxes/${!loading && collection[0].book_box.id}`} >
                      {!loading && Array.isArray(collection) && collection.map((item) => (
                        <h4 key={item.book.id}>{item.book_box.name}, {item.book_box.address}</h4>
                      ))}
                    </Link>
                  </ul>}
    </div>
  );
}

export default Book;
