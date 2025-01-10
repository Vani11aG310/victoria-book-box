export const ACTIONS = {
  SET_PAGE_TITLE: 'SET_PAGE_TITLE',
  SET_USER: 'SET_USER',
  SET_WISHLIST: 'SET_WISHLIST',
  DELETE_WISHLIST_ITEM: 'DELETE_WISHLIST_ITEM',
  CREATE_WISHLIST_ITEM: 'CREATE_WISHLIST_ITEM',
  SET_BOOK_BOXES: 'SET_BOOK_BOXES',
  SET_COLLECTIONS: 'SET_COLLECTIONS',
  CREATE_BOOK: 'CREATE_BOOK',
}

const dataReducer = (state, action) => {

  switch (action.type) {

    case ACTIONS.SET_PAGE_TITLE: {
      return {
        ...state,
        pageTitle: action.pageTitle,
      };
    }
    
    case ACTIONS.SET_USER: {
      return {
        ...state,
        userData: action.payload,
      };
    }

    case ACTIONS.SET_WISHLIST: {
      return {
        ...state,
        wishlistData: action.payload,
      };
    }

    case ACTIONS.SET_BOOK_BOXES: {
      return { ...state, bookBoxes: action.payload};
    }

    case ACTIONS.CREATE_BOOK: {
      return {
        ...state,
        bookData: [...state.bookData, action.payload],
        collections: [...state.collections, action.collection],
      }
    }

    case ACTIONS.SET_COLLECTIONS: {
      return { ...state, collections: action.payload };
    }

    case ACTIONS.DELETE_WISHLIST_ITEM: {
      const updatedWishlistData = state.wishlistData.filter((wishlistItem) => wishlistItem.id !== action.wishlistId);

      return {
        ...state,
        wishlistData: updatedWishlistData,
      };
    } 

    case ACTIONS.CREATE_WISHLIST_ITEM: {
      const newWishlistItem = action.payload;

      // Check if the item already exists in the wishlist
      const itemExists = state.wishlistData.some((wishlistItem) => wishlistItem.id === newWishlistItem.id);

      // If the item exists, return the current state
      if (itemExists) {
        return state;
      }

      // If the item does not exist, add it to the wishlist
      return {
        ...state,
        wishlistData: [...state.wishlistData, newWishlistItem],
      };
    }

    case ACTIONS.SET_BOOKLIST: {
      return {
        ...state,
        bookData: action.payload,
      }
    }

    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
};

export default dataReducer;
