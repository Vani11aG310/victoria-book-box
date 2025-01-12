export const ACTIONS = {
  SET_PAGE_TITLE: "SET_PAGE_TITLE",
  SET_USER: "SET_USER",
  SET_WISHLIST: "SET_WISHLIST",
  SET_BOOK_BOXES: "SET_BOOK_BOXES",
  SET_COLLECTIONS: "SET_COLLECTIONS",
  CREATE_BOOK_BOX: "CREATE_BOOK_BOX",
  CREATE_BOOK: "CREATE_BOOK",
  CREATE_WISHLIST_ITEM: "CREATE_WISHLIST_ITEM",
  DELETE_BOOK_BOX: "DELETE_BOOK_BOX",
  DELETE_WISHLIST_ITEM: "DELETE_WISHLIST_ITEM",
  UPDATE_BOOK_BOX: "UPDATE_BOOK_BOX",
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
        bookData: [...state.bookData, action.book],
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


    case ACTIONS.CREATE_BOOK_BOX: {
      const newBookBox = action.bookBox;

      // Check if the bookBox already exists in our global state.
      const bookBoxExists = state.bookBoxes.some((bookBox) => bookBox.id === newBookBox.id);

      // If the Book Box exists, return the current state.
      if (bookBoxExists) {
        return state;
      }

      // If the Book Box does not exist, add it to the list of Book Boxes.
      return {
        ...state,
        bookBoxes: [...state.bookBoxes, newBookBox],
      };
    }

    case ACTIONS.DELETE_BOOK_BOX: {
      const updatedBookBoxData = state.bookBoxes.filter((bookBox) => bookBox.id !== action.bookBoxId);

      return {
        ...state,
        bookBoxes: updatedBookBoxData,
      };
    }

    case ACTIONS.UPDATE_BOOK_BOX: {
      const updatedBookBox = action.bookBox;

      const updatedBookBoxesArray = state.bookBoxes.map((bookBox) => {
        if (bookBox.id === updatedBookBox.id) {
          return updatedBookBox;
        }
        return bookBox;
      });

      return {
        ...state,
        bookBoxes: updatedBookBoxesArray,
      };
    }

    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
};

export default dataReducer;
