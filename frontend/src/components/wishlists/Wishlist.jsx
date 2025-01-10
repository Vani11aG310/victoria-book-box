import "../../styles/wishlists/Wishlist.scss";
import WishlistItem from "./WishlistItem";
import { useContext } from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import { FaPlusCircle } from "react-icons/fa";
import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";
import usePageTitle from "../../hooks/usePageTitle";

const Wishlist = () => {
  const state = useContext(StateContext);
  const wishlistData = [...state.wishlistData];
  const userName = state.userData.name;
  const dispatch = useContext(DispatchContext);
  const {pathname} = useLocation();
  const navigate = useNavigate();
  usePageTitle(`Wishlist (${userName})`, dispatch);

  const handleAdd = () => {
    const url = `${pathname}/search`;
    navigate(url);
  }

  return (
    <div>
      <ul className="wishlist">
        {Array.isArray(wishlistData) && wishlistData.map((wishlistItem) => {
          return <WishlistItem key={wishlistItem.id} wishlistItem={wishlistItem} />;
        })}
      </ul>
      <div className="wishlist__fab"> 
        <FaPlusCircle className="wishlist__add-icon" onClick={() => handleAdd()} />
      </div>
    </div>
  );
}

export default Wishlist;
