import "../../styles/wishlists/Wishlist.scss";
import React from "react";
import WishlistItem from "./WishlistItem";

const Wishlist = (props) => {
  const { wishlistData } = props;
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