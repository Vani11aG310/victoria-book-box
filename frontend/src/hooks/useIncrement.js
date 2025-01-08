import { useContext } from 'react';
import axios from 'axios';
import StateContext from '../context/StateContext';
import DispatchContext from '../context/DispatchContext';
import { ACTIONS } from '../reducers/dataReducer';

const useIncrement = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const increment = async (collectionId) => {
    try {
      const updatedCollection = state.collections.find(collection => collection.id === collectionId);
      
      if (!updatedCollection) {
        console.error("Collection not found");
        return;
      }

      const updatedQuantity = updatedCollection.quantity + 1;

      await axios.put(`http://localhost:3001/api/collections/${collectionId}`, {
        quantity: updatedQuantity
      });

      const updatedCollections = state.collections.map(collection =>
        collection.id === collectionId ? { ...collection, quantity: updatedQuantity } : collection
      );


      dispatch({
        type: ACTIONS.SET_COLLECTIONS,
        payload: updatedCollections
      });

    } catch (error) {
      console.error("Error incrementing quantity:", error);
    }
  };

  return increment;
};

export default useIncrement;