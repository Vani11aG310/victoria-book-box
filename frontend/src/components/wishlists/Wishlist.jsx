import "../../styles/wishlists/Wishlist.scss";
import WishlistItem from "./WishlistItem";
import { useContext } from "react";
import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";
import usePageTitle from "../../hooks/usePageTitle";

const Wishlist = () => {
  const state = useContext(StateContext);
  const wishlistData = [...state.wishlistData];
  const dispatch = useContext(DispatchContext);
  usePageTitle("Wishlist", dispatch);

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
