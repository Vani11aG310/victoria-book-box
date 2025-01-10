import "../../styles/book-boxes/BookBoxEdit.scss";
import { useState, useEffect, useContext } from "react";
import StateContext from "../../context/StateContext";
import { useParams } from 'react-router-dom';
import DispatchContext from "../../context/DispatchContext";
import usePageTitle from "../../hooks/usePageTitle";
import { ACTIONS } from "../../reducers/dataReducer";

const BookBoxEdit = (props) => {
  let { mode, bookBox } = props;
  const dispatch = useContext(DispatchContext);
  // const state = useContext(StateContext);
  // const bookBoxes = state.bookBoxes;
  // const [userId, setUserId] = useState(currentUserId);
  
  // let {id} = useParams();
  // id = Number(id);
  // console.log("*** ID:", id);
    
  // console.log("*** Book Boxes:", bookBoxes);
  // const bookBox = bookBoxes?.find((bookBox) => bookBox.id === id);
  
  // console.log("*** Book Box:", bookBox);
  
  // useEffect(() => {
  //   setUserId(currentUserId);
  // }, [currentUserId]);

  const title = mode === "create" ? `Create Book Box` : `Edit Book Box`;
  usePageTitle(title, dispatch);
  
  // Create new bookBox object.
  if (mode === "create") {
    bookBox = {};
    bookBox.id = null;
    bookBox.name = null
    bookBox.address = null;
  }

  
  // // Custom hook to fetch the list of Users.
  // const { users, loading, error } = useUsersDataFetch();
  

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // const newUserId = Number(event.target.userId.value)
    // setUserId(newUserId);

    // // Update the global state with the new User.
    // const newUser = users.find((user) => user.id === newUserId);
    // dispatch({
    //   type: ACTIONS.SET_USER,
    //   payload: newUser,
    // })

    // // If the userId is changed, we need to refresh the Wishlist.
    // wishlistDataFetch(newUserId, dispatch);
  }

  return (
    <div>
      <form className="book-box__form" onSubmit={handleSubmit}>

        <div className="book-box__input-group">
          <label htmlFor="name" className="book-box__label">Name:</label>
          <input
            name="name" 
            className="book-box__input"
            autoComplete="off"
            value={bookBox.name} 
            onChange={handleChange}
            />
        </div>
        <div className="book-box__input-group">
          <label htmlFor="address" className="book-box__label">Address:</label>
          <input
            name="address" 
            className="book-box__input"
            autoComplete="off"
            value={bookBox.address} 
            onChange={handleChange}
            />
        </div>
        <div className="book-box__button-group">
          <button type="button" className="book-box__cancel-button">Cancel</button>
          <button type="submit" className="book-box__submit-button">Save</button>
        </div>
      </form>
    </div>
  );
}

export default BookBoxEdit;