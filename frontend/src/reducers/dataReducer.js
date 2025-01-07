export const ACTIONS = {
  SET_PAGE_TITLE: 'SET_PAGE_TITLE',
  SET_USER: 'SET_USER',
  SET_WISHLIST: 'SET_WISHLIST',
  DELETE_WISHLIST_ITEM: 'DELETE_WISHLIST_ITEM',
  CREATE_WISHLIST_ITEM: 'CREATE_WISHLIST_ITEM',
  SET_BOOK_BOXES: 'SET_BOOK_BOXES',
  SET_COLLECTIONS: 'SET_COLLECTIONS',
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

    case ACTIONS.SET_BOOK_BOXES: {
      return { ...state, bookBoxes: action.payload};
    }

    case ACTIONS.SET_COLLECTIONS: {
      return { ...state, collections: action.payload };
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
      return {
        ...state,
        wishlistData: [...state.wishlistData, action.payload],
      };
    }

    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
};

export default dataReducer;
