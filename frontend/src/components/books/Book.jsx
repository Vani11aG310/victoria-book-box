import { Link, useLocation } from "react-router-dom";
import "../../styles/books/Book.scss";

const Book = () => {
  const location = useLocation();

  const { collection, bookDetails } = location.state

  console.log(collection)
    
  return (
    <div>
      <h2>{bookDetails.title}</h2>
      <img src={bookDetails.cover_url} alt="book cover" />
      <p>{bookDetails.book_description}</p>
      <h3>Book Available At:</h3>
      <ul className="booklist">
        <Link to={`/book-boxes/${collection[0].book_box.id}`} >
        {Array.isArray(collection) && collection.map((item, index) => (
          <li key={index}>
            <h4>{item.book_box.name}, {item.book_box.address}</h4>
          </li>
        ))}
        </Link>
      </ul>
    </div>
  );
}

export default Book;
