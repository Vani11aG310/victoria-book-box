import "../../styles/wishlists/WishlistSearch.scss";
import { FaSearch } from "react-icons/fa";
import { useContext } from "react";
import DispatchContext from "../../context/DispatchContext";
import usePageTitle from "../../hooks/usePageTitle";

const WishlistSearch = () => {
  const dispatch = useContext(DispatchContext);
  usePageTitle("Search", dispatch);

  const handleSubmit = event => {
    event.preventDefault();
  }

  return (
    <div>
      <form className="wishlist-search__form" onSubmit={handleSubmit}>
        <input
          name="search"
          type="search"
          className="wishlist-search__input"
          // autocomplete="off"
          placeholder="Search for a book..."
        // value={searchContent}
        // onChange={(event) => setSearchContent(event.target.value)}
        />

        <button type="submit" className="wishlist-search__submit-button">
          <FaSearch className="wishlist-search__submit-icon" />
        </button>
      </form>
    </div>
  );
}

export default WishlistSearch;
