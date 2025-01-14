import "../../styles/search/SearchResult.scss";
import SearchResultItem from "./SearchResultItem";
import useSearchOpenLibrary from "../../hooks/useSearchOpenLibrary";
import { useState } from "react";

const SearchResult = (props) => {
  const { searchValue, mode, boxId } = props;

  // Use the custom hook to search Open Library for books by title or author.
  const { books, loading, error } = useSearchOpenLibrary(searchValue);

  const [submitting, setSubmitting] = useState(false);

  const submission = (submit) => {
    setSubmitting(submit);
  }

  if (submitting) {
    return (
      <div>
        <h3 className="search-result__status">Submitting...</h3>
      </div>
    )
  }

  // Loading component.
  if (loading) {
    return (
      <div>
        <h3 className="search-result__status">Searching...</h3>
      </div>
    );
  }

  // No results found component.
  if (!loading && searchValue && (Array.isArray(books) && books.length === 0)) {
    return (
      <div>
        <h3 className="search-result__status">No results found.</h3>
      </div>
    );
  }

  // Search results component.
  return (
    <div>
      <ul className="search-result">
        {Array.isArray(books) && books.map((book) => {
          return <SearchResultItem key={book.key} book={book} mode={mode} boxId={boxId} setSubmit={submission}/>;
        })}
      </ul>
    </div>
  );
}

export default SearchResult;
