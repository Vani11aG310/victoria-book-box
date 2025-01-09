import "../../styles/search/Search.scss";
import { FaSearch } from "react-icons/fa";
import { useState, useContext } from "react";
import DispatchContext from "../../context/DispatchContext";
import usePageTitle from "../../hooks/usePageTitle";
import SearchResult from "./SearchResult";
import { useLocation } from "react-router-dom";

const Search = (props) => {
  const { mode } = props;
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useContext(DispatchContext);
  usePageTitle("Search", dispatch);

  const location = useLocation();

  const {boxId} = location.state || {boxId: null};

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchValue = event.target.search.value
    setSearchValue(searchValue);
  }

  return (
    <div>
      <form className="search__form" onSubmit={handleSubmit}>
        <input
          name="search"
          type="search"
          className="search__input"
          placeholder="Search by book title or author..."
          autoComplete="off"
        />
        <button type="submit" className="search__submit-button">
          <FaSearch className="search__submit-icon" />
        </button>
      </form>

      {searchValue && <SearchResult searchValue={searchValue} mode={mode} boxId={boxId}/>}
    </div>
  );
}

export default Search;