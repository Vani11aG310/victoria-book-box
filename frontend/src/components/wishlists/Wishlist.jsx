import "../../styles/wishlists/Wishlist.scss";
import WishlistItem from "./WishlistItem";
import useWishlistData from "../../hooks/useWishlistData";

const Wishlist = (props) => {
  const { userId } = props;
  
  const { state, dispatch } = useWishlistData(userId);
  console.log("***STATE***", state);
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
