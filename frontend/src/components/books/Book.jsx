import { useLocation } from "react-router-dom";
import "../../styles/books/Book.scss";

const Book = () => {
  const location = useLocation();

  const { collection, bookDetails } = location.state
  console.log(bookDetails)
    
  return (
    <div>
      <h2>{collection[0].book.title}</h2>
      <img src={collection[0].book.cover_url} alt="book cover" />
      <p>{bookDetails.book_description}</p>
    </div>
  );
}

export default Book;
