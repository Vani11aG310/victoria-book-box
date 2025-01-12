import "../../styles/book-boxes/BookBoxEdit.scss";
import React, { useState, useEffect, useContext, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";
import usePageTitle from "../../hooks/usePageTitle";
import bookBoxDataCreate from "../../db/book-boxes/bookBoxDataCreate";
import bookBoxDataUpdate from "../../db/book-boxes/bookBoxDataUpdate";

const BookBoxEdit = (props) => {
  let { mode } = props;
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const navigate = useNavigate();
  let { id } = useParams();
  id = Number(id);

  const initialBookBox = useMemo(() => {
    if (mode === "edit" && state.bookBoxes) {
      const foundBookBox = state.bookBoxes?.find((bookBox) => bookBox.id === id);
      if (foundBookBox) {
        return foundBookBox;
      }
    }
    return {
      id: null,
      name: "",
      address: ""
    };
  }, [mode, state.bookBoxes, id]);

  const [bookBox, setBookBox] = useState(initialBookBox);

  const title = mode === "edit" ? "Edit Book Box" : "Create Book Box";
  usePageTitle(title, dispatch);

  // Update bookBox state when initialBookBox changes
  useEffect(() => {
    setBookBox(initialBookBox);
  }, [initialBookBox]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBookBox((prevBookBox) => ({
      ...prevBookBox,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (mode === "edit") {
      // Update an existing Book Box.
      bookBoxDataUpdate(bookBox, dispatch);

      // Navigate back to the Book Box page
      const path = `/book-boxes/${bookBox.id}`;
      navigate(path, { state: { bookBox } });

    } else {
      // Create a new Book Box.
      bookBoxDataCreate(bookBox, dispatch);

      // Navigate to the Book Boxes page.
      const path = `/book-boxes`;
      navigate(path);
    }
  };

  const handleCancel = () => {
    // Return to the previous page.
    navigate(-1);
  }

  if (!bookBox || (mode === "edit" && bookBox.id === null)) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    )
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
            required
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
            required
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
};

export default BookBoxEdit;