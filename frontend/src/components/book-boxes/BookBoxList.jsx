import "../../styles/book-boxes/BookBoxList.scss";
import { useContext, useEffect, useState } from "react";
import StateContext from "../../context/StateContext";
import DispatchContext from "../../context/DispatchContext";
import usePageTitle from "../../hooks/usePageTitle";
import { Link } from 'react-router-dom';
import useCollections from "../../hooks/useCollections";
import { FaPlusCircle } from "react-icons/fa";


const BookBoxList = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  
  usePageTitle("Book Boxes", dispatch);
  // useCollections(dispatch);
  
  const [totalQuantities, setTotalQuantities] = useState({});

  // Calculate total quantities for each book box
  useEffect(() => {
    if (state.collections && state.bookBoxes) {
      const quantities = state.bookBoxes.reduce((acc, box) => {
        const collectionsForBox = state.collections.filter(
          (collection) => collection.book_box_id === box.id
        );
        const totalQuantity = collectionsForBox.reduce(
          (sum, collection) => sum + collection.quantity,
          0
        );
        acc[box.id] = totalQuantity;
        return acc;
      }, {});

      setTotalQuantities(quantities);
    }
  }, [state.collections, state.bookBoxes]);


  return (
    <div className="book-boxes__list">


      <ul className="book-boxes__items">
        {state.bookBoxes ? (
          state.bookBoxes.map((bookBox) => (
            <Link to={`/book-boxes/${bookBox.id}`} state={{bookBox}}className="book-boxes__link" key={bookBox.id}>
              <li className="book-boxes__item">
                <div className="book-boxes__content">
                  <span className="book-boxes__name">{bookBox.name}</span>
                  <p>{bookBox.address}</p>
                  <p>Books: {totalQuantities[bookBox.id] || 0}</p>
                </div>
              </li>
            </Link>


          ))
        ) : (
          <p>Loading book boxes...</p>
        )}
      </ul>
      <Link to='/book-boxes/create'>
        <div className="book-boxes__fab">
          <FaPlusCircle className="book-boxes__add-icon" />
        </div>
      </Link>
    </div>
  );
}

export default BookBoxList;
