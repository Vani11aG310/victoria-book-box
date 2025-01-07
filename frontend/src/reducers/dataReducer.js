export const ACTIONS = {
  SET_PAGE_TITLE: 'SET_PAGE_TITLE',
  SET_USER: 'SET_USER',
  SET_WISHLIST: 'SET_WISHLIST',
  DELETE_WISHLIST_ITEM: 'DELETE_WISHLIST_ITEM',
  CREATE_WISHLIST_ITEM: 'CREATE_WISHLIST_ITEM',
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
        userId: action.userId,
      };
    }

    case ACTIONS.SET_WISHLIST: {
      return {
        ...state,
        wishlistData: action.payload,
        loading: false,
      };
    }

    case ACTIONS.DELETE_WISHLIST_ITEM: {
      const updatedWishlistData = state.wishlistData.filter((wishlistItem) => {
        return wishlistItem.id !== action.wishlistId;
      });

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
        loading: false
      }
    }

    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
};

export default dataReducer;
