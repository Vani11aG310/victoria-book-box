import "../../styles/wishlists/Wishlist.scss";
import WishlistItem from "./WishlistItem";
import { useContext } from "react";
import StateContext from "../../context/StateContext";

const Wishlist = () => {
  const state = useContext(StateContext);
  const wishlistData = [...state.wishlistData];

  return (
    <div>
      <ul className="wishlist">
        {Array.isArray(wishlistData) && wishlistData.map((wishlistItem) => {
          return <WishlistItem key={wishlistItem.id} wishlistItem={wishlistItem} />;
        })}
      </ul>
    </div>
  );
}

export default Wishlist;
