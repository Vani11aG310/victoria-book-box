import { Link, useLocation } from "react-router-dom";
import "../../styles/books/Book.scss";

const Book = () => {
  const location = useLocation();

  const { collection, bookDetails } = location.state;

  
    
  return (
    <div>
      <h2 className="book__title">{bookDetails.title}</h2>
      <h3 className="book__author">By: {bookDetails.author}</h3>
      <h3 className="book__author">Subject: {bookDetails.subject} </h3>
      <img src={bookDetails.cover_url} alt="book cover" className="book__cover" />
      {bookDetails.book_description ? <p>{bookDetails.book_description}</p> : <p>No summary available</p>}
      <h3>Book Available At:</h3>
      <ul className="book__info-list">
        {/* <Link to={`/book-boxes/${collection[0].book_box.id}`} >
        {Array.isArray(collection) && collection.map((item) => (
          <h4 key={item.book.id}>{item.book_box.name}, {item.book_box.address}</h4>
        ))}
        </Link> */}
      </ul>
    </div>
  );
}

export default Book;
