import "../../styles/wishlists/Wishlist.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import WishlistItem from "./WishlistItem";

const Wishlist = (props) => {
  const [wishlistData, setwishlistData] = useState([]);
  const { userId } = props;

  useEffect(() => {
    axios.get(`http://localhost:3001/api/wishlists/user_id/${userId}`)
      .then((res) => {
        setwishlistData(res.data);
      })
      .catch((err) => {
        if (err.response) {
          console.error("Response error:", err.response);
        } else if (err.request) {
          console.error("Request error:", err.request);
        } else {
          console.error("General error:", err.message);
        }
      });
    }, []);
    
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
