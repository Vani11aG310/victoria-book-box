import "../../styles/search/SearchResult.scss";
import SearchResultItem from "./SearchResultItem";
import useSearchOpenLibrary from "../../hooks/useSearchOpenLibrary";

const SearchResult = (props) => {
  const { searchValue, mode, boxId } = props;

  // Use the custom hook to search Open Library for books by title or author.
  const { books, loading, error } = useSearchOpenLibrary(searchValue);

  return (
    <div>
      {loading && <h3 className="search-result__status">Searching...</h3>}
      {(!loading && searchValue && (Array.isArray(books) && books.length === 0)) && <h3 className="search-result__status">No results found.</h3>}

      <ul className="search-result">
        {Array.isArray(books) && books.map((book) => {
          return <SearchResultItem key={book.key} book={book} mode={mode} boxId={boxId}/>;
        })}
      </ul>
    </div>
  );
}

export default SearchResult;
