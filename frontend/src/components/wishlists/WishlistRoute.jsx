import "../../styles/wishlists/WishlistRoute.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import Wishlist from "./Wishlist";

const WishlistRoute = (props) => {
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
      <h2>My Wishlist</h2>
        <Wishlist wishlistData={wishlistData} />
    </div>
  );
}

export default WishlistRoute;