import "../../styles/wishlists/Wishlist.scss";
import WishlistSearchResultItem from "./WishlistSearchResultItem";
import useSearchOpenLibrary from "../../hooks/useSearchOpenLibrary";

const WishlistSearchResult = (props) => {
  const { searchValue } = props;

  // Use the custom hook to search Open Library for books by title or author.
  const { books, loading, error } = useSearchOpenLibrary(searchValue);

  return (
    <div>
      {loading && <h2>Searching...</h2>}
      {(!loading && books.length === 0 && searchValue) && <h2>No results found.</h2>}

      <ul className="wishlist">
        {Array.isArray(books) && books.map((book) => {
          return <WishlistSearchResultItem key={book.key} book={book} />;
        })}
      </ul>
    </div>
  );
}

export default WishlistSearchResult;
