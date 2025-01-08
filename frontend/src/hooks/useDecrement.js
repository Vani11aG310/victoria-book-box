import { useContext } from 'react';
import axios from 'axios';
import StateContext from '../context/StateContext';
import DispatchContext from '../context/DispatchContext';
import { ACTIONS } from '../reducers/dataReducer';

const useDecrement = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const decrement = async (collectionId) => {
    try {
      const updatedCollection = state.collections.find(collection => collection.id === collectionId);
      
      if (!updatedCollection) {
        console.error("Collection not found");
        return;
      }

      const updatedQuantity = updatedCollection.quantity - 1;

      if (updatedQuantity === 0) {
        // Delete collection if quantity reaches zero
        await axios.delete(`http://localhost:3001/api/collections/${collectionId}`);

        const updatedCollections = state.collections.filter(
          (collection) => collection.id !== collectionId
        );
        dispatch({
          type: ACTIONS.SET_COLLECTIONS,
          payload: updatedCollections,
        });
      } else {
        await axios.put(`http://localhost:3001/api/collections/${collectionId}`, 
          {
          quantity: updatedQuantity
        });
        const updatedCollections = state.collections.map((collection) =>
          collection.id === collectionId
            ? { ...collection, quantity: updatedQuantity }
            : collection
        );

        dispatch({
          type: ACTIONS.SET_COLLECTIONS,
          payload: updatedCollections,
        });
      }

    } catch (error) {
      console.error("Error decrementing quantity:", error);
      
    }
  };

  return decrement;
};

export default useDecrement;