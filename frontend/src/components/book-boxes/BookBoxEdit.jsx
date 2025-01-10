import "../../styles/book-boxes/BookBoxEdit.scss";
import { useState, useEffect, useContext } from "react";
import StateContext from "../../context/StateContext";
import { useParams } from 'react-router-dom';
import DispatchContext from "../../context/DispatchContext";
import usePageTitle from "../../hooks/usePageTitle";
import { ACTIONS } from "../../reducers/dataReducer";

const BookBoxEdit = (props) => {
  let { mode } = props;
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  let {id} = useParams();
  id = Number(id);
  let bookBox = {};
  let title = "";


  if (mode === "edit" && state.bookBoxes) {
    bookBox = state.bookBoxes?.find((bookBox) => bookBox.id === id);
    title = "Edit Book Box";
  } else {
    bookBox.id = null;
    bookBox.name = null
    bookBox.address = null;
    title = "Create Book Box"
  }
  usePageTitle(title, dispatch);

 
  // useEffect(() => {
  //   setUserId(currentUserId);
  // }, [currentUserId]);
 

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

  const handleCancel = (event) => {

  }

  if (!bookBox) {
    return (
      <div>
        <h3>{`Book Box ${id} not found.`}</h3>
      </div>
    )
  }

  return (
    <div>
      <form className="book-box__form" onSubmit={handleSubmit}>
        <div className="book-box__input-group">
          <label htmlFor="name" className="book-box__label">Name</label>
          <input
            name="name" 
            className="book-box__input"
            autoComplete="off"
            value={bookBox.name} 
            onChange={handleChange}
            />
        </div>
        <div className="book-box__input-group">
          <label htmlFor="address" className="book-box__label">Address</label>
          <input
            name="address" 
            className="book-box__input"
            autoComplete="off"
            value={bookBox.address} 
            onChange={handleChange}
            />
        </div>
        <div className="book-box__button-group">
          <button 
            type="button" 
            className="book-box__cancel-button" 
            onClick={handleCancel}
          >Cancel</button>
          <button 
            type="submit" 
            className="book-box__submit-button"
          >Save</button>
        </div>
      </form>
    </div>
  );
}

export default BookBoxEdit;