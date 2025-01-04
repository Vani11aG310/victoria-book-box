import "../../styles/wishlists/WishlistSearch.scss";
import { FaSearch } from "react-icons/fa";
import { useState, useContext } from "react";
import DispatchContext from "../../context/DispatchContext";
import usePageTitle from "../../hooks/usePageTitle";
import WishlistSearchResult from "./WishlistSearchResult";

const WishlistSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useContext(DispatchContext);
  usePageTitle("Search", dispatch);

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchValue = event.target.search.value
    setSearchValue(searchValue);
    console.log("*** Search submitted", searchValue);
  }

  return (
    <div>
      <form className="wishlist-search__form" onSubmit={handleSubmit}>
        <input
          name="search"
          type="search"
          className="wishlist-search__input"
          placeholder="Search by book title or author..."
          autoComplete="off"
        />
        <button type="submit" className="wishlist-search__submit-button">
          <FaSearch className="wishlist-search__submit-icon" />
        </button>
      </form>

      {searchValue && <WishlistSearchResult searchValue={searchValue} />}
    </div>
  );
}

export default WishlistSearch;